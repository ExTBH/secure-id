'use client'

import { ScrollArea } from '@/components/ui/scroll-area'
import { ActivityCard } from './activity-card'
import {
  mockAccountActions,
  mockLoginSessions,
  mockUserProfile,
} from './mock-data'
import { PersonalInfoCard } from './personal-info-card'
import { ProfileHeader } from './profile-header'
import { SecurityCard } from './security-card'

export function ProfileTab() {
  return (
    <ScrollArea className="h-[calc(100dvh-76px)]">
      <div className="p-4">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Profile Header */}
          <div className="grid gap-4">
            <ProfileHeader profile={mockUserProfile} />
          </div>

          {/* Two Column Layout */}
          <div className="grid gap-4 md:grid-cols-2">
            <PersonalInfoCard profile={mockUserProfile} />
            <SecurityCard profile={mockUserProfile} />
          </div>

          {/* Activity Section */}
          <div className="grid gap-4">
            <ActivityCard
              loginSessions={mockLoginSessions}
              accountActions={mockAccountActions}
            />
          </div>
        </div>
      </div>
    </ScrollArea>
  )
}
