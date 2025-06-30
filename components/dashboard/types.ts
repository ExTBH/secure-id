import { LucideIcon } from 'lucide-react'

export interface TabItem {
  id: string
  label: string
  icon: LucideIcon
  content: React.ReactNode
  notificationCount?: number
}
