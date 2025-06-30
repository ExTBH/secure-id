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
import { Calendar, Mail, MapPin, PenSquare, Phone, User2 } from 'lucide-react'
import { useState } from 'react'
import { UserProfile } from './types'

interface PersonalInfoCardProps {
  profile: UserProfile
}

export function PersonalInfoCard({ profile }: PersonalInfoCardProps) {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)

  const formatDateOfBirth = (date: Date) => {
    return `**/**/${date.getFullYear()}`
  }

  const infoItems = [
    {
      icon: Phone,
      label: 'Phone Number',
      value: profile.phone,
    },
    {
      icon: Mail,
      label: 'Email Address',
      value: profile.email,
    },
    {
      icon: User2,
      label: 'ID Number',
      value: profile.idNumber,
    },
    {
      icon: Calendar,
      label: 'Date of Birth',
      value: formatDateOfBirth(profile.dateOfBirth),
    },
    {
      icon: MapPin,
      label: 'Address',
      value: `${profile.address.city}, ${profile.address.state} ${profile.address.masked}`,
    },
  ]

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="space-y-1">
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Your personal and contact details</CardDescription>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="text-blue-600"
            onClick={() => setIsEditDialogOpen(true)}
          >
            <PenSquare className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {infoItems.map((item) => (
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
                  <p className="text-sm text-muted-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Update your personal information. Some fields may require
              additional verification.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm text-muted-foreground">
              Profile editing functionality will be implemented in a future
              update.
            </p>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsEditDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={() => setIsEditDialogOpen(false)}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
