import { LucideIcon, SquarePen, LayoutGrid, Users, Settings, Bell, HelpCircle } from 'lucide-react';

export interface Submenu {
  href: string;
  label: string;
  active: boolean;
  icon?: LucideIcon;
}

export interface Menu {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
}

export interface Group {
  groupLabel: string;
  menus: Menu[];
}

export type UserRole = 'admin' | 'manager' | 'user';

// Function to check if a path is active
const isActive = (currentPath: string, menuPath: string): boolean => {
  if (menuPath === '/dashboard') {
    return currentPath === menuPath;
  }
  return currentPath.startsWith(menuPath);
};

// Function to update active states
const updateActiveStates = (groups: Group[], currentPath: string): Group[] => {
  return groups.map(group => ({
    ...group,
    menus: group.menus.map(menu => ({
      ...menu,
      active: isActive(currentPath, menu.href),
      submenus: menu.submenus?.map(submenu => ({
        ...submenu,
        active: currentPath === submenu.href
      }))
    }))
  }));
};

export function getMenuList(pathname: string): Group[] {
  const menuGroups: Group[] = [
    {
      groupLabel: 'Main',
      menus: [
        {
          href: '/dashboard',
          label: 'Overview',
          active: false,
          icon: LayoutGrid,
        },
        {
          href: '/dashboard/campaigns',
          label: 'Campaigns',
          active: false,
          icon: SquarePen,
          submenus: [
            {
              href: '/dashboard/campaigns',
              label: 'Your Campaigns',
              active: false,
            },
            {
              href: '/dashboard/campaigns/new',
              label: 'Create Campaign',
              active: false,
            },
          ],
        },
        {
          href: '/dashboard/users',
          label: 'Users',
          active: false,
          icon: Users,
        },
      ],
    },
    {
      groupLabel: 'System',
      menus: [
        {
          href: '/dashboard/settings',
          label: 'Settings',
          active: false,
          icon: Settings,
        },
        {
          href: '/dashboard/notifications',
          label: 'Notifications',
          active: false,
          icon: Bell,
        },
      ],
    },
    {
      groupLabel: 'Support',
      menus: [
        {
          href: '/dashboard/help',
          label: 'Help & Support',
          active: false,
          icon: HelpCircle,
        },
      ],
    },
  ];

  return updateActiveStates(menuGroups, pathname);
}

// Function to handle menu item clicks
export const handleMenuClick = (href: string, router: any): void => {
  router.push(href);
};

// Function to get breadcrumbs based on current path
export const getBreadcrumbs = (pathname: string): { label: string; href: string }[] => {
  const paths = pathname.split('/').filter(Boolean);
  return paths.map((path, index) => ({
    label: path.charAt(0).toUpperCase() + path.slice(1),
    href: '/' + paths.slice(0, index + 1).join('/')
  }));
};

// Function to filter menu items based on user role
export const filterMenuByRole = (menuGroups: Group[], userRole: UserRole): Group[] => {
  const roleAccessMap: Record<UserRole, string[]> = {
    admin: ['Overview', 'Campaigns', 'Users', 'Settings', 'Notifications', 'Help & Support'],
    manager: ['Overview', 'Campaigns', 'Users', 'Notifications', 'Help & Support'],
    user: ['Overview', 'Campaigns', 'Help & Support'],
  };

  const allowedMenus = roleAccessMap[userRole] || [];

  return menuGroups.map(group => ({
    ...group,
    menus: group.menus.filter(menu => allowedMenus.includes(menu.label))
  })).filter(group => group.menus.length > 0);
};

// Function to search menu items
export const searchMenuItems = (menuGroups: Group[], searchTerm: string): Group[] => {
  const lowercaseSearchTerm = searchTerm.toLowerCase();
  
  return menuGroups.map(group => ({
    ...group,
    menus: group.menus.filter(menu => 
      menu.label.toLowerCase().includes(lowercaseSearchTerm) ||
      menu.submenus?.some(submenu => submenu.label.toLowerCase().includes(lowercaseSearchTerm))
    )
  })).filter(group => group.menus.length > 0);
};

// Function to get flattened menu items for search functionality
export const getFlattenedMenuItems = (menuGroups: Group[]): (Menu | Submenu)[] => {
  return menuGroups.flatMap(group => 
    group.menus.flatMap(menu => 
      [menu, ...(menu.submenus || [])]
    )
  );
};