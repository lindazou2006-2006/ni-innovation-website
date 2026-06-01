import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ClipboardCheck } from "lucide-react";
import Link from "next/link";
import { company } from "@/content/site";
import { MotionReveal } from "@/components/MotionReveal";
import { PageHero } from "@/components/Shared";

export const metadata: Metadata = {
  title: "联系我们",
  description: "联系株式会社 NI INNOVATION，咨询日本医疗协调、MRI 筛查、CTC 检测、在线诊疗与赴日医疗支援服务。",
};

const fields = [
  ["姓名", "text", "请输入您的姓名"],
  ["电话", "tel", "请输入联系电话"],
  ["微信", "text", "请输入微信号"],
  ["邮箱", "email", "请输入电子邮箱"],
];

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact NIIN" title="联系我们" description="欢迎告诉我们您的需求，我们将为您提供进一步的咨询与协调支持。" />
      <section className="section-pad bg-light">
        <div className="container-medical grid gap-7 lg:grid-cols-[1.1fr_.9fr]">
          <MotionReveal className="medical-card bg-white p-7 md:p-9">
            <h2 className="text-2xl font-bold">提交咨询</h2>
            <p className="mt-3 text-sm leading-7 text-slate-500">请填写以下信息，我们将尽快与您联系。</p>
            <form className="mt-7 grid gap-5 sm:grid-cols-2">
              {fields.map(([label, type, placeholder]) => <label key={label} className="grid gap-2 text-sm font-bold text-dark">{label}<input required={label === "姓名" || label === "电话"} type={type} placeholder={placeholder} className="rounded-xl border border-blue-100 bg-light px-4 py-3.5 text-sm font-normal outline-none transition placeholder:text-slate-400 focus:border-secondary focus:bg-white" /></label>)}
              <label className="grid gap-2 text-sm font-bold text-dark sm:col-span-2">咨询项目<select className="rounded-xl border border-blue-100 bg-light px-4 py-3.5 text-sm font-normal outline-none focus:border-secondary"><option>请选择咨询项目</option><option>MRI 全身癌症筛查</option><option>CTC 循环肿瘤细胞检测</option><option>日本在线诊疗</option><option>第二诊疗意见</option><option>赴日医疗支援</option><option>其他服务</option></select></label>
              <label className="grid gap-2 text-sm font-bold text-dark sm:col-span-2">留言内容<textarea rows={5} placeholder="请简要说明您的需求" className="resize-none rounded-xl border border-blue-100 bg-light px-4 py-3.5 text-sm font-normal outline-none transition placeholder:text-slate-400 focus:border-secondary focus:bg-white" /></label>
              <button type="submit" className="rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-dark sm:w-fit">提交咨询</button>
            </form>
          </MotionReveal>
          <MotionReveal direction="right" className="grid gap-5">
            <div className="medical-card bg-dark p-7 text-white">
              <ClipboardCheck className="text-secondary" size={26} />
              <h2 className="mt-5 text-xl font-bold">预约前健康评估</h2>
              <p className="mt-3 text-sm leading-7 text-white/70">如需咨询 MRI 筛查、CTC 检测或日本精密体检，可先填写个人健康评估问卷。</p>
              <Link href="/health-assessment" className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-sm font-bold text-primary transition hover:-translate-y-1">填写健康评估</Link>
            </div>
            <div className="medical-card bg-primary p-8 text-white">
              <p className="text-xs font-bold uppercase tracking-[.18em] text-blue-200">NI Innovation</p>
              <h2 className="mt-3 text-2xl font-bold">{company.name}</h2>
              <p className="mt-2 text-sm text-blue-100">{company.cnName}</p>
              <div className="mt-8 grid gap-5 text-sm">
                <a href={`tel:${company.phone}`} className="flex items-center gap-3"><Phone size={18} />{company.phone}</a>
                <a href={`mailto:${company.email}`} className="flex items-center gap-3"><Mail size={18} />{company.email}</a>
                <p className="flex items-start gap-3 leading-6"><MapPin size={18} className="mt-0.5 shrink-0" />{company.address}</p>
              </div>
            </div>
            <div className="medical-card flex min-h-52 items-center justify-center bg-[linear-gradient(135deg,#e4f0fb,#f8fbff)] p-8 text-center">
              <div><MapPin className="mx-auto text-primary" size={28} /><p className="mt-4 text-sm font-bold text-dark">Google Map 区域</p><p className="mt-2 text-xs leading-6 text-slate-500">福岡市南区長丘二丁目16-8-302</p></div>
            </div>
          </MotionReveal>
        </div>
      </section>
    </>
  );
}
