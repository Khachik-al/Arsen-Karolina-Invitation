import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ru', 'hy'],
  defaultLocale: 'hy',
  localeDetection: false,
  localePrefix: 'always',
});

export const config = {
  matcher: ['/', '/(en|ru|hy)/:path*'],
};
