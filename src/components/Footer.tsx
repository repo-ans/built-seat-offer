import Link from "next/link";
import { navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-16 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 md:flex-row md:justify-between">
        <div>
          <p className="font-display text-2xl tracking-tight">AniyaNetworks</p>
          <p className="mt-3 max-w-xs text-sm text-ink-soft">
            White-label technical build team. Builder, QA, and support behind
            every seat.
          </p>
          <p className="mt-1 text-sm text-ink-soft">hello@example.com</p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-ink-soft">
            Menu
          </span>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor="hover"
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#book"
            data-cursor="hover"
            className="text-sm text-ink-soft transition-colors hover:text-ink"
          >
            Start a Project
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-ink-soft">
            Legal
          </span>
          <Link
            href="/privacy-policy"
            data-cursor="hover"
            className="text-sm text-ink-soft transition-colors hover:text-ink"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            data-cursor="hover"
            className="text-sm text-ink-soft transition-colors hover:text-ink"
          >
            Terms of Service
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col-reverse items-start justify-between gap-4 border-t border-line pt-8 text-xs text-ink-soft md:flex-row md:items-center">
        <span>© {new Date().getFullYear()} AniyaNetworks. All rights reserved.</span>
        <span>White-label &middot; Builder + QA + Support</span>
      </div>
    </footer>
  );
}
