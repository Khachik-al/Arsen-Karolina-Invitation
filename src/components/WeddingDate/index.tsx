'use client';

import { useTranslations } from 'next-intl';

import clsx from 'clsx';

import type { LocaleProps } from '@/app/[locale]/layout';
import MotionDiv from '@/components/animation/MotionDiv';
import AnimatedText from '@/components/animation/AnimatedText';

export default function WeddingDate({ locale }: LocaleProps) {
  const t = useTranslations('WeddingDate');

  return (
    <MotionDiv>
      <div className="flex items-center justify-center flex-col gap-[30px] py-[50px] bg-[#FFFFFF]">
        <span className="max-w-[500px] lg:max-w-[750px] px-7 lg:p-0 font-light text-center text-lg lg:text-xl">
          <AnimatedText text={t('invitation_text')} />
        </span>
        <span
          className={clsx(
            'text-[53px] lg:text-5xl leading-tight font-medium',
            locale === 'hy' && 'font-vrdznagir',
            locale === 'ru' && 'font-pompadur',
            locale === 'en' && 'font-beauty_hand_writing',
          )}
        >
          <AnimatedText text={t('date')} index={2} />
        </span>
      </div>
    </MotionDiv>
  );
}
