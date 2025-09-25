// src/components/market/HeroPriceSlider.tsx
"use client";
import { useEffect, useMemo, useState } from "react";
import { useBinanceTickers } from "./useBinanceTickers";
import { fmtPct, fmtPrice } from "@/lib/number";
import { motion } from "framer-motion";

const ORDER: Array<"BNB" | "SOL" | "ETH" | "BTC"> = ["BNB", "SOL", "ETH", "BTC"];

export default function HeroPriceSlider() {
  const ticks = useBinanceTickers();
  const [idx, setIdx] = useState(0);

  const current = useMemo(() => {
    if (!ticks) return null;
    const sym = ORDER[idx % ORDER.length];
    return ticks[sym] ?? null;
  }, [ticks, idx]);

  // auto rotate every 4s
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % ORDER.length), 4000);
    return () => clearInterval(t);
  }, []);

  if (!ticks) {
    return (
      <div className="w-full rounded-2xl p-8 bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 text-zinc-200">
        <div className="animate-pulse h-8 w-36 rounded bg-zinc-700 mb-4" />
        <div className="animate-pulse h-12 w-48 rounded bg-zinc-700" />
      </div>
    );
  }

  const isUp = (current?.changePct ?? 0) >= 0;

  return (
    <div className="w-full rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-[#0F0F14] to-[#1A1A1F] border border-zinc-800 shadow-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-baseline gap-3">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="text-2xl sm:text-3xl font-semibold tracking-tight"
          >
            {current?.symbol ?? "—"}/USDT
          </motion.div>
          <div
            className={`text-sm px-2 py-1 rounded-full border ${
              isUp
                ? "text-emerald-300 border-emerald-600/50 bg-emerald-900/20"
                : "text-rose-300 border-rose-600/50 bg-rose-900/20"
            }`}
          >
            {current ? fmtPct(current.changePct) : "—"}
          </div>
        </div>

        <div className="flex gap-2">
          {ORDER.map((s, i) => (
            <button
              key={s}
              onClick={() => setIdx(i)}
              className={`h-2 w-2 rounded-full transition-all ${
                idx === i ? "w-6 bg-white" : "bg-zinc-600"
              }`}
              aria-label={`Show ${s}`}
              title={s}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 sm:mt-6 flex flex-wrap items-end gap-6">
        <div className="text-4xl sm:text-5xl font-bold tabular-nums">
          {current ? fmtPrice(current.price) : "—"}
        </div>
        <div className="text-sm text-zinc-400">
          24h High{" "}
          <span className="tabular-nums text-zinc-300">
            {current ? fmtPrice(current.high) : "—"}
          </span>{" "}
          · Low{" "}
          <span className="tabular-nums text-zinc-300">
            {current ? fmtPrice(current.low) : "—"}
          </span>{" "}
          · Vol{" "}
          <span className="tabular-nums text-zinc-300">
            {current ? current.volume.toLocaleString() : "—"}
          </span>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {ORDER.map((s, i) => (
          <button
            key={s}
            onClick={() => setIdx(i)}
            className="px-3 py-2 rounded-xl border border-zinc-700 hover:border-zinc-500 transition-all hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
          >
            {s}/USDT
          </button>
        ))}
      </div>
    </div>
  );
}
