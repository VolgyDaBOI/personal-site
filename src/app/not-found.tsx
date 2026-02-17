"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CHARS =
  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function MatrixCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const fontSize = 14;
    let columns = 0;
    let drops: number[] = [];
    let greenColumns: Set<number> = new Set();

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      const newColumns = Math.floor(canvas!.width / fontSize);
      if (newColumns !== columns) {
        columns = newColumns;
        drops = Array.from({ length: columns }, () =>
          Math.random() * -canvas!.height / fontSize
        );
        greenColumns = new Set(
          Array.from({ length: Math.floor(columns * 0.2) }, () =>
            Math.floor(Math.random() * columns)
          )
        );
      }
    }

    resize();
    window.addEventListener("resize", resize);

    function draw() {
      ctx!.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

      ctx!.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        if (greenColumns.has(i)) {
          const brightness = 0.3 + Math.random() * 0.7;
          ctx!.fillStyle = `rgba(0, 255, 70, ${brightness})`;
        } else {
          const brightness = 0.15 + Math.random() * 0.5;
          ctx!.fillStyle = `rgba(255, 255, 255, ${brightness})`;
        }

        ctx!.fillText(char, x, y);

        if (y > canvas!.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.5 + Math.random() * 0.5;
      }

      animationId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0"
      style={{ zIndex: 0 }}
    />
  );
}

export default function NotFound() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      <MatrixCanvas />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center gap-4 rounded-lg bg-black/70 px-12 py-10 backdrop-blur-sm border border-white/10"
      >
        <h1 className="font-mono text-6xl font-bold tracking-tighter text-white">
          404
        </h1>
        <p className="font-mono text-sm text-white/60">Page not found</p>
        <Button variant="ghost" size="sm" asChild className="mt-2">
          <Link href="/">Go home</Link>
        </Button>
      </motion.div>
    </div>
  );
}
