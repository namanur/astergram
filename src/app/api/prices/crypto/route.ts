import { NextResponse } from 'next/server'

export const revalidate = 0 // no caching

export async function GET() {
  const map: Record<string, {id: string, name: string}> = {
    BTC: { id: 'bitcoin', name: 'Bitcoin' },
    ETH: { id: 'ethereum', name: 'Ethereum' },
    SOL: { id: 'solana', name: 'Solana' },
    BNB: { id: 'binancecoin', name: 'BNB' },
    XRP: { id: 'ripple', name: 'Ripple' },
    ADA: { id: 'cardano', name: 'Cardano' },
    DOT: { id: 'polkadot', name: 'Polkadot' },
  }
  const ids = Object.values(map).map(x => x.id).join(',')
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true`
  const res = await fetch(url, { next: { revalidate: 0 } })
  const json = await res.json()
  const items = Object.entries(map).map(([sym, {id, name}]) => ({
    symbol: sym,
    name,
    price: json?.[id]?.usd ?? 0,
    change: json?.[id]?.usd_24h_change ?? 0,
    type: 'crypto' as const
  }))
  return NextResponse.json({ items })
}
