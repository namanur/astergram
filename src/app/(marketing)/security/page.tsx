import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Shield, Lock, Users, Eye, Key, Database, AlertTriangle, CheckCircle, XCircle } from "lucide-react"

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="border-b border-border py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
              <div>
                <h1 className="text-3xl font-bold">Security</h1>
                <p className="text-muted-foreground">Your security and privacy are our top priorities</p>
              </div>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              <Shield className="mr-2 h-4 w-4" />
              Open in Telegram
            </Button>
          </div>
        </div>
      </section>

      {/* Hero Security Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
              <Shield className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-4">Security First Architecture</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Astergram is built with a non-custodial architecture that ensures your funds remain secure 
            and under your control at all times.
          </p>
        </div>
      </section>

      {/* Non-Custodial Architecture */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">Non-Custodial Architecture</h2>
              </div>
              
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    Your Funds Stay Secure
                  </CardTitle>
                  <CardDescription>
                    Astergram never holds your funds. All trades are executed directly on your connected exchange accounts. 
                    You maintain full control over your assets at all times.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-5 w-5 text-accent" />
                    Full Transparency
                  </CardTitle>
                  <CardDescription>
                    Every trade, balance check, and operation is logged and visible to you. 
                    No hidden fees, no surprise movements—complete transparency in all operations.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-[#F3C07B]" />
                    No Single Point of Failure
                  </CardTitle>
                  <CardDescription>
                    By operating non-custodially, we eliminate single points of failure. 
                    Even if our service experiences issues, your funds remain safe on the exchange.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
              <Card className="relative border-border bg-card">
                <CardHeader>
                  <CardTitle>How It Works</CardTitle>
                  <CardDescription>The non-custodial flow explained</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">You Connect Exchange</h4>
                      <p className="text-sm text-muted-foreground">
                        Link your exchange account with read-only and trading permissions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-accent">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">You Send Commands</h4>
                      <p className="text-sm text-muted-foreground">
                        Send trading commands through Telegram to our bot
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#F3C07B]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-[#F3C07B]">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Bot Executes on Exchange</h4>
                      <p className="text-sm text-muted-foreground">
                        Bot forwards your commands to the exchange for execution
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Funds Never Leave Exchange</h4>
                      <p className="text-sm text-muted-foreground">
                        Your assets remain on the exchange at all times
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* API Key Security */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Card className="border-border bg-card">
                <CardHeader>
                  <Key className="h-8 w-8 text-accent mb-2" />
                  <CardTitle>API Key Security</CardTitle>
                  <CardDescription>
                    Your exchange API keys are protected with enterprise-grade security
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-card rounded-lg border border-border">
                      <span className="text-sm">Encryption</span>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-400">AES-256</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-card rounded-lg border border-border">
                      <span className="text-sm">Storage</span>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-400">Encrypted</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-card rounded-lg border border-border">
                      <span className="text-sm">Access Control</span>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-400">Role-Based</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-card rounded-lg border border-border">
                      <span className="text-sm">Audit Trail</span>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-400">Complete</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-bold">Minimal Permissions Principle</h2>
              </div>
              
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle>Least Privilege Access</CardTitle>
                  <CardDescription>
                    We follow the principle of least privilege, requesting only the minimum permissions 
                    necessary for the bot to function effectively.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle>Permission Isolation</CardTitle>
                  <CardDescription>
                    Each API key is isolated to specific functions. Trading permissions are separate 
                    from withdrawal capabilities, which are never requested.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle>Regular Audits</CardTitle>
                  <CardDescription>
                    Our permission system undergoes regular security audits to ensure 
                    compliance with best practices and industry standards.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Bot Permissions Matrix */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="h-8 w-8 text-[#F3C07B]" />
              <h2 className="text-3xl font-bold">Bot Permissions Matrix</h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Complete transparency about what our bot can and cannot do
            </p>
          </div>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle>Exchange API Permissions</CardTitle>
              <CardDescription>
                Detailed breakdown of required and restricted permissions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4 p-4 bg-muted/30 rounded-lg">
                  <div className="font-semibold">Permission</div>
                  <div className="font-semibold text-center">Required</div>
                  <div className="font-semibold text-center">Purpose</div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 p-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4 text-primary" />
                    <span>View Balance</span>
                  </div>
                  <div className="text-center">
                    <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Required
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">Display portfolio value and positions</div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 p-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    <Database className="h-4 w-4 text-primary" />
                    <span>Place Orders</span>
                  </div>
                  <div className="text-center">
                    <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Required
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">Execute buy/sell orders as commanded</div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 p-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>Cancel Orders</span>
                  </div>
                  <div className="text-center">
                    <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Required
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">Cancel open orders for risk management</div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 p-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-400" />
                    <span>Withdraw Funds</span>
                  </div>
                  <div className="text-center">
                    <Badge variant="secondary" className="bg-red-500/20 text-red-400">
                      <XCircle className="h-3 w-3 mr-1" />
                      Blocked
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">Cannot withdraw funds to external addresses</div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 p-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-400" />
                    <span>Account Access</span>
                  </div>
                  <div className="text-center">
                    <Badge variant="secondary" className="bg-red-500/20 text-red-400">
                      <XCircle className="h-3 w-3 mr-1" />
                      Read-Only
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">Cannot modify account settings</div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 p-4">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-400" />
                    <span>API Key Management</span>
                  </div>
                  <div className="text-center">
                    <Badge variant="secondary" className="bg-red-500/20 text-red-400">
                      <XCircle className="h-3 w-3 mr-1" />
                      Blocked
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">Cannot create or manage API keys</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Security Best Practices */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Security Best Practices</h2>
            <p className="text-lg text-muted-foreground">
              Additional measures we take to keep your trading experience secure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-border bg-card">
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Regular Security Audits</CardTitle>
                <CardDescription>
                  Our codebase and infrastructure undergo regular security audits by third-party experts.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <Lock className="h-8 w-8 text-accent mb-2" />
                <CardTitle>Rate Limiting</CardTitle>
                <CardDescription>
                  Advanced rate limiting prevents abuse and protects against unauthorized access.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <Users className="h-8 w-8 text-[#F3C07B] mb-2" />
                <CardTitle>IP Whitelisting</CardTitle>
                <CardDescription>
                  Optional IP whitelisting adds an extra layer of security to your API connections.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <Eye className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Activity Monitoring</CardTitle>
                <CardDescription>
                  24/7 monitoring of all bot activities with instant alerting for suspicious behavior.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <Database className="h-8 w-8 text-accent mb-2" />
                <CardTitle>Data Encryption</CardTitle>
                <CardDescription>
                  All sensitive data is encrypted in transit and at rest using industry standards.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <AlertTriangle className="h-8 w-8 text-[#F3C07B] mb-2" />
                <CardTitle>Risk Management</CardTitle>
                <CardDescription>
                  Built-in risk management tools help protect your portfolio from significant losses.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Trade with Confidence</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Experience secure, non-custodial trading on Telegram
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Shield className="mr-2 h-5 w-5" />
              Open in Telegram
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              View Documentation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}