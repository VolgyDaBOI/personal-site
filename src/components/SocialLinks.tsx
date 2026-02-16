"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
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
    href: "https://x.com/michag0d",
    icon: Twitter,
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
