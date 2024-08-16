import Link from 'next/link';
import Image from 'next/image'; // Import Image component from Next.js
import { PanelsTopLeft } from 'lucide-react';

import { cn } from '@/lib/utils';
import { useStore } from '@/hooks/use-store';
import { Button } from '@/components/ui/button';
import { Menu } from '@/components/admin-panel/menu';
import { useSidebarToggle } from '@/hooks/use-sidebar-toggle';
import { SidebarToggle } from '@/components/admin-panel/sidebar-toggle';

// Import your logo image here
import Logo from '/public/logo.png'; // Ensure correct path to your logo file

export function Sidebar() {
  // Get sidebar state and methods from the store
  const sidebar = useStore(useSidebarToggle, (state) => state);

  // If sidebar state is not available, render nothing
  if (!sidebar) return null;

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 z-20 h-screen transition-transform duration-300 ease-in-out lg:translate-x-0',
        sidebar?.isOpen === false ? 'w-[90px] -translate-x-full' : 'w-72 translate-x-0',
      )}
    >
      <SidebarToggle isOpen={sidebar?.isOpen} setIsOpen={sidebar?.setIsOpen} />
      <div className="relative flex h-full flex-col overflow-y-auto px-3 py-4 shadow-md dark:shadow-zinc-800">
        <Button
          className={cn(
            'mb-1 transition-transform duration-300 ease-in-out',
            sidebar?.isOpen === false ? 'translate-x-1' : 'translate-x-0',
          )}
          variant="link"
          asChild
        >
          <Link href="/dashboard" className="flex items-center gap-2">
            <Image
              src={Logo}  // Use the Image component to render the logo
              alt="BARK Protocol Logo"
              width={32}   // Adjust width as needed
              height={32}  // Adjust height as needed
              className="mr-2"
            />
            <PanelsTopLeft className="mr-1 h-6 w-6" />
            <h1
              className={cn(
                'whitespace-nowrap text-lg font-bold transition-transform duration-300 ease-in-out',
                sidebar?.isOpen === false
                  ? 'hidden -translate-x-96 opacity-0'
                  : 'opacity-100',
              )}
            >
              BARK Protocol
            </h1>
          </Link>
        </Button>
        <Menu isOpen={sidebar?.isOpen} />
      </div>
    </aside>
  );
}
