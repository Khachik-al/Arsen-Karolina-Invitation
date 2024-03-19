import type { NextFont } from 'next/dist/compiled/@next/font';

import clsx from 'clsx';

import {
  inter,
  montserrat_arm,
  armenian_vrdznagir,
  armenian_cosiarm,
  armenian_tumanyan,
  armenian_scripted,
  armenian_doctor,
  armenian_victory,
  armenian_nasa,
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
  armenian_cosiarm.variable,
  armenian_tumanyan.variable,
  armenian_scripted.variable,
  armenian_doctor.variable,
  armenian_victory.variable,
  armenian_nasa.variable,
  montserrat_arm.variable,
  pompadur.variable,
  ananda_black.variable,
  deja_vu_serif_condensed.variable,
  beauty_hand_writting_regular.variable,
);

export const locales: Locale[] = ['hy', 'ru', 'en'];
