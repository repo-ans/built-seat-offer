"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useAnimationControls,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { company, whatWeBuild } from "@/lib/data";

type Values = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  company_name: string;
  message: string;
};
type Errors = Partial<Record<keyof Values, string>>;
type Status = "idle" | "sending" | "success" | "error";

const STEPS = [
  { label: "About you", title: "Tell us where to reach you.", hint: "Takes about a minute." },
  { label: "Your project", title: "What are we building?", hint: "Pick everything that applies." },
  { label: "Confirm", title: "Almost there.", hint: "Check the details and send it over." },
];

const SERVICES = [...whatWeBuild.map((w) => w.title), "Not sure yet"];
const TIMELINES = ["ASAP", "1–2 weeks", "This month", "Just exploring"];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EASE = [0.16, 1, 0.3, 1] as const;

function validate(step: number, v: Values): Errors {
  const e: Errors = {};
  if (step === 0) {
    if (!v.first_name.trim()) e.first_name = "Your first name is required.";
    if (!EMAIL_RE.test(v.email.trim())) e.email = "Enter a valid email address.";
    const digits = v.phone.replace(/\D/g, "");
    if (digits.length < 7 || digits.length > 15) e.phone = "Enter a valid phone number.";
  }
  return e;
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  shake,
  type = "text",
  required,
  autoComplete,
  inputMode,
  textarea,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  shake: number;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  inputMode?: "text" | "tel" | "email";
  textarea?: boolean;
}) {
  const controls = useAnimationControls();
  useEffect(() => {
    if (shake > 0) controls.start({ x: [0, -7, 7, -5, 5, 0], transition: { duration: 0.4 } });
  }, [shake, controls]);

  const id = `lead-${name}`;
  const cls = `peer w-full rounded-xl border bg-canvas/60 px-4 pb-2.5 pt-6 text-[15px] text-ink outline-none transition-[border-color,box-shadow] duration-300 placeholder-transparent focus:shadow-[0_0_0_4px_rgba(198,255,94,0.08)] ${
    error ? "border-red-400/70" : "border-line focus:border-accent/70"
  }`;

  return (
    <motion.div animate={controls} className="relative">
      {textarea ? (
        <textarea
          id={id}
          name={name}
          rows={4}
          placeholder=" "
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${cls} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          placeholder=" "
          value={value}
          required={required}
          autoComplete={autoComplete}
          inputMode={inputMode}
          aria-invalid={!!error}
          onChange={(e) => onChange(e.target.value)}
          className={cls}
        />
      )}
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-4 origin-left text-[15px] text-ink-soft transition-all duration-200 peer-focus:top-2 peer-focus:text-[11px] peer-focus:text-accent peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-[11px]"
      >
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      <span className="pointer-events-none absolute inset-x-4 bottom-0 h-px origin-center scale-x-0 bg-accent transition-transform duration-500 peer-focus:scale-x-100" />
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-1.5 pl-1 text-xs text-red-300"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      data-cursor="hover"
      whileTap={{ scale: 0.94 }}
      animate={{
        backgroundColor: active ? "#c6ff5e" : "rgba(10,13,17,0.6)",
        color: active ? "#0a0d11" : "#f4f6f1",
      }}
      transition={{ duration: 0.25 }}
      className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm transition-colors ${
        active ? "border-accent" : "border-line hover:border-accent/50"
      }`}
    >
      <AnimatePresence initial={false}>
        {active && (
          <motion.svg
            key="check"
            viewBox="0 0 16 16"
            className="size-3.5"
            initial={{ width: 0, opacity: 0, scale: 0.4 }}
            animate={{ width: 14, opacity: 1, scale: 1 }}
            exit={{ width: 0, opacity: 0, scale: 0.4 }}
            transition={{ type: "spring", stiffness: 500, damping: 26 }}
          >
            <path d="M3 8.5l3.2 3L13 4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
        )}
      </AnimatePresence>
      {children}
    </motion.button>
  );
}

function Consent({
  checked,
  onChange,
  children,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  children: React.ReactNode;
}) {
  return (
    <label className="group flex cursor-pointer items-start gap-3" data-cursor="hover">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="peer sr-only"
      />
      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border border-line bg-canvas/60 transition-all duration-300 group-hover:border-accent/60 peer-checked:border-accent peer-checked:bg-accent peer-focus-visible:ring-2 peer-focus-visible:ring-accent/50">
        <svg viewBox="0 0 16 16" className="size-3.5 text-canvas">
          <motion.path
            d="M3 8.5l3.2 3L13 4.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={false}
            animate={{ pathLength: checked ? 1 : 0, opacity: checked ? 1 : 0 }}
            transition={{ duration: 0.3, ease: EASE }}
          />
        </svg>
      </span>
      <span className="text-[13px] leading-relaxed text-ink-soft transition-colors group-hover:text-ink">
        {children}
      </span>
    </label>
  );
}

export default function LeadForm() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [shake, setShake] = useState(0);
  const [values, setValues] = useState<Values>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    company_name: "",
    message: "",
  });
  const [services, setServices] = useState<string[]>([]);
  const [timeline, setTimeline] = useState("");
  const [consentMarketing, setConsentMarketing] = useState(false);
  const [consentNonMarketing, setConsentNonMarketing] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [serverError, setServerError] = useState("");

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${mx}px ${my}px, rgba(198,255,94,0.10), transparent 70%)`;

  const set = (k: keyof Values) => (v: string) => {
    setValues((s) => ({ ...s, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const toggleService = (s: string) =>
    setServices((cur) => (cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]));

  const next = () => {
    const e = validate(step, values);
    setErrors(e);
    if (Object.keys(e).length) {
      setShake((n) => n + 1);
      return;
    }
    setDir(1);
    setStep((s) => Math.min(s + 1, 2));
  };

  const back = () => {
    setDir(-1);
    setStep((s) => Math.max(s - 1, 0));
    setServerError("");
  };

  const submit = async () => {
    setStatus("sending");
    setServerError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          services: services.join(", "),
          timeline,
          consent_marketing: consentMarketing,
          consent_non_marketing: consentNonMarketing,
          website: honeypot,
          page_url: window.location.href,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setServerError(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setServerError("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    if (step < 2) next();
    else submit();
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  const current = STEPS[step];
  const sending = status === "sending";

  return (
    <div className="relative overflow-hidden rounded-[28px] p-px" onMouseMove={onMouseMove}>
      {/* rotating light along the card border */}
      {!reduce && (
        <motion.div
          aria-hidden
          className="absolute -inset-[100%]"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0 58%, rgba(198,255,94,0.9) 78%, transparent 100%)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        />
      )}
      {reduce && <div aria-hidden className="absolute inset-0 bg-accent/30" />}

      <div className="relative rounded-[27px] bg-surface p-6 sm:p-9">
        <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: spotlight }} />

        <AnimatePresence mode="wait" initial={false}>
          {status === "success" ? (
            <Success
              key="success"
              name={values.first_name}
              viaSms={consentNonMarketing || consentMarketing}
            />
          ) : (
            <motion.form
              key="form"
              onSubmit={onSubmit}
              noValidate
              exit={{ opacity: 0, y: -10 }}
              className="lead-form relative"
            >
              {/* progress */}
              <div className="mb-8">
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest">
                  {STEPS.map((s, i) => (
                    <span
                      key={s.label}
                      className={`transition-colors duration-500 ${
                        i <= step ? "text-accent" : "text-ink-soft"
                      } ${i === step ? "" : "hidden sm:inline"}`}
                    >
                      {String(i + 1).padStart(2, "0")} {s.label}
                    </span>
                  ))}
                </div>
                <div className="relative mt-3 h-px w-full bg-line">
                  <motion.div
                    className="relative h-px bg-accent"
                    animate={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
                    transition={{ type: "spring", stiffness: 110, damping: 20 }}
                  >
                    <span className="absolute -right-1 -top-[3px] size-[7px] rounded-full bg-accent shadow-[0_0_14px_2px_rgba(198,255,94,0.8)]" />
                  </motion.div>
                </div>
              </div>

              <div className="relative min-h-[380px]">
                <AnimatePresence mode="wait" custom={dir} initial={false}>
                  <motion.div
                    key={step}
                    custom={dir}
                    initial={{ opacity: 0, x: 36 * dir, filter: "blur(6px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: -36 * dir, filter: "blur(6px)" }}
                    transition={{ duration: 0.4, ease: EASE }}
                  >
                    <h3 className="font-display text-2xl tracking-tight md:text-3xl">{current.title}</h3>
                    <p className="mt-1 mb-6 text-sm text-ink-soft">{current.hint}</p>

                    {step === 0 && (
                      <div className="grid gap-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <Field label="First name" name="first_name" required autoComplete="given-name" value={values.first_name} onChange={set("first_name")} error={errors.first_name} shake={errors.first_name ? shake : 0} />
                          <Field label="Last name" name="last_name" autoComplete="family-name" value={values.last_name} onChange={set("last_name")} shake={0} />
                        </div>
                        <Field label="Email" name="email" type="email" inputMode="email" required autoComplete="email" value={values.email} onChange={set("email")} error={errors.email} shake={errors.email ? shake : 0} />
                        <Field label="Phone" name="phone" type="tel" inputMode="tel" required autoComplete="tel" value={values.phone} onChange={set("phone")} error={errors.phone} shake={errors.phone ? shake : 0} />
                      </div>
                    )}

                    {step === 1 && (
                      <div className="grid gap-5">
                        <Field label="Agency / company name" name="company_name" autoComplete="organization" value={values.company_name} onChange={set("company_name")} shake={0} />
                        <div>
                          <p className="mb-2.5 font-mono text-[11px] uppercase tracking-widest text-ink-soft">What do you need built?</p>
                          <div className="flex flex-wrap gap-2">
                            {SERVICES.map((s) => (
                              <Chip key={s} active={services.includes(s)} onClick={() => toggleService(s)}>
                                {s}
                              </Chip>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="mb-2.5 font-mono text-[11px] uppercase tracking-widest text-ink-soft">Timeline</p>
                          <div className="flex flex-wrap gap-2">
                            {TIMELINES.map((t) => (
                              <Chip key={t} active={timeline === t} onClick={() => setTimeline(timeline === t ? "" : t)}>
                                {t}
                              </Chip>
                            ))}
                          </div>
                        </div>
                        <Field label="Anything we should know? (optional)" name="message" textarea value={values.message} onChange={set("message")} shake={0} />
                      </div>
                    )}

                    {step === 2 && (
                      <div className="grid gap-5">
                        <dl className="grid gap-2 rounded-2xl border border-line bg-canvas/50 p-4 text-sm">
                          {[
                            ["Name", `${values.first_name} ${values.last_name}`.trim()],
                            ["Email", values.email],
                            ["Phone", values.phone],
                            ["Building", services.length ? services.join(", ") : "Not specified"],
                          ].map(([k, v]) => (
                            <div key={k} className="flex gap-4">
                              <dt className="w-16 shrink-0 font-mono text-[11px] uppercase tracking-widest text-ink-soft">{k}</dt>
                              <dd className="min-w-0 break-words text-ink">{v}</dd>
                            </div>
                          ))}
                        </dl>

                        <div className="grid gap-4">
                          <Consent checked={consentMarketing} onChange={setConsentMarketing}>
                            I consent to receive marketing text messages about special offers, discounts, and
                            service updates from {company.brand} at the phone number provided. Message frequency
                            may vary. Message &amp; data rates may apply. Text HELP for assistance, reply STOP
                            to opt out.
                          </Consent>
                          <Consent checked={consentNonMarketing} onChange={setConsentNonMarketing}>
                            I consent to receive non-marketing text messages from {company.brand} about project
                            scoping, appointment reminders, and service notifications. Message frequency may
                            vary, message &amp; data rates may apply. Text HELP for assistance, reply STOP to
                            opt out.
                          </Consent>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* honeypot */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="pointer-events-none absolute -left-[9999px] h-0 w-0 opacity-0"
                />
              </div>

              <AnimatePresence>
                {status === "error" && serverError && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 rounded-xl border border-red-400/40 bg-red-400/10 px-4 py-3 text-sm text-red-200"
                  >
                    {serverError}
                  </motion.p>
                )}
              </AnimatePresence>

              <div className="mt-6 flex items-center gap-3">
                <AnimatePresence initial={false}>
                  {step > 0 && (
                    <motion.button
                      key="back"
                      type="button"
                      onClick={back}
                      data-cursor="hover"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      className="overflow-hidden whitespace-nowrap rounded-full border border-line px-6 py-4 font-display text-sm uppercase tracking-wide text-ink-soft transition-colors hover:border-ink hover:text-ink"
                    >
                      Back
                    </motion.button>
                  )}
                </AnimatePresence>

                <motion.button
                  type="submit"
                  disabled={sending}
                  data-cursor="hover"
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex-1 overflow-hidden rounded-full bg-accent px-8 py-4 font-display text-sm font-medium uppercase tracking-wide text-canvas disabled:opacity-80"
                >
                  <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/40 opacity-0 blur-md transition-all duration-700 group-hover:left-[130%] group-hover:opacity-100" />
                  <span className="relative flex items-center justify-center gap-2">
                    {sending ? (
                      <>
                        <motion.span
                          className="size-4 rounded-full border-2 border-canvas/30 border-t-canvas"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        />
                        Sending…
                      </>
                    ) : step < 2 ? (
                      <>
                        Continue <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </>
                    ) : (
                      <>
                        Start a Project <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </>
                    )}
                  </span>
                </motion.button>
              </div>

              <p className="mt-5 text-center text-xs text-ink-soft">
                <Link
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="underline-offset-4 transition-colors hover:text-accent hover:underline"
                >
                  Privacy Policy
                </Link>
                <span className="mx-2 opacity-50">|</span>
                <Link
                  href="/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="underline-offset-4 transition-colors hover:text-accent hover:underline"
                >
                  Terms of Service
                </Link>
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function Success({ name, viaSms }: { name: string; viaSms: boolean }) {
  const NEXT = [
    viaSms ? "We text or email you to confirm the details." : "We email you to confirm the details.",
    "You get a scoping call on our calendar.",
    "We build it, QA it, and hand it back white-label.",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: EASE }}
      className="relative flex min-h-[460px] flex-col items-center justify-center text-center"
    >
      <div className="relative mb-7 flex size-24 items-center justify-center">
        {[0, 1].map((i) => (
          <motion.span
            key={i}
            className="absolute inset-0 rounded-full border border-accent"
            initial={{ scale: 0.6, opacity: 0.8 }}
            animate={{ scale: 1.9, opacity: 0 }}
            transition={{ duration: 1.8, delay: 0.3 + i * 0.5, repeat: Infinity, ease: "easeOut" }}
          />
        ))}
        <motion.div
          className="flex size-20 items-center justify-center rounded-full bg-accent"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 16 }}
        >
          <svg viewBox="0 0 24 24" className="size-9 text-canvas">
            <motion.path
              d="M5 12.5l4.5 4.5L19 7.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: EASE }}
            />
          </svg>
        </motion.div>
      </div>

      <motion.h3
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.6, ease: EASE }}
        className="font-display text-3xl tracking-tight md:text-4xl"
      >
        You&apos;re in{name ? `, ${name}` : ""}.
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.6, ease: EASE }}
        className="mt-3 max-w-sm text-sm text-ink-soft"
      >
        Your request is with us. Here&apos;s what happens next.
      </motion.p>

      <ol className="mt-8 grid w-full max-w-sm gap-3 text-left">
        {NEXT.map((t, i) => (
          <motion.li
            key={t}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 + i * 0.12, duration: 0.5, ease: EASE }}
            className="flex items-start gap-3 rounded-2xl border border-line bg-canvas/50 px-4 py-3 text-sm"
          >
            <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
            <span>{t}</span>
          </motion.li>
        ))}
      </ol>
    </motion.div>
  );
}
