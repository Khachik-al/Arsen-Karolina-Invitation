'use client';

import { useTranslations } from 'next-intl';

export default function WeddingDate() {
  const t = useTranslations('WeddingDate');
  return (
    <div className="flex items-center justify-center flex-col gap-[30px] py-[30px] bg-sky-100">
      <span className="max-w-[500px] text-center text-lg">{t('invitation_text')}</span>
      <span className="text-8xl leading-tight font-medium">{t('date')}</span>
    </div>
  );
}
