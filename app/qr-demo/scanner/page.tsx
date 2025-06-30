'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { ArrowLeft, Check, Shield, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function ScannerPage() {
  const [showAuthDialog, setShowAuthDialog] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [authResult, setAuthResult] = useState<'approved' | 'rejected' | null>(
    null
  )

  useEffect(() => {
    // Simulate immediate QR scan detection
    const timer = setTimeout(() => {
      setShowAuthDialog(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleApprove = async () => {
    setIsProcessing(true)
    await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulate processing
    setAuthResult('approved')
    setIsProcessing(false)

    // Auto close after showing result
    setTimeout(() => {
      setShowAuthDialog(false)
    }, 2000)
  }

  const handleReject = async () => {
    setIsProcessing(true)
    await new Promise((resolve) => setTimeout(resolve, 1500)) // Simulate processing
    setAuthResult('rejected')
    setIsProcessing(false)

    // Auto close after showing result
    setTimeout(() => {
      setShowAuthDialog(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-6">
          <Link href="/qr-demo">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to QR Demo
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-foreground">QR Scanner</h1>
          <p className="text-muted-foreground text-sm">
            User Experience Simulation
          </p>
        </div>

        {/* Scanner Interface */}
        <Card className="border-primary/20">
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  QR Code Detected
                </h3>
                <p className="text-sm text-muted-foreground">
                  Authentication request found
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Authorization Dialog */}
        <Dialog open={showAuthDialog} onOpenChange={setShowAuthDialog}>
          <DialogContent className="w-[95vw] max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Authorization Request
              </DialogTitle>
              <DialogDescription>
                Review the transaction details and choose to approve or reject
              </DialogDescription>
            </DialogHeader>

            {!authResult && (
              <>
                {/* Transaction Details */}
                <div className="space-y-4 my-4">
                  <div className="bg-secondary/50 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Service
                      </span>
                      <span className="text-sm font-medium">
                        NBB Bank Authorization
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Amount
                      </span>
                      <span className="text-lg font-bold text-primary">
                        125.50 BHD
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Merchant
                      </span>
                      <span className="text-sm font-medium">
                        Al-Rashid Electronics
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Transaction ID
                      </span>
                      <span className="text-xs font-mono">TXN-BH-001234</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Time
                      </span>
                      <span className="text-sm">Just now</span>
                    </div>
                  </div>

                  {/* Security Info */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground bg-primary/5 p-3 rounded-lg">
                    <Shield className="w-4 h-4" />
                    <span>Secured with bank-grade encryption</span>
                  </div>
                </div>

                <DialogFooter className="gap-2">
                  <Button
                    variant="outline"
                    onClick={handleReject}
                    disabled={isProcessing}
                    className="flex-1 border-destructive/30 text-destructive hover:bg-destructive hover:text-destructive-foreground"
                  >
                    <X className="w-4 h-4 mr-2" />
                    {isProcessing ? 'Processing...' : 'Reject'}
                  </Button>
                  <Button
                    onClick={handleApprove}
                    disabled={isProcessing}
                    className="flex-1 bg-primary hover:bg-primary/90"
                  >
                    <Check className="w-4 h-4 mr-2" />
                    {isProcessing ? 'Processing...' : 'Approve'}
                  </Button>
                </DialogFooter>
              </>
            )}

            {/* Result Display */}
            {authResult && (
              <div className="text-center py-6">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    authResult === 'approved'
                      ? 'bg-green-100 text-green-600'
                      : 'bg-red-100 text-red-600'
                  }`}
                >
                  {authResult === 'approved' ? (
                    <Check className="w-8 h-8" />
                  ) : (
                    <X className="w-8 h-8" />
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {authResult === 'approved'
                    ? 'Transaction Approved'
                    : 'Transaction Rejected'}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {authResult === 'approved'
                    ? 'The payment has been authorized successfully'
                    : 'The transaction has been declined'}
                </p>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Instructions */}
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            <span className="font-medium text-primary">Demo:</span> QR code
            automatically detected
          </p>
        </div>
      </div>
    </div>
  )
}
