'use client'
import React, { useEffect, useMemo, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, ArrowLeft, TrendingUp, TrendingDown, BarChart3 } from "lucide-react"

type Market = {
  symbol: string
  name: string
  price: number
  change: number
  volume?: string
  type: 'crypto' | 'stock'
}

const CRYPTO_MAP: Record<string, {id: string, name: string}> = {
  BTC: { id: 'bitcoin', name: 'Bitcoin' },
  ETH: { id: 'ethereum', name: 'Ethereum' },
  SOL: { id: 'solana', name: 'Solana' },
  BNB: { id: 'binancecoin', name: 'BNB' },
  XRP: { id: 'ripple', name: 'Ripple' },
  ADA: { id: 'cardano', name: 'Cardano' },
  DOT: { id: 'polkadot', name: 'Polkadot' },
}

const STOCKS: Record<string, string> = {
  AAPL: 'Apple Inc.',
  TSLA: 'Tesla Inc.',
  META: 'Meta Platforms',
  NVDA: 'NVIDIA Corp.',
  NFLX: 'Netflix Inc.',
}

export default function MarketsPage() {
  const [query, setQuery] = useState('')
  const [data, setData] = useState<Market[]>([])
  const [loading, setLoading] = useState(false)

  const symbolsCrypto = Object.keys(CRYPTO_MAP)
  const symbolsStocks = Object.keys(STOCKS)

  async function fetchCrypto() {
    const ids = symbolsCrypto.map(s => CRYPTO_MAP[s].id).join(',')
    const url = `/api/prices/crypto`
    const res = await fetch(url, { cache: 'no-store' })
    const json = await res.json()
    const items: Market[] = symbolsCrypto.map(sym => {
      const { id, name } = CRYPTO_MAP[sym]
      const row = json.items.find((it: any) => it.symbol===sym) || {}
      return { symbol: sym, name, price: row.price ?? 0, change: row.change ?? 0, type: 'crypto' as const }
    })
    return items
  }

  async function fetchStocks() {
    const url = `/api/prices/stocks`
    const res = await fetch(url, { cache: 'no-store' })
    const json = await res.json()
    const items: Market[] = json.items
    return items
  }

  async function load() {
    try {
      setLoading(true)
      const [c, s] = await Promise.all([fetchCrypto(), fetchStocks()])
      setData([...c, ...s])
    } catch (e) {
      console.error('Price fetch failed', e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
    const id = setInterval(load, 15000) // refresh every 15s
    return () => clearInterval(id)
  }, [])

  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return data.filter(d => d.symbol.toLowerCase().includes(q) || d.name.toLowerCase().includes(q))
  }, [query, data])

  function fmt(n: number) {
    return n?.toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 6 })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="border-b border-border py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-6">
            <a href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft size={18} /> Back
            </a>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="uppercase">Live</Badge>
              <BarChart3 className="opacity-70" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 opacity-70" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search coins or stocks…"
                className="pl-9"
              />
            </div>
            <Button className="bounce">Refresh</Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((m) => {
          const up = m.change >= 0
          return (
            <Card key={m.symbol} className="market-card hover:shadow-lg bounce">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{m.symbol} <span className="text-muted-foreground text-sm font-normal ml-2">{m.name}</span></span>
                  <Badge variant={up ? "default" : "destructive"} className={up ? "bg-green-600" : "bg-red-600"}>
                    {up ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                    <span className="ml-1">{(m.change ?? 0).toFixed(2)}%</span>
                  </Badge>
                </CardTitle>
                <CardDescription className="capitalize">{m.type}</CardDescription>
              </CardHeader>
              <CardContent className="text-2xl font-semibold">{fmt(m.price)}</CardContent>
            </Card>
          )
        })}
        {filtered.length === 0 && !loading && (
          <p className="text-sm text-muted-foreground">No results. Try another symbol.</p>
        )}
      </section>
    </div>
  )
}
