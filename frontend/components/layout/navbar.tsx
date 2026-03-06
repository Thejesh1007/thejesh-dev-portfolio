"use client";

import Link from "next/link";
import { Container } from "./container";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">

        <Link
          href="/"
          className="font-semibold text-slate-900 text-lg"
        >
          Thejesh
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">

          <Link href="/projects" className="hover:text-slate-900 transition">
            Projects
          </Link>

          <Link href="/resume" className="hover:text-slate-900 transition">
            Resume
          </Link>

          <Link href="/contact" className="hover:text-slate-900 transition">
            Contact
          </Link>

          <a
            href="https://github.com/Thejesh1007"
            target="_blank"
            className="hover:text-slate-900 transition"
          >
            GitHub
          </a>

        </nav>

        <a href="mailto:thejesh@example.com">
          <Button size="sm">
            Email
          </Button>
        </a>

      </Container>
    </header>
  );
}