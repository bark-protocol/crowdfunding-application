import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useStore } from '@/hooks/use-store';
import { Button } from '@/components/ui/button';
import { Menu } from '@/components/admin-panel/menu';
import { useSidebarToggle } from '@/hooks/use-sidebar-toggle';
import { SidebarToggle } from '@/components/admin-panel/sidebar-toggle';

// BARK logo images
import LogoLight from '/public/logo-light.png'; // Light mode logo
import LogoDark from '/public/logo-dark.png'; // Dark mode logo

export function Sidebar() {
  // Get sidebar state and methods from the store
  const sidebar = useStore(useSidebarToggle, (state) => state);

  // If sidebar state is not available, render nothing
  if (!sidebar) return null;

  // Determine current theme
  const isDarkMode = typeof window !== 'undefined' ? document.documentElement.classList.contains('dark') : false;

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
              src={isDarkMode ? LogoDark : LogoLight}  // Conditionally set logo based on the theme
              alt="BARK Protocol Logo"
              width={100}   // Adjust width as needed
              height={100}  // Adjust height as needed
              className="mr-2"
            />
            <h7
              className={cn(
                'whitespace-nowrap text-lg font-medium transition-transform duration-200 ease-in-out',
                sidebar?.isOpen === false
                  ? 'hidden -translate-x-95 opacity-0'
                  : 'opacity-80',
              )}
            >
              {/* Sidebar title or content */}
              BETA
            </h7>
          </Link>
        </Button>
        <Menu isOpen={sidebar?.isOpen} />
      </div>
    </aside>
  );
}
