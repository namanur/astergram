import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Activity, Server, Database, Zap, AlertTriangle, CheckCircle, XCircle, Clock, RefreshCw } from "lucide-react"

export default function StatusPage() {
  // Mock status data
  const systemStatus = {
    overall: "operational",
    uptime: "99.9%",
    lastUpdated: "2 minutes ago",
    responseTime: "45ms"
  }

  const services = [
    {
      name: "Telegram Bot",
      status: "operational",
      responseTime: "32ms",
      uptime: "99.99%",
      description: "Core bot functionality and command processing"
    },
    {
      name: "Exchange API",
      status: "operational", 
      responseTime: "67ms",
      uptime: "99.95%",
      description: "Connectivity to supported exchanges"
    },
    {
      name: "Market Data",
      status: "degraded",
      responseTime: "234ms",
      uptime: "98.8%",
      description: "Real-time price feeds and market data"
    },
    {
      name: "Database",
      status: "operational",
      responseTime: "12ms",
      uptime: "100%",
      description: "User data and configuration storage"
    },
    {
      name: "API Gateway",
      status: "operational",
      responseTime: "28ms",
      uptime: "99.98%",
      description: "Request routing and load balancing"
    },
    {
      name: "Monitoring",
      status: "operational",
      responseTime: "15ms",
      uptime: "100%",
      description: "System health monitoring and alerting"
    }
  ]

  const exchanges = [
    { name: "Binance", status: "operational", latency: "45ms" },
    { name: "Coinbase", status: "operational", latency: "67ms" },
    { name: "Kraken", status: "operational", latency: "89ms" },
    { name: "KuCoin", status: "degraded", latency: "234ms" },
    { name: "Huobi", status: "operational", latency: "56ms" },
    { name: "OKX", status: "operational", latency: "78ms" },
    { name: "Bitfinex", status: "operational", latency: "92ms" },
    { name: "Gate.io", status: "operational", latency: "103ms" }
  ]

  const incidents = [
    {
      title: "Market Data Latency",
      status: "investigating",
      severity: "medium",
      started: "15 minutes ago",
      description: "Increased latency in market data feeds affecting some price updates",
      updates: [
        { time: "15 min ago", message: "Investigating increased market data latency" },
        { time: "10 min ago", message: "Identified potential cause in data provider" },
        { time: "5 min ago", message: "Working on resolution, some exchanges affected" }
      ]
    },
    {
      title: "Scheduled Maintenance",
      status: "completed",
      severity: "low",
      started: "2 hours ago",
      description: "Database optimization completed successfully",
      updates: [
        { time: "2 hours ago", message: "Scheduled maintenance started" },
        { time: "1.5 hours ago", message: "Database optimization in progress" },
        { time: "1 hour ago", message: "Maintenance completed successfully" }
      ]
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational":
        return "bg-green-500/20 text-green-400"
      case "degraded":
        return "bg-yellow-500/20 text-yellow-400"
      case "outage":
        return "bg-red-500/20 text-red-400"
      case "investigating":
        return "bg-blue-500/20 text-blue-400"
      default:
        return "bg-gray-500/20 text-gray-400"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="h-4 w-4" />
      case "degraded":
        return <Clock className="h-4 w-4" />
      case "outage":
        return <XCircle className="h-4 w-4" />
      case "investigating":
        return <AlertTriangle className="h-4 w-4" />
      default:
        return <Activity className="h-4 w-4" />
    }
  }

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
                <h1 className="text-3xl font-bold">System Status</h1>
                <p className="text-muted-foreground">Real-time monitoring of Astergram services</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className={getStatusColor(systemStatus.overall)}>
                {getStatusIcon(systemStatus.overall)}
                {systemStatus.overall.charAt(0).toUpperCase() + systemStatus.overall.slice(1)}
              </Badge>
              <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">
                <RefreshCw className="mr-2 h-4 w-4" />
                Refresh
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overall Status */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">System Status</span>
                  <Badge variant="secondary" className={getStatusColor(systemStatus.overall)}>
                    {systemStatus.overall.charAt(0).toUpperCase() + systemStatus.overall.slice(1)}
                  </Badge>
                </div>
                <div className="text-2xl font-bold">All Systems</div>
                <div className="text-sm text-muted-foreground">Operational</div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Uptime</span>
                  <Activity className="h-4 w-4 text-green-400" />
                </div>
                <div className="text-2xl font-bold">{systemStatus.uptime}</div>
                <div className="text-sm text-muted-foreground">Last 30 days</div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Response Time</span>
                  <Zap className="h-4 w-4 text-primary" />
                </div>
                <div className="text-2xl font-bold">{systemStatus.responseTime}</div>
                <div className="text-sm text-muted-foreground">Average</div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Last Updated</span>
                  <RefreshCw className="h-4 w-4 text-accent" />
                </div>
                <div className="text-2xl font-bold">{systemStatus.lastUpdated}</div>
                <div className="text-sm text-muted-foreground">Auto-refresh</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Status */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <Server className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Services</h2>
          </div>

          <div className="grid gap-4">
            {services.map((service, index) => (
              <Card key={index} className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(service.status)}
                        <span className="font-semibold">{service.name}</span>
                      </div>
                      <Badge variant="secondary" className={getStatusColor(service.status)}>
                        {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <span>{service.responseTime}</span>
                      <span>{service.uptime} uptime</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Exchange Status */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <Database className="h-8 w-8 text-accent" />
            <h2 className="text-3xl font-bold">Exchange Connectivity</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {exchanges.map((exchange, index) => (
              <Card key={index} className="border-border bg-card">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">{exchange.name}</span>
                    <Badge variant="secondary" className={getStatusColor(exchange.status)}>
                      {getStatusIcon(exchange.status)}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">{exchange.latency}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Incidents */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <AlertTriangle className="h-8 w-8 text-[#F3C07B]" />
            <h2 className="text-3xl font-bold">Recent Incidents</h2>
          </div>

          <div className="space-y-6">
            {incidents.map((incident, index) => (
              <Card key={index} className="border-border bg-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      {incident.title}
                      <Badge variant="secondary" className={getStatusColor(incident.status)}>
                        {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                      </Badge>
                    </CardTitle>
                    <div className="text-sm text-muted-foreground">
                      Started {incident.started}
                    </div>
                  </div>
                  <CardDescription>{incident.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Updates:</h4>
                    {incident.updates.map((update, updateIndex) => (
                      <div key={updateIndex} className="flex items-start gap-3 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="text-muted-foreground">{update.time} - </span>
                          <span>{update.message}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Data */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Historical Performance</h2>
            <p className="text-lg text-muted-foreground">
              System uptime and performance over the past 30 days
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle>Uptime</CardTitle>
                <CardDescription>System availability</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-400">99.9%</div>
                <div className="text-sm text-muted-foreground">Last 30 days</div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle>Incidents</CardTitle>
                <CardDescription>Service disruptions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-yellow-400">3</div>
                <div className="text-sm text-muted-foreground">Resolved this month</div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle>Avg Response</CardTitle>
                <CardDescription>System response time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">45ms</div>
                <div className="text-sm text-muted-foreground">Across all services</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Monitor our status</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Subscribe to status updates and get notified about service disruptions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Activity className="mr-2 h-5 w-5" />
              Subscribe to Updates
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <RefreshCw className="mr-2 h-5 w-5" />
              RSS Feed
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}