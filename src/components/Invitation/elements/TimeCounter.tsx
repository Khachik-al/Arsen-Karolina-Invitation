'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

import dayjs from 'dayjs';
import plugin_duration from 'dayjs/plugin/duration';
import type { Duration } from 'dayjs/plugin/duration';

dayjs.extend(plugin_duration);

export default function TimeCountDown() {
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
    <div className="flex items-center gap-[30px]">
      <div className="flex flex-col items-center gap-[5px] pe-[30px] border-r-[1px] border-solid border-[#FFFFFF]">
        <span className="text-6xl">{Math.floor(duration.as('days'))}</span>
        <span>{t('days')}</span>
      </div>
      <div className="flex flex-col items-center gap-[5px] pe-[30px] border-r-[1px] border-solid border-[#FFFFFF]">
        <span className="text-6xl">{duration.hours()}</span>
        <span>{t('hours')}</span>
      </div>
      <div className="flex flex-col items-center gap-[5px] pe-[30px] border-r-[1px] border-solid border-[#FFFFFF]">
        <span className="text-6xl">{duration.minutes()}</span>
        <span>{t('minutes')}</span>
      </div>
      <div className="flex flex-col items-center gap-[5px] pe-[30px]">
        <span className="text-6xl">{duration.seconds()}</span>
        <span>{t('seconds')}</span>
      </div>
    </div>
  );
}
