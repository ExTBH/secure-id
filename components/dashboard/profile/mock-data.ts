import { AccountAction, LoginSession, UserProfile } from './types'

export const mockUserProfile: UserProfile = {
  fullName: 'John Anderson',
  email: 'john.anderson@email.com',
  phone: '+1***-***-7890',
  idNumber: '***-**-1234',
  dateOfBirth: new Date('1985-06-15'),
  address: {
    city: 'New York',
    state: 'NY',
    masked: '***',
  },
  memberSince: new Date('2023-01-15'),
  isVerified: true,
  kycStatus: 'fully_verified',
  security: {
    twoFactorEnabled: true,
    lastPasswordChange: new Date('2024-02-20'),
    securityScore: 85,
  },
  activeSessions: 2,
  totalAuthorizations: 8,
}

export const mockLoginSessions: LoginSession[] = [
  {
    id: '1',
    timestamp: new Date(Date.now() - 2 * 60 * 1000), // 2 minutes ago
    device: 'Chrome on MacOS',
    location: 'New York, NY',
    ipAddress: '192.168.***.***',
    isCurrentSession: true,
  },
  {
    id: '2',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    device: 'Safari on iPhone',
    location: 'New York, NY',
    ipAddress: '192.168.***.***',
  },
  {
    id: '3',
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    device: 'Firefox on Windows',
    location: 'Boston, MA',
    ipAddress: '172.16.***.***',
  },
  {
    id: '4',
    timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
    device: 'Chrome on Windows',
    location: 'Chicago, IL',
    ipAddress: '10.0.***.***',
  },
  {
    id: '5',
    timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
    device: 'Safari on iPad',
    location: 'New York, NY',
    ipAddress: '192.168.***.***',
  },
]

export const mockAccountActions: AccountAction[] = [
  {
    id: '1',
    type: '2fa_change',
    description: 'Enabled Two-Factor Authentication',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
  },
  {
    id: '2',
    type: 'password_change',
    description: 'Changed account password',
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
  },
  {
    id: '3',
    type: 'profile_update',
    description: 'Updated phone number',
    timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
  },
  {
    id: '4',
    type: 'authorization',
    description: 'Authorized NBB Bank app',
    timestamp: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000), // 14 days ago
  },
  {
    id: '5',
    type: 'profile_update',
    description: 'Updated address information',
    timestamp: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
  },
]
