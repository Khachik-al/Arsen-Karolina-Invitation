'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

import CountUp from 'react-countup';

import dayjs from 'dayjs';
import 'dayjs/locale/hy-am';
import plugin_duration from 'dayjs/plugin/duration';
import type { Duration } from 'dayjs/plugin/duration';

dayjs.extend(plugin_duration);

export default function TimeCounter() {
  const t = useTranslations('Invitation');

  const wedding_date = dayjs('2024-08-30 14:30:00');
  const [duration, setDuration] = useState<Duration>(dayjs.duration(0));

  useEffect(() => {
    const interval = setInterval(
      () => setDuration(dayjs.duration(wedding_date.diff(dayjs()))),
      1000,
    );
    return () => {
      clearInterval(interval);
    };
  }, [wedding_date]);

  return (
    <div className="flex items-center">
      <div className="flex flex-col items-center lg:gap-[5px] lg:pe-[20px] border-r-[1px] border-solid border-[#FFFFFF]/50 min-w-[86px] lg:min-w-[130px]">
        <span className="text-3xl lg:text-6xl font-medium">
          {duration.as('days') === 0 ? (
            <CountUp end={dayjs.duration(wedding_date.diff(dayjs())).as('days')} />
          ) : (
            Math.floor(duration.as('days'))
          )}
          {/*{Math.floor(duration.as('days'))}*/}
        </span>
        <span className="text-sm lg:text-base font-light">{t('days')}</span>
      </div>
      <div className="flex flex-col items-center gap-[5px] lg:px-[20px] border-r-[1px] border-solid border-[#FFFFFF]/50 min-w-[86px] lg:min-w-[130px]">
        <span className="text-3xl lg:text-6xl font-medium">
          {duration.as('days') === 0 ? (
            <CountUp end={dayjs.duration(wedding_date.diff(dayjs())).hours()} />
          ) : (
            duration.hours()
          )}
          {/*{duration.hours()}*/}
        </span>
        <span className="text-sm lg:text-base font-light">{t('hours')}</span>
      </div>
      <div className="flex flex-col items-center lg:gap-[5px] lg:px-[20px] border-r-[1px] border-solid border-[#FFFFFF]/50 min-w-[86px] lg:min-w-[130px]">
        <span className="text-3xl lg:text-6xl font-medium">
          {duration.as('days') === 0 ? (
            <CountUp end={dayjs.duration(wedding_date.diff(dayjs())).minutes()} />
          ) : (
            duration.minutes()
          )}
          {/*{duration.minutes()}*/}
        </span>
        <span className="text-sm lg:text-base font-light">{t('minutes')}</span>
      </div>
      <div className="flex flex-col items-center lg:gap-[5px] min-w-[86px] lg:min-w-[130px]">
        <span className="text-3xl lg:text-6xl font-medium">
          {duration.as('days') === 0 ? (
            <CountUp end={dayjs.duration(wedding_date.diff(dayjs())).seconds()} />
          ) : (
            duration.seconds()
          )}
          {/*{duration.seconds()}*/}
        </span>
        <span className="text-sm lg:text-base font-light">{t('seconds')}</span>
      </div>
    </div>
  );
}
