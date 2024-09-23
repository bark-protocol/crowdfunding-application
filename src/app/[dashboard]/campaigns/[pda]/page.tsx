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
import { CampaignClient } from './CampaignClient'
import { truncateAddress } from '@/utils'
import { getCampaignData } from '@/lib/getCampaignData'
import { LoadingSpinner } from '@/components/spinner'

export default async function CampaignPage({ params }: { params: { pda: string } }) {
  const campaignData = await getCampaignData(params.pda)

  return (
    <ContentLayout title={`Campaign: ${truncateAddress(params.pda)}`}>
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
      <Suspense fallback={<LoadingSpinner />}>
        <CampaignClient initialCampaignData={campaignData} pda={params.pda} />
      </Suspense>
    </ContentLayout>
  )
}