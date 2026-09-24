"use client";
import Link from "next/link";

import { Logo } from "../../logo";
import { buttonVariants } from "../../ui/button-variants";
import { ActiveLink } from "../../active-link";

export function Header() {
  return (
    <header
      className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/95
      backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <nav className="flex items-center gap-6">
            <ActiveLink href="/">Home</ActiveLink>
            <ActiveLink href="/blog">Blog</ActiveLink>
            <Link
              onClick={() => console.log("cliquei")}
              href="/get-started"
              className={buttonVariants({ variant: "secondary" })}
            >
              Start
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
