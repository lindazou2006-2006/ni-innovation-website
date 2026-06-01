import type { Metadata } from "next";
import { ScanLine } from "lucide-react";
import Image from "next/image";
import { MotionReveal } from "@/components/MotionReveal";
import { BulletList, CTA, IconBox, PageHero, ProcessFlow, SectionHeading } from "@/components/Shared";
import { mriBenefits } from "@/content/site";

export const metadata: Metadata = {
  title: "MRI 全身癌症筛查（DWI）",
  description: "了解 MRI 全身检查 DWI 法：无电离辐射、覆盖身体多个部位，用于辅助评估异常风险。",
  keywords: ["MRI全身检查", "DWI", "DWIBS", "癌症筛查", "日本体检"],
};

export default function MRIPage() {
  return (
    <>
      <PageHero variant="mri" eyebrow="MRI / DWI Screening" title="MRI 全身癌症筛查" description="通过磁共振弥散加权成像（DWI）观察身体多个部位，为异常风险评估提供影像参考。" />
      <section className="section-pad bg-white">
        <div className="container-medical grid items-center gap-14 lg:grid-cols-[1fr_.85fr]">
          <SectionHeading eyebrow="MRI DWI" title="一次检查，系统了解身体情况" description="MRI 全身检查（DWI 法）利用磁共振弥散加权成像技术，观察人体组织内水分子运动差异，对身体多个部位进行影像评估。该检查可作为健康管理与癌症风险筛查的辅助方式之一。" />
          <MotionReveal direction="right" className="medical-card overflow-hidden">
            <Image src="/images/mri-screening.png" width={1536} height={1024} alt="现代医疗机构 MRI 检查设备" className="aspect-[4/3] w-full object-cover" />
          </MotionReveal>
        </div>
        <div className="container-medical mt-12">
          <MotionReveal className="medical-card bg-light p-8">
            <IconBox><ScanLine /></IconBox>
            <h3 className="mt-6 text-xl font-bold">检查说明</h3>
            <div className="mt-5"><BulletList items={["适用于关注全身健康风险、希望进行系统性筛查的人群。", "实际检查安排需结合个人健康状况，并以医疗机构评估为准。", "筛查结果不能替代专科诊断；如发现异常，应遵循医生建议进一步检查。"]} /></div>
          </MotionReveal>
        </div>
      </section>
      <section className="section-pad bg-light">
        <div className="container-medical">
          <SectionHeading eyebrow="Key Benefits" title="检查特点" center />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {mriBenefits.map(({ title, text, icon: Icon }, i) => <MotionReveal key={title} delay={i * .08} className="medical-card p-7"><IconBox><Icon /></IconBox><h3 className="mt-6 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-500">{text}</p></MotionReveal>)}
          </div>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="container-medical">
          <SectionHeading eyebrow="Screening Process" title="MRI 筛查流程" description="从预约到报告解读，我们协助安排清晰、有序的检查流程。" />
          <div className="mt-12"><ProcessFlow steps={["预约", "赴日检查", "MRI 扫描", "专家解析", "出具报告"]} /></div>
        </div>
      </section>
      <CTA title="预约 MRI 全身癌症筛查" text="填写预约前健康评估，帮助我们提前了解您的情况与检查需求。" button="填写预约前评估" href="/health-assessment" />
    </>
  );
}
