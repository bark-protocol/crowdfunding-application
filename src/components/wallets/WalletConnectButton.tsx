'use client';

import { useWalletMultiButton } from '@solana/wallet-adapter-base-ui';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { useEffect, useMemo, useRef, useState } from 'react';
import { getAccountBalance } from '@/services/web3';
import { useSession } from '@/contexts/session-context';
import { toast } from 'react-hot-toast';

type BaseWalletMultiButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  labels: Omit<
    {
      [TButtonState in ReturnType<
        typeof useWalletMultiButton
      >['buttonState']]: string;
    },
    'connected' | 'disconnecting'
  > & {
    'copy-address': string;
    copied: string;
    'change-wallet': string;
    disconnect: string;
  };
};

export function BaseWalletMultiButton({
  children,
  labels,
  ...props
}: BaseWalletMultiButtonProps) {
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

  const content = useMemo(() => {
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

  const updateWalletBalance = async () => {
    if (publicKey) {
      try {
        const newBalance = await getAccountBalance(
          publicKey.toString(),
          selectedNetwork,
        );
        setWalletBalance(Number(newBalance.toFixed(3)));
      } catch (error) {
        console.error('Failed to fetch wallet balance:', error);
        toast.error('Failed to fetch wallet balance');
        setWalletBalance(null);
      }
    }
  };

  useEffect(() => {
    updateWalletBalance();
  }, [publicKey, selectedNetwork]);

  return (
    <div className="wallet-adapter-dropdown">
      <button
        {...props}
        className="flex h-9 items-center rounded-full border-[2px] border-black px-4 py-2 shadow-sm dark:border-white"
        aria-expanded={menuOpen}
        style={{ pointerEvents: menuOpen ? 'none' : 'auto', ...props.style }}
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
        <span className="flex items-center gap-[5px]">
          {publicKey && (
            <span className="hidden sm:block">
              {walletBalance !== null ? `${walletBalance} SOL` : 'Loading...'}
            </span>
          )}
          {content}
        </span>
      </button>
      <ul
        aria-label="wallet options"
        className={`wallet-adapter-dropdown-list !bg-white dark:!bg-secondary ${menuOpen && 'wallet-adapter-dropdown-list-active'}`}
        ref={ref}
        role="menu"
      >
        {publicKey && (
          <li
            className="wallet-adapter-dropdown-list-item !text-primary hover:!bg-blue-400 dark:hover:!bg-blue-900"
            onClick={async () => {
              await navigator.clipboard.writeText(publicKey.toBase58());
              setCopied(true);
              setTimeout(() => setCopied(false), 400);
            }}
            role="menuitem"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                e.currentTarget.click();
              }
            }}
          >
            {copied ? labels['copied'] : labels['copy-address']}
          </li>
        )}
        <li
          className="wallet-adapter-dropdown-list-item !text-primary hover:!bg-blue-400 dark:hover:!bg-blue-900"
          onClick={() => {
            setModalVisible(true);
            setMenuOpen(false);
          }}
          role="menuitem"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              e.currentTarget.click();
            }
          }}
        >
          {labels['change-wallet']}
        </li>
        {onDisconnect && (
          <li
            className="wallet-adapter-dropdown-list-item !text-primary hover:!bg-blue-400 dark:hover:!bg-blue-900"
            onClick={() => {
              onDisconnect();
              setMenuOpen(false);
            }}
            role="menuitem"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                e.currentTarget.click();
              }
            }}
          >
            {labels['disconnect']}
          </li>
        )}
      </ul>
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