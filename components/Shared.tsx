import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { MotionReveal } from "./MotionReveal";

export function SectionHeading({ eyebrow, title, description, center = false }: { eyebrow: string; title: string; description?: string; center?: boolean }) {
  return (
    <MotionReveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="section-label">{eyebrow}</span>
      <h2 className="mt-5 text-3xl font-bold leading-tight text-dark md:text-[42px]">{title}</h2>
      {description && <p className="mt-5 text-[15px] leading-8 text-slate-600">{description}</p>}
    </MotionReveal>
  );
}

export function PageHero({ eyebrow, title, description, variant = "plain" }: { eyebrow: string; title: string; description: string; variant?: "plain" | "mri" | "ctc" }) {
  const bg = variant === "mri" ? "bg-mri-medical" : variant === "ctc" ? "bg-ctc-medical" : "bg-gradient-to-r from-[#073f75] to-primary";
  return (
    <section className={`${bg} mt-[76px] bg-cover bg-center text-white`}>
      <div className="container-medical py-24 md:py-32">
        <MotionReveal>
          <span className="text-xs font-bold uppercase tracking-[.24em] text-blue-200">{eyebrow}</span>
          <h1 className="mt-5 text-4xl font-bold md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-8 text-blue-50/90 md:text-base">{description}</p>
        </MotionReveal>
      </div>
    </section>
  );
}

export function CTA({ title, text, button = "立即咨询", href = "/contact" }: { title: string; text: string; button?: string; href?: string }) {
  return (
    <section className="bg-primary text-white">
      <div className="container-medical flex flex-col items-start justify-between gap-7 py-14 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
          <p className="mt-3 text-sm leading-7 text-blue-100">{text}</p>
        </div>
        <Link href={href} className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-primary transition hover:-translate-y-1 hover:shadow-lg">
          {button}<ArrowRight size={17} />
        </Link>
      </div>
    </section>
  );
}

export function ProcessFlow({ steps }: { steps: string[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-[repeat(9,minmax(0,1fr))]">
      {steps.map((step, index) => (
        <div key={step} className="contents">
          <MotionReveal delay={index * .08} className="medical-card flex flex-col items-center justify-center px-3 py-7 text-center md:col-span-1">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-primary">0{index + 1}</span>
            <strong className="mt-3 text-sm text-dark">{step}</strong>
          </MotionReveal>
          {index < steps.length - 1 && <div className="hidden items-center justify-center text-secondary md:flex">→</div>}
        </div>
      ))}
    </div>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return <div className="grid gap-4">{items.map(item => <p key={item} className="flex gap-3 text-sm leading-7 text-slate-600"><CheckCircle2 className="mt-1 shrink-0 text-secondary" size={18} />{item}</p>)}</div>;
}

export function IconBox({ children }: { children: ReactNode }) {
  return <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-primary">{children}</div>;
}
