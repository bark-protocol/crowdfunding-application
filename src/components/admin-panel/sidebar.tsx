'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useStore } from '@/hooks/use-store';
import { Menu } from '@/components/admin-panel/menu';
import { useSidebarToggle } from '@/hooks/use-sidebar-toggle';
import { SidebarToggle } from '@/components/admin-panel/sidebar-toggle';

// Updated logo URL
const logoUrl = 'https://ucarecdn.com/dd264726-4f83-4a3a-b36b-bad0fb3f58a5/logolight.png';

export function Sidebar() {
  const sidebar = useStore(useSidebarToggle, (state) => state);

  if (!sidebar) {
    return null;
  }

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 z-20 h-screen transition-transform duration-300 ease-in-out lg:translate-x-0',
        sidebar.isOpen ? 'w-72 translate-x-0' : 'w-[90px] -translate-x-full'
      )}
      aria-label="Sidebar"
    >
      <SidebarToggle isOpen={sidebar.isOpen} setIsOpen={sidebar.setIsOpen} />
      <div className="relative flex h-full flex-col justify-between overflow-y-auto px-3 py-4 shadow-md dark:shadow-zinc-800">
        {/* Sidebar Menu */}
        <nav aria-label="Sidebar Navigation">
          <Menu isOpen={sidebar.isOpen} />
        </nav>

        {/* Logo at the bottom, moved higher and smaller */}
        <div className="flex justify-center py-2 mb-2"> {/* Reduced padding and added margin */}
          <Image
            src={logoUrl}
            alt="BARK Protocol Logo"
            width={40}
            height={40}
            priority
            className="w-auto h-auto"
          />
        </div>
      </div>
    </aside>
  );
}
