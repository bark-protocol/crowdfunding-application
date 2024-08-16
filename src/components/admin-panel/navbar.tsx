'use client';

import Link from 'next/link';
import Image from 'next/image';  // Import Image component if using Next.js Image
import { SheetMenu } from '@/components/admin-panel/sheet-menu';
import { WalletConnectButton } from '@/components/wallets';
import { ModeToggle } from '@/components';
import { SelectNetwork } from '@/components/admin-panel/select-network';

interface NavbarProps {
  title: string;
}

export function Navbar({ title }: NavbarProps) {
  return (
    <header className="sticky top-0 z-10 w-full bg-background/95 shadow-md backdrop-blur-sm supports-[backdrop-filter]:bg-background/60 dark:bg-black/[0.7] dark:shadow-secondary">
      <div className="container mx-auto flex h-16 items-center px-4 sm:px-6 md:px-8">
        <div className="flex items-center space-x-4 lg:space-x-6">
          <SheetMenu aria-label="Admin Menu" />
          {/* Logo */}
          <Link href="/" passHref aria-label="Homepage">
            <Image
              src="/bark-icon.png"  // Replace with the path to BARK Icon logo
              alt="BARK Protocol Logo"
              width={48}  // Adjust the width as needed
              height={48}  // Adjust the height as needed
              className="w-12 h-12"
            />
          </Link>
          <h1 className="hidden text-xl font-bold text-primary sm:block">{title}</h1>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ModeToggle aria-label="Toggle Dark Mode" />
          <div className="hidden sm:block">
            <SelectNetwork aria-label="Select Network" />
          </div>
          <WalletConnectButton aria-label="Connect Wallet" />
        </div>
      </div>
    </header>
  );
}
