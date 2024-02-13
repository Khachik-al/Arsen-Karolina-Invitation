import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ru', 'am'],
  defaultLocale: 'am',
  localeDetection: false,
  localePrefix: 'always',
});

export const config = {
  matcher: ['/', '/(en|ru|am)/:path*'],
};
