import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import NextAuth from 'next-auth';
import authConfig from '@/lib/auth.config';
import { languages, defaultLocale } from '@/i18n/config';

const { auth } = NextAuth(authConfig);

const middleware = auth((req) => {
  const { pathname } = req.nextUrl;
  const locale = pathname.split('/')[1];

  // Check if the pathname starts with a valid locale
  if (!languages.includes(locale as any)) {
    // Redirect to default locale if no valid locale is found
    const url = new URL(`/${defaultLocale}${pathname}`, req.url);
    return NextResponse.redirect(url);
  }

  // Handle authentication
  if (pathname.startsWith('/dashboard') && !req.auth) {
    const url = req.url.replace(req.nextUrl.pathname, '/');
    return Response.redirect(url);
  }

  return NextResponse.next();
});

export default middleware;

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
