import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Shield, Lock, Eye, Database, Users, AlertTriangle, CheckCircle } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="border-b border-border py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            <div>
              <h1 className="text-3xl font-bold">Privacy Policy</h1>
              <p className="text-muted-foreground">Last updated: November 2024</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-4xl px-4 py-12">
        {/* Introduction */}
        <Card className="border-border bg-card mb-8">
          <CardHeader>
            <Shield className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Our Commitment to Your Privacy</CardTitle>
            <CardDescription>
              At Astergram, we are committed to protecting your personal information and respecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Information We Collect */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Database className="h-6 w-6 text-primary" />
            Information We Collect
          </h2>
          
          <div className="space-y-6">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg">Account Information</CardTitle>
                <CardDescription>
                  When you create an account, we collect:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Telegram user ID and username</li>
                  <li>• Exchange account identifiers (encrypted)</li>
                  <li>• API keys (encrypted and securely stored)</li>
                  <li>• Trading preferences and configuration settings</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg">Usage Data</CardTitle>
                <CardDescription>
                  We automatically collect information about your interaction with our service:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Trading commands and execution history</li>
                  <li>• Portfolio performance data</li>
                  <li>• System access logs and IP addresses</li>
                  <li>• Device and browser information</li>
                  <li>• Service usage statistics and analytics</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg">Exchange Data</CardTitle>
                <CardDescription>
                  Information retrieved from your connected exchanges:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Account balances and portfolio data</li>
                  <li>• Transaction history and trade records</li>
                  <li>• Market data and price information</li>
                  <li>• Exchange-specific account details</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Eye className="h-6 w-6 text-accent" />
            How We Use Your Information
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <CheckCircle className="h-6 w-6 text-green-400 mb-3" />
                <h3 className="font-semibold mb-2">Service Provision</h3>
                <p className="text-sm text-muted-foreground">
                  To provide, maintain, and improve our trading bot services, including executing trades and providing market data.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <Lock className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Security</h3>
                <p className="text-sm text-muted-foreground">
                  To protect against fraud, unauthorized access, and ensure the security of our service and your accounts.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <Database className="h-6 w-6 text-accent mb-3" />
                <h3 className="font-semibold mb-2">Analytics</h3>
                <p className="text-sm text-muted-foreground">
                  To analyze service usage, improve performance, and develop new features based on user behavior.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <Users className="h-6 w-6 text-[#F3C07B] mb-3" />
                <h3 className="font-semibold mb-2">Communication</h3>
                <p className="text-sm text-muted-foreground">
                  To send you service updates, security alerts, and respond to your support inquiries.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Data Protection */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            Data Protection and Security
          </h2>
          
          <div className="space-y-6">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg">Encryption</CardTitle>
                <CardDescription>
                  All sensitive data is protected using industry-standard encryption:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• AES-256 encryption for API keys and sensitive data at rest</li>
                  <li>• TLS 1.3 encryption for all data in transit</li>
                  <li>• End-to-end encryption for Telegram communications</li>
                  <li>• Secure hash algorithms for password and token storage</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg">Access Control</CardTitle>
                <CardDescription>
                  Strict access controls ensure only authorized personnel can access your data:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Role-based access control (RBAC) system</li>
                  <li>• Multi-factor authentication for administrative access</li>
                  <li>• Regular access reviews and audits</li>
                  <li>• Principle of least privilege implementation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg">Data Retention</CardTitle>
                <CardDescription>
                  We retain your data only as long as necessary:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Trading history: 7 years (for compliance and analysis)</li>
                  <li>• Account activity logs: 90 days (for security monitoring)</li>
                  <li>• Analytics data: 2 years (for service improvement)</li>
                  <li>• Deleted account data: 30 days (for backup recovery)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Data Sharing */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Users className="h-6 w-6 text-accent" />
            Information Sharing and Disclosure
          </h2>
          
          <div className="space-y-4">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Badge variant="secondary" className="bg-red-500/20 text-red-400">
                    Never
                  </Badge>
                  We Do Not Sell Your Personal Information
                </CardTitle>
                <CardDescription>
                  Astergram will never sell, rent, or share your personal information with third parties for marketing purposes.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg">Limited Third-Party Sharing</CardTitle>
                <CardDescription>
                  We only share information when legally required or for essential service functions:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Exchange Partners:</strong> Only to execute trades and retrieve account data (with your consent)</li>
                  <li>• <strong>Service Providers:</strong> Cloud hosting, security, and analytics services under strict confidentiality agreements</li>
                  <li>• <strong>Legal Requirements:</strong> When required by law, regulation, or court order</li>
                  <li>• <strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Your Rights */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <CheckCircle className="h-6 w-6 text-green-400" />
            Your Privacy Rights
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Access and Portability</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  You have the right to request access to your personal information and obtain a copy in a portable format.
                </p>
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">
                  Request Data Export
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Correction and Deletion</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  You can request correction of inaccurate information or deletion of your personal data, subject to legal requirements.
                </p>
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">
                  Request Deletion
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Opt-Out and Consent</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  You can withdraw consent for data processing and opt-out of non-essential communications at any time.
                </p>
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">
                  Manage Preferences
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Complaint and Appeal</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  If you believe your privacy rights have been violated, you can file a complaint with us or relevant authorities.
                </p>
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* International Data Transfers */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Database className="h-6 w-6 text-[#F3C07B]" />
            International Data Transfers
          </h2>
          
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle>Global Service, Local Compliance</CardTitle>
              <CardDescription>
                Astergram is a global service, and your information may be transferred and stored in different countries.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We ensure that all international data transfers comply with applicable data protection laws through:
                </p>
                <ul className="space-y-2">
                  <li>• Standard Contractual Clauses (SCCs) for EU data transfers</li>
                  <li>• Privacy Shield frameworks where applicable</li>
                  <li>• Binding corporate rules for internal transfers</li>
                  <li>• Technical and organizational measures to protect data</li>
                </ul>
                <p>
                  If you have concerns about international data transfers, please contact our privacy team.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Policy Updates */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-yellow-400" />
            Changes to This Privacy Policy
          </h2>
          
          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">We will notify you of significant changes by:</h4>
                  <ul className="space-y-1">
                    <li>• Posting the updated policy on this page</li>
                    <li>• Sending notifications through Telegram</li>
                    <li>• Updating the "Last updated" date at the top</li>
                    <li>• Sending email notifications for major changes</li>
                  </ul>
                </div>
                <p>
                  We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            Contact Us
          </h2>
          
          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
                  please contact our privacy team:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Privacy Contact</h4>
                    <p className="text-sm text-muted-foreground">
                      Email: privacy@astergram.com<br />
                      Telegram: @astergram_privacy
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Data Protection Officer</h4>
                    <p className="text-sm text-muted-foreground">
                      Email: dpo@astergram.com<br />
                      Response time: 48 hours
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    For urgent privacy concerns or data breach notifications, please use the emergency contact channels 
                    available in our Telegram bot or contact us directly at security@astergram.com.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}