import Link from 'next/link';

export function Footer() {
  return (
    <div className="z-20 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-4 flex flex-col items-center md:mx-8 md:flex-row md:justify-between md:items-center h-14">
        <p className="text-center text-xs leading-loose text-muted-foreground md:text-sm">
          Built by{' '}
          <Link
            href="https://barkprotocol.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Kds
          </Link>
          . The source code is available on{' '}
          <Link
            href="https://github.com/barkprotocol/crowdfunding-platform"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </Link>
          .
        </p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <Link
            href="https://twitter.com/bark_protocol"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            Twitter
          </Link>
          <Link
            href="https://t.me/bark_protocol"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            Telegram
          </Link>
          <Link
            href="https://medium.com/@barkprotocol"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            Medium
          </Link>
        </div>
      </div>
    </div>
  );
}
