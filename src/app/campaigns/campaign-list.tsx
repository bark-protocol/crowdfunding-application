'use client';

import React, { useContext, useEffect, useState, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CardCampaign } from '@/components/campaigns/card-campaign';
import { SessionContext } from '@/components/wallets/sessions';
import { CampaignData } from '@/types';
import { fetchCampaignList } from '@/programs/crowdfunding';

export const CampaignList = () => {
  const [campaigns, setCampaigns] = useState<CampaignData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { selectedNetwork } = useContext(SessionContext);

  const getCampaignList = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const newCampaigns = await fetchCampaignList(selectedNetwork);
      setCampaigns(newCampaigns);
    } catch (error) {
      setError('Failed to fetch campaigns. Please try again.');
      setCampaigns([]);
    } finally {
      setLoading(false);
    }
  }, [selectedNetwork]);

  useEffect(() => {
    getCampaignList();
  }, [getCampaignList]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <Card className="mt-6 min-h-[calc(100vh_-_220px)] rounded-lg border-none">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 lg:grid-cols-3">
          {campaigns.length === 0 ? (
            <div>No campaigns available.</div>
          ) : (
            campaigns.map((campaign, index) => (
              <CardCampaign
                key={index}
                imageLink={campaign.imageLink}
                title={campaign.projectTitle}
                raised={campaign.raised}
                goal={campaign.goal}
                pdaAddress={campaign.pdaAddress}
              />
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};
