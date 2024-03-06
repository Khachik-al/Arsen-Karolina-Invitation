import type { NextFont } from 'next/dist/compiled/@next/font';

import clsx from 'clsx';

import {
  inter,
  montserrat_arm,
  armenian_vrdznagir,
  pompadur,
  deja_vu_serif_condensed,
  ananda_black,
  beauty_hand_writting_regular,
} from '@/fonts';

export type LocaleFont = {
  hy: NextFont['className'];
  ru: NextFont['className'];
  en: NextFont['className'];
};

export type Locale = keyof LocaleFont;

export const localeFont: LocaleFont = {
  hy: montserrat_arm.className,
  en: inter.className,
  ru: deja_vu_serif_condensed.className,
};

export const font_variables = clsx(
  inter.variable,
  armenian_vrdznagir.variable,
  montserrat_arm.variable,
  pompadur.variable,
  ananda_black.variable,
  deja_vu_serif_condensed.variable,
  beauty_hand_writting_regular.variable,
);

export const locales: Locale[] = ['hy', 'ru', 'en'];
