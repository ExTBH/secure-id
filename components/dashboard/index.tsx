'use client'

import { Home, Shield, User } from 'lucide-react'
import { useState } from 'react'
import { AppsTab } from './apps'
import { HomeTab } from './home'
import { TabItem } from './types'

const tabs: TabItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: Home,
    content: <HomeTab />,
    notificationCount: 3,
  },
  {
    id: 'apps',
    label: 'Authorized Apps',
    icon: Shield,
    content: <AppsTab />,
  },
  {
    id: 'profile',
    label: 'Profile',
    icon: User,
    content: 'Profile content coming soon...',
  },
]

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id)

  return (
    <div className="w-full mx-auto relative min-h-[100dvh]">
      {/* Tab Panels */}
      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`${tab.id}-panel`}
          aria-labelledby={tab.id}
          hidden={activeTab !== tab.id}
          className="pb-[76px]"
        >
          {tab.content}
        </div>
      ))}

      {/* Tab List - iOS Style Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t">
        <div className="max-w-md mx-auto flex justify-between items-center px-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex flex-col items-center py-3 transition-colors
                ${
                  activeTab === tab.id
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'
                }
              `}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`${tab.id}-panel`}
            >
              <div className="relative">
                <tab.icon className="w-6 h-6" />
                {tab.notificationCount && (
                  <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {tab.notificationCount}
                  </div>
                )}
              </div>
              <span className="mt-1 text-[10px] font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
