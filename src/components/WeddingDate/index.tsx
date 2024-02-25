'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { LocaleProps } from '@/app/[locale]/layout';
import clsx from 'clsx';

export default function WeddingDate() {
  const { locale } = useParams<LocaleProps>();
  const t = useTranslations('WeddingDate');
  return (
    <div className="flex items-center justify-center flex-col gap-[30px] py-[30px] bg-[#FFFFFF]">
      <span className="max-w-[500px] px-7 lg:p-0 text-center text-lg lg:text-xl">
        {t('invitation_text')}
      </span>
      <span
        className={clsx(
          'text-[53px] lg:text-8xl leading-tight font-medium',
          locale === 'hy' && 'font-vrdznagir',
        )}
      >
        {t('date')}
      </span>
    </div>
  );
}
