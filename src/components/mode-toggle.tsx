'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <TooltipProvider disableHoverableContent>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Button
            className="relative h-8 w-8 rounded-full bg-background"
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            aria-label="Switch Theme"
          >
            <SunIcon
              className={`absolute h-[1.2rem] w-[1.2rem] transition-transform duration-500 ease-in-out ${theme === 'dark' ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}
            />
            <MoonIcon
              className={`absolute h-[1.2rem] w-[1.2rem] transition-transform duration-500 ease-in-out ${theme === 'dark' ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
            />
            <span className="sr-only">Switch Theme</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Switch Theme</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
