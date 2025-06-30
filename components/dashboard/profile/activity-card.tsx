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
  Clock,
  Globe,
  History,
  Key,
  MonitorSmartphone,
  Settings,
  Shield,
} from 'lucide-react'
import { useState } from 'react'
import { AccountAction, LoginSession } from './types'

interface ActivityCardProps {
  loginSessions: LoginSession[]
  accountActions: AccountAction[]
}

export function ActivityCard({
  loginSessions,
  accountActions,
}: ActivityCardProps) {
  const [showAllSessions, setShowAllSessions] = useState(false)
  const [showAllActions, setShowAllActions] = useState(false)

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

  const getActionIcon = (type: AccountAction['type']) => {
    switch (type) {
      case 'profile_update':
        return Settings
      case 'password_change':
        return Key
      case 'authorization':
        return Shield
      case '2fa_change':
        return MonitorSmartphone
      default:
        return History
    }
  }

  const displayedSessions = showAllSessions
    ? loginSessions
    : loginSessions.slice(0, 3)
  const displayedActions = showAllActions
    ? accountActions
    : accountActions.slice(0, 3)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>
          Your recent login sessions and account changes
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Login Sessions */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium leading-none">Login Sessions</h3>
          <div className="space-y-4">
            {displayedSessions.map((session) => (
              <div key={session.id} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-2 bg-muted rounded-md">
                    <Globe className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium leading-none">
                      {session.device}
                    </p>
                    {session.isCurrentSession && (
                      <span className="text-[10px] font-medium bg-emerald-500/15 text-emerald-600 px-1.5 py-0.5 rounded-full">
                        Current Session
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2 text-sm text-muted-foreground">
                    <span>{session.location}</span>
                    <span>•</span>
                    <span>{session.ipAddress}</span>
                  </div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {timeAgo(session.timestamp)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {loginSessions.length > 3 && (
            <Button
              variant="link"
              className="px-0"
              onClick={() => setShowAllSessions(!showAllSessions)}
            >
              {showAllSessions ? 'Show Less' : 'Show All Sessions'}
            </Button>
          )}
        </div>

        {/* Account Actions */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium leading-none">Account Changes</h3>
          <div className="space-y-4">
            {displayedActions.map((action) => {
              const ActionIcon = getActionIcon(action.type)
              return (
                <div key={action.id} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-2 bg-muted rounded-md">
                      <ActionIcon className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {action.description}
                    </p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {timeAgo(action.timestamp)}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
          {accountActions.length > 3 && (
            <Button
              variant="link"
              className="px-0"
              onClick={() => setShowAllActions(!showAllActions)}
            >
              {showAllActions ? 'Show Less' : 'Show All Changes'}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
