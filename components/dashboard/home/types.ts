export type AuthRequestStatus = 'pending' | 'approved' | 'rejected'
export type AuthRequestType = 'withdrawal' | 'login' | 'access' | 'payment'

export interface AuthRequest {
  id: string
  serviceName: string
  serviceIcon: string
  requestType: AuthRequestType
  amount?: number
  timestamp: Date
  description: string
  status: AuthRequestStatus
}
