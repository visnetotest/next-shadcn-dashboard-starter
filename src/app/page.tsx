import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { LanguageSwitcher } from '@/components/language-switcher';
import { getI18n } from '@/i18n/config';

export default async function HomePage() {
  const t = await getI18n();
  return (
    <div className='flex min-h-screen flex-col'>
      <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <div className='container flex h-14 items-center'>
          <div className='mr-4 flex'>
            <Link href='/' className='mr-6 flex items-center space-x-2'>
              <Icons.logo className='h-6 w-6' />
              <span className='font-bold'>{t('nav.logo')}</span>
            </Link>
            <nav className='hidden items-center space-x-6 md:flex'>
              <Link
                href='/product'
                className='text-sm font-medium text-muted-foreground hover:text-primary'
              >
                {t('nav.product')}
              </Link>
              <Link
                href='/pricing'
                className='text-sm font-medium text-muted-foreground hover:text-primary'
              >
                {t('nav.pricing')}
              </Link>
              <Link
                href='/resources'
                className='text-sm font-medium text-muted-foreground hover:text-primary'
              >
                {t('nav.resources')}
              </Link>
            </nav>
          </div>
          <div className='flex flex-1 items-center justify-end space-x-4'>
            <nav className='flex items-center space-x-2'>
              <LanguageSwitcher />
              <Link href='/signin'>
                <Button variant='ghost' size='sm'>
                  {t('nav.signIn')}
                </Button>
              </Link>
              <Link href='/signup'>
                <Button size='sm'>{t('nav.getStarted')}</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className='flex-1'>
        <section className='space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32'>
          <div className='container flex max-w-[64rem] flex-col items-center gap-4 text-center'>
            <h1 className='font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl'>
              {t('hero.title')}
            </h1>
            <p className='max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8'>
              {t('hero.description')}
            </p>
            <div className='space-x-4'>
              <Link href='/signup'>
                <Button size='lg' className='px-8'>
                  {t('nav.getStarted')}
                </Button>
              </Link>
              <Link href='/signin'>
                <Button variant='outline' size='lg' className='px-8'>
                  {t('nav.signIn')}
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className='container space-y-6 py-8 dark:bg-transparent md:py-12 lg:py-24'>
          <div className='mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3'>
            <div className='relative overflow-hidden rounded-lg border bg-background p-2'>
              <div className='flex h-[180px] flex-col justify-between rounded-md p-6'>
                <Icons.laptop className='h-12 w-12' />
                <div className='space-y-2'>
                  <h3 className='font-bold'>{t('features.analytics.title')}</h3>
                  <p className='text-sm text-muted-foreground'>
                    {t('features.analytics.description')}
                  </p>
                </div>
              </div>
            </div>
            <div className='relative overflow-hidden rounded-lg border bg-background p-2'>
              <div className='flex h-[180px] flex-col justify-between rounded-md p-6'>
                <Icons.settings className='h-12 w-12' />
                <div className='space-y-2'>
                  <h3 className='font-bold'>
                    {t('features.taskManagement.title')}
                  </h3>
                  <p className='text-sm text-muted-foreground'>
                    {t('features.taskManagement.description')}
                  </p>
                </div>
              </div>
            </div>
            <div className='relative overflow-hidden rounded-lg border bg-background p-2'>
              <div className='flex h-[180px] flex-col justify-between rounded-md p-6'>
                <Icons.users className='h-12 w-12' />
                <div className='space-y-2'>
                  <h3 className='font-bold'>
                    {t('features.teamCollaboration.title')}
                  </h3>
                  <p className='text-sm text-muted-foreground'>
                    {t('features.teamCollaboration.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
