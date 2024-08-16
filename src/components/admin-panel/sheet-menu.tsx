import Link from 'next/link';
import { MenuIcon, PanelsTopLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Menu } from '@/components/admin-panel/menu';
import { Sheet, SheetHeader, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import { ModeToggle } from '@/components';
import { SelectNetwork } from '@/components/admin-panel/select-network';

export function SheetMenu() {
  const pathName = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="lg:hidden h-8"
          variant="outline"
          size="icon"
          aria-label="Open menu"
        >
          <MenuIcon size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex h-full flex-col px-3 sm:w-72" side="left">
        <SheetHeader>
          <Button
            className="flex items-center gap-2 pb-2 pt-1"
            variant="link"
            asChild
            aria-label="BARK Dashboard"
          >
            <Link href="/dashboard">
              <PanelsTopLeft className="h-6 w-6" />
              <h1 className="text-lg font-bold">BARK</h1>
            </Link>
          </Button>
        </SheetHeader>
        {/* Conditional rendering improved for clarity */}
        {pathName.includes('/dashboard') && <Menu isOpen />}
        <div className="grow"></div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <SelectNetwork />
        </div>
      </SheetContent>
    </Sheet>
  );
}
