import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const armenian_vrdznagir = localFont({
  src: '../assets/fonts/armenian/Vrdznagir/Vrdznagir.otf',
  variable: '--font-arm-vrdznagir',
});

export const montserrat_arm = localFont({
  src: [
    {
      path: '../assets/fonts/armenian/Montserrat_Arm/Montserratarm-Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../assets/fonts/armenian/Montserrat_Arm/Montserratarm-ExtraLight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../assets/fonts/armenian/Montserrat_Arm/Montserratarm-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/armenian/Montserrat_Arm/Montserratarm-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/armenian/Montserrat_Arm/Montserratarm-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/armenian/Montserrat_Arm/Montserratarm-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/armenian/Montserrat_Arm/Montserratarm-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/armenian/Montserrat_Arm/Montserratarm-ExtraBold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../assets/fonts/armenian/Montserrat_Arm/Montserratarm-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-montserrat-arm',
});

export const deja_vu_serif_condensed = localFont({
  src: [
    {
      path: '../assets/fonts/russian/DejaVuSerifCondensed/DejaVuSerifCondensed.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/russian/DejaVuSerifCondensed/DejaVuSerifCondensed-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/russian/DejaVuSerifCondensed/DejaVuSerifCondensed-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../assets/fonts/russian/DejaVuSerifCondensed/DejaVuSerifCondensed-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-deja-vu-serif-condensed',
});

export const czizh = localFont({
  src: '../assets/fonts/russian/Czizh/Czizh-Body.ttf',
  variable: '--font-czizh-body',
});

export const ananda_black = localFont({
  src: '../assets/fonts/english/AnandaBlack/AnandaBlackRegular.ttf',
  variable: '--font-ananda-black',
});

export const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
