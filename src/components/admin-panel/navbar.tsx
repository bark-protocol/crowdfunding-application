'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SheetMenu } from '@/components/admin-panel/sheet-menu'
import { WalletConnectButton } from '@/components/wallets'
import { ModeToggle } from '@/components'
import { SelectNetwork } from '@/components/admin-panel/select-network'
import { Button } from '@/components/ui/button'
import { Bell, Settings, Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface NavbarProps {
  title: string
}

export function Navbar({ title }: NavbarProps) {
  const pathname = usePathname()

  const navItems = [
    { href: '/admin-panel-layout', label: 'Dashboard' },
    { href: '/components/campaigns/', label: 'Campaigns' },
    { href: '/components/analytics/', label: 'Analytics' },
  ]

  return (
    <header className="sticky top-0 z-10 w-full bg-background/95 shadow-md backdrop-blur-sm supports-[backdrop-filter]:bg-background/60 dark:bg-black/[0.7] dark:shadow-secondary">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 md:px-8">
        <div className="flex items-center space-x-4 lg:space-x-6">
          <SheetMenu aria-label="Admin Menu" />
          <Link href="/" className="flex items-center space-x-2" aria-label="Homepage">
            <Image
              src="/charity-icon.png"
              alt=""
              width={34}
              height={34}
              className="h-8 w-8 sm:h-10 sm:w-10"
            />
            <h1 className="hidden text-xl font-bold text-primary sm:block">{title}</h1>
          </Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href} 
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === item.href || pathname.startsWith(item.href)
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {navItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href}>{item.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}