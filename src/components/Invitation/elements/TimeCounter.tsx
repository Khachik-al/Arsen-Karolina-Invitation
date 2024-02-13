'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

import dayjs from 'dayjs';
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
    <div className="flex items-center gap-[20px]">
      <div className="flex flex-col items-center gap-[5px] pe-[20px] border-r-[1px] border-solid border-[#FFFFFF]/50 min-w-[130px]">
        <span className="text-6xl font-medium">{Math.floor(duration.as('days'))}</span>
        <span className="font-light">{t('days')}</span>
      </div>
      <div className="flex flex-col items-center gap-[5px] pe-[20px] border-r-[1px] border-solid border-[#FFFFFF]/50 min-w-[130px]">
        <span className="text-6xl font-medium">{duration.hours()}</span>
        <span className="font-light">{t('hours')}</span>
      </div>
      <div className="flex flex-col items-center gap-[5px] pe-[20px] border-r-[1px] border-solid border-[#FFFFFF]/50 min-w-[130px]">
        <span className="text-6xl font-medium">{duration.minutes()}</span>
        <span className="font-light">{t('minutes')}</span>
      </div>
      <div className="flex flex-col items-center gap-[5px] pe-[20px] min-w-[130px]">
        <span className="text-6xl font-medium">{duration.seconds()}</span>
        <span className="font-light">{t('seconds')}</span>
      </div>
    </div>
  );
}
