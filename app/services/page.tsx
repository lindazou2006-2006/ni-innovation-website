import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { MotionReveal } from "@/components/MotionReveal";
import { CTA, IconBox, PageHero, SectionHeading } from "@/components/Shared";
import { allServices } from "@/content/site";

export const metadata: Metadata = {
  title: "服务项目",
  description: "日本在线诊疗、医院预约、医疗翻译、第二诊疗意见、高端体检、赴日医疗支援、MRI 筛查与 CTC 检测服务。",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Medical Services" title="服务项目" description="从前期咨询、医疗资源匹配到赴日就诊支持，为客户提供有序、清晰的一站式医疗协调服务。" />
      <section className="section-pad bg-light">
        <div className="container-medical">
          <SectionHeading eyebrow="Our Services" title="连接所需医疗资源，陪伴每一个重要环节" description="根据客户健康状况、既往资料与实际需求，协助对接合适的日本医疗服务。" />
          <MotionReveal className="mt-8 flex flex-col gap-4 rounded-3xl bg-primary p-6 text-white md:flex-row md:items-center md:justify-between md:p-7">
            <div><h2 className="text-xl font-bold">预约前健康风险评估</h2><p className="mt-2 text-sm leading-7 text-blue-100">填写个人健康评估问卷，帮助我们提前了解您的健康情况与精密医疗项目需求。</p></div>
            <Link href="/health-assessment" className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-white px-6 py-3 text-sm font-bold text-primary transition hover:-translate-y-1 md:self-auto">填写健康评估 <ArrowRight size={16} /></Link>
          </MotionReveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {allServices.map(({ title, subtitle, description, href, icon: Icon }, index) => (
              <MotionReveal key={title} delay={(index % 3) * .07} className="medical-card group overflow-hidden">
                <Link href={href} className="flex h-full flex-col p-7" aria-label={`${title} - ${href.startsWith("/services/") ? "查看详情" : "咨询服务"}`}>
                  <IconBox><Icon /></IconBox>
                  <p className="mt-6 text-xs font-bold uppercase tracking-[.15em] text-secondary">{subtitle}</p>
                  <h2 className="mt-2 text-xl font-bold">{title}</h2>
                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-500">{description}</p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary">
                    {href.startsWith("/services/") ? "查看详情" : "咨询服务"}
                    <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                  </span>
                </Link>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>
      <CTA title="不确定适合哪一项服务？" text="欢迎提交您的需求，我们将协助梳理适合的沟通方向。" />
    </>
  );
}
