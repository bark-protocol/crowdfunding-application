'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SheetMenu } from '@/components/admin-panel/sheet-menu'
import { WalletConnectButton } from '@/components/wallets'
import { ModeToggle } from '@/components'
import { SelectNetwork } from '@/components/admin-panel/select-network'
import { Button } from '@/components/ui/button'
import { Bell, Settings } from 'lucide-react'
import { usePathname } from 'next/navigation'

interface NavbarProps {
  title: string
}

export function Navbar({ title }: NavbarProps) {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-10 w-full bg-background/95 shadow-md backdrop-blur-sm supports-[backdrop-filter]:bg-background/60 dark:bg-black/[0.7] dark:shadow-secondary">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 md:px-8">
        <div className="flex items-center space-x-4 lg:space-x-6">
          <SheetMenu aria-label="Admin Menu" />
          <Link href="/" passHref className="flex items-center space-x-2" aria-label="Homepage">
            <Image
              src="/charity-icon.png"
              alt=""
              width={34}
              height={34}
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <h1 className="hidden text-xl font-bold text-primary sm:block">{title}</h1>
          </Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <Link 
                href="/admin-panel-layout" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === '/dashboard' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link 
                href="/components/campaigns/" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname.startsWith('/campaigns') ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Campaigns
              </Link>
            </li>
            <li>
              <Link 
                href="/components/analytics/" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === '/analytics' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Analytics
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Button variant="ghost" size="icon" aria-label="Notifications">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Settings">
            <Settings className="h-5 w-5" />
          </Button>
          <ModeToggle />
          <div className="hidden sm:block">
            <SelectNetwork />
          </div>
          <WalletConnectButton />
        </div>
      </div>
    </header>
  )
}