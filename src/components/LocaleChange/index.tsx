'use client';

import dynamic from 'next/dynamic';

import { Ru, Us, Am } from 'react-flags-select';

import { usePathname, useRouter } from '@/navigation';

import type { OnSelect } from 'react-flags-select/build/types';

import type { LocaleProps } from '@/app/[locale]/layout';

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
    <div className="absolute top-[16px] right-[10px] font-inter">
      <ReactFlagsSelect
        className="locale-select-menu"
        selectButtonClassName="locale-select-button"
        countries={['US', 'RU', 'AM']}
        customLabels={{ US: 'English', RU: 'Русский', AM: 'Հայերեն' }}
        selected={selectedCode[locale]}
        onSelect={onSelect}
      />
    </div>
  );
  // const pathname = usePathname();
  //
  // return (
  //   <div className="absolute grid grid-cols-3 divide-x divide-amber-600 border border-amber-600 rounded-lg top-[10px] right-[10px] font-inter">
  //     {locales.map(loc => (
  //       <Link
  //         key={loc}
  //         href={pathname}
  //         locale={loc}
  //         replace
  //         className={clsx(
  //           locale === loc ? 'text-amber-700' : 'text-amber-600',
  //           'uppercase text-xs text-amber-600 font-bold p-2',
  //         )}
  //       >
  //         {loc}
  //       </Link>
  //     ))}
  //   </div>
  // );
}
