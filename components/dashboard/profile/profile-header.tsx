'use client'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'
import { UserProfile } from './types'

interface ProfileHeaderProps {
  profile: UserProfile
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      year: 'numeric',
    }).format(date)
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <Avatar className="h-24 w-24">
            <AvatarFallback className="text-2xl bg-primary/10">
              {getInitials(profile.fullName)}
            </AvatarFallback>
          </Avatar>

          <div className="space-y-2">
            <div className="flex flex-col items-center justify-center gap-2">
              <h2 className="text-2xl font-semibold">{profile.fullName}</h2>
              {profile.isVerified && (
                <Badge
                  variant="secondary"
                  className="bg-emerald-500/15 text-emerald-600 hover:bg-emerald-500/25"
                >
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Verified
                </Badge>
              )}
            </div>

            <p className="text-sm text-muted-foreground">
              Member since {formatDate(profile.memberSince)}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
