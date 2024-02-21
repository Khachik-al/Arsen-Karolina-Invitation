import type { NextFont } from 'next/dist/compiled/@next/font';

import clsx from 'clsx';

import {
  inter,
  montserrat_arm,
  armenian_vrdznagir,
  czizh,
  deja_vu_serif_condensed,
  ananda_black,
} from '@/fonts';

export type LocaleFont = {
  am: NextFont['className'];
  ru: NextFont['className'];
  en: NextFont['className'];
};

export type Locale = keyof LocaleFont;

export const localeFont: LocaleFont = {
  am: montserrat_arm.className,
  en: inter.className,
  ru: deja_vu_serif_condensed.className,
};

export const font_variables = clsx(
  inter.variable,
  armenian_vrdznagir.variable,
  montserrat_arm.variable,
  czizh.variable,
  ananda_black.variable,
  deja_vu_serif_condensed.variable,
);

export const locales: Locale[] = ['en', 'ru', 'am'];
