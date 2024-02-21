import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        ananda_black: ['var(--font-ananda-black)'],
        montserrat_arm: ['var(--font-montserrat-arm)'],
        vrdznagir: ['var(--font-arm-vrdznagir)'],
        czizh_body: ['var(--font-czizh-body)'],
        deja_vu_serif_condensed: ['var(--font-deja-vu-serif-condensed)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
