'use client'

import { Alert, AlertDescription } from '@/components/ui/alert'
import { ScrollArea } from '@/components/ui/scroll-area'
import { AlertCircle } from 'lucide-react'
import { useState } from 'react'
import { mockRequests } from './mock-data'
import { RequestCard } from './request-card'
import { AuthRequest } from './types'

export function HomeTab() {
  const [requests, setRequests] = useState<AuthRequest[]>(mockRequests)

  const handleApprove = async (id: string) => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setRequests((prevRequests) =>
      prevRequests.filter((request) => request.id !== id)
    )
  }

  const handleReject = async (id: string) => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setRequests((prevRequests) =>
      prevRequests.filter((request) => request.id !== id)
    )
  }

  if (requests.length === 0) {
    return (
      <div className="h-[calc(100dvh-76px)] flex items-center justify-center p-4">
        <Alert className="max-w-md">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription className="ml-2">
            No pending requests. When services request authorization,
            they&apos;ll appear here.
          </AlertDescription>
        </Alert>
      </div>
    )
  }

  return (
    <ScrollArea className="h-[calc(100dvh-76px)]">
      <div className="px-4 py-2">
        {requests.map((request) => (
          <RequestCard
            key={request.id}
            request={request}
            onApprove={handleApprove}
            onReject={handleReject}
          />
        ))}
      </div>
    </ScrollArea>
  )
}
