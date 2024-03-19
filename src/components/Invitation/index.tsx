import { useTranslations } from 'next-intl';

import clsx from 'clsx';

import type { LocaleProps } from '@/app/[locale]/layout';

import TimeCounter from '@/components/Invitation/elements/TimeCounter';
import LocaleChange from '@/components/LocaleChange';
import Audio from '@/components/Audio';

export default function Invitation({ locale }: LocaleProps) {
  const t = useTranslations('Invitation');

  return (
    <div className="h-screen invitation_background">
      <LocaleChange locale={locale} />
      <Audio />
      <div className="h-full w-full bg-gradient-to-t from-[#000000]/40 to-[#000000]/0 flex flex-col justify-end items-center text-white gap-[35px] py-[30px]">
        <div className="flex flex-col items-center gap-[18px]">
          <span className={clsx(
          'lg:text-8xl px-5 lg:p-0 text-center [text-shadow:_0_8px_8px_rgb(0_0_0_/_80%)]',
          locale === 'hy' && 'text-5xl font-tumanyan',
          locale === 'ru' && 'text-4xl font-pompadur',
          locale === 'en' && 'text-6xl font-beauty_hand_writing',
          )}>
            {t('title')}
          </span>
        </div>
        <TimeCounter />
      </div>
    </div>
  );
}
