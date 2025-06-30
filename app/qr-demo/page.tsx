// QR Authentication Flow Demo Page (Mobile-Only, App-Style)
import { Button } from '@/components/ui/button'
import { MonitorSmartphone, QrCode, Smartphone } from 'lucide-react'
import Link from 'next/link'

export default function QrDemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Main Card Container */}
        <div className="bg-card border border-border rounded-xl shadow-lg p-6 space-y-6">
          {/* Header Section */}
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-bold text-foreground">
              QR Authentication Flow Demo
            </h1>
            <p className="text-muted-foreground text-sm">
              Demonstration of Bahrain Digital Identity QR Authentication
            </p>
            <div className="text-xs text-muted-foreground">
              This page demonstrates both perspectives of QR code authentication
              in a banking/government context.
            </div>
          </div>
          {/* Simulation Options */}
          <div className="space-y-4">
            {/* User Experience Simulator */}
            <div className="border border-border rounded-lg p-4 flex flex-col items-center bg-background">
              <Smartphone className="w-10 h-10 text-primary mb-2" />
              <div className="font-semibold text-foreground text-base mb-1">
                User Experience Simulator
              </div>
              <div className="text-xs text-muted-foreground text-center mb-2">
                Simulate scanning a QR code with your mobile device to authorize
                transactions
              </div>
              <div className="text-xs text-muted-foreground mb-3">
                Example: Scan to authorize payment at NBB Bank
              </div>
              <Button size="sm" className="w-full" disabled>
                <QrCode className="w-4 h-4 mr-2" />
                Start User Simulation
              </Button>
            </div>

            {/* Service Provider Simulator */}
            <div className="border border-border rounded-lg p-4 flex flex-col items-center bg-background">
              <MonitorSmartphone className="w-10 h-10 text-primary mb-2" />
              <div className="font-semibold text-foreground text-base mb-1">
                Service Provider Simulator
              </div>
              <div className="text-xs text-muted-foreground text-center mb-2">
                Generate and display QR codes that customers would scan to
                authenticate
              </div>
              <div className="text-xs text-muted-foreground mb-3">
                Example: Display QR for eGov service login
              </div>
              <Link href="/qr-demo/provider" passHref legacyBehavior>
                <Button size="sm" className="w-full">
                  <QrCode className="w-4 h-4 mr-2" />
                  Generate QR Code
                </Button>
              </Link>
            </div>
          </div>
          {/* Navigation */}
          <div className="pt-2">
            <Link
              href="/"
              className="block text-center text-primary underline text-xs font-medium hover:text-primary/80"
            >
              &larr; Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
