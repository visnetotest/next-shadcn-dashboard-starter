import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { getRandomQuote } from '@/lib/get-random-quote';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { StarIcon } from 'lucide-react';
import Link from 'next/link';
import UserAuthForm from './user-auth-form';

export default function SignUpViewPage({ stars }: { stars: number }) {
  return (
    <div className='relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
      <Link
        href='/'
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute right-4 top-4 hidden md:right-8 md:top-8'
        )}
      >
        Sign In
      </Link>
      <div className='relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex'>
        <div className='absolute inset-0 bg-zinc-900' />
        <div className='relative z-20 flex items-center text-lg font-medium'>
          <img src='/next.svg' alt='DashFlow Logo' className='mr-2 h-6 w-6' />
          <span className='font-bold'>DashFlow</span>
        </div>
        <div className='relative z-20 mt-auto'>
          <blockquote className='space-y-2'>
            <p className='text-lg'>{getRandomQuote().text}</p>
            <footer className='text-sm'>{getRandomQuote().source}</footer>
          </blockquote>
        </div>
      </div>
      <div className='flex h-full items-center p-4 lg:p-8'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
          <div className='flex flex-col space-y-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>
              Create an account
            </h1>
            <p className='text-sm text-muted-foreground'>
              Enter your email below to create your account
            </p>
          </div>
          <UserAuthForm />
          <p className='px-8 text-center text-sm text-muted-foreground'>
            Already have an account?{' '}
            <Link
              href='/'
              className='underline underline-offset-4 hover:text-primary'
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
