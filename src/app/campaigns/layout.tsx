import React from 'react';
import CampaignLayout from '@/components/campaigns/campaign-layout';

interface CampaignsLayoutProps {
  children: React.ReactNode;
}

export default function CampaignsLayout({ children }: CampaignsLayoutProps) {
  return <CampaignLayout>{children}</CampaignLayout>;
}
