import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'am'],
  defaultLocale: 'en'
});

// Use these specialized routers across all your pages
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);