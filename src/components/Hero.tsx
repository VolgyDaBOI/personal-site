"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="pb-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-2xl font-semibold tracking-tight">
          Michael Volgin
        </h1>
        <p className="mt-3 text-muted-foreground leading-relaxed max-w-lg">
          SWE @{" "}
          <a
            href="https://enclave.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:opacity-70 transition-opacity"
          >
            enclave
          </a>
          , shipping secure SaaS and sometimes words
        </p>
      </motion.div>
    </section>
  );
}
