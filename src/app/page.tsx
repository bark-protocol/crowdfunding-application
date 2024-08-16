import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { FaTwitter, FaMedium, FaDiscord, FaTelegram, FaGithub } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-[50] w-full border-b border-border/40 bg-background/95 backdrop-blur-sm dark:bg-black/[0.6]">
        <div className="container flex h-16 items-center">
          <Link
            href="/"
            className="flex items-center justify-start transition-opacity duration-300 hover:opacity-85"
          >
            <Image
              src="/bark-icon.png"
              alt="Crowdfunding Logo"
              width={48}
              height={48}
              className="mr-3"
            />
            <span className="text-xl font-bold text-primary">BARK</span>
            <span className="text-sm font-medium" style={{ color: '#CBB5A7' }}>
               Crowdfunding
            </span>
            <span className="sr-only">Crowdfunding Platform</span>
          </Link>
          <nav className="ml-auto flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full bg-background shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-lg focus:ring-2 focus:ring-primary"
              asChild
            >
              <Link href="https://github.com/barkprotocol/crowdfunding-platform">
                <FaGithub className="h-[1.4rem] w-[1.4rem]" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full bg-background shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-lg focus:ring-2 focus:ring-primary"
              asChild
            >
              <Link href="https://twitter.com/bark_protocol">
                <FaTwitter className="h-[1.4rem] w-[1.4rem]" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full bg-background shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-lg focus:ring-2 focus:ring-primary"
              asChild
            >
              <Link href="https://medium.com/@barkprotocol">
                <FaMedium className="h-[1.4rem] w-[1.4rem]" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full bg-background shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-lg focus:ring-2 focus:ring-primary"
              asChild
            >
              <Link href="https://discord.com/invite/discordinvite">
                <FaDiscord className="h-[1.4rem] w-[1.4rem]" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full bg-background shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-lg focus:ring-2 focus:ring-primary"
              asChild
            >
              <Link href="https://t.me/bark_protocol">
                <FaTelegram className="h-[1.4rem] w-[1.4rem]" />
              </Link>
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </header>
      <main className="min-h-[calc(100vh-57px-97px)] flex-1">
        <div className="container relative pb-10">
          <section className="mx-auto flex max-w-[980px] flex-col items-center gap-4 py-12 md:py-16 lg:py-24">
            <span className="mb-4 inline-block rounded-full bg-[#D0BFB4] px-4 py-1 text-sm font-medium text-white">
              Empowering Change
            </span>
            <h1 className="text-center text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
              Empower Communities with Decentralized Crowdfunding
            </h1>
            <h3 className="text-center text-2xl font-semibold text-muted-foreground md:text-3xl lg:text-4xl">
              Support Charity Aid, Disaster Relief, and Global Donations
            </h3>
            <p className="max-w-[750px] text-center text-lg font-light text-foreground">
              Leverage the power of the Solana blockchain to make a difference. Our platform is designed to securely and transparently fund causes that matter, from disaster relief to charitable initiatives.
            </p>
            <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-6">
              <Button
                variant="default"
                size="lg"
                className="transition-transform duration-300 ease-in-out transform hover:scale-105"
                asChild
              >
                <Link href="/dashboard/campaigns/new">
                  Start a Campaign
                  <ArrowRightIcon className="ml-2" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="transition-transform duration-300 ease-in-out transform hover:scale-105"
                asChild
              >
                <Link href="/campaigns">
                  Explore Campaigns
                </Link>
              </Button>
            </div>
            <div className="mt-6 flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Powered by</span>
              <Image
                src="/solana-horizontal-white@2x.png"
                alt="Solana Logo"
                width={150}
                height={40}
                className="ml-2 dark:hidden"
              />
              <Image
                src="/solana-horizontal-dark@2x.png"
                alt="Solana Logo"
                width={150}
                height={40}
                className="ml-2 hidden dark:block"
              />
            </div>
          </section>
          <div className="relative flex w-full justify-center">
            <Image
              src="/demo-light-min.png"
              width={1080}
              height={608}
              alt="Platform Demo"
              priority
              className="rounded-xl border shadow-lg dark:hidden"
            />
            <Image
              src="/demo-dark-min.png"
              width={1080}
              height={608}
              alt="Platform Demo Dark"
              priority
              className="hidden rounded-xl border border-zinc-600 shadow-lg dark:block dark:shadow-gray-500/5"
            />
            <Image
              src="/demo-mobile-light-min.png"
              width={228}
              height={494}
              alt="Mobile Demo"
              className="absolute bottom-0 right-0 hidden rounded-xl border dark:hidden lg:block"
            />
            <Image
              src="/demo-mobile-dark-min.png"
              width={228}
              height={494}
              alt="Mobile Demo Dark"
              className="absolute bottom-0 right-0 hidden rounded-xl border border-zinc-600 dark:lg:block"
            />
          </div>
        </div>
      </main>
      <footer className="border-t border-border/40 py-6 md:py-0">
        <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground">
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
