import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, HelpCircle, Shield, Zap, BarChart3, Lock, Users, Database, AlertTriangle, ChevronDown, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function FAQPage() {
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const faqData = [
    {
      category: "Getting Started",
      icon: <Zap className="h-5 w-5" />,
      questions: [
        {
          question: "What is Astergram?",
          answer: "Astergram is a professional trading bot for Telegram that allows you to trade cryptocurrencies and stocks directly through your favorite messaging app. It provides real-time market data, advanced trading features, and robust security measures—all accessible via simple Telegram commands."
        },
        {
          question: "How do I start using Astergram?",
          answer: "Getting started is easy: 1) Click 'Open in Telegram' to start a chat with our bot, 2) Connect your preferred exchange account using API keys, 3) Configure your trading preferences and risk management settings, 4) Start trading with simple commands like /buy, /sell, and /balance."
        },
        {
          question: "Which exchanges are supported?",
          answer: "Astergram supports 15+ major exchanges including Binance, Coinbase Pro, Kraken, KuCoin, Huobi, OKX, and more. We're constantly adding support for additional exchanges based on user demand."
        },
        {
          question: "What markets can I trade?",
          answer: "You can trade 1000+ cryptocurrencies including Bitcoin, Ethereum, Solana, and all major altcoins. Stock trading support is coming soon and will include major companies like Apple, Google, Microsoft, Tesla, and more."
        }
      ]
    },
    {
      category: "Security & Safety",
      icon: <Shield className="h-5 w-5" />,
      questions: [
        {
          question: "Is Astergram safe to use?",
          answer: "Yes, Astergram is built with security as the top priority. We use a non-custodial architecture, meaning your funds never leave your exchange account. API keys are encrypted, we follow the principle of least privilege, and we never request withdrawal permissions."
        },
        {
          question: "What permissions does the bot need?",
          answer: "Astergram only requires essential permissions: View Balance (to show your portfolio), Place Orders (to execute trades), and Cancel Orders (for risk management). We explicitly block and never request Withdraw Funds or Account Access permissions."
        },
        {
          question: "How are my API keys stored?",
          answer: "Your API keys are encrypted using AES-256 encryption and stored securely. They are never shared with third parties and are only used to communicate with your exchange account for executing trades."
        },
        {
          question: "What happens if Astergram goes down?",
          answer: "Since Astergram is non-custodial, your funds remain safe on your exchange even if our service experiences downtime. You can always access your funds directly through your exchange's platform."
        }
      ]
    },
    {
      category: "Trading Features",
      icon: <BarChart3 className="h-5 w-5" />,
      questions: [
        {
          question: "What trading features are available?",
          answer: "Astergram offers comprehensive trading features including market orders, limit orders, stop-loss, take-profit, trailing stops, position sizing, portfolio tracking, real-time price alerts, and advanced risk management tools."
        },
        {
          question: "Can I set up automated trading?",
          answer: "Yes, Astergram supports automated trading features including stop-loss orders, take-profit targets, and trailing stops. You can set these up when placing orders or modify them later for existing positions."
        },
        {
          question: "How do I check my portfolio balance?",
          answer: "Simply send the /balance command to the bot, and it will display your current portfolio value, positions, profit/loss, and asset allocation across all connected exchanges."
        },
        {
          question: "Can I trade on multiple exchanges simultaneously?",
          answer: "Yes, you can connect multiple exchange accounts and trade across all of them from a single Telegram interface. The bot will aggregate your portfolio and allow you to execute trades on any connected exchange."
        }
      ]
    },
    {
      category: "Technical & Support",
      icon: <Users className="h-5 w-5" />,
      questions: [
        {
          question: "What are the system requirements?",
          answer: "Astergram works on any device that can run Telegram, including smartphones, tablets, and desktop computers. You only need an active exchange account with API access and a Telegram account."
        },
        {
          question: "How fast are trade executions?",
          answer: "Trade executions typically take 100-500 milliseconds from command to confirmation, depending on exchange load and network conditions. We use optimized routing to ensure the fastest possible execution times."
        },
        {
          question: "Is there a demo mode available?",
          answer: "Yes, we offer a demo mode that allows you to test all features using simulated funds and real market data. This is perfect for learning the interface and testing strategies without risking real money."
        },
        {
          question: "How can I get support if I need help?",
          answer: "We offer comprehensive support through our documentation, FAQ, and live support channels. You can reach our support team directly through Telegram or email for technical assistance and trading questions."
        }
      ]
    },
    {
      category: "Legal & Compliance",
      icon: <AlertTriangle className="h-5 w-5" />,
      questions: [
        {
          question: "Is Astergram available worldwide?",
          answer: "Astergram is available in most countries, but availability may be restricted in certain jurisdictions due to local regulations. Users are responsible for ensuring compliance with their local laws and regulations regarding cryptocurrency and stock trading."
        },
        {
          question: "Are there any fees for using Astergram?",
          answer: "Astergram offers both free and premium tiers. The free tier includes essential trading features, while the premium tier offers advanced features like priority support, additional exchanges, and enhanced analytics. Exchange trading fees still apply and are set by your exchange."
        },
        {
          question: "What are the risks of using Astergram?",
          answer: "Trading cryptocurrencies and stocks involves significant risk including market volatility, liquidity risk, and potential loss of capital. While Astergram provides security features and risk management tools, users should never invest more than they can afford to lose and should understand the risks involved in trading."
        },
        {
          question: "How does Astergram handle user data?",
          answer: "Astergram collects minimal user data necessary for service operation. We do not sell or share your personal information with third parties. All data is encrypted and stored securely in compliance with privacy regulations. Please review our Privacy Policy for detailed information."
        }
      ]
    }
  ]

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
                <h1 className="text-3xl font-bold">FAQ</h1>
                <p className="text-muted-foreground">Frequently asked questions about Astergram</p>
              </div>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              <HelpCircle className="mr-2 h-4 w-4" />
              Get Support
            </Button>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
              <HelpCircle className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-4">How can we help you?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about Astergram, security, trading features, and more.
          </p>
        </div>
      </section>

      {/* Quick Categories */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {faqData.map((category, index) => (
              <Card key={index} className="border-border bg-card hover:bg-card/80 transition-colors cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <div className="text-primary">{category.icon}</div>
                  </div>
                  <h3 className="font-semibold text-sm">{category.category}</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {category.questions.length} questions
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <div className="text-primary">{category.icon}</div>
                </div>
                <h2 className="text-2xl font-bold">{category.category}</h2>
                <Badge variant="secondary" className="bg-primary/20 text-primary">
                  {category.questions.length} questions
                </Badge>
              </div>

              <div className="space-y-4">
                {category.questions.map((item, questionIndex) => {
                  const itemIndex = categoryIndex * 100 + questionIndex
                  const isExpanded = expandedItems.includes(itemIndex)
                  
                  return (
                    <Card key={questionIndex} className="border-border bg-card">
                      <CardHeader 
                        className="cursor-pointer hover:bg-card/50 transition-colors"
                        onClick={() => toggleItem(itemIndex)}
                      >
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg flex items-center gap-2">
                            <HelpCircle className="h-4 w-4 text-primary" />
                            {item.question}
                          </CardTitle>
                          {isExpanded ? (
                            <ChevronDown className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <ChevronRight className="h-4 w-4 text-muted-foreground" />
                          )}
                        </div>
                      </CardHeader>
                      
                      {isExpanded && (
                        <CardContent className="pt-0">
                          <div className="text-muted-foreground leading-relaxed">
                            {item.answer}
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Help Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Still need help?</h2>
            <p className="text-lg text-muted-foreground">
              Our support team is here to assist you with any questions or issues.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-border bg-card">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Live Support</CardTitle>
                <CardDescription>
                  Get instant help from our support team through Telegram
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Chat with Support
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <Database className="h-8 w-8 text-accent mb-2" />
                <CardTitle>Documentation</CardTitle>
                <CardDescription>
                  Comprehensive guides and API documentation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                  View Documentation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start trading?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of traders using Astergram for secure, professional trading on Telegram
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <BarChart3 className="mr-2 h-5 w-5" />
              Open in Telegram
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Try Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}