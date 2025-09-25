import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Zap, BarChart3, Smartphone, Lock, TrendingUp, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  🚀 Trade Crypto & Stocks on Telegram
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-[#F3C07B] bg-clip-text text-transparent">
                  Astergram
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Professional trading bot for Telegram. Execute trades, manage positions, and track markets—all within your favorite messaging app.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
                  <Smartphone className="mr-2 h-5 w-5" />
                  Open in Telegram
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Try Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-card border border-border rounded-2xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">BTC/USDT</span>
                    <Badge variant="secondary" className="bg-green-500/20 text-green-400">+2.45%</Badge>
                  </div>
                  <div className="text-2xl font-bold">$43,521.00</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Buy 0.1 BTC</span>
                      <span>$4,352.10</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-accent w-3/4"></div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        Live price feed from major exchanges
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Markets Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Supported Markets</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trade 1000+ cryptocurrencies and major stocks across multiple exchanges
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['BTC', 'ETH', 'SOL', 'BNB', 'XRP', 'ADA', 'DOT', 'AVAX', 'MATIC', 'LINK', 'UNI', 'AAVE'].map((coin) => (
              <Card key={coin} className="border-border bg-card hover:bg-card/80 transition-colors">
                <CardContent className="p-4 text-center">
                  <div className="font-semibold">{coin}</div>
                  <div className="text-sm text-muted-foreground">/USDT</div>
                  <div className="text-xs text-green-400 mt-1">+{Math.floor(Math.random() * 5) + 1}%</div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Browse All Markets
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start trading in minutes with our simple 3-step process
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border bg-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <CardTitle>Connect to Telegram</CardTitle>
                <CardDescription>
                  Start a chat with Astergram bot and connect your preferred exchange account
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border bg-card">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-accent">2</span>
                </div>
                <CardTitle>Set Your Strategy</CardTitle>
                <CardDescription>
                  Configure your trading parameters, risk management, and preferred markets
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border bg-card">
              <CardHeader>
                <div className="w-12 h-12 bg-[#F3C07B]/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-[#F3C07B]">3</span>
                </div>
                <CardTitle>Start Trading</CardTitle>
                <CardDescription>
                  Execute trades, monitor positions, and manage your portfolio—all through Telegram
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need for professional trading, right in Telegram
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-border bg-card">
              <CardHeader>
                <Zap className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Lightning Fast</CardTitle>
                <CardDescription>
                  Execute trades in milliseconds with optimized order routing
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border bg-card">
              <CardHeader>
                <Shield className="h-8 w-8 text-accent mb-2" />
                <CardTitle className="text-lg">Non-Custodial</CardTitle>
                <CardDescription>
                  Your funds stay in your exchange account at all times
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border bg-card">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-[#F3C07B] mb-2" />
                <CardTitle className="text-lg">Real-time Data</CardTitle>
                <CardDescription>
                  Live price feeds and market data from major exchanges
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border bg-card">
              <CardHeader>
                <Lock className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Risk Management</CardTitle>
                <CardDescription>
                  Advanced stop-loss, take-profit, and position sizing controls
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border bg-card">
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-accent mb-2" />
                <CardTitle className="text-lg">Portfolio Tracking</CardTitle>
                <CardDescription>
                  Monitor your positions and performance in real-time
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border bg-card">
              <CardHeader>
                <Users className="h-8 w-8 text-[#F3C07B] mb-2" />
                <CardTitle className="text-lg">Multi-Exchange</CardTitle>
                <CardDescription>
                  Connect and trade across multiple exchanges simultaneously
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Security First</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your security and privacy are our top priorities
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Card className="border-border bg-card">
                <CardHeader>
                  <Shield className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Non-Custodial Architecture</CardTitle>
                  <CardDescription>
                    Astergram never holds your funds. All trades are executed directly on your connected exchange accounts.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-border bg-card">
                <CardHeader>
                  <Lock className="h-6 w-6 text-accent mb-2" />
                  <CardTitle>API Key Security</CardTitle>
                  <CardDescription>
                    Exchange API keys are encrypted and stored securely. Minimal required permissions ensure maximum safety.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-border bg-card">
                <CardHeader>
                  <Users className="h-6 w-6 text-[#F3C07B] mb-2" />
                  <CardTitle>Transparent Operations</CardTitle>
                  <CardDescription>
                    Full visibility into all bot operations and trade executions with detailed logging.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">Bot Permissions</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">View Balance</span>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-400">Required</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Place Orders</span>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-400">Required</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Cancel Orders</span>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-400">Required</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Withdraw Funds</span>
                  <Badge variant="secondary" className="bg-red-500/20 text-red-400">Not Required</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Account Access</span>
                  <Badge variant="secondary" className="bg-red-500/20 text-red-400">Read-Only</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Trading?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of traders using Astergram for professional trading on Telegram
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
              <Smartphone className="mr-2 h-5 w-5" />
              Open in Telegram
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <BarChart3 className="mr-2 h-5 w-5" />
              Try Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Astergram</h3>
              <p className="text-muted-foreground">
                Professional trading bot for Telegram. Trade crypto and stocks with confidence.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Markets</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Status</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Resources</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Risk Disclosure</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Astergram. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}