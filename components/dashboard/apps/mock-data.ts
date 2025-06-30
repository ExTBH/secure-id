import { AuthorizedApp } from './types'

export const mockAuthorizedApps: AuthorizedApp[] = [
  {
    id: '1',
    name: 'NBB Bank',
    icon: 'NBB',
    authorizedDate: new Date('2024-03-15T10:00:00'),
    lastAccess: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    accessType: 'normal',
    permissions: [
      'Profile Information',
      'Payment History',
      'Identity Verification',
    ],
    usageCount: 47,
  },
  {
    id: '2',
    name: 'Amazon',
    icon: 'AM',
    authorizedDate: new Date('2024-03-10T15:30:00'),
    lastAccess: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    accessType: 'anonymous',
    permissions: ['Payment History', 'Contact Details'],
    usageCount: 23,
  },
  {
    id: '3',
    name: 'Netflix',
    icon: 'NF',
    authorizedDate: new Date('2024-02-28T09:15:00'),
    lastAccess: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
    accessType: 'normal',
    permissions: ['Profile Information'],
    usageCount: 15,
  },
  {
    id: '4',
    name: 'Government Portal',
    icon: 'GP',
    authorizedDate: new Date('2024-01-20T11:45:00'),
    lastAccess: new Date(Date.now() - 48 * 60 * 60 * 1000), // 2 days ago
    accessType: 'normal',
    permissions: [
      'Profile Information',
      'Identity Verification',
      'Contact Details',
    ],
    usageCount: 32,
  },
  {
    id: '5',
    name: 'Spotify',
    icon: 'SP',
    authorizedDate: new Date('2024-03-05T16:20:00'),
    lastAccess: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
    accessType: 'anonymous',
    permissions: ['Profile Information'],
    usageCount: 8,
  },
  {
    id: '6',
    name: 'HealthCare App',
    icon: 'HC',
    authorizedDate: new Date('2024-02-15T13:10:00'),
    lastAccess: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
    accessType: 'normal',
    permissions: ['Identity Verification', 'Contact Details'],
    usageCount: 19,
  },
  {
    id: '7',
    name: 'E-Commerce Store',
    icon: 'EC',
    authorizedDate: new Date('2024-03-08T14:25:00'),
    lastAccess: new Date(Date.now() - 36 * 60 * 60 * 1000), // 36 hours ago
    accessType: 'normal',
    permissions: ['Payment History', 'Profile Information'],
    usageCount: 12,
  },
  {
    id: '8',
    name: 'Tax Software',
    icon: 'TX',
    authorizedDate: new Date('2024-02-01T08:50:00'),
    lastAccess: new Date(Date.now() - 72 * 60 * 60 * 1000), // 3 days ago
    accessType: 'normal',
    permissions: [
      'Identity Verification',
      'Payment History',
      'Profile Information',
    ],
    usageCount: 27,
  },
]
