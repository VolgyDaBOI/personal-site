"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="pb-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-5xl sm:text-7xl font-bold tracking-tight"
      >
        <span className="bg-gradient-to-r from-[var(--accent-blue)] via-purple-400 to-[var(--accent-purple)] bg-clip-text text-transparent">
          Michael Volgin
        </span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="mt-6 text-lg sm:text-xl text-[var(--muted)] max-w-xl"
      >
        Building things that matter.
      </motion.p>
    </section>
  );
}
