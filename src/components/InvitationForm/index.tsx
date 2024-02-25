'use client';

import { useForm } from 'react-hook-form';
import clsx from 'clsx';

export default function InvitationForm() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      agreement: 'attend',
    },
  });

  const onSubmit = data => {
    console.log(data, 'data');
  };

  return (
    <div className="flex justify-center pb-8">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[20px] min-w-[800px]">
        <div className="flex flex-col gap-[10px]">
          <label
            htmlFor="field-attend"
            className={clsx('w-fit flex items-center gap-[10px]', 'agreement-input-container')}
          >
            <input {...register('agreement')} type="radio" value="attend" id="field-attend" />
            <span className="checkmark" />
            <span>Attend</span>
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
            <span>not attend</span>
          </label>
        </div>
        <div className="flex flex-col gap-[10px]">
          <input
            {...register('name_surname')}
            type="text"
            placeholder="Name Surname"
            className="w-full outline-0 border-b-[2px] border-solid border-[#000000] py-[10px]"
          />
          <button
            type="button"
            className="w-fit outline-0 border-[2px] border-solid border-[#000000] rounded-[30px] px-[30px] mt-[40px] py-[10px]"
          >
            Add member
          </button>
        </div>
        <button
          type="submit"
          className="w-fit self-center outline-0 border-[2px] border-solid border-[#000000] rounded-[30px] px-[30px] mt-[40px] py-[10px]"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
