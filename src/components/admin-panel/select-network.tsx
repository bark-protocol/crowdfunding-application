'use client'

import React, { useContext, useEffect, useState } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { SessionContext } from '../wallets/sessions'
import { NetworkName } from '@/types'
import { useToast } from '@/hooks/use-toast'

export const SelectNetwork = () => {
  const { selectedNetwork, setSelectedNetwork } = useContext(SessionContext)
  const [isChanging, setIsChanging] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    // Reset the changing state after a short delay
    if (isChanging) {
      const timer = setTimeout(() => setIsChanging(false), 1000)
      return () => clearTimeout(timer)
    }
  }, [isChanging])

  const handleNetworkChange = (value: string) => {
    if (value in NetworkName) {
      setIsChanging(true)
      setSelectedNetwork(value as NetworkName)
      toast({
        title: 'Network Changed',
        description: `Switched to ${value} network`,
      })
    } else {
      console.error(`Invalid network name: ${value}`)
      toast({
        title: 'Error',
        description: 'Failed to switch network. Please try again.',
        variant: 'destructive',
      })
    }
  }

  return (
    <Select
      value={selectedNetwork}
      onValueChange={handleNetworkChange}
      disabled={isChanging}
    >
      <SelectTrigger className="w-[180px]" aria-label="Select Network">
        <SelectValue placeholder="Select Network" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select Network</SelectLabel>
          {Object.values(NetworkName).map((network) => (
            <SelectItem key={network} value={network}>
              {network}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}