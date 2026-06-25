import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// This is the default export Next.js 16 expects for Proxy configurations
export default createMiddleware(routing);

export const config = {
  // Catch all locales and pathnames
  matcher: ['/', '/(am|en)/:path*']
};