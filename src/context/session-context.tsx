'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Program, AnchorProvider } from '@coral-xyz/anchor';
import * as anchor from '@coral-xyz/anchor';
import { clusterApiUrl, Connection } from '@solana/web3.js';
import { toast } from 'react-hot-toast';
import { NetworkName, SolanaNetworkDictionary } from '@/types';
import { IDL, CrowdfundingProgram, getProgamId } from '@/programs/crowdfunding';
import { SessionContextType } from '@/components/wallets/sessions';

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [selectedNetwork, setSelectedNetwork] = useState<NetworkName>(NetworkName.Devnet);
  const [program, setProgram] = useState<Program<CrowdfundingProgram> | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { wallet } = useWallet();

  useEffect(() => {
    async function initializeProgram() {
      if (!wallet) {
        setProgram(null);
        return;
      }

      setIsLoading(true);
      try {
        const connection = new Connection(
          clusterApiUrl(SolanaNetworkDictionary[selectedNetwork]),
          'confirmed'
        );
        const provider = new AnchorProvider(connection, wallet, {
          commitment: 'confirmed',
        });
        anchor.setProvider(provider);

        const programId = getProgamId(selectedNetwork);
        const newProgram = new Program(IDL, programId, provider) as Program<CrowdfundingProgram>;
        setProgram(newProgram);
      } catch (error) {
        console.error('Failed to initialize program:', error);
        toast.error('Failed to connect to the network. Please try again.');
        setProgram(null);
      } finally {
        setIsLoading(false);
      }
    }

    initializeProgram();
  }, [selectedNetwork, wallet]);

  return (
    <SessionContext.Provider
      value={{
        selectedNetwork,
        program,
        setSelectedNetwork,
        isLoading,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export function useSession(): SessionContextType {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return context;
}