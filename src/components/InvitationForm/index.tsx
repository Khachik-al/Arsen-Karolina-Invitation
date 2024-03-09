'use client';

import Image from 'next/image';

import { useTranslations } from 'next-intl';

import { useFieldArray, useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';

import clsx from 'clsx';

import Loading from '@/components/Loading';

import type { LocaleProps } from '@/app/[locale]/layout';

type Guest = { name_surname: string };

export type FVAgreement = {
  agreement: 'attend' | 'not-attend';
  guests: Guest[];
};

export default function InvitationForm({ locale }: LocaleProps) {
  const t = useTranslations('InvitationForm');

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<FVAgreement>({
    defaultValues: {
      agreement: 'attend',
      guests: [
        {
          name_surname: '',
        },
      ],
    },
  });

  const { fields, append } = useFieldArray({
    control: control,
    name: 'guests',
  });

  const onSubmit: SubmitHandler<FVAgreement> = async data => {
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
          <div className="flex flex-col gap-[10px]">
            <label
              htmlFor="field-attend"
              className={clsx('w-fit flex items-center gap-[10px]', 'agreement-input-container')}
            >
              <input {...register('agreement')} type="radio" value="attend" id="field-attend" />
              <span className="checkmark" />
              <span>{t('attend')}</span>
            </label>
            <label
              htmlFor="field-not-attend"
              className={clsx('w-fit flex items-center gap-[10px]', 'agreement-input-container')}
            >
              <input
                {...register('agreement')}
                type="radio"
                value="not-attend"
                id="field-not-attend"
              />
              <span className="checkmark" />
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
            {fields.length < 2 && (
              <button
                type="button"
                className="w-fit outline-0 border-[2px] border-solid border-[#000000] rounded-[30px] px-[30px] mt-[40px] py-[10px]"
                onClick={() => {
                  append([{ name_surname: '' }]);
                }}
              >
                {t('add_member')}
              </button>
            )}
          </div>
          <div className="flex justify-center mt-[40px]">
            {isSubmitSuccessful ? (
              <span
                className={clsx(
                  'text-lg md:text-3xl text-center font-vrdznagir',
                  locale === 'hy' && 'font-vrdznagir',
                  locale === 'ru' && 'font-pompadur',
                  locale === 'en' && 'font-beauty_hand_writing',
                )}
              >
                {t('success_message')}
              </span>
            ) : (
              <button
                type="submit"
                className="flex items-center gap-[5px] w-fit self-center outline-0 border-[2px] border-solid border-[#000000] rounded-[30px] px-[30px] py-[10px]"
              >
                {isSubmitting && (
                  <span>
                    <Loading />
                  </span>
                )}
                <span>{t('submit')}</span>
              </button>
            )}
          </div>
        </form>
      </div>
      <div className="flex justify-center mt-2.5">
        <Image src="/TM.png" alt="tigran-mariam" width={400} height={400} />
      </div>
    </>
  );
}
