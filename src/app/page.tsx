import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { FaTwitter, FaMedium, FaDiscord, FaTelegram, FaGithub } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm dark:bg-black/70">
        <div className="container flex h-16 items-center">
          <Link
            href="/"
            className="flex items-center justify-start transition-opacity duration-300 hover:opacity-90"
            aria-label="Homepage"
          >
            <Image
              src="https://ucarecdn.com/0d346837-6d1a-42b8-a42c-2b134cc7ca3a/logolight3.svg"
              alt="Bark Crowdfunding Logo Dark"
              width={140}
              height={140}
              className="mr-3 dark:block hidden"
              priority
            />
            <Image
              src="https://ucarecdn.com/3bf6f263-b17a-4b38-8f85-32ae6c1a1d44/logodark.png"
              alt="Bark Crowdfunding Logo Light"
              width={140}
              height={140}
              className="mr-3 dark:hidden"
              priority
            />
            <span className="text-sm font-medium text-[#CBB5A7]">BETA</span>
            <span className="sr-only">Crowdfunding Platform</span>
          </Link>
          <nav className="ml-auto flex items-center gap-2">
            {[
              { href: "https://github.com/barkprotocol/crowdfunding-platform", icon: <FaGithub aria-label="GitHub" /> },
              { href: "https://twitter.com/bark_protocol", icon: <FaTwitter aria-label="Twitter" /> },
              { href: "https://medium.com/@barkprotocol", icon: <FaMedium aria-label="Medium" /> },
              { href: "https://discord.com/invite/discordinvite", icon: <FaDiscord aria-label="Discord" /> },
              { href: "https://t.me/bark_protocol", icon: <FaTelegram aria-label="Telegram" /> },
            ].map(({ href, icon }, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full bg-background shadow-sm transition-shadow duration-300 hover:shadow-lg focus:ring-2 focus:ring-primary"
                asChild
              >
                <Link href={href} aria-label={`Go to ${icon.props['aria-label']}`} className="flex items-center justify-center">
                  {icon}
                </Link>
              </Button>
            ))}
            <ModeToggle />
          </nav>
        </div>
      </header>
      <main className="flex-1 min-h-[calc(100vh-57px-97px)] bg-gradient-to-b from-background via-background/80 to-background/20 dark:from-black dark:to-black/70">
        <div className="container relative pb-10">
          <section className="mx-auto flex max-w-[980px] flex-col items-center gap-6 py-12 md:py-16 lg:py-24">
            <span className="mb-4 inline-block rounded-full bg-[#D0BFB4] px-4 py-2 text-sm font-medium text-white shadow-lg">
              Making a Difference
            </span>
            <h1 className="text-center text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
              Transform Communities with Decentralized Crowdfunding
            </h1>
            <h3 className="text-center text-xl font-semibold text-muted-foreground md:text-2xl lg:text-3xl">
              Drive Impact Through Charity, Disaster Relief, and Global Causes
            </h3>
            <p className="max-w-[750px] text-center text-lg font-light text-foreground">
              Harness the power of blockchain to support vital causes. Our platform ensures secure and transparent funding for initiatives that make a meaningful impact.
            </p>
            <div className="flex w-full items-center justify-center space-x-4 py-6">
              <Button
                variant="default"
                size="lg"
                className="transition-transform duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/dashboard/campaigns/new" className="flex items-center">
                  Create a Campaign
                  <ArrowRightIcon className="ml-2" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="transition-transform duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/campaigns">
                  Discover Campaigns
                </Link>
              </Button>
            </div>
            <div className="mt-6 flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Powered by</span>
              <Image
                src="https://ucarecdn.com/790704d5-cd34-4542-83fc-2fcbb667ee25/solanalight.png"
                alt="Solana Logo Light"
                width={110}
                height={40}
                className="ml-2 dark:hidden"
                priority
              />
              <Image
                src="https://ucarecdn.com/790704d5-cd34-4542-83fc-2fcbb667ee25/solanadark.png"
                alt="Solana Logo Dark"
                width={110}
                height={40}
                className="ml-2 hidden dark:block"
                priority
              />
            </div>
          </section>
          <div className="relative flex w-full justify-center">
            <Image
              src="/demo-light-min.png"
              width={1080}
              height={608}
              alt="Platform Demo"
              className="rounded-xl border shadow-lg dark:hidden"
              priority
            />
            <Image
              src="/demo-dark-min.png"
              width={1080}
              height={608}
              alt="Platform Demo Dark"
              className="hidden rounded-xl border border-zinc-600 shadow-lg dark:block dark:shadow-gray-500/5"
              priority
            />
            <Image
              src="/demo-mobile-light-min.png"
              width={228}
              height={494}
              alt="Mobile Demo"
              className="absolute bottom-0 right-0 hidden rounded-xl border dark:hidden lg:block"
              priority
            />
            <Image
              src="/demo-mobile-dark-min.png"
              width={228}
              height={494}
              alt="Mobile Demo Dark"
              className="absolute bottom-0 right-0 hidden rounded-xl border border-zinc-600 dark:lg:block"
              priority
            />
          </div>
        </div>
      </main>
      <footer className="border-t border-border/40 py-6 md:py-0 bg-background dark:bg-black">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:flex-row md:items-center">
            <span className="text-sm font-medium text-muted-foreground">Follow Us</span>
            <div className="flex items-center gap-4">
              {[
                { href: "https://github.com/barkprotocol/crowdfunding-platform", icon: <FaGithub aria-label="GitHub" /> },
                { href: "https://twitter.com/bark_protocol", icon: <FaTwitter aria-label="Twitter" /> },
                { href: "https://medium.com/@barkprotocol", icon: <FaMedium aria-label="Medium" /> },
                { href: "https://discord.com/invite/discordinvite", icon: <FaDiscord aria-label="Discord" /> },
                { href: "https://t.me/bark_protocol", icon: <FaTelegram aria-label="Telegram" /> },
              ].map(({ href, icon }, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-full bg-background shadow-sm transition-shadow duration-300 hover:shadow-lg focus:ring-2 focus:ring-primary"
                  asChild
                >
                  <Link href={href} aria-label={`Follow us on ${icon.props['aria-label']}`} className="flex items-center justify-center">
                    {icon}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground">
            &copy; 2024 BARK Protocol. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
