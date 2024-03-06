'use client';

import { Ru, Us, Am } from 'react-flags-select';

import { usePathname, Link } from '@/navigation';

import type { LocaleProps } from '@/app/[locale]/layout';
import { locales } from '@/locales';
import clsx from 'clsx';

const selectedFlags = {
  en: <Us />,
  ru: <Ru />,
  hy: <Am />,
};

export default function LocaleChange({ locale }: LocaleProps) {
  const pathname = usePathname();

  return (
    <div className="absolute flex align-center gap-[10px] top-[10px] right-[10px] font-inter">
      {locales.map(loc => (
        <Link
          key={loc}
          href={pathname}
          locale={loc}
          className={clsx(locale === loc && 'opacity-50')}
        >
          {selectedFlags[loc]}
        </Link>
      ))}
    </div>
  );
}
