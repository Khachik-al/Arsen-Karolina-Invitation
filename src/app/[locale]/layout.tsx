import type { PropsWithChildren } from 'react';
import type { Metadata, ResolvingMetadata } from 'next';

import { getTranslations } from 'next-intl/server';
import { NextIntlClientProvider, useMessages } from 'next-intl';

import clsx from 'clsx';

import { localeFont, font_variables } from '@/locales';
import type { Locale } from '@/locales';

import './globals.css';

export type LocaleProps = { locale: Locale };

export type RootLayoutProps = PropsWithChildren & {
  params: LocaleProps;
};

export async function generateMetadata(
  { params: { locale } }: Pick<RootLayoutProps, 'params'>,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      images: ['/icon.svg', ...previousImages],
    },
  };
}

export default function RootLayout({ children, params: { locale } }: Readonly<RootLayoutProps>) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={clsx(localeFont[locale], font_variables)}>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
