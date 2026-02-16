"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/michaelvolgin",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/michaelvolgin",
    icon: Linkedin,
  },
  {
    name: "X",
    href: "https://x.com/michaelvolgin",
    icon: Twitter,
  },
];

export function SocialLinks() {
  return (
    <div className="flex gap-5">
      {socials.map((social) => (
        <motion.a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="group relative p-3 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] transition-colors hover:border-[var(--accent-blue)]"
          aria-label={social.name}
        >
          <social.icon className="w-5 h-5 text-[var(--muted)] transition-colors group-hover:text-[var(--accent-blue)]" />
          <div className="absolute inset-0 rounded-xl bg-[var(--accent-blue)] opacity-0 blur-xl transition-opacity group-hover:opacity-10" />
        </motion.a>
      ))}
    </div>
  );
}
