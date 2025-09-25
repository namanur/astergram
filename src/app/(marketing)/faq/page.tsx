"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const faqs = [
  { q: "Is Astergram custodial?", a: "No. Funds remain on your connected exchange accounts." },
  { q: "Which markets are supported?", a: "Major crypto spot and perps; expand pairs over time." },
  { q: "Does it support TP/SL?", a: "Yes. You can configure bracket orders and max exposure." },
  { q: "Can I revoke access?", a: "Yes. Remove API keys on your exchange and in the bot." },
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <main className="container mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-3">FAQ</h1>
      <p className="text-zinc-400 mb-8 max-w-2xl">
        Answers to the most common questions. This is a demo page you can edit freely.
      </p>

      <div className="space-y-4">
        {faqs.map((f, i) => (
          <Card
            key={f.q}
            className="bg-white/[0.03] border-white/10 cursor-pointer"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-base">{f.q}</CardTitle>
              <Badge variant="outline" className="border-white/15 text-zinc-300">
                {open === i ? "Hide" : "Show"}
              </Badge>
            </CardHeader>
            {open === i && (
              <CardContent>
                <CardDescription className="text-zinc-300">{f.a}</CardDescription>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </main>
  );
}
