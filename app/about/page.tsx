import type { Metadata } from "next";
import { Building2, Globe2, HeartHandshake, Network } from "lucide-react";
import Image from "next/image";
import { MotionReveal } from "@/components/MotionReveal";
import { CTA, IconBox, PageHero, SectionHeading } from "@/components/Shared";

export const metadata: Metadata = {
  title: "关于恩立信",
  description: "了解株式会社 NI INNOVATION：总部位于福冈，专注国际患者支援、日本医疗协调与健康管理服务。",
};

const milestones = [
  ["2018", "株式会社 NI INNOVATION 成立", "立足日本福冈，开展国际医疗协调与患者支援服务。"],
  ["持续拓展", "建立日本医疗合作网络", "与大学附属医院、国立医院、专科医院及诊所保持合作沟通。"],
  ["面向未来", "完善跨境医疗服务体系", "持续提升在线诊疗、筛查协调、第二诊疗意见及赴日支援能力。"],
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About NIIN" title="关于恩立信" description="以专业、细致、可信赖的服务，协助更多客户连接日本优质医疗资源。" />
      <section className="section-pad bg-white">
        <div className="container-medical grid items-center gap-14 lg:grid-cols-2">
          <SectionHeading eyebrow="Company Profile" title="立足福冈，服务国际患者" description="株式会社 NI INNOVATION 成立于 2018 年，总部位于日本福冈。恩立信国际医疗支援围绕国际患者的真实需求，提供医疗协调、在线诊疗、医疗翻译、第二诊疗意见、癌症筛查及赴日医疗支援等服务。" />
          <MotionReveal direction="right" className="medical-card overflow-hidden">
            <Image src="/images/medical-coordination.png" width={1536} height={1024} alt="日本医疗专家与协调人员沟通诊疗资料" className="aspect-[4/3] w-full object-cover" />
          </MotionReveal>
        </div>
        <div className="container-medical mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[["成立时间", "2018 年"], ["总部所在地", "日本 · 福冈"], ["服务方向", "国际医疗协调"], ["服务语言", "中文 · 日文"]].map(([label, value], i) => <MotionReveal key={label} delay={i * .06} className="medical-card bg-light p-5"><p className="text-xs font-bold tracking-widest text-secondary">{label}</p><p className="mt-3 font-bold text-dark">{value}</p></MotionReveal>)}
        </div>
      </section>
      <section className="section-pad bg-light">
        <div className="container-medical grid gap-5 md:grid-cols-2">
          <MotionReveal className="medical-card p-8 md:p-10"><IconBox><HeartHandshake /></IconBox><h2 className="mt-7 text-2xl font-bold">企业使命</h2><p className="mt-4 text-sm leading-8 text-slate-600">让更多患者享受日本优质医疗资源。通过清晰的沟通与专业的协调支持，帮助客户更有序地了解适合自身情况的医疗选择。</p></MotionReveal>
          <MotionReveal delay={.1} className="medical-card p-8 md:p-10"><IconBox><Globe2 /></IconBox><h2 className="mt-7 text-2xl font-bold">企业愿景</h2><p className="mt-4 text-sm leading-8 text-slate-600">成为亚洲领先的国际医疗协调平台。持续建立专业、可靠、可持续的跨境医疗服务网络。</p></MotionReveal>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="container-medical">
          <SectionHeading eyebrow="Partnership Network" title="合作网络" description="结合客户需求与诊疗方向，协调日本不同类型医疗机构。" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["日本大学附属医院", "国立医院", "专科医院", "诊所"].map((item, i) => <MotionReveal key={item} delay={i * .08} className="medical-card flex items-center gap-4 p-6"><IconBox>{i < 2 ? <Building2 /> : <Network />}</IconBox><strong>{item}</strong></MotionReveal>)}
          </div>
          <div className="mt-16 grid gap-8 border-l-2 border-blue-100 pl-8">
            {milestones.map(([year, title, text], i) => <MotionReveal key={year} delay={i * .08} className="relative"><span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-white bg-primary shadow" /><p className="text-xs font-bold uppercase tracking-[.16em] text-primary">{year}</p><h3 className="mt-2 text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-7 text-slate-500">{text}</p></MotionReveal>)}
          </div>
        </div>
      </section>
      <CTA title="与恩立信建立联系" text="告诉我们您的实际需求，我们将为您提供进一步的咨询支持。" />
    </>
  );
}
