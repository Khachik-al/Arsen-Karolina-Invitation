'use client';

import {useTranslations} from 'next-intl';

import type {SubmitHandler} from 'react-hook-form';
import {useFieldArray, useForm} from 'react-hook-form';

import clsx from 'clsx';

import Loading from '@/components/Loading';

import type {LocaleProps} from '@/app/[locale]/layout';

type Guest = { name_surname: string };

export type FVAgreement = {
  agreement: 'Գալիս ենք' | 'Չենք գալիս';
  guests: Guest[];
};

export default function InvitationForm({locale}: LocaleProps) {
  const t = useTranslations('InvitationForm');

  const {
    register,
    handleSubmit,
    control,
    formState: {errors, isSubmitSuccessful, isSubmitting},
  } = useForm<FVAgreement>({
    defaultValues: {
      agreement: 'Գալիս ենք',
      guests: [
        {
          name_surname: '',
        },
      ],
    },
  });

  const {fields, append} = useFieldArray({
    control: control,
    name: 'guests',
  });

  const onSubmit: SubmitHandler<FVAgreement> = async data => {
    console.log(data)
    try {
      await fetch('/api/send-agreement', {
        method: 'POST',
        body: JSON.stringify(data),
      });
    } catch (e) {
      console.log('error ======>', e);
    }
  };

  return (
    <>
      <div className="flex justify-center py-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[20px] px-[20px] w-[100%] px-10 sm:w-[auto] sm:min-w-[500px] md:min-w-[600px] lg:min-w-[700px] xl:min-w-[800px]"
        >
          {isSubmitSuccessful ?
            <span
              className={clsx(
                'text-2xl xl:text-3xl text-center font-vrdznagir',
                locale === 'hy' && 'font-vrdznagir',
                locale === 'ru' && 'font-pompadur',
                locale === 'en' && 'font-beauty_hand_writing',
              )}
            >
                {t('success_message')}
              </span> :
            <>
          <div className="flex flex-col gap-[10px]">
            <label
              htmlFor="field-attend"
              className={clsx('w-fit flex items-center gap-[10px]', 'agreement-input-container')}
            >
              <input {...register('agreement')} type="radio" value="Գալիս ենք" id="field-attend"/>
              <span className="checkmark"/>
              <span>{t('attend')}</span>
            </label>
            <label
              htmlFor="field-not-attend"
              className={clsx('w-fit flex items-center gap-[10px]', 'agreement-input-container')}
            >
              <input
                {...register('agreement')}
                type="radio"
                value="Չենք գալիս"
                id="field-not-attend"
              />
              <span className="checkmark"/>
              <span>{t('not_attend')}</span>
            </label>
          </div>
              <div className="flex flex-col gap-[10px]">
                {fields.map((field, index) => {
                  return (
                    <input
                      key={field.id}
                      {...register(`guests.${index}.name_surname` as const, {
                        required: true,
                      })}
                      type="text"
                      placeholder={t('name_surname')}
                      className="w-full outline-0 border-b-[2px] border-solid border-[#000000] py-[10px]"
                    />
                  );
                })}
                <button
                  type="button"
                  className="w-fit outline-0 border-[2px] border-solid border-[#000000] rounded-[30px] px-[30px] mt-[40px] py-[10px]"
                  onClick={() => {
                    append({name_surname: ''});
                  }}
                >
                  {t('add_member')}
                </button>
              </div>
              <div className="flex justify-center mt-[40px]">

                <button
                  type="submit"
                  className="flex items-center gap-[5px] w-fit self-center outline-0 border-[2px] border-solid border-[#000000] rounded-[30px] px-[30px] py-[10px]"
                >
                  {isSubmitting && (
                    <span>
                    <Loading/>
                  </span>
                  )}
                  <span>{t('submit')}</span>
                </button>

              </div>
            </>}
        </form>
      </div>
    </>
  );
}
