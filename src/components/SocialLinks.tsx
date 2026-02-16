"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <div className="flex gap-3">
      {socials.map((social, i) => (
        <motion.div
          key={social.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
        >
          <Button
            variant="outline"
            size="icon"
            asChild
            className="h-10 w-10 rounded-lg transition-colors hover:text-[var(--accent-blue)] hover:border-[var(--accent-blue)]"
          >
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              <social.icon className="h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      ))}
    </div>
  );
}
