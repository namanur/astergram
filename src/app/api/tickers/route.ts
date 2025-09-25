// src/app/api/tickers/route.ts
import { NextResponse } from "next/server";

const BINANCE_URL =
  'https://api.binance.com/api/v3/ticker/24hr?symbols=["BTCUSDT","ETHUSDT","SOLUSDT","BNBUSDT"]';

export const dynamic = "force-dynamic"; // ensure no caching on Vercel
export const revalidate = 0;

export async function GET() {
  try {
    const res = await fetch(BINANCE_URL, {
      headers: { "content-type": "application/json" },
      // avoid Edge caching
      cache: "no-store",
    });
    if (!res.ok) {
      return NextResponse.json({ error: "upstream error" }, { status: 502 });
    }
    const data = await res.json();
    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
}
