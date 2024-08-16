'use client';

import React, { useContext, useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CardCampaign } from '@/components/campaigns/card-campaign';
import { useWallet } from '@solana/wallet-adapter-react';
import { SessionContext } from '@/components/wallets/sessions';
import { CampaignData, IPFS_BASE_URL } from '@/types';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { ToastContainer, toast } from 'react-toastify';

export const CampaignList = () => {
  const [campaigns, setCampaigns] = useState<CampaignData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { program } = useContext(SessionContext);
  const { publicKey } = useWallet();

  const getCampaignList = React.useCallback(async () => {
    if (program && publicKey) {
      setLoading(true);
      try {
        const allCampaigns = await program.account.campaign.all();
        const newCampaigns: CampaignData[] = allCampaigns.map(
          ({ account: campaignAccount, publicKey: campaignPublicKey }) => ({
            orgName: campaignAccount.orgName,
            projectTitle: campaignAccount.title,
            description: campaignAccount.description,
            raised: campaignAccount.totalDonated.toNumber() / LAMPORTS_PER_SOL,
            goal: campaignAccount.goal.toNumber() / LAMPORTS_PER_SOL,
            imageLink: `${IPFS_BASE_URL}/${campaignAccount.projectImage}`,
            projectLink: campaignAccount.projectLink,
            pdaAddress: campaignPublicKey.toString(),
            startTimestamp: campaignAccount.startAt.toNumber() * 1000,
            endTimestamp: campaignAccount.endAt.toNumber() * 1000,
            donationCompleted: campaignAccount.donationCompleted,
            isClaimed: campaignAccount.claimed,
          }),
        );
        setCampaigns(newCampaigns);
      } catch (error) {
        setCampaigns([]);
        toast.error('Failed to fetch campaigns');
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  }, [program, publicKey]);

  useEffect(() => {
    getCampaignList();
  }, [getCampaignList]);

  return (
    <Card className="mt-6 min-h-[calc(100vh_-_220px)] rounded-lg border-none">
      <CardContent className="p-6">
        {loading ? (
          <div className="text-center">Loading campaigns...</div>
        ) : campaigns.length === 0 ? (
          <div className="text-center">No campaigns found.</div>
        ) : (
          <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 lg:grid-cols-3">
            {campaigns.map((campaign) => (
              <CardCampaign
                key={campaign.pdaAddress}
                imageLink={campaign.imageLink}
                title={campaign.projectTitle}
                raised={campaign.raised}
                goal={campaign.goal}
                pdaAddress={campaign.pdaAddress}
              />
            ))}
          </div>
        )}
      </CardContent>
      <ToastContainer />
    </Card>
  );
};
