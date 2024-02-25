'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

import dayjs from 'dayjs';
import 'dayjs/locale/hy-am';
import plugin_duration from 'dayjs/plugin/duration';
import type { Duration } from 'dayjs/plugin/duration';

dayjs.extend(plugin_duration);

export default function TimeCounter() {
  const t = useTranslations('Invitation');

  const [duration, setDuration] = useState<Duration>(dayjs.duration(0));
  const now = dayjs();
  const wedding_date = dayjs('2024-07-15');

  useEffect(() => {
    const interval = setInterval(() => setDuration(dayjs.duration(wedding_date.diff(now))), 1000);
    return () => {
      clearInterval(interval);
    };
  }, [now, wedding_date]);

  if (duration.as('days') === 0) return null;

  return (
    <div className="flex items-center">
      <div className="flex flex-col items-center lg:gap-[5px] lg:pe-[20px] border-r-[1px] border-solid border-[#FFFFFF]/50 min-w-[86px] lg:min-w-[130px]">
        <span className="text-3xl lg:text-6xl font-medium">{Math.floor(duration.as('days'))}</span>
        <span className="text-sm lg:text-base font-light">{t('days')}</span>
      </div>
      <div className="flex flex-col items-center gap-[5px] lg:px-[20px] border-r-[1px] border-solid border-[#FFFFFF]/50 min-w-[86px] lg:min-w-[130px]">
        <span className="text-3xl lg:text-6xl font-medium">{duration.hours()}</span>
        <span className="text-sm lg:text-base font-light">{t('hours')}</span>
      </div>
      <div className="flex flex-col items-center lg:gap-[5px] lg:px-[20px] border-r-[1px] border-solid border-[#FFFFFF]/50 min-w-[86px] lg:min-w-[130px]">
        <span className="text-3xl lg:text-6xl font-medium">{duration.minutes()}</span>
        <span className="text-sm lg:text-base font-light">{t('minutes')}</span>
      </div>
      <div className="flex flex-col items-center lg:gap-[5px] min-w-[86px] lg:min-w-[130px]">
        <span className="text-3xl lg:text-6xl font-medium">{duration.seconds()}</span>
        <span className="text-sm lg:text-base font-light">{t('seconds')}</span>
      </div>
    </div>
  );
}
