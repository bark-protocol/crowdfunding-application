'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { CampaignDetail } from '@/components/CampaignDetail'
import { CampaignData, IPFS_BASE_URL } from '@/types'
import { useWallet } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL } from '@solana/web3.js'
import { useProgram } from '@/hooks/useProgram'

interface CampaignClientProps {
  initialCampaignData: CampaignData | null
  pda: string
}

export function CampaignClient({ initialCampaignData, pda }: CampaignClientProps) {
  const [campaign, setCampaign] = useState<CampaignData | null>(initialCampaignData)
  const { program } = useProgram()
  const { publicKey } = useWallet()

  const fetchCampaign = async () => {
    if (program && publicKey) {
      try {
        const campaignData = await program.account.campaign.fetch(pda)

        const newCampaign: CampaignData = {
          orgName: campaignData.orgName,
          projectTitle: campaignData.title,
          description: campaignData.description,
          raised: campaignData.totalDonated.toNumber() / LAMPORTS_PER_SOL,
          goal: campaignData.goal.toNumber() / LAMPORTS_PER_SOL,
          imageLink: `${IPFS_BASE_URL}/${campaignData.projectImage}`,
          projectLink: campaignData.projectLink,
          pdaAddress: pda,
          startTimestamp: campaignData.startAt.toNumber() * 1000,
          endTimestamp: campaignData.endAt.toNumber() * 1000,
          donationCompleted: campaignData.donationCompleted,
          isClaimed: campaignData.claimed,
        }
        
        setCampaign(newCampaign)
      } catch (error) {
        console.error('Failed to fetch campaign data:', error)
        setCampaign(null)
      }
    }
  }

  useEffect(() => {
    if (!initialCampaignData) {
      fetchCampaign()
    }
  }, [program, publicKey, initialCampaignData])

  return (
    <Card className="mt-6 min-h-[calc(100vh_-_220px)] rounded-lg border-none">
      <CardContent className="p-6">
        {campaign ? (
          <CampaignDetail
            campaign={campaign}
            handleUpdateCampaign={fetchCampaign}
          />
        ) : (
          <p role="alert" className="text-center">Loading campaign data...</p>
        )}
      </CardContent>
    </Card>
  )
}