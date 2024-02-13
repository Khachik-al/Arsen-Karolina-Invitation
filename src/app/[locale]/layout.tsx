import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

import { NextIntlClientProvider, useMessages } from 'next-intl';

import clsx from 'clsx';

import { inter, armenian_vrdznagir, montserrat_arm } from '@/fonts';

import { localeFont } from '@/locales';
import type { Locale } from '@/locales';

import './globals.css';

export const metadata: Metadata = {
  title: 'Tigran & Mariam',
  description: 'Tigran & Mariam invitation',
};

type RootLayoutProps = PropsWithChildren & {
  params: { locale: Locale };
};

export default function RootLayout({ children, params: { locale } }: Readonly<RootLayoutProps>) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body
        className={clsx(
          localeFont[locale],
          inter.variable,
          armenian_vrdznagir.variable,
          montserrat_arm.variable,
        )}
      >
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
