import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from 'lucide-react'

export function Breadcrumb() {
  const pathname = usePathname()
  const pathSegments = pathname.split('/').filter(Boolean)

  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
            Home
          </Link>
        </li>
        {pathSegments.map((segment, index) => (
          <React.Fragment key={segment}>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <li>
              <Link
                href={`/${pathSegments.slice(0, index + 1).join('/')}`}
                className={`capitalize ${
                  index === pathSegments.length - 1
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground hover:text-primary transition-colors'
                }`}
              >
                {segment}
              </Link>
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  )
}