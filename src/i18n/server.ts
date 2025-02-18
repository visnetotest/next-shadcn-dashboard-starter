import { createI18nServer } from 'next-international/server';

export const { getI18n, getScopedI18n } = createI18nServer({
  en: () => import('./en'),
  zh: () => import('./zh')
});

export const languages = ['en', 'zh'] as const;
export type Language = (typeof languages)[number];
