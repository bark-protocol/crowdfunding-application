import React from 'react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-background/95 shadow-md backdrop-blur-sm supports-[backdrop-filter]:bg-background/60 dark:bg-black/[0.7] dark:shadow-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Your Company Name. All rights reserved.
            </p>
          </div>
          <nav aria-label="Footer Navigation">
            <ul className="flex space-x-4">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}