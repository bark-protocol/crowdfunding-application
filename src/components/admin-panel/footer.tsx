import Link from 'next/link';
import Image from 'next/image'; // Import Image component from Next.js

export function Footer() {
  return (
    <footer className="z-20 w-full bg-background/95 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 py-8 flex flex-col items-center md:flex-row md:justify-between md:items-center">
        {/* Main Footer Text */}
        <p className="text-center text-xs leading-relaxed text-muted-foreground md:text-sm">
          Built by{' '}
          <Link
            href="https://barkprotocol.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline underline-offset-4"
          >
            BARK Protocol
          </Link>
          . The source code is available on{' '}
          <Link
            href="https://github.com/barkprotocol/crowdfunding-platform"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline underline-offset-4"
          >
            GitHub
          </Link>
          .
        </p>
        
        {/* Social Media and Links */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
          <span className="text-sm text-muted-foreground">Follow Us:</span>
          <Link
            href="https://twitter.com/bark_protocol"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Image
              src="/twitter-icon.svg"
              alt="Twitter"
              width={20} // Adjust size for smaller icons
              height={20}
              className="transition-transform duration-300 hover:scale-110"
            />
          </Link>
          <Link
            href="https://t.me/bark_protocol"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Image
              src="/telegram-icon.svg"
              alt="Telegram"
              width={20} // Adjust size for smaller icons
              height={20}
              className="transition-transform duration-300 hover:scale-110"
            />
          </Link>
          <Link
            href="https://medium.com/@barkprotocol"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Image
              src="/medium-icon.svg"
              alt="Medium"
              width={20} // Adjust size for smaller icons
              height={20}
              className="transition-transform duration-300 hover:scale-110"
            />
          </Link>
          <Link
            href="/terms-of-use"
            className="text-sm text-muted-foreground underline hover:text-primary transition-colors duration-300"
          >
            Terms of Use
          </Link>
        </div>
      </div>
      {/* Copyright Information */}
      <div className="bg-background/90 border-t border-border/30 py-4 mt-6 text-center text-sm text-muted-foreground">
        © 2024 BARK Protocol. All rights reserved.
      </div>
    </footer>
  );
}
