"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
          Developer &amp; Builder
        </p>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.1]">
          <span className="bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] bg-clip-text text-transparent">
            Michael
          </span>
          <br />
          <span className="text-foreground">Volgin</span>
        </h1>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed"
      >
        I build tools and products that solve real problems.
        Currently focused on shipping fast and learning every day.
      </motion.p>
    </section>
  );
}
