'use client'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
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
import { Clock, FileText, Globe, Lock, Mail, Shield, User } from 'lucide-react'
import { useState } from 'react'
import { AuthorizedApp, Permission } from './types'

interface AppCardProps {
  app: AuthorizedApp
  onRevoke: (id: string) => void
}

const permissionIcons: Record<
  Permission,
  React.ComponentType<{ className?: string }>
> = {
  'Profile Information': User,
  'Payment History': FileText,
  'Identity Verification': Lock,
  'Contact Details': Mail,
}

export function AppCard({ app, onRevoke }: AppCardProps) {
  const [isRevokeDialogOpen, setIsRevokeDialogOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleRevoke = async () => {
    setIsLoading(true)
    await onRevoke(app.id)
    setIsLoading(false)
    setIsRevokeDialogOpen(false)
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(date)
  }

  const timeAgo = (date: Date) => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)

    if (days > 0) return `${days} day${days === 1 ? '' : 's'} ago`
    if (hours > 0) return `${hours} hour${hours === 1 ? '' : 's'} ago`
    if (minutes > 0) return `${minutes} minute${minutes === 1 ? '' : 's'} ago`
    return 'just now'
  }

  return (
    <>
      <Card className="h-full">
        <CardHeader className="space-y-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarFallback className="text-lg bg-primary/10">
                {app.icon}
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-xl">{app.name}</CardTitle>
              <CardDescription className="text-sm">
                Authorized on {formatDate(app.authorizedDate)}
              </CardDescription>
            </div>
          </div>
          <div>
            <Badge
              variant={app.accessType === 'normal' ? 'default' : 'secondary'}
              className="capitalize"
            >
              {app.accessType === 'normal' ? (
                <Shield className="w-3 h-3 mr-1" />
              ) : (
                <Globe className="w-3 h-3 mr-1" />
              )}
              {app.accessType} Access
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground flex items-center gap-1">
              <Clock className="w-4 h-4" />
              Last used {timeAgo(app.lastAccess)}
            </div>
            <div className="text-sm text-muted-foreground">
              Used {app.usageCount} times
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="text-sm font-medium">Permissions</div>
            <div className="flex flex-wrap gap-1.5">
              {app.permissions.map((permission) => {
                const Icon = permissionIcons[permission as Permission]
                return (
                  <Badge
                    key={permission}
                    variant="outline"
                    className="flex items-center gap-1"
                  >
                    {Icon && <Icon className="w-3 h-3" />}
                    {permission}
                  </Badge>
                )
              })}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            variant="destructive"
            className="w-full"
            onClick={() => setIsRevokeDialogOpen(true)}
            disabled={isLoading}
          >
            Revoke Access
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={isRevokeDialogOpen} onOpenChange={setIsRevokeDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Revoke Access</DialogTitle>
            <DialogDescription>
              Are you sure you want to revoke access for {app.name}? This action
              cannot be undone, and the app will need to request authorization
              again.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsRevokeDialogOpen(false)}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleRevoke}
              disabled={isLoading}
            >
              {isLoading ? 'Revoking...' : 'Confirm Revoke'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
