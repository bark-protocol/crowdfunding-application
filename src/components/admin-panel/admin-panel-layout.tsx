'use client'

import React, { useEffect, createContext, useContext, useState } from 'react'
import { cn } from '@/lib/utils'
import { useStore } from '@/hooks/use-store'
import { Sidebar } from '@/components/admin-panel/sidebar'
import { useSidebarToggle } from '@/hooks/use-sidebar-toggle'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Moon, Sun, Menu } from 'lucide-react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@/components/ui/breadcrumb'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Skeleton } from '@/components/ui/skeleton'
import { usePathname } from 'next/navigation'

interface AdminPanelLayoutProps {
  children: React.ReactNode
}

interface AdminContextType {
  toggleSidebar: () => void
  toggleTheme: () => void
}

const AdminContext = createContext<AdminContextType | undefined>(undefined)

export function useAdmin() {
  const context = useContext(AdminContext)
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider')
  }
  return context
}

export default function AdminPanelLayout({ children }: AdminPanelLayoutProps) {
  const sidebar = useStore(useSidebarToggle, (state) => state)
  const { theme, setTheme } = useTheme()
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    setIsLoading(false)
  }, [pathname])

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark' : 'light'
  }, [theme])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'b') {
        event.preventDefault()
        sidebar?.toggleSidebar()
      }
      if (event.ctrlKey && event.key === 't') {
        event.preventDefault()
        toggleTheme()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [sidebar, theme])

  if (!sidebar) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Skeleton className="h-32 w-32 rounded-full" />
      </div>
    )
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const adminContextValue: AdminContextType = {
    toggleSidebar: sidebar.toggleSidebar,
    toggleTheme,
  }

  return (
    <AdminContext.Provider value={adminContextValue}>
      <div className="flex min-h-screen bg-white dark:bg-zinc-900 transition-colors duration-300">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <header className="sticky top-0 z-10 bg-white dark:bg-zinc-800 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between px-4 py-2">
              <div className="flex items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={sidebar.toggleSidebar}
                  aria-label="Toggle sidebar"
                >
                  <Menu className="h-5 w-5" />
                </Button>
                <Breadcrumb className="ml-4">
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                  </BreadcrumbItem>
                  {/* Add more breadcrumb items based on the current route */}
                </Breadcrumb>
              </div>
              <div className="flex items-center space-x-4">
                <Button
                  onClick={toggleTheme}
                  variant="ghost"
                  size="icon"
                  aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
                >
                  {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/avatars/01.png" alt="@username" />
                        <AvatarFallback>UN</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Log out</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </header>
          <main
            className={cn(
              'flex-1 transition-[margin-left] duration-300 ease-in-out p-4',
              sidebar.isOpen ? 'lg:ml-72' : 'lg:ml-[90px]'
            )}
          >
            {isLoading ? (
              <div className="space-y-4">
                <Skeleton className="h-8 w-[250px]" />
                <Skeleton className="h-[200px] w-full" />
              </div>
            ) : (
              children
            )}
          </main>
          <footer className="bg-white dark:bg-zinc-800 border-t border-gray-200 dark:border-gray-700 py-4 px-4 text-center text-sm text-gray-500 dark:text-gray-400">
            © 2023 Your Company. All rights reserved.
          </footer>
        </div>
      </div>
    </AdminContext.Provider>
  )
}