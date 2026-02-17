"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const KONAMI = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

export function KonamiTicker() {
  const [visible, setVisible] = useState(false);
  const [price, setPrice] = useState<string | null>(null);
  const [input, setInput] = useState<string[]>([]);

  const fetchPrice = useCallback(async () => {
    const apis = [
      {
        url: "https://api.coinbase.com/v2/prices/BTC-USD/spot",
        parse: (d: any) => parseFloat(d.data.amount),
      },
      {
        url: "https://api.coindesk.com/v1/bpi/currentprice/USD.json",
        parse: (d: any) => d.bpi.USD.rate_float,
      },
    ];
    for (const api of apis) {
      try {
        const res = await fetch(api.url);
        if (!res.ok) continue;
        const data = await res.json();
        setPrice(api.parse(data).toLocaleString("en-US", { maximumFractionDigits: 0 }));
        return;
      } catch {
        continue;
      }
    }
    setPrice("???");
  }, []);

  useEffect(() => {
    const stored = sessionStorage.getItem("konami-ticker");
    if (stored === "visible") {
      setVisible(true);
      fetchPrice();
    }
  }, [fetchPrice]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      const next = [...input, e.key].slice(-KONAMI.length);
      setInput(next);

      if (next.length === KONAMI.length && next.every((k, i) => k === KONAMI[i])) {
        setInput([]);
        setVisible((prev) => {
          const newState = !prev;
          sessionStorage.setItem("konami-ticker", newState ? "visible" : "hidden");
          if (newState) fetchPrice();
          return newState;
        });
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [input, fetchPrice]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-4 right-4 z-50 flex items-center gap-3 rounded-lg border border-white/10 bg-black/80 px-4 py-2 font-mono text-sm backdrop-blur-sm"
        >
          <span className="text-orange-400">₿</span>
          <span className="text-white">
            {price ? `$${price}` : "..."}
          </span>
          <button
            onClick={() => {
              setVisible(false);
              sessionStorage.setItem("konami-ticker", "hidden");
            }}
            className="ml-1 text-white/40 hover:text-white/80 transition-colors"
          >
            <X className="size-3" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
