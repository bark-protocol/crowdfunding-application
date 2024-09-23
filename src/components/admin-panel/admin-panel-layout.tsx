'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { useStore } from '@/hooks/use-store'
import { Sidebar } from '@/components/admin-panel/sidebar'
import { useSidebarToggle } from '@/hooks/use-sidebar-toggle'

interface AdminPanelLayoutProps {
  children: React.ReactNode
}

export default function AdminPanelLayout({ children }: AdminPanelLayoutProps) {
  const sidebar = useStore(useSidebarToggle, (state) => state)

  if (!sidebar) {
    return <div>Loading...</div> // Or any other loading indicator
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main
        className={cn(
          'flex-1 bg-zinc-50 transition-[margin-left] duration-300 ease-in-out dark:bg-zinc-900',
          sidebar.isOpen ? 'lg:ml-72' : 'lg:ml-[90px]'
        )}
      >
        <div className="container mx-auto px-4 py-8">
          {children}
        </div>
      </main>
    </div>
  )
}