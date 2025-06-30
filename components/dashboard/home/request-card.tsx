'use client'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Check, X } from 'lucide-react'
import { useState } from 'react'
import { AuthRequest } from './types'

interface RequestCardProps {
  request: AuthRequest
  onApprove: (id: string) => void
  onReject: (id: string) => void
}

export function RequestCard({
  request,
  onApprove,
  onReject,
}: RequestCardProps) {
  const [isApproveDialogOpen, setIsApproveDialogOpen] = useState(false)
  const [isRejectDialogOpen, setIsRejectDialogOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleApprove = async () => {
    setIsLoading(true)
    await onApprove(request.id)
    setIsLoading(false)
    setIsApproveDialogOpen(false)
  }

  const handleReject = async () => {
    setIsLoading(true)
    await onReject(request.id)
    setIsLoading(false)
    setIsRejectDialogOpen(false)
  }

  const timeAgo = (date: Date) => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)

    if (hours > 0) return `${hours} hour${hours === 1 ? '' : 's'} ago`
    if (minutes > 0) return `${minutes} minute${minutes === 1 ? '' : 's'} ago`
    return 'just now'
  }

  return (
    <>
      <Card className="mb-4 border-border/50 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8 bg-primary/10 border border-primary/20">
              <AvatarFallback className="bg-primary/10 text-primary font-semibold text-xs">
                {request.serviceIcon}
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-base text-foreground">
                {request.serviceName}
              </CardTitle>
              <CardDescription className="text-xs text-muted-foreground">
                {timeAgo(request.timestamp)}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pb-2">
          <div className="flex flex-col gap-1">
            <div className="text-sm font-medium text-foreground">
              {request.requestType}
            </div>
            {request.amount && (
              <div className="text-xl font-semibold text-primary">
                {request.amount.toFixed(2)} BHD
              </div>
            )}
            <p className="text-sm text-muted-foreground">
              {request.description}
            </p>
          </div>
        </CardContent>
        <CardFooter className="pt-2">
          <div className="flex gap-2 w-full">
            <Button
              variant="outline"
              className="flex-1 text-destructive border-destructive/30 hover:text-destructive-foreground hover:bg-destructive hover:border-destructive"
              onClick={() => setIsRejectDialogOpen(true)}
              disabled={isLoading}
            >
              <X className="mr-2 h-4 w-4" />
              Reject
            </Button>
            <Button
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 border-0"
              onClick={() => setIsApproveDialogOpen(true)}
              disabled={isLoading}
            >
              <Check className="mr-2 h-4 w-4" />
              Approve
            </Button>
          </div>
        </CardFooter>
      </Card>

      {/* Approve Dialog */}
      <Dialog open={isApproveDialogOpen} onOpenChange={setIsApproveDialogOpen}>
        <DialogContent className="border-border">
          <DialogHeader>
            <DialogTitle className="text-foreground">
              Approve Request
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Are you sure you want to approve this request from{' '}
              <span className="font-medium text-foreground">
                {request.serviceName}
              </span>
              ?
              {request.amount &&
                ` This will authorize a payment of ${request.amount.toFixed(2)} BHD.`}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsApproveDialogOpen(false)}
              disabled={isLoading}
              className="border-border"
            >
              Cancel
            </Button>
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={handleApprove}
              disabled={isLoading}
            >
              {isLoading ? 'Approving...' : 'Confirm Approve'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Reject Dialog */}
      <Dialog open={isRejectDialogOpen} onOpenChange={setIsRejectDialogOpen}>
        <DialogContent className="border-border">
          <DialogHeader>
            <DialogTitle className="text-foreground">
              Reject Request
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Are you sure you want to reject this request from{' '}
              <span className="font-medium text-foreground">
                {request.serviceName}
              </span>
              ? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsRejectDialogOpen(false)}
              disabled={isLoading}
              className="border-border"
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleReject}
              disabled={isLoading}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {isLoading ? 'Rejecting...' : 'Confirm Reject'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
