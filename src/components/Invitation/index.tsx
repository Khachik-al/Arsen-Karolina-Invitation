import { useTranslations } from 'next-intl';

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
          <span className="text-2xl lg:text-3xl px-5 lg:p-0 font-light text-center">
            {t('wedding_time_left')}
          </span>
        </div>
        <TimeCounter />
      </div>
    </div>
  );
}
