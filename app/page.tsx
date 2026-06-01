import { ArrowRight, CheckCircle2, Phone, ShieldCheck, Stethoscope } from "lucide-react";
import Link from "next/link";
import { MotionReveal } from "@/components/MotionReveal";
import { CTA, IconBox, SectionHeading } from "@/components/Shared";
import { advantages, company, coreServices } from "@/content/site";

export default function Home() {
  return (
    <>
      <section className="bg-hero-medical mt-[76px] min-h-[calc(100vh-76px)] bg-cover bg-center text-white">
        <div className="container-medical flex min-h-[calc(100vh-76px)] items-center py-20">
          <MotionReveal className="max-w-3xl">
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[.25em] text-blue-200"><span className="h-px w-10 bg-secondary" />NI Innovation Medical Support</p>
            <h1 className="mt-7 text-4xl font-bold leading-[1.15] md:text-7xl">日本高端医疗<br /><span className="text-blue-200">协调服务</span></h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-blue-50/90 md:text-lg">连接日本优质医疗资源<br />为全球客户提供专业医疗协调服务</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-primary transition hover:-translate-y-1 hover:shadow-xl">立即咨询 <ArrowRight size={17} /></Link>
              <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20">了解服务</Link>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="section-pad medical-pattern bg-light">
        <div className="container-medical grid items-center gap-14 lg:grid-cols-[1fr_.9fr]">
          <SectionHeading eyebrow="About NIIN" title="以专业服务，连接日本优质医疗资源" description="株式会社 NI INNOVATION 成立于 2018 年，总部位于日本福冈。恩立信国际医疗支援专注于日本医疗协调、国际患者支援、在线诊疗、癌症筛查及第二诊疗意见服务。" />
          <MotionReveal direction="right" className="medical-card bg-white p-8 md:p-10">
            <div className="flex items-center gap-4 border-b border-blue-100 pb-6">
              <IconBox><Stethoscope /></IconBox>
              <div><p className="text-xs font-bold uppercase tracking-widest text-secondary">Professional Support</p><h3 className="mt-1 text-xl font-bold">关于恩立信</h3></div>
            </div>
            <p className="mt-6 text-sm leading-8 text-slate-600">我们与日本大学附属医院、国立医院及专科医疗机构建立长期合作关系，根据客户实际需求协调适合的医疗资源，并提供从咨询到就诊的全流程支持。</p>
            <Link href="/about" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-dark">了解更多 <ArrowRight size={16} /></Link>
          </MotionReveal>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-medical">
          <SectionHeading eyebrow="Our Strengths" title="安心、专业的赴日医疗支持" center description="围绕患者真实需求，提供清晰、有序、细致的医疗协调服务。" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map(({ title, text, icon: Icon }, index) => (
              <MotionReveal key={title} delay={index * .08} className="medical-card p-7">
                <IconBox><Icon /></IconBox><h3 className="mt-6 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-500">{text}</p>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-light">
        <div className="container-medical">
          <SectionHeading eyebrow="Core Services" title="核心医疗服务" description="从疾病风险筛查到日本专家意见，我们协助客户有序连接所需医疗服务。" />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {coreServices.map(({ title, subtitle, description, href, icon: Icon }, index) => (
              <MotionReveal key={title} delay={index * .07} className="medical-card group flex flex-col justify-between overflow-hidden p-7 md:p-8">
                <div>
                  <IconBox><Icon /></IconBox>
                  <p className="mt-7 text-xs font-bold uppercase tracking-[.16em] text-secondary">{subtitle}</p>
                  <h3 className="mt-2 text-xl font-bold">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-500">{description}</p>
                </div>
                <Link href={href} className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary">查看详情 <ArrowRight size={16} className="transition group-hover:translate-x-1" /></Link>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark text-white">
        <div className="container-medical grid gap-8 py-14 md:grid-cols-3">
          <div className="flex gap-4"><ShieldCheck className="text-secondary" /><div><strong>专业协调</strong><p className="mt-2 text-sm text-white/60">依据实际需求匹配医疗资源</p></div></div>
          <div className="flex gap-4"><CheckCircle2 className="text-secondary" /><div><strong>细致服务</strong><p className="mt-2 text-sm text-white/60">持续跟进就诊环节与沟通事项</p></div></div>
          <a href={`tel:${company.phone}`} className="flex gap-4"><Phone className="text-secondary" /><div><strong>{company.phone}</strong><p className="mt-2 text-sm text-white/60">欢迎来电咨询</p></div></a>
        </div>
      </section>
      <CTA title="需要了解适合您的医疗服务？" text="欢迎与我们联系，获取进一步咨询与专业协调支持。" />
    </>
  );
}
