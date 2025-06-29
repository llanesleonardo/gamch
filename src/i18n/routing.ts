import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['es', 'en'] as const,
 
  // Used when no locale matches
  defaultLocale: 'es'
});