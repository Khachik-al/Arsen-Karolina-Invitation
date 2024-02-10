import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ru', 'am'],
  defaultLocale: 'am',
});

export const config = {
  matcher: ['/', '/(en|ru|am)/:path*'],
};
