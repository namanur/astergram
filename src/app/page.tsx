// src/app/page.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Shield,
  Zap,
  BarChart3,
  Smartphone,
  Lock,
  TrendingUp,
  Users,
} from "lucide-react";

// Live components you already added
import HeroPriceSlider from "@/components/market/HeroPriceSlider";
import MarketsGrid from "@/components/market/MarketsGrid";

/**
 * Orange brand tokens (pulled from your logo):
 *  - from: #FFB33F (warm mango)
 *  - to:   #FF6A00 (deep orange)
 * You can tweak once your Tailwind theme tokens are finalized.
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      {/* ===== Header ===== */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
        <div className="container mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8">
              {/* Put your mark in /public/logo-ag.png */}
              <Image
                src="/logo-ag.png"
                alt="Astergram"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-lg font-semibold tracking-tight">
              Astergram
            </span>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
            <a href="#markets" className="hover:text-white transition-colors">
              Markets
            </a>
            <a href="#how" className="hover:text-white transition-colors">
              How it works
            </a>
            <a href="#features" className="hover:text-white transition-colors">
              Features
            </a>
            <a href="#security" className="hover:text-white transition-colors">
              Security
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              variant="outline"
              className="hidden sm:inline-flex border-white/20 text-white hover:bg-white/10"
            >
              <BarChart3 className="mr-2 h-4 w-4" />
              Try Demo
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-[#FFB33F] to-[#FF6A00] text-black font-semibold hover:opacity-90"
            >
              <Smartphone className="mr-2 h-4 w-4" />
              Open in Telegram
            </Button>
          </div>
        </div>
      </header>

      {/* ===== Page top orange glow ===== */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 -top-40 h-72 opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, #FFB33F 0%, #FF6A00 40%, transparent 70%)",
        }}
      />

      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden py-20 px-4">
        {/* subtle backdrop grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,179,63,0.10),transparent_60%)]"
        />
        <div className="container mx-auto max-w-6xl relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left copy */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit bg-white/10">
                  🚀 Trade Crypto & Stocks on Telegram
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-[#FFB33F] via-[#FF8A22] to-[#FF6A00] bg-clip-text text-transparent">
                    Astergram
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-zinc-300 max-w-lg">
                  Professional trading bot for Telegram. Execute trades, manage
                  positions, and track markets — all within your favorite
                  messaging app.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-[#FFB33F] to-[#FF6A00] text-black font-semibold hover:opacity-90">
                  <Smartphone className="mr-2 h-5 w-5" />
                  Open in Telegram
                </Button>
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Try Demo
                </Button>
              </div>

              <p className="text-sm text-zinc-400">
                Tip: On the right, click the dots or coin buttons to switch
                instantly. Prices update in real time.
              </p>
            </div>

            {/* Right: live slider */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFB33F]/15 to-[#FF6A00]/15 rounded-2xl blur-3xl" />
              <div className="relative">
                <HeroPriceSlider />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Markets ===== */}
      <section id="markets" className="py-20 px-4 bg-white/[0.02]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Supported Markets
            </h2>
            <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto">
              Trade 1000+ cryptocurrencies and major stocks across multiple
              exchanges
            </p>
          </div>

          {/* LIVE grid */}
          <MarketsGrid
            symbols={[
              "BTC",
              "ETH",
              "SOL",
              "BNB",
              "XRP",
              "ADA",
              "DOT",
              "AVAX",
              "MATIC",
              "LINK",
              "UNI",
              "AAVE",
            ]}
          />

          <div className="text-center mt-10">
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              Browse All Markets
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ===== How it works ===== */}
      <section id="how" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto">
              Start trading in minutes with our simple 3-step process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/[0.03] border-white/10">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br from-[#FFB33F]/25 to-[#FF6A00]/25">
                  <span className="text-2xl font-bold text-[#FFB33F]">1</span>
                </div>
                <CardTitle>Connect to Telegram</CardTitle>
                <CardDescription>
                  Start a chat with Astergram bot and connect your preferred
                  exchange account.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/[0.03] border-white/10">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br from-[#FFB33F]/25 to-[#FF6A00]/25">
                  <span className="text-2xl font-bold text-[#FF8A22]">2</span>
                </div>
                <CardTitle>Set Your Strategy</CardTitle>
                <CardDescription>
                  Configure trading parameters, risk management, and preferred
                  markets.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/[0.03] border-white/10">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br from-[#FFB33F]/25 to-[#FF6A00]/25">
                  <span className="text-2xl font-bold text-[#FF6A00]">3</span>
                </div>
                <CardTitle>Start Trading</CardTitle>
                <CardDescription>
                  Execute trades, monitor positions, and manage your portfolio —
                  all through Telegram.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* ===== Features ===== */}
      <section id="features" className="py-20 px-4 bg-white/[0.02]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Features
            </h2>
            <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto">
              Everything you need for professional trading, right in Telegram
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white/[0.03] border-white/10">
              <CardHeader>
                <Zap className="h-8 w-8 text-[#FFB33F] mb-2" />
                <CardTitle className="text-lg">Lightning Fast</CardTitle>
                <CardDescription>
                  Execute trades in milliseconds with optimized order routing.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/[0.03] border-white/10">
              <CardHeader>
                <Shield className="h-8 w-8 text-[#FF8A22] mb-2" />
                <CardTitle className="text-lg">Non-Custodial</CardTitle>
                <CardDescription>
                  Your funds stay in your exchange account at all times.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/[0.03] border-white/10">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-[#FF6A00] mb-2" />
                <CardTitle className="text-lg">Real-time Data</CardTitle>
                <CardDescription>
                  Live price feeds and market data from major exchanges.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/[0.03] border-white/10">
              <CardHeader>
                <Lock className="h-8 w-8 text-[#FFB33F] mb-2" />
                <CardTitle className="text-lg">Risk Management</CardTitle>
                <CardDescription>
                  Advanced stop-loss, take-profit, and position sizing controls.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/[0.03] border-white/10">
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-[#FF8A22] mb-2" />
                <CardTitle className="text-lg">Portfolio Tracking</CardTitle>
                <CardDescription>
                  Monitor your positions and performance in real time.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/[0.03] border-white/10">
              <CardHeader>
                <Users className="h-8 w-8 text-[#FF6A00] mb-2" />
                <CardTitle className="text-lg">Multi-Exchange</CardTitle>
                <CardDescription>
                  Connect and trade across multiple exchanges simultaneously.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* ===== Security ===== */}
      <section id="security" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Security First
            </h2>
            <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto">
              Your security and privacy are our top priorities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Card className="bg-white/[0.03] border-white/10">
                <CardHeader>
                  <Shield className="h-6 w-6 text-[#FFB33F] mb-2" />
                  <CardTitle>Non-Custodial Architecture</CardTitle>
                  <CardDescription>
                    Astergram never holds your funds. All trades are executed
                    directly on your connected exchange accounts.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-white/[0.03] border-white/10">
                <CardHeader>
                  <Lock className="h-6 w-6 text-[#FF8A22] mb-2" />
                  <CardTitle>API Key Security</CardTitle>
                  <CardDescription>
                    Exchange API keys are encrypted and stored securely with
                    minimal required permissions.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-white/[0.03] border-white/10">
                <CardHeader>
                  <Users className="h-6 w-6 text-[#FF6A00] mb-2" />
                  <CardTitle>Transparent Operations</CardTitle>
                  <CardDescription>
                    Full visibility into all bot operations and trade
                    executions with detailed logging.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">Bot Permissions</h3>
              <div className="space-y-3 text-zinc-300">
                <Row label="View Balance" badge="Required" tone="good" />
                <Row label="Place Orders" badge="Required" tone="good" />
                <Row label="Cancel Orders" badge="Required" tone="good" />
                <Row label="Withdraw Funds" badge="Not Required" tone="bad" />
                <Row label="Account Access" badge="Read-Only" tone="bad" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="border-t border-white/10 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative h-6 w-6">
                  <Image
                    src="/logo-ag.png"
                    alt="Astergram"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold">Astergram</h3>
              </div>
              <p className="text-zinc-400">
                Professional trading bot for Telegram. Trade crypto and stocks
                with confidence.
              </p>
            </div>
            <Links
              title="Product"
              items={["Features", "Markets", "Security", "Status"]}
            />
            <Links
              title="Resources"
              items={["Documentation", "API Reference", "FAQ", "Support"]}
            />
            <Links
              title="Legal"
              items={["Privacy Policy", "Terms of Service", "Risk Disclosure"]}
            />
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-zinc-400">
            <p>&copy; {new Date().getFullYear()} Astergram. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ------- tiny helpers (local to this file) ------- */

function Row({
  label,
  badge,
  tone,
}: {
  label: string;
  badge: string;
  tone: "good" | "bad";
}) {
  const cls =
    tone === "good"
      ? "bg-emerald-500/15 text-emerald-300 border-emerald-700/30"
      : "bg-rose-500/15 text-rose-300 border-rose-700/30";
  return (
    <div className="flex items-center justify-between">
      <span className="text-zinc-400">{label}</span>
      <span className={`text-xs px-2 py-1 rounded-full border ${cls}`}>
        {badge}
      </span>
    </div>
  );
}

function Links({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="space-y-3">
      <h4 className="font-semibold">{title}</h4>
      <ul className="space-y-2 text-zinc-400">
        {items.map((t) => (
          <li key={t}>
            <a href="#" className="hover:text-white transition-colors">
              {t}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
