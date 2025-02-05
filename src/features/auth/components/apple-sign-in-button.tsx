'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';

export default function AppleSignInButton() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');

  return (
    <Button
      className='w-full bg-black hover:bg-zinc-800'
      onClick={() =>
        signIn('apple', { callbackUrl: callbackUrl ?? '/dashboard' })
      }
    >
      <Icons.apple className='mr-2 h-4 w-4' />
      Continue with Apple
    </Button>
  );
}
