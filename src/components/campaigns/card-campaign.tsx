'use client'

import React from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { formatNumber } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { CalendarIcon, UsersIcon, DollarSignIcon } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

export interface CardCampaignProps {
  imageLink: string
  title: string
  raisedSOL: number
  raisedUSDC: number
  goalSOL: number
  goalUSDC: number
  pdaAddress: string
  endDate: Date
  backers: number
  category: string
  currency: 'SOL' | 'USDC'
}

// Helper function to format currency
const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

export const CardCampaign: React.FC<CardCampaignProps> = ({
  imageLink,
  title,
  raisedSOL,
  raisedUSDC,
  goalSOL,
  goalUSDC,
  pdaAddress,
  endDate,
  backers,
  category,
  currency,
}) => {
  const pathname = usePathname()
  const raised = currency === 'SOL' ? raisedSOL : raisedUSDC
  const goal = currency === 'SOL' ? goalSOL : goalUSDC
  const raisedPercent = Math.floor((raised / goal) * 100)
  const daysLeft = Math.ceil((endDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24))

  const formatAmount = (amount: number) => {
    return currency === 'SOL' ? formatNumber(amount) : formatCurrency(amount)
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <Link
        href={`/${pathname.includes('/dashboard') ? 'dashboard/' : ''}campaigns/${pdaAddress}`}
        className="block"
      >
        <div className="relative h-[200px] w-full overflow-hidden">
          <Image
            src={imageLink}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-all duration-300 hover:scale-110"
          />
          <Badge className="absolute top-2 right-2">{category}</Badge>
        </div>
        <CardContent className="p-4">
          <h3 className="mb-2 text-lg font-semibold line-clamp-2">{title}</h3>
          <Progress 
            value={raisedPercent} 
            className="mb-2"
            aria-label={`${raisedPercent}% of goal raised`}
          />
          <div className="flex items-center justify-between text-sm">
            <div>
              <p className="font-semibold">{formatAmount(raised)} {currency}</p>
              <p className="text-muted-foreground">raised of {formatAmount(goal)} {currency}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">{raisedPercent}%</p>
              <p className="text-muted-foreground">funded</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t p-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <CalendarIcon className="mr-1 h-4 w-4" aria-hidden="true" />
            <span>{daysLeft > 0 ? `${daysLeft} days left` : 'Ended'}</span>
          </div>
          <div className="flex items-center">
            <UsersIcon className="mr-1 h-4 w-4" aria-hidden="true" />
            <span>{backers} backers</span>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="flex items-center" aria-label="View both SOL and USDC amounts">
                  <DollarSignIcon className="h-4 w-4" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>SOL: {formatNumber(raisedSOL)} / {formatNumber(goalSOL)}</p>
                <p>USDC: {formatCurrency(raisedUSDC)} / {formatCurrency(goalUSDC)}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardFooter>
      </Link>
    </Card>
  )
}