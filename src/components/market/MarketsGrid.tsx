"use client";
import { useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useBinanceTickers } from "./useBinanceTickers";
import { fmtPct, fmtPrice } from "@/lib/number";

type SymbolKey = "BTC" | "ETH" | "SOL" | "BNB" | "XRP" | "ADA" | "DOT" | "AVAX" | "MATIC" | "LINK" | "UNI" | "AAVE";

const BINANCE_MAP: Record<string, string> = {
  BTC: "btcusdt",
  ETH: "ethusdt",
  SOL: "solusdt",
  BNB: "bnbusdt",
  XRP: "xrpusdt",
  ADA: "adausdt",
  DOT: "dotusdt",
  AVAX: "avaxusdt",
  MATIC: "maticusdt",
  LINK: "linkusdt",
  UNI: "uniusdt",
  AAVE: "aaveusdt",
};

/** Renders a responsive grid of live tickers. Unknown symbols fall back to placeholders. */
export default function MarketsGrid({
  symbols = ["BTC","ETH","SOL","BNB","XRP","ADA","DOT","AVAX","MATIC","LINK","UNI","AAVE"],
}: { symbols?: SymbolKey[] }) {
  const ticks = useBinanceTickers();

  // pick data if we have it; else show placeholders
  const rows = useMemo(() => {
    return symbols.map((s) => {
      const row = ticks?.[s as keyof typeof ticks];
      return {
        sym: s,
        price: row?.price ?? null,
        changePct: row?.changePct ?? null,
      };
    });
  }, [symbols, ticks]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {rows.map(({ sym, price, changePct }) => {
        const isUp = (changePct ?? 0) >= 0;
        return (
          <Card
            key={sym}
            className="border-border bg-card hover:bg-card/80 transition-colors"
            title={`${sym}/USDT`}
          >
            <CardContent className="p-4 text-center">
              <div className="font-semibold">{sym}</div>
              <div className="text-sm text-muted-foreground">/USDT</div>

              {/* live price */}
              <div className="mt-1 text-base tabular-nums">
                {price == null ? "—" : fmtPrice(price)}
              </div>

              {/* live % change */}
              <div
                className={`text-xs mt-1 tabular-nums ${
                  changePct == null
                    ? "text-muted-foreground"
                    : isUp
                    ? "text-green-400"
                    : "text-rose-400"
                }`}
              >
                {changePct == null ? "…loading" : fmtPct(changePct)}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
