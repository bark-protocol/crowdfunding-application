'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useWalletMultiButton } from '@solana/wallet-adapter-base-ui';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { useSession } from '@/components/wallets/sessions';
import { getAccountBalance } from '@/services/web3';
import { Button } from '@/components/ui/button';
import { toast } from 'react-hot-toast';

type BaseWalletMultiButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  labels: Omit<
    {
      [TButtonState in ReturnType<typeof useWalletMultiButton>['buttonState']]: string;
    },
    'connected' | 'disconnecting'
  > & {
    'copy-address': string;
    copied: string;
    'change-wallet': string;
    disconnect: string;
  };
};

export function BaseWalletMultiButton({ children, labels, ...props }: BaseWalletMultiButtonProps) {
  const { setVisible: setModalVisible } = useWalletModal();
  const {
    buttonState,
    onConnect,
    onDisconnect,
    publicKey,
    walletIcon,
    walletName,
  } = useWalletMultiButton({
    onSelectWallet() {
      setModalVisible(true);
    },
  });
  const { selectedNetwork } = useSession();
  const [walletBalance, setWalletBalance] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const node = ref.current;
      if (!node || node.contains(event.target as Node)) return;
      setMenuOpen(false);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, []);

  useEffect(() => {
    const updateWalletBalance = async () => {
      if (publicKey) {
        try {
          const newBalance = await getAccountBalance(publicKey.toString(), selectedNetwork);
          setWalletBalance(Number(newBalance.toFixed(3)));
        } catch (error) {
          console.error('Error fetching wallet balance:', error);
          toast.error('Failed to fetch wallet balance');
          setWalletBalance(null);
        }
      } else {
        setWalletBalance(null);
      }
    };

    updateWalletBalance();
  }, [publicKey, selectedNetwork]);

  const content = React.useMemo(() => {
    if (children) {
      return children;
    } else if (publicKey) {
      const base58 = publicKey.toBase58();
      return base58.slice(0, 4) + '..' + base58.slice(-4);
    } else if (buttonState === 'connecting' || buttonState === 'has-wallet') {
      return labels[buttonState];
    } else {
      return labels['no-wallet'];
    }
  }, [buttonState, children, labels, publicKey]);

  return (
    <div className="wallet-adapter-dropdown">
      <Button
        {...props}
        className="flex h-9 items-center rounded-full px-4 py-2"
        aria-expanded={menuOpen}
        onClick={() => {
          switch (buttonState) {
            case 'no-wallet':
              setModalVisible(true);
              break;
            case 'has-wallet':
              if (onConnect) {
                onConnect();
              }
              break;
            case 'connected':
              setMenuOpen(true);
              break;
          }
        }}
      >
        {walletIcon && <img src={walletIcon} alt={`${walletName} icon`} className="mr-2 h-5 w-5" />}
        <span className="flex items-center gap-2">
          {publicKey && (
            <span className="hidden sm:inline">{walletBalance !== null ? `${walletBalance} SOL` : 'Loading...'}</span>
          )}
          {content}
        </span>
      </Button>
      {menuOpen && (
        <ul
          ref={ref}
          className="wallet-adapter-dropdown-list"
          role="menu"
          aria-label="Wallet options"
        >
          {publicKey && (
            <li role="menuitem">
              <Button
                className="wallet-adapter-dropdown-list-item"
                onClick={async () => {
                  await navigator.clipboard.writeText(publicKey.toBase58());
                  setCopied(true);
                  setTimeout(() => setCopied(false), 400);
                }}
              >
                {copied ? labels['copied'] : labels['copy-address']}
              </Button>
            </li>
          )}
          <li role="menuitem">
            <Button
              className="wallet-adapter-dropdown-list-item"
              onClick={() => {
                setModalVisible(true);
                setMenuOpen(false);
              }}
            >
              {labels['change-wallet']}
            </Button>
          </li>
          {onDisconnect && (
            <li role="menuitem">
              <Button
                className="wallet-adapter-dropdown-list-item"
                onClick={() => {
                  onDisconnect();
                  setMenuOpen(false);
                }}
              >
                {labels['disconnect']}
              </Button>
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

const LABELS = {
  'change-wallet': 'Change wallet',
  connecting: 'Connecting ...',
  'copy-address': 'Copy address',
  copied: 'Copied',
  disconnect: 'Disconnect',
  'has-wallet': 'Connect',
  'no-wallet': 'Connect Wallet',
} as const;

export function WalletConnectButton() {
  return <BaseWalletMultiButton labels={LABELS} />;
}