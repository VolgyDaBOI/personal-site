"use client";

import { Github, Linkedin, Mail } from "lucide-react";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/VolgyDaBOI",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/michael-volgin/",
    icon: Linkedin,
  },
  {
    name: "X",
    href: "https://x.com/intent/user?screen_name=michag0d",
    icon: XIcon,
  },
  {
    name: "Email",
    href: "mailto:mikivo807@gmail.com",
    icon: Mail,
  },
];

export function SocialLinks() {
  return (
    <motion.div
      className="flex gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      {socials.map((social) => (
        <Button
          key={social.name}
          variant="ghost"
          size="icon"
          asChild
          className="h-8 w-8 text-muted-foreground hover:text-foreground"
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
      ))}
    </motion.div>
  );
}
