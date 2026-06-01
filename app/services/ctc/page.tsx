import type { Metadata } from "next";
import { CircleDot, Droplets, Microscope, SearchCheck } from "lucide-react";
import Image from "next/image";
import { MotionReveal } from "@/components/MotionReveal";
import { BulletList, CTA, IconBox, PageHero, ProcessFlow, SectionHeading } from "@/components/Shared";
import { ctcBenefits } from "@/content/site";

export const metadata: Metadata = {
  title: "CTC 循环肿瘤细胞检测",
  description: "了解 CTC 循环肿瘤细胞检测：通过外周血样本分析循环肿瘤细胞，为风险评估与动态观察提供辅助参考。",
  keywords: ["CTC检测", "循环肿瘤细胞", "癌症风险评估", "血液检测"],
};

export default function CTCPage() {
  return (
    <>
      <PageHero variant="ctc" eyebrow="CTC Blood Test" title="CTC 循环肿瘤细胞检测" description="通过外周血样本分析循环肿瘤细胞，为健康风险评估与动态观察提供辅助参考。" />
      <section className="section-pad bg-white">
        <div className="container-medical grid items-center gap-14 lg:grid-cols-[1fr_.9fr]">
          <SectionHeading eyebrow="Circulating Tumor Cells" title="从血液中观察值得关注的信号" description="循环肿瘤细胞（CTC）是从原发灶或转移灶进入外周血液循环的肿瘤细胞。CTC 检测通过采集外周血，经过实验室分析与专业解读，为癌症风险评估、健康管理及部分治疗阶段的动态观察提供辅助参考。" />
          <MotionReveal direction="right" className="medical-card overflow-hidden">
            <Image src="/images/ctc-laboratory.png" width={1536} height={1024} alt="CTC 循环肿瘤细胞血液检测实验室" className="aspect-[4/3] w-full object-cover" />
          </MotionReveal>
        </div>
        <div className="container-medical mt-12">
          <MotionReveal className="medical-card p-8">
            <h3 className="text-xl font-bold">检测说明</h3>
            <div className="mt-5"><BulletList items={["采用外周血采集方式，检测流程相对便捷。", "检测结果需要结合影像学、临床表现及医生判断综合分析。", "CTC 检测属于辅助性评估，不能单独作为癌症诊断依据。"]} /></div>
          </MotionReveal>
        </div>
      </section>
      <section className="section-pad bg-light">
        <div className="container-medical">
          <SectionHeading eyebrow="Test Advantages" title="检测优势" center />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ctcBenefits.map(({ title, text, icon: Icon }, i) => <MotionReveal key={title} delay={i * .08} className="medical-card p-7"><IconBox><Icon /></IconBox><h3 className="mt-6 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-500">{text}</p></MotionReveal>)}
          </div>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="container-medical">
          <SectionHeading eyebrow="How It Works" title="检测原理" description="通过标准化流程，对血液样本中的目标细胞进行富集、识别与分析。" />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[[Droplets, "采集样本", "采集外周血样本，按规范送至实验室。"], [Microscope, "细胞分析", "对目标细胞进行富集、识别与分析。"], [SearchCheck, "专业解读", "结合检测结果与健康情况提供解读建议。"]].map(([Icon, title, text], i) => {
              const StepIcon = Icon as typeof CircleDot;
              return <MotionReveal key={String(title)} delay={i * .08} className="medical-card p-7"><IconBox><StepIcon /></IconBox><p className="mt-6 text-xs font-bold tracking-widest text-secondary">0{i + 1}</p><h3 className="mt-2 text-lg font-bold">{String(title)}</h3><p className="mt-3 text-sm leading-7 text-slate-500">{String(text)}</p></MotionReveal>;
            })}
          </div>
        </div>
      </section>
      <section className="section-pad bg-light">
        <div className="container-medical">
          <SectionHeading eyebrow="Test Process" title="CTC 检测流程" />
          <div className="mt-12"><ProcessFlow steps={["采血", "实验室分析", "专家解读", "健康建议"]} /></div>
        </div>
      </section>
      <CTA title="了解 CTC 循环肿瘤细胞检测" text="填写预约前健康评估，帮助我们提前了解您的情况与检测需求。" button="填写预约前评估" href="/health-assessment" />
    </>
  );
}
