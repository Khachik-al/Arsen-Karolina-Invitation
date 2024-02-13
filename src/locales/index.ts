import type { NextFont } from 'next/dist/compiled/@next/font';
import { inter, montserrat_arm } from '@/fonts';

export type LocaleFont = {
  am: NextFont['className'];
  ru: NextFont['className'];
  en: NextFont['className'];
};

export type Locale = keyof LocaleFont;

export const localeFont: LocaleFont = {
  am: montserrat_arm.className,
  en: inter.className,
  ru: inter.className,
};

export const locales: Locale[] = ['en', 'ru', 'am'];
