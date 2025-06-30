import { AuthRequest } from './types'

export const mockRequests: AuthRequest[] = [
  {
    id: '1',
    serviceName: 'البنك الأهلي المتحد - AUB',
    serviceIcon: 'AUB',
    requestType: 'withdrawal',
    amount: 50.0,
    timestamp: new Date(Date.now() - 2 * 60 * 1000), // 2 minutes ago
    description: 'Withdrawal authorization request',
    status: 'pending',
  },
  {
    id: '2',
    serviceName: 'بنك البحرين الوطني - NBB',
    serviceIcon: 'NBB',
    requestType: 'payment',
    amount: 125.0,
    timestamp: new Date(Date.now() - 15 * 60 * 1000), // 15 minutes ago
    description: 'Payment authorization request',
    status: 'pending',
  },
  {
    id: '3',
    serviceName: 'بنك البحرين الإسلامي - BISB',
    serviceIcon: 'BISB',
    requestType: 'transfer',
    amount: 200.0,
    timestamp: new Date(Date.now() - 45 * 60 * 1000), // 45 minutes ago
    description: 'Fund transfer authorization',
    status: 'pending',
  },
  {
    id: '4',
    serviceName: 'البوابة الوطنية - eGov',
    serviceIcon: 'GOV',
    requestType: 'access',
    timestamp: new Date(Date.now() - 60 * 60 * 1000), // 1 hour ago
    description: 'Request to access government services',
    status: 'pending',
  },
  {
    id: '5',
    serviceName: 'تمكين - Tamkeen',
    serviceIcon: 'TAM',
    requestType: 'verification',
    timestamp: new Date(Date.now() - 90 * 60 * 1000), // 90 minutes ago
    description: 'Employment benefit verification request',
    status: 'pending',
  },
  {
    id: '6',
    serviceName: 'stc البحرين',
    serviceIcon: 'STC',
    requestType: 'payment',
    amount: 25.0,
    timestamp: new Date(Date.now() - 120 * 60 * 1000), // 2 hours ago
    description: 'Monthly telecom bill payment',
    status: 'pending',
  },
]
