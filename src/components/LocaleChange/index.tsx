'use client';

import { Ru, Us, Am } from 'react-flags-select';

import { usePathname, Link } from '@/navigation';

import clsx from 'clsx';

import type { LocaleProps } from '@/app/[locale]/layout';
import { locales } from '@/locales';

const selectedFlags = {
  en: <Us />,
  ru: <Ru />,
  hy: <Am />,
};

export default function LocaleChange({ locale }: LocaleProps) {
  const pathname = usePathname();

  return (
    <div className="absolute grid grid-cols-3 divide-x divide-amber-600 border border-amber-600 rounded-lg top-[10px] right-[10px] font-inter">
      {locales.map(loc => (
        <Link
          key={loc}
          href={pathname}
          locale={loc}
          replace
          className={clsx(
            locale === loc ? 'text-amber-700' : 'text-amber-600',
            'uppercase text-xs text-amber-600 font-bold p-2',
          )}
        >
          {loc}
        </Link>
      ))}
    </div>
  );
}
