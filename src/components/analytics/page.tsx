'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DateRangePicker } from "@/components/ui/date-range-picker"
import { LineChart, BarChart } from "@/components/ui/charts"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { toast } from 'react-hot-toast'

interface AnalyticsData {
  totalDonations: number
  campaignsCreated: number
  donorsEngaged: number
  dailyDonations: { date: string; amount: number }[]
  campaignPerformance: { name: string; donations: number }[]
}

// Mock data fetching function - replace with actual API call
const fetchAnalyticsData = async (startDate: Date, endDate: Date): Promise<AnalyticsData> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  return {
    totalDonations: 15000,
    campaignsCreated: 50,
    donorsEngaged: 500,
    dailyDonations: [
      { date: '2023-01-01', amount: 1000 },
      { date: '2023-01-02', amount: 1500 },
      { date: '2023-01-03', amount: 1200 },
      { date: '2023-01-04', amount: 1800 },
      { date: '2023-01-05', amount: 2000 },
    ],
    campaignPerformance: [
      { name: 'Campaign A', donations: 5000 },
      { name: 'Campaign B', donations: 3500 },
      { name: 'Campaign C', donations: 2500 },
      { name: 'Campaign D', donations: 2000 },
      { name: 'Campaign E', donations: 2000 },
    ],
  }
}

export default function AnalyticsPage() {
  const [dateRange, setDateRange] = useState<{ from: Date; to: Date }>({
    from: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
    to: new Date(),
  })
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const loadAnalyticsData = async () => {
    setIsLoading(true)
    try {
      const data = await fetchAnalyticsData(dateRange.from, dateRange.to)
      setAnalyticsData(data)
    } catch (err) {
      toast.error('Failed to load analytics data. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadAnalyticsData()
  }, [dateRange])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Analytics Dashboard</h1>
      <DateRangePicker
        dateRange={dateRange}
        onDateRangeChange={setDateRange}
        className="mb-6"
      />
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      ) : analyticsData ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Total Donations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">${analyticsData.totalDonations.toLocaleString()}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Campaigns Created</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{analyticsData.campaignsCreated}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Donors Engaged</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{analyticsData.donorsEngaged}</p>
            </CardContent>
          </Card>
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Daily Donations</CardTitle>
            </CardHeader>
            <CardContent>
              <LineChart
                data={analyticsData.dailyDonations}
                xAxis="date"
                yAxis="amount"
                height={300}
              />
            </CardContent>
          </Card>
          <Card className="md:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle>Top Campaigns</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart
                data={analyticsData.campaignPerformance}
                xAxis="name"
                yAxis="donations"
                height={300}
              />
            </CardContent>
          </Card>
        </div>
      ) : (
        <p>No data available. Please try adjusting the date range.</p>
      )}
      <Button onClick={loadAnalyticsData} className="mt-6">
        Refresh Data
      </Button>
    </div>
  )
}