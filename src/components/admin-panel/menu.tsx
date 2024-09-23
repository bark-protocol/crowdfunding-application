'use client'

import React from 'react'
import Link from 'next/link'
import { Ellipsis } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { getMenuList } from '@/lib/menu-list'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { CollapseMenuButton } from '@/components/admin-panel/collapse-menu-button'
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from '@/components/ui/tooltip'

interface MenuProps {
  isOpen: boolean | undefined
}

export function Menu({ isOpen }: MenuProps) {
  const pathname = usePathname()
  const menuList = getMenuList(pathname)

  return (
    <ScrollArea className="[&>div>div[style]]:!block">
      <nav className="mt-8 h-full w-full" aria-label="Main Navigation">
        <ul className="flex flex-col items-start space-y-1 px-2 lg:min-h-[calc(100vh-32px-40px-32px)]">
          {menuList.map(({ groupLabel, menus }, groupIndex) => (
            <li className={cn('w-full', groupLabel ? 'pt-5' : '')} key={groupIndex}>
              {(isOpen && groupLabel) || isOpen === undefined ? (
                <h2 id={`group-${groupIndex}`} className="max-w-[248px] truncate px-4 pb-2 text-sm font-medium text-muted-foreground">
                  {groupLabel}
                </h2>
              ) : !isOpen && isOpen !== undefined && groupLabel ? (
                <TooltipProvider>
                  <Tooltip delayDuration={100}>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-full h-8"
                        aria-label={`Expand ${groupLabel}`}
                      >
                        <Ellipsis className="h-5 w-5" />
                        <span className="sr-only">{groupLabel}</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>{groupLabel}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <div className="pb-2" aria-hidden="true" />
              )}
              <ul aria-labelledby={`group-${groupIndex}`}>
                {menus.map(({ href, label, icon: Icon, active, submenus = [] }, menuIndex) => (
                  <li className="w-full" key={menuIndex}>
                    {submenus.length === 0 ? (
                      <TooltipProvider>
                        <Tooltip delayDuration={100}>
                          <TooltipTrigger asChild>
                            <Button
                              variant={active ? 'secondary' : 'ghost'}
                              className="mb-1 h-10 w-full justify-start"
                              asChild
                            >
                              <Link href={href} aria-current={active ? 'page' : undefined}>
                                <span className={cn('flex items-center', isOpen === false ? '' : 'mr-4')}>
                                  <Icon size={18} aria-hidden="true" />
                                  <span className={cn(
                                    'ml-4 max-w-[200px] truncate transition-all duration-200',
                                    isOpen === false ? 'w-0 opacity-0' : 'w-auto opacity-100'
                                  )}>
                                    {label}
                                  </span>
                                </span>
                                {isOpen === false && <span className="sr-only">{label}</span>}
                              </Link>
                            </Button>
                          </TooltipTrigger>
                          {isOpen === false && (
                            <TooltipContent side="right">
                              {label}
                            </TooltipContent>
                          )}
                        </Tooltip>
                      </TooltipProvider>
                    ) : (
                      <CollapseMenuButton
                        icon={Icon}
                        label={label}
                        active={active}
                        submenus={submenus}
                        isOpen={isOpen}
                      />
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </ScrollArea>
  )
}