import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, AlertTriangle, Shield, TrendingUp, TrendingDown, BarChart3, Users, Database, Eye, Lock } from "lucide-react"

export default function RiskDisclosurePage() {
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
              <h1 className="text-3xl font-bold">Risk Disclosure</h1>
              <p className="text-muted-foreground">Important information about trading risks</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-4xl px-4 py-12">
        {/* Warning Banner */}
        <Card className="border-red-500/20 bg-red-500/5 mb-8">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-red-400 mb-2">Important Risk Warning</h2>
                <p className="text-muted-foreground">
                  Trading cryptocurrencies, stocks, and other financial instruments involves significant risk and 
                  may not be suitable for all investors. You could lose all of your invested capital. 
                  Please read this disclosure carefully before using Astergram.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* General Trading Risks */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-red-400" />
            General Trading Risks
          </h2>
          
          <div className="space-y-6">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingDown className="h-5 w-5 text-red-400" />
                  Market Risk
                </CardTitle>
                <CardDescription>
                  Financial markets are inherently volatile and unpredictable
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Prices can fluctuate rapidly and significantly</li>
                  <li>• Market volatility can result in substantial losses</li>
                  <li>• Liquidity may dry up during extreme market conditions</li>
                  <li>• Flash crashes and sudden price movements are common in crypto markets</li>
                  <li>• Market sentiment can change quickly due to news and events</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Database className="h-5 w-5 text-yellow-400" />
                  Technical Risk
                </CardTitle>
                <CardDescription>
                  Technology failures can impact trading operations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Exchange outages may prevent order execution</li>
                  <li>• API failures can delay or cancel trading operations</li>
                  <li>• Network connectivity issues may affect bot performance</li>
                  <li>• Software bugs could cause unexpected trading behavior</li>
                  <li>• Cybersecurity threats could compromise trading systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-400" />
                  Operational Risk
                </CardTitle>
                <CardDescription>
                  Human and operational factors can affect trading outcomes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• User error in configuring trading parameters</li>
                  <li>• Misunderstanding of bot commands and features</li>
                  <li>• Inadequate risk management settings</li>
                  <li>• Failure to monitor positions and market conditions</li>
                  <li>• Emotional trading decisions overriding automated systems</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cryptocurrency-Specific Risks */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-primary" />
            Cryptocurrency-Specific Risks
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3 text-red-400">Regulatory Risk</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Regulatory uncertainty and changing laws</li>
                  <li>• Government bans or restrictions</li>
                  <li>• Tax implications and reporting requirements</li>
                  <li>• Licensing and compliance requirements</li>
                  <li>• Cross-border regulatory differences</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3 text-yellow-400">Technology Risk</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Smart contract vulnerabilities and exploits</li>
                  <li>• Blockchain network congestion</li>
                  <li>• 51% attacks and consensus failures</li>
                  <li>• Protocol upgrades and forks</li>
                  <li>• Custodial and wallet security issues</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3 text-blue-400">Market Risk</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Extreme price volatility</li>
                  <li>• Low liquidity in smaller tokens</li>
                  <li>• Market manipulation and pump-and-dump schemes</li>
                  <li>• Correlation with traditional markets</li>
                  <li>• Whales and large holder influence</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3 text-purple-400">Counterparty Risk</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Exchange insolvency or bankruptcy</li>
                  <li>• Exchange hacking or security breaches</li>
                  <li>• Withdrawal restrictions and freezes</li>
                  <li>• Delisting of trading pairs</li>
                  <li>• Exchange operational issues</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Bot-Specific Risks */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Eye className="h-6 w-6 text-accent" />
            Astergram-Specific Risks
          </h2>
          
          <div className="space-y-6">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg">API and Integration Risks</CardTitle>
                <CardDescription>
                  Risks associated with exchange API connections
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-red-400">Security Vulnerabilities</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• API key compromise</li>
                      <li>• Unauthorized access to exchange accounts</li>
                      <li>• Insufficient API permission controls</li>
                      <li>• Weak authentication mechanisms</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-yellow-400">Technical Failures</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Rate limiting and API throttling</li>
                      <li>• Exchange API downtime</li>
                      <li>• Data synchronization issues</li>
                      <li>• Network connectivity problems</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg">Automation Risks</CardTitle>
                <CardDescription>
                  Risks inherent in automated trading systems
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-red-400">Logic Errors</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Incorrect trading algorithm implementation</li>
                      <li>• Flawed risk management parameters</li>
                      <li>• Misinterpretation of market signals</li>
                      <li>• Inadequate error handling</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-400">Execution Risks</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Slippage and price impact</li>
                      <li>• Partial order fills</li>
                      <li>• Order rejection by exchange</li>
                      <li>• Timing delays in execution</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Risk Management */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Shield className="h-6 w-6 text-green-400" />
            Risk Management Recommendations
          </h2>
          
          <div className="space-y-6">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg">Before You Start Trading</CardTitle>
                <CardDescription>
                  Essential steps to take before using Astergram
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Education & Research</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Understand basic trading concepts</li>
                      <li>• Learn about cryptocurrency markets</li>
                      <li>• Study technical and fundamental analysis</li>
                      <li>• Research individual cryptocurrencies</li>
                      <li>• Understand exchange operations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Financial Preparation</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Only invest what you can afford to lose</li>
                      <li>• Diversify your investment portfolio</li>
                      <li>• Maintain emergency funds separately</li>
                      <li>• Set clear investment goals</li>
                      <li>• Understand tax implications</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg">Using Astergram Safely</CardTitle>
                <CardDescription>
                  Best practices for secure and responsible trading
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Security Measures</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Use strong, unique API keys</li>
                      <li>• Enable 2FA on exchange accounts</li>
                      <li>• Regularly rotate API keys</li>
                      <li>• Monitor account activity</li>
                      <li>• Use IP whitelisting when available</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Trading Practices</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Start with small position sizes</li>
                      <li>• Always use stop-loss orders</li>
                      <li>• Set realistic profit targets</li>
                      <li>• Monitor positions regularly</li>
                      <li>• Avoid emotional trading decisions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg">Emergency Procedures</CardTitle>
                <CardDescription>
                  What to do in case of problems or emergencies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-red-400">Security Breach</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Immediately revoke API keys</li>
                      <li>• Contact exchange support</li>
                      <li>• Secure other accounts</li>
                      <li>• Monitor for unauthorized activity</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-yellow-400">Technical Issues</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Check exchange status</li>
                      <li>• Verify network connectivity</li>
                      <li>• Review bot logs</li>
                      <li>• Contact support if needed</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-400">Market Emergency</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Close all positions if necessary</li>
                      <li>• Stop automated trading</li>
                      <li>• Assess market conditions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Legal Disclaimer */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Lock className="h-6 w-6 text-primary" />
            Legal Disclaimer
          </h2>
          
          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <div className="space-y-4 text-muted-foreground">
                <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-red-400">
                  <h3 className="font-semibold text-red-400 mb-2">No Investment Advice</h3>
                  <p className="text-sm">
                    Astergram is a software tool and does not provide investment advice, financial recommendations, 
                    or guarantee any trading results. All trading decisions are made solely by you, the user.
                  </p>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <h3 className="font-semibold text-yellow-400 mb-2">No Warranty or Guarantee</h3>
                  <p className="text-sm">
                    Astergram is provided "as is" without any warranties or guarantees. We do not guarantee 
                    uninterrupted service, error-free operation, or specific trading outcomes.
                  </p>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-blue-400">
                  <h3 className="font-semibold text-blue-400 mb-2">Limitation of Liability</h3>
                  <p className="text-sm">
                    To the maximum extent permitted by law, Astergram and its affiliates shall not be liable 
                    for any direct, indirect, incidental, special, or consequential damages arising from 
                    the use of our service, including but not limited to trading losses.
                  </p>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-green-400">
                  <h3 className="font-semibold text-green-400 mb-2">Jurisdictional Compliance</h3>
                  <p className="text-sm">
                    You are responsible for ensuring that your use of Astergram complies with all applicable 
                    laws and regulations in your jurisdiction. Some countries may restrict or prohibit 
                    cryptocurrency trading.
                  </p>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm">
                    By using Astergram, you acknowledge that you have read, understood, and agreed to 
                    this Risk Disclosure. You confirm that you are trading at your own risk and that 
                    Astergram is not responsible for any trading losses or damages.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact and Support */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Users className="h-6 w-6 text-accent" />
            Need Help?
          </h2>
          
          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Risk Assessment</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    If you're unsure about the risks involved in trading, we recommend:
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Consulting with a financial advisor</li>
                    <li>• Starting with educational resources</li>
                    <li>• Using demo accounts to practice</li>
                    <li>• Beginning with small amounts</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Support Resources</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    For questions about risk management or safe trading practices:
                  </p>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary/10">
                      Contact Support
                    </Button>
                    <Button variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary/10">
                      View Documentation
                    </Button>
                    <Button variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary/10">
                      Join Community
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Final Confirmation */}
        <Card className="border-red-500/20 bg-red-500/5">
          <CardContent className="p-6">
            <div className="text-center">
              <AlertTriangle className="h-12 w-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Final Confirmation Required</h3>
              <p className="text-muted-foreground mb-6">
                Before using Astergram, you must confirm that you have read, understood, and accepted 
                all risks disclosed in this document. Trading involves substantial risk and is not suitable for all investors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white">
                  I Understand the Risks
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Read Documentation
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}