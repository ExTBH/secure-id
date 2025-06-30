export interface AuthorizedApp {
  id: string
  name: string
  icon: string
  authorizedDate: Date
  lastAccess: Date
  accessType: 'normal' | 'anonymous'
  permissions: string[]
  usageCount: number
}

export type Permission =
  | 'Profile Information'
  | 'Payment History'
  | 'Identity Verification'
  | 'Contact Details'
