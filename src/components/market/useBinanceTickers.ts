// src/components/market/useBinanceTickers.ts
"use client";
import { useEffect, useRef, useState } from "react";

type SymbolKey = "BTC" | "ETH" | "SOL" | "BNB";
type Ticker = {
  symbol: SymbolKey;
  price: number;          // last price
  changePct: number;      // 24h %
  high: number;
  low: number;
  volume: number;
  ts: number;
};

const STREAM_URL =
  "wss://stream.binance.com:9443/stream?streams=btcusdt@ticker/ethusdt@ticker/solusdt@ticker/bnbusdt@ticker";

const mapSymbol = (s: string): SymbolKey | null => {
  if (s === "BTCUSDT") return "BTC";
  if (s === "ETHUSDT") return "ETH";
  if (s === "SOLUSDT") return "SOL";
  if (s === "BNBUSDT") return "BNB";
  return null;
};

export function useBinanceTickers() {
  const [data, setData] = useState<Record<SymbolKey, Ticker> | null>(null);
  const wsRef = useRef<WebSocket | null>(null);

  // prime from our server (no CORS issues)
  async function primeFromServer() {
    try {
      const res = await fetch("/api/tickers", { cache: "no-store" });
      const arr: any[] = await res.json();
      const next: any = {};
      for (const row of arr) {
        const key = mapSymbol(row.symbol);
        if (!key) continue;
        next[key] = {
          symbol: key,
          price: parseFloat(row.lastPrice),
          changePct: parseFloat(row.priceChangePercent),
          high: parseFloat(row.highPrice),
          low: parseFloat(row.lowPrice),
          volume: parseFloat(row.volume),
          ts: Date.now(),
        } as Ticker;
      }
      setData((prev) => ({ ...(prev ?? {}), ...next }));
    } catch {
      // ignore
    }
  }

  useEffect(() => {
    primeFromServer();

    const ws = new WebSocket(STREAM_URL);
    wsRef.current = ws;

    ws.onmessage = (evt) => {
      try {
        const msg = JSON.parse(evt.data);
        const d = msg?.data;
        if (!d?.s) return;
        const key = mapSymbol(d.s);
        if (!key) return;

        const t: Ticker = {
          symbol: key,
          price: parseFloat(d.c), // last
          changePct: parseFloat(d.P),
          high: parseFloat(d.h),
          low: parseFloat(d.l),
          volume: parseFloat(d.v),
          ts: Date.now(),
        };

        setData((prev) => ({ ...(prev ?? {}), [key]: t }));
      } catch {
        // ignore
      }
    };

    return () => {
      try {
        ws.close();
      } catch {}
      wsRef.current = null;
    };
  }, []);

  return data;
}
