'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { ArrowLeft, Building2, Check, Shield, Users, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

interface LoginRequest {
  appName: string
  appType: 'banking' | 'social'
  icon: React.ReactNode
  permissions: string[]
  supportsAnonymous: boolean
  description: string
}

const appConfigs: Record<string, LoginRequest> = {
  banking: {
    appName: 'Ahli United Bank Mobile',
    appType: 'banking',
    icon: <Building2 className="w-6 h-6" />,
    permissions: [
      'Full name and personal details',
      'National ID number',
      'Phone number',
      'Email address',
      'Date of birth',
      'Address information',
    ],
    supportsAnonymous: false,
    description:
      'Banking services require full identity verification for regulatory compliance.',
  },
  social: {
    appName: 'ConnectBH Social Network',
    appType: 'social',
    icon: <Users className="w-6 h-6" />,
    permissions: [
      'Basic profile (age verification only)',
      'Unique anonymous identifier',
      'Country/region (Bahrain)',
    ],
    supportsAnonymous: true,
    description:
      'Social media apps can use anonymous login to protect your privacy.',
  },
}

export default function NativeAppFlow() {
  const [loginRequest, setLoginRequest] = useState<LoginRequest | null>(null)
  const [useAnonymous, setUseAnonymous] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [authResult, setAuthResult] = useState<'approved' | 'rejected' | null>(
    null
  )

  const handleAppLogin = (appType: 'banking' | 'social') => {
    setLoginRequest(appConfigs[appType])
    setUseAnonymous(appType === 'social') // Default to anonymous for social apps
    setAuthResult(null)
  }

  const handleApprove = async () => {
    if (!loginRequest) return

    setIsProcessing(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setAuthResult('approved')
    setIsProcessing(false)

    setTimeout(() => {
      setLoginRequest(null)
      setAuthResult(null)
    }, 3000)
  }

  const handleReject = async () => {
    setIsProcessing(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setAuthResult('rejected')
    setIsProcessing(false)

    setTimeout(() => {
      setLoginRequest(null)
      setAuthResult(null)
    }, 2000)
  }

  const getSharedData = () => {
    if (!loginRequest) return []

    if (loginRequest.appType === 'banking' || !useAnonymous) {
      return [
        'Name: Ahmed Al-Khalifa',
        'ID: ***-***-1234',
        'Phone: +973 ***-***90',
        'Email: ahmed.alkhalifa@email.com',
        'DOB: **/**/1985',
        'Address: Manama, Bahrain',
      ]
    } else {
      return [
        'Anonymous ID: ANON-BH-7X9K2M',
        'Age: 25+ (verified)',
        'Region: Bahrain',
        'Account: Persistent anonymous profile',
      ]
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 flex items-center justify-center p-4">
      <div className="w-full max-w-lg space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-foreground">
            Native App Authentication
          </h1>
          <p className="text-muted-foreground">
            Simulate how apps integrate &quot;Login with Secure ID&quot;
          </p>
        </div>

        {/* App Selection */}
        <div className="grid gap-4">
          <Card
            className="border-primary/20 hover:border-primary/40 transition-colors cursor-pointer"
            onClick={() => handleAppLogin('banking')}
          >
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-3 text-lg">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                Simulate Banking App
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Experience how banking apps request full identity verification
              </p>
              <div className="flex items-center gap-2 text-xs">
                <Shield className="w-3 h-3 text-primary" />
                <span className="text-muted-foreground">
                  Requires: Full personal data
                </span>
              </div>
            </CardContent>
          </Card>

          <Card
            className="border-primary/20 hover:border-primary/40 transition-colors cursor-pointer"
            onClick={() => handleAppLogin('social')}
          >
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-3 text-lg">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                Simulate Social Media App
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                See how social apps can use anonymous login for privacy
              </p>
              <div className="flex items-center gap-2 text-xs">
                <Shield className="w-3 h-3 text-green-600" />
                <span className="text-muted-foreground">
                  Supports: Anonymous login
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Info Card */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-primary mt-0.5" />
              <div className="space-y-2">
                <h3 className="font-semibold text-sm">How It Works</h3>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Banking apps require full identity verification</li>
                  <li>• Social apps can use anonymous profiles</li>
                  <li>• Anonymous data is consistent but privacy-protected</li>
                  <li>• Users control what information is shared</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Login Request Dialog */}
        <Dialog
          open={!!loginRequest}
          onOpenChange={() => !isProcessing && setLoginRequest(null)}
        >
          <DialogContent className="w-[95vw] max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                {loginRequest?.icon}
                Login Request
              </DialogTitle>
              <DialogDescription>
                {loginRequest?.appName} wants to authenticate you with Secure ID
              </DialogDescription>
            </DialogHeader>

            {!authResult && loginRequest && (
              <>
                {/* App Info */}
                <div className="space-y-4 my-4">
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <h4 className="font-medium text-sm mb-2">App Details</h4>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Application
                        </span>
                        <span className="font-medium">
                          {loginRequest.appName}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Type</span>
                        <span className="capitalize">
                          {loginRequest.appType}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Data Sharing
                        </span>
                        <span
                          className={
                            loginRequest.supportsAnonymous
                              ? 'text-green-600'
                              : 'text-orange-600'
                          }
                        >
                          {loginRequest.supportsAnonymous
                            ? 'Anonymous Available'
                            : 'Full Identity Required'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Anonymous Toggle for Social Apps */}
                  {loginRequest.supportsAnonymous && (
                    <div
                      className={`border rounded-lg p-3 ${
                        useAnonymous
                          ? 'bg-green-50 border-green-200'
                          : 'bg-orange-50 border-orange-200'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">
                          {useAnonymous
                            ? 'Using Anonymous Mode'
                            : 'Using Personal Data'}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setUseAnonymous(!useAnonymous)}
                          className="text-xs"
                        >
                          {useAnonymous
                            ? "Don't Use Anonymous"
                            : 'Use Anonymous'}
                        </Button>
                      </div>
                      <p
                        className={`text-xs ${
                          useAnonymous ? 'text-green-700' : 'text-orange-700'
                        }`}
                      >
                        {useAnonymous
                          ? 'Your real identity will be hidden. A persistent anonymous profile will be created.'
                          : 'Your real information will be shared with this app.'}
                      </p>
                    </div>
                  )}

                  {/* Data to be Shared */}
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
                    <h4 className="font-medium text-sm mb-2">
                      Data to be Shared
                    </h4>
                    <ul className="text-xs space-y-1">
                      {getSharedData().map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Description */}
                  <div className="text-xs text-muted-foreground bg-secondary/30 p-3 rounded-lg">
                    <Shield className="w-4 h-4 inline mr-1" />
                    {loginRequest.description}
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
                    {isProcessing ? 'Processing...' : 'Approve Login'}
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
                    ? 'Login Successful'
                    : 'Login Rejected'}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {authResult === 'approved'
                    ? `Successfully logged into ${loginRequest?.appName}`
                    : 'Login request was declined'}
                </p>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
