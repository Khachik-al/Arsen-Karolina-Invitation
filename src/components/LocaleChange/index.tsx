'use client';

import dynamic from 'next/dynamic';

import { Ru, Us, Am } from 'react-flags-select';
import type { OnSelect } from 'react-flags-select/build/types';

import { useRouter, usePathname } from '@/navigation';

import { LocaleProps } from '@/app/[locale]/layout';

const selectedCode = {
  en: 'US',
  ru: 'RU',
  hy: 'AM',
};

const selectedFlags = {
  en: <Us />,
  ru: <Ru />,
  hy: <Am />,
};

const changedLocale = {
  US: 'en',
  RU: 'ru',
  AM: 'hy',
};

export default function LocaleChange({ locale }: LocaleProps) {
  const ReactFlagsSelect = dynamic(() => import('react-flags-select'), {
    ssr: false,
    loading: () => selectedFlags[locale],
  });
  const router = useRouter();
  const pathname = usePathname();

  const onSelect: OnSelect = code => {
    router.replace(pathname, { locale: changedLocale[code] });
  };

  return (
    <div className="absolute top-[10px] right-[10px] font-inter">
      <ReactFlagsSelect
        countries={['US', 'RU', 'AM']}
        customLabels={{ US: 'English', RU: 'Русский', AM: 'Հայերեն' }}
        selected={selectedCode[locale]}
        onSelect={onSelect}
      />
    </div>
  );
}
