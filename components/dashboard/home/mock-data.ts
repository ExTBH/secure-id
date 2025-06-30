import { AuthRequest } from './types'

export const mockRequests: AuthRequest[] = [
  {
    id: '1',
    serviceName: 'NBB Bank',
    serviceIcon: '🏦',
    requestType: 'withdrawal',
    amount: 100.0,
    timestamp: new Date(Date.now() - 2 * 60 * 1000), // 2 minutes ago
    description: 'Withdrawal request from your savings account',
    status: 'pending',
  },
  {
    id: '2',
    serviceName: 'ShopMart',
    serviceIcon: '🛍️',
    requestType: 'login',
    timestamp: new Date(Date.now() - 15 * 60 * 1000), // 15 minutes ago
    description: 'Login request from new device (iPhone 15)',
    status: 'pending',
  },
  {
    id: '3',
    serviceName: 'MediCare Portal',
    serviceIcon: '🏥',
    requestType: 'access',
    timestamp: new Date(Date.now() - 45 * 60 * 1000), // 45 minutes ago
    description: 'Request to access your medical records',
    status: 'pending',
  },
  {
    id: '4',
    serviceName: 'Utility Company',
    serviceIcon: '⚡',
    requestType: 'payment',
    amount: 85.5,
    timestamp: new Date(Date.now() - 90 * 60 * 1000), // 90 minutes ago
    description: 'Monthly electricity bill payment',
    status: 'pending',
  },
]
