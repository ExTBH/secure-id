'use client'

import { Alert, AlertDescription } from '@/components/ui/alert'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Shield } from 'lucide-react'
import { useState } from 'react'
import { AppCard } from './app-card'
import { mockAuthorizedApps } from './mock-data'
import { AuthorizedApp } from './types'

export function AppsTab() {
  const [apps, setApps] = useState<AuthorizedApp[]>(mockAuthorizedApps)
  const [searchQuery, setSearchQuery] = useState('')

  const handleRevoke = async (id: string) => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setApps((prevApps) => prevApps.filter((app) => app.id !== id))
  }

  const filteredApps = apps.filter((app) => {
    const searchLower = searchQuery.toLowerCase()
    return (
      app.name.toLowerCase().includes(searchLower) ||
      app.accessType.toLowerCase().includes(searchLower) ||
      app.permissions.some((permission) =>
        permission.toLowerCase().includes(searchLower)
      )
    )
  })

  if (apps.length === 0) {
    return (
      <div className="h-[calc(100dvh-76px)] flex items-center justify-center p-4">
        <Alert className="max-w-md">
          <Shield className="h-4 w-4" />
          <AlertDescription className="ml-2">
            No authorized apps. When you authorize services to access your data,
            they&apos;ll appear here.
          </AlertDescription>
        </Alert>
      </div>
    )
  }

  return (
    <ScrollArea className="h-[calc(100dvh-76px)]">
      <div className="p-4 space-y-4 min-h-full">
        {/* Search Input */}
        <div className="sticky top-0 z-10 pb-4 bg-background/80 backdrop-blur-sm">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name, access type, or permissions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 text-sm rounded-md border bg-background shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1 rounded-sm"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Apps Grid */}
        {filteredApps.length === 0 ? (
          <Alert>
            <AlertDescription>
              No apps found matching &quot;{searchQuery}&quot;
            </AlertDescription>
          </Alert>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-[calc(100vh-200px)]">
            {filteredApps.map((app) => (
              <AppCard key={app.id} app={app} onRevoke={handleRevoke} />
            ))}
          </div>
        )}
      </div>
    </ScrollArea>
  )
}
