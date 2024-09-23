import Link from 'next/link'
import { Suspense } from 'react'
import { ContentLayout } from '@/components/admin-panel/content-layout'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { CampaignClient } from './campaign-client'
import { truncateAddress } from '@/utils'
import { getCampaignData } from '@/lib/get-campaign-data'
import { LoadingSpinner } from '@/components/spinner'
import { notFound } from 'next/navigation'

export default async function CampaignPage({ params }: { params: { pda: string } }) {
  let campaignData;
  try {
    campaignData = await getCampaignData(params.pda)
    if (!campaignData) {
      notFound()
    }
  } catch (error) {
    console.error('Error fetching campaign data:', error)
    notFound()
  }

  return (
    <ContentLayout title={`Campaign: ${truncateAddress(params.pda)}`}>
      <nav aria-label="Breadcrumb">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/dashboard/campaigns">Campaigns</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{truncateAddress(params.pda)}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </nav>
      <Suspense fallback={<LoadingSpinner aria-label="Loading campaign data" />}>
        <CampaignClient initialCampaignData={campaignData} pda={params.pda} />
      </Suspense>
    </ContentLayout>
  )
}

export async function generateMetadata({ params }: { params: { pda: string } }) {
  return {
    title: `Campaign: ${truncateAddress(params.pda)} | Dashboard`,
    description: `Details for campaign ${truncateAddress(params.pda)}`,
  }
}