import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import { locales } from '@/locales';
import type { Locale } from '@/locales';

export interface INestedMessages {
  [key: string]: string | INestedMessages;
}

export type MessagesDefaultType = {
  default: INestedMessages;
};

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(<Locale>locale)) notFound();

  const messages = (await import(`../messages/${locale}.json`)) as MessagesDefaultType;
  return {
    messages: messages.default,
  };
});
