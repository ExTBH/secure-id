export interface UserProfile {
  fullName: string
  email: string
  phone: string
  idNumber: string
  dateOfBirth: Date
  address: {
    city: string
    state: string
    masked: string
  }
  memberSince: Date
  isVerified: boolean
  kycStatus: 'fully_verified' | 'pending' | 'not_verified'
  security: {
    twoFactorEnabled: boolean
    lastPasswordChange: Date
    securityScore: number
  }
  activeSessions: number
  totalAuthorizations: number
}

export interface LoginSession {
  id: string
  timestamp: Date
  device: string
  location: string
  ipAddress: string
  isCurrentSession?: boolean
}

export interface AccountAction {
  id: string
  type: 'profile_update' | 'password_change' | 'authorization' | '2fa_change'
  description: string
  timestamp: Date
}
