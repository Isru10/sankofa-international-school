import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'am'],
  // Used when no locale matches
  defaultLocale: 'en'
});

// We export these customized navigation APIs so your Navbar works perfectly
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);