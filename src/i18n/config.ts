import { createI18nServer } from 'next-international/server';

export const languages = ['en', 'zh'] as const;
export type Language = (typeof languages)[number];

export const defaultLocale = 'en';

export const { getI18n, getScopedI18n } = createI18nServer({
  en: () => import('./en')
  // Temporarily removing zh locale until the module is created
  // zh: () => import('./zh'),
});
