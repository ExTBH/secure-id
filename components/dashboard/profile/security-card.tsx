'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
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
import { Progress } from '@/components/ui/progress'
import { CheckCircle2, Key, Lock, ShieldCheck, Smartphone } from 'lucide-react'
import { useState } from 'react'
import { UserProfile } from './types'

interface SecurityCardProps {
  profile: UserProfile
}

export function SecurityCard({ profile }: SecurityCardProps) {
  const [isPasswordDialogOpen, setIsPasswordDialogOpen] = useState(false)

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(date)
  }

  const securityItems = [
    {
      icon: ShieldCheck,
      label: 'KYC Status',
      value: (
        <div className="flex items-center gap-1.5 text-emerald-600">
          <CheckCircle2 className="w-4 h-4" />
          <span className="font-medium">Fully Verified</span>
        </div>
      ),
    },
    {
      icon: Smartphone,
      label: 'Two-Factor Authentication',
      value: (
        <div className="flex items-center">
          <div
            className={`h-4 w-7 rounded-full mr-2 transition-colors ${
              profile.security.twoFactorEnabled
                ? 'bg-emerald-500'
                : 'bg-muted-foreground'
            }`}
          >
            <div
              className={`h-3 w-3 rounded-full bg-white transform transition-transform mt-0.5 ${
                profile.security.twoFactorEnabled
                  ? 'translate-x-3.5'
                  : 'translate-x-0.5'
              }`}
            />
          </div>
          <span>
            {profile.security.twoFactorEnabled ? 'Enabled' : 'Disabled'}
          </span>
        </div>
      ),
    },
    {
      icon: Key,
      label: 'Last Password Change',
      value: formatDate(profile.security.lastPasswordChange),
    },
  ]

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="space-y-1">
            <CardTitle>Security Settings</CardTitle>
            <CardDescription>
              Manage your account security and authentication
            </CardDescription>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsPasswordDialogOpen(true)}
          >
            <Lock className="w-4 h-4 mr-2" />
            Change Password
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Security Items */}
          <div className="space-y-6">
            {securityItems.map((item) => (
              <div key={item.label} className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-2 bg-muted rounded-md">
                    <item.icon className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {item.label}
                  </p>
                  <div className="text-sm text-muted-foreground">
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Security Score */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium">Security Score</span>
              <span className="text-sm font-medium">
                {profile.security.securityScore}/100
              </span>
            </div>
            <Progress
              value={profile.security.securityScore}
              className="bg-muted"
            />
            <p className="text-xs text-muted-foreground">
              Your account security is good. Keep it up!
            </p>
          </div>
        </CardContent>
      </Card>

      <Dialog
        open={isPasswordDialogOpen}
        onOpenChange={setIsPasswordDialogOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Change Password</DialogTitle>
            <DialogDescription>
              Choose a strong password that you haven&apos;t used before.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm text-muted-foreground">
              Password change functionality will be implemented in a future
              update.
            </p>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsPasswordDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={() => setIsPasswordDialogOpen(false)}>
              Update Password
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
