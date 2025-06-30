import { AuthorizedApp } from './types'

export const mockAuthorizedApps: AuthorizedApp[] = [
  {
    id: '1',
    name: 'بنك البحرين الوطني - NBB Mobile',
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
    name: 'البنك الأهلي المتحد - AUB',
    icon: 'AUB',
    authorizedDate: new Date('2024-03-10T15:30:00'),
    lastAccess: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    accessType: 'normal',
    permissions: ['Payment History', 'Identity Verification'],
    usageCount: 23,
  },
  {
    id: '3',
    name: 'بنك البحرين الإسلامي - BISB',
    icon: 'BISB',
    authorizedDate: new Date('2024-02-28T09:15:00'),
    lastAccess: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
    accessType: 'normal',
    permissions: ['Profile Information', 'Payment History'],
    usageCount: 15,
  },
  {
    id: '4',
    name: 'البوابة الوطنية - eGovernment',
    icon: 'GOV',
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
    name: 'طلبات - Talabat',
    icon: 'TAL',
    authorizedDate: new Date('2024-03-05T16:20:00'),
    lastAccess: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
    accessType: 'anonymous',
    permissions: ['Payment History', 'Contact Details'],
    usageCount: 28,
  },
  {
    id: '6',
    name: 'تمكين - Tamkeen',
    icon: 'TAM',
    authorizedDate: new Date('2024-02-15T13:10:00'),
    lastAccess: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
    accessType: 'normal',
    permissions: ['Identity Verification', 'Profile Information'],
    usageCount: 19,
  },
  {
    id: '7',
    name: 'بتلكو - BATELCO',
    icon: 'BAT',
    authorizedDate: new Date('2024-03-08T14:25:00'),
    lastAccess: new Date(Date.now() - 36 * 60 * 60 * 1000), // 36 hours ago
    accessType: 'normal',
    permissions: ['Payment History', 'Contact Details'],
    usageCount: 12,
  },
  {
    id: '8',
    name: 'stc البحرين',
    icon: 'STC',
    authorizedDate: new Date('2024-02-01T08:50:00'),
    lastAccess: new Date(Date.now() - 72 * 60 * 60 * 1000), // 3 days ago
    accessType: 'normal',
    permissions: ['Payment History', 'Contact Details'],
    usageCount: 27,
  },
]
