'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { languages } from '@/i18n/client-config';

export function LanguageSwitcher() {
  const router = useRouter();

  const handleLanguageChange = (locale: string) => {
    const currentPath = window.location.pathname;
    router.push(currentPath + '?lang=' + locale);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='sm' className='w-8 px-0'>
          <span className='sr-only'>Switch language</span>
          <span className='text-sm'>🌐</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => handleLanguageChange(lang)}
          >
            {lang.toUpperCase()}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
