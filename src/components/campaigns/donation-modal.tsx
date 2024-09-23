'use client'

import React, { useState } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { PublicKey } from '@solana/web3.js'
import { toast } from 'react-hot-toast'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { useSession } from '@/contexts/SessionContext'
import { donate } from '@/services/programs'

// Define the formatNumber function here since it's not exported from utils
const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num)
}

interface DonationModalProps {
  pdaAddress: string
  startTimestamp: number
  endTimestamp: number
  raisedPercent: number
  handleUpdateCampaign: () => Promise<void>
  campaignName: string
  goalAmount: number
}

export function DonationModal({
  pdaAddress,
  startTimestamp,
  endTimestamp,
  raisedPercent,
  handleUpdateCampaign,
  campaignName,
  goalAmount,
}: DonationModalProps) {
  const [amount, setAmount] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { publicKey } = useWallet()
  const { program } = useSession()

  const handleDonate = async () => {
    if (!program || !publicKey) {
      toast.error('Please connect your wallet')
      return
    }

    setIsLoading(true)
    try {
      const campaign = new PublicKey(pdaAddress)
      await donate(program, campaign, publicKey, parseFloat(amount))
      toast.success('Donation successful!')
      await handleUpdateCampaign()
      setIsOpen(false)
      setAmount('')
    } catch (error: any) {
      toast.error(error.message || 'An error occurred while processing your donation')
    } finally {
      setIsLoading(false)
    }
  }

  const currentTime = new Date().getTime()
  const isActive = currentTime >= startTimestamp && currentTime <= endTimestamp && raisedPercent < 100

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button disabled={!isActive}>
          {isActive ? 'Donate' : 'Campaign Inactive'}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Donate to {campaignName}</DialogTitle>
          <DialogDescription>
            Support this campaign by making a donation. Every contribution counts!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="amount" className="text-right">
              Amount (SOL)
            </Label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="col-span-3"
              placeholder="Enter donation amount"
              min="0"
              step="0.01"
              aria-describedby="amount-description"
            />
          </div>
          <p id="amount-description" className="text-sm text-muted-foreground">
            Campaign Goal: {formatNumber(goalAmount)} SOL
          </p>
        </div>
        <DialogFooter>
          <Button onClick={handleDonate} disabled={isLoading || !amount || parseFloat(amount) <= 0}>
            {isLoading ? 'Processing...' : 'Confirm Donation'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}