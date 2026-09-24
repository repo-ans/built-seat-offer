import Link from "next/link";
import { company } from "@/lib/data";

export function LegalShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-canvas/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
          <Link href="/" data-cursor="hover" className="font-display text-lg font-semibold tracking-tight">
            {company.brand}
          </Link>
          <Link
            href="/#book"
            data-cursor="hover"
            className="rounded-full bg-accent px-5 py-2.5 font-display text-sm font-medium uppercase tracking-wide text-canvas transition-all hover:brightness-110"
          >
            Start a Project
          </Link>
        </div>
      </header>

      <main className="flex-1 px-6 pb-24 pt-36 md:px-12">
        <article className="mx-auto max-w-3xl">
          <h1 className="font-display text-4xl tracking-tight md:text-6xl">{title}</h1>
          <p className="mt-3 font-mono text-xs uppercase tracking-widest text-ink-soft">
            Effective date: {company.legalEffectiveDate}
          </p>
          <div className="mt-12 grid gap-12">{children}</div>
        </article>
      </main>

      <LegalFooter />
    </>
  );
}

export function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid gap-4 text-[15px] leading-relaxed text-ink-soft">
      <h2 className="font-display text-2xl tracking-tight text-ink">{title}</h2>
      {children}
    </section>
  );
}

export function Sub({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1.5">
      <h3 className="font-display text-base text-ink">{title}</h3>
      <p>{children}</p>
    </div>
  );
}

export function List({ children }: { children: React.ReactNode }) {
  return (
    <ul className="grid list-disc gap-2.5 pl-5 marker:text-accent">{children}</ul>
  );
}

export function B({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold text-ink">{children}</strong>;
}

export function Callout({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-5 text-sm">
      {title && <p className="mb-2 font-display text-ink">{title}</p>}
      {children}
    </div>
  );
}

export function ContactCard() {
  return (
    <Callout>
      <p>
        <B>Email:</B> {company.email}
      </p>
      <p className="mt-1">
        <B>Phone:</B> {company.phone}
      </p>
      <p className="mt-3">
        <B>Address:</B>
      </p>
      <p>{company.operator}</p>
      {company.addressLines.map((l) => (
        <p key={l}>{l}</p>
      ))}
    </Callout>
  );
}

export function InlineLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-accent underline underline-offset-4 hover:brightness-110">
      {children}
    </Link>
  );
}

function LegalFooter() {
  return (
    <footer className="border-t border-line px-6 py-14 md:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl tracking-tight">{company.brand}</p>
          <p className="mt-3 max-w-xs text-sm text-ink-soft">
            White-label technical build team for agencies. Builder, QA, and support behind every
            seat.
          </p>
          <p className="mt-4 text-xs text-ink-soft">
            {company.brand} is a product of {company.operator}
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-ink-soft">
          <span className="font-mono text-xs uppercase tracking-widest">Legal</span>
          <Link href="/privacy-policy" className="transition-colors hover:text-ink">
            Privacy Policy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-ink">
            Terms of Service
          </Link>
        </div>

        <div className="flex flex-col gap-3 text-sm text-ink-soft">
          <span className="font-mono text-xs uppercase tracking-widest">Contact</span>
          <span>{company.phone}</span>
          <span>{company.email}</span>
          {company.addressLines.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-2 border-t border-line pt-6 text-xs text-ink-soft md:flex-row md:items-center md:justify-between">
        <span>
          © {new Date().getFullYear()} {company.brand}. All rights reserved.
        </span>
        <span>Serving agencies across North America, the UK, and the EU.</span>
      </div>
    </footer>
  );
}
