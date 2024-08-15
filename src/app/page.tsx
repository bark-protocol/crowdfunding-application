import Link from 'next/link';
import Image from 'next/image';
import { PanelsTopLeft } from 'lucide-react';
import { ArrowRightIcon, GitHubLogoIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-[50] w-full border-b border-border/40 bg-background/95 backdrop-blur-sm dark:bg-black/[0.6]">
        <div className="container flex h-14 items-center">
          <Link
            href="/"
            className="flex items-center justify-start transition-opacity duration-300 hover:opacity-85"
          >
            <PanelsTopLeft className="mr-3 h-6 w-6" />
            <span className="font-bold">Crowdfunding Platform</span>
            <span className="sr-only">Crowdfunding Platform</span>
          </Link>
          <nav className="ml-auto flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full bg-background"
              asChild
            >
              <Link href="https://github.com/barkprotocol/crowdfunding-platform">
                <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full bg-background"
              asChild
            >
              <Link href="https://twitter.com/bark_protocol">
                <Image
                  src="/twitter-icon.svg"
                  alt="Twitter"
                  width={20}
                  height={20}
                />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full bg-background"
              asChild
            >
              <Link href="https://medium.com/@barkprotocol">
                <Image
                  src="/medium-icon.svg"
                  alt="Medium"
                  width={20}
                  height={20}
                />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full bg-background"
              asChild
            >
              <Link href="https://discord.com/invite/discordinvite">
                <Image
                  src="/discord-icon.svg"
                  alt="Discord"
                  width={20}
                  height={20}
                />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full bg-background"
              asChild
            >
              <Link href="https://t.me/bark_protocol">
                <Image
                  src="/telegram-icon.svg"
                  alt="Telegram"
                  width={20}
                  height={20}
                />
              </Link>
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </header>
      <main className="min-h-[calc(100vh-57px-97px)] flex-1">
        <div className="container relative pb-10">
          <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-6">
            <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
              Empower Your Vision with Decentralized Crowdfunding
            </h1>
            <h2 className="text-center text-2xl font-semibold text-muted-foreground md:text-3xl lg:text-4xl">
              Unlock the Potential of Blockchain to Fund Your Projects
            </h2>
            <p className="max-w-[750px] text-center text-lg font-light text-foreground">
              Our platform leverages the power of the Solana blockchain to provide secure, transparent, and efficient crowdfunding solutions. Whether you're a creator, innovator, or entrepreneur, bring your ideas to life with decentralized tools and resources.
            </p>
            <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-6">
              <Button variant="default" asChild>
                <Link href="/dashboard/campaigns/new">
                  Start a Campaign
                  <ArrowRightIcon className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/campaigns">
                  Explore Campaigns
                </Link>
              </Button>
            </div>
          </section>
          <div className="relative flex w-full justify-center">
            <Image
              src="/demo-light-min.png"
              width={1080}
              height={608}
              alt="demo"
              priority
              className="rounded-xl border shadow-sm dark:hidden"
            />
            <Image
              src="/demo-dark-min.png"
              width={1080}
              height={608}
              alt="demo-dark"
              priority
              className="hidden rounded-xl border border-zinc-600 shadow-sm dark:block dark:shadow-gray-500/5"
            />
            <Image
              src="/demo-mobile-light-min.png"
              width={228}
              height={494}
              alt="demo-mobile"
              className="absolute bottom-0 right-0 hidden rounded-xl border dark:hidden lg:block"
            />
            <Image
              src="/demo-mobile-dark-min.png"
              width={228}
              height={494}
              alt="demo-mobile"
              className="absolute bottom-0 right-0 hidden rounded-xl border border-zinc-600 dark:lg:block"
            />
          </div>
        </div>
      </main>
      <footer className="border-t border-border/40 py-6 md:py-0">
        <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
          <p className="text-balance text-center text-sm leading-loose text-muted-foreground">
            Visit our official website{' '}
            <Link
              href="https://barkprotocol.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Bark Protocol
            </Link>
            . The source code is available on{' '}
            <Link
              href="https://github.com/barkprotocol/crowdfunding"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </Link>
            . Stay connected with us on{' '}
            <Link
              href="https://twitter.com/bark_protocol"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Twitter
            </Link>{' '}
            and{' '}
            <Link
              href="https://medium.com/@barkprotocol"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Medium
            </Link>
            , join our community on{' '}
            <Link
              href="https://discord.com/invite/discordinvite"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Discord
            </Link>{' '}
            and{' '}
            <Link
              href="https://t.me/bark_protocol"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Telegram
            </Link>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}
