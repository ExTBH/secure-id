import { AccountAction, LoginSession, UserProfile } from './types'

export const mockUserProfile: UserProfile = {
  fullName: 'Ahmed Al-Mansouri',
  email: 'ahmed.almansouri@email.com',
  phone: '+973 ***-***90',
  idNumber: '***-***-123',
  dateOfBirth: new Date('1988-04-22'),
  address: {
    city: 'Manama',
    state: 'Capital Governorate',
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
    device: 'Safari on iPhone 14 Pro',
    location: 'Manama, Capital Governorate',
    ipAddress: '84.255.***.***', // Batelco IP
    isCurrentSession: true,
  },
  {
    id: '2',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    device: 'Chrome on MacBook',
    location: 'Manama, Capital Governorate',
    ipAddress: '84.255.***.***', // Batelco IP
  },
  {
    id: '3',
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    device: 'Samsung Galaxy S23',
    location: 'Riffa, Southern Governorate',
    ipAddress: '94.76.***.***', // Zain IP
  },
  {
    id: '4',
    timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
    device: 'Chrome on Windows',
    location: 'Muharraq, Muharraq Governorate',
    ipAddress: '37.131.***.***', // STC IP
  },
  {
    id: '5',
    timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
    device: 'Safari on iPad Pro',
    location: 'Manama, Capital Governorate',
    ipAddress: '84.255.***.***', // Batelco IP
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
    description: 'Updated mobile number',
    timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
  },
  {
    id: '4',
    type: 'authorization',
    description: 'بنك البحرين الوطني - Authorized NBB Mobile Banking',
    timestamp: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000), // 14 days ago
  },
  {
    id: '5',
    type: 'profile_update',
    description: 'Updated address in Capital Governorate',
    timestamp: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
  },
]
