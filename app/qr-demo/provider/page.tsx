'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Clock, Loader2, Shield } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function ProviderSimulator() {
  const [loading, setLoading] = useState(true)
  const [timer, setTimer] = useState(300) // 5:00 minutes

  useEffect(() => {
    const load = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(load)
  }, [])

  useEffect(() => {
    if (!loading && timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000)
      return () => clearInterval(interval)
    }
  }, [loading, timer])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${minutes}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 flex items-center justify-center p-4">
      <div className="w-full max-w-lg space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <Link href="/qr-demo">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to QR Demo
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-foreground">
            QR Code Generated
          </h1>
          <p className="text-muted-foreground">
            Customer will scan this code to authenticate
          </p>
        </div>

        {/* QR Code Card */}
        <Card className="border-primary/20">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-lg">Scan to Authenticate</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            {/* QR Code Display */}
            <div className="bg-white border-2 border-primary/20 rounded-lg p-4 shadow-sm">
              {loading ? (
                <div className="w-48 h-48 flex items-center justify-center">
                  <Loader2 className="w-12 h-12 text-primary animate-spin" />
                </div>
              ) : (
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=DEMO-BANKID-BAHRAIN-AUTH"
                  alt="Authentication QR Code"
                  width={192}
                  height={192}
                  className="rounded-md"
                />
              )}
            </div>

            {/* Status */}
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center gap-2 text-sm">
                <Loader2 className="w-4 h-4 text-primary animate-spin" />
                <span className="text-foreground">
                  {loading ? 'Generating code...' : 'Waiting for scan...'}
                </span>
              </div>

              <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{loading ? '--:--' : formatTime(timer)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  <span>Encrypted</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transaction Details */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Transaction Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Service</span>
              <span className="font-medium">NBB Bank Authorization</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Amount</span>
              <span className="font-medium text-primary">125.50 BHD</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Merchant</span>
              <span className="font-medium">Al-Rashid Electronics</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Transaction ID</span>
              <span className="font-mono text-xs">TXN-BH-001234</span>
            </div>
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">How to Scan</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
              <li>Open your Secure ID mobile app</li>
              <li>Tap &quot;Scan QR Code&quot;</li>
              <li>Point camera at the QR code above</li>
              <li>Review and approve the transaction</li>
            </ol>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-xs text-muted-foreground space-y-1">
          <p>This QR code expires automatically for security</p>
          <p className="font-medium text-primary">Proof of Concept Demo</p>
        </div>
      </div>
    </div>
  )
}
