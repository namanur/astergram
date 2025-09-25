import { NextResponse } from 'next/server'

export const revalidate = 0 // disable cache

export async function GET() {
  const STOCKS: Record<string,string> = {
    AAPL: 'Apple Inc.',
    TSLA: 'Tesla Inc.',
    META: 'Meta Platforms',
    NVDA: 'NVIDIA Corp.',
    NFLX: 'Netflix Inc.',
  }
  const symbols = Object.keys(STOCKS).join(',')
  const url = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${symbols}`
  const res = await fetch(url, { cache: 'no-store' })
  const json = await res.json()
  const result = json?.quoteResponse?.result ?? []
  const items = result.map((r: any) => ({
    symbol: r.symbol,
    name: STOCKS[r.symbol] || r.shortName || r.symbol,
    price: r.regularMarketPrice ?? 0,
    change: r.regularMarketChangePercent ?? 0,
    type: 'stock' as const
  }))
  return NextResponse.json({ items })
}
