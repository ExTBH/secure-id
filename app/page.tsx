'use client'

import Dashboard from '@/components/dashboard'
import { Button } from '@/components/ui/button'
import { QrCode, Shield, Smartphone } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [showDashboard, setShowDashboard] = useState(false)

  if (showDashboard) {
    return <Dashboard />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Main Card Container */}
        <div className="bg-card border border-border rounded-xl shadow-lg p-8 space-y-8">
          {/* Logo and Header Section */}
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="relative w-20 h-20 mb-2">
                <Image
                  src="/logo.png"
                  alt="Secure ID Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-foreground">Secure ID</h1>
              <p className="text-muted-foreground text-sm">
                Bahrain Digital Identity Platform
              </p>
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Shield className="w-3 h-3" />
                <span>Government Verified • Bank-Grade Security</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              size="lg"
              className="w-full h-12 font-medium"
              onClick={() => setShowDashboard(true)}
            >
              <Shield className="w-4 h-4 mr-2" />
              Open Dashboard
            </Button>

            <Button
              size="lg"
              variant="secondary"
              className="w-full h-12 font-medium"
            >
              <QrCode className="w-4 h-4 mr-2" />
              QR Auth Flow
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full h-12 font-medium"
            >
              <Smartphone className="w-4 h-4 mr-2" />
              Native App Auth
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-4 border-t border-border">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="space-y-1">
                <div className="text-sm font-semibold text-foreground">
                  256-bit
                </div>
                <div className="text-xs text-muted-foreground">Encryption</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm font-semibold text-foreground">
                  ISO 27001
                </div>
                <div className="text-xs text-muted-foreground">Certified</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm font-semibold text-foreground">CBB</div>
                <div className="text-xs text-muted-foreground">Regulated</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 space-y-2">
          <p className="text-xs text-muted-foreground">
            PoC Version • Kingdom of Bahrain
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
            <span>•</span>
            <span>Support</span>
          </div>
        </div>
      </div>
    </div>
  )
}
