import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

import { NextIntlClientProvider, useMessages } from 'next-intl';

import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

import '../globals.css';

const armenian_vrdznagir = localFont({
  src: '../../assets/fonts/vrdznagir.otf',
  variable: '--font-arm-vrdznagir',
  // display: 'swap',
});

const inter = Inter({ subsets: ['latin'] });

const locale_font = {
  am: armenian_vrdznagir.className,
  en: inter.className,
  ru: inter.className,
};

export const metadata: Metadata = {
  title: 'Tigran & Mariam',
  description: 'Tigran & Mariam invitation',
};

type RootLayoutProps = PropsWithChildren & {
  params: { locale: string };
};

export default function RootLayout({ children, params: { locale } }: Readonly<RootLayoutProps>) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={locale_font[locale]}>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
