import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { WalletContextProvider } from '@/components/wallets/WalletContextProvider';
import { AuthContext } from '@/components/wallets/AuthContext';

import 'react-toastify/dist/ReactToastify.min.css';
import './globals.css';

import { ThemeProvider } from '@/providers/theme-provider';
import { ToastContainer } from 'react-toastify';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.APP_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : `http://localhost:${process.env.PORT || 3000}`)
  ),
  title: 'BARK',
  description: 'A crowdfunding dapp built on Solana',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ToastContainer pauseOnHover theme="colored" />
          <WalletContextProvider>
            <AuthContext>
              {children}
            </AuthContext>
          </WalletContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
