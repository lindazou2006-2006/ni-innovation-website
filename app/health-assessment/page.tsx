import type { Metadata } from "next";
import { HealthAssessmentForm } from "@/components/HealthAssessmentForm";
import { PageHero } from "@/components/Shared";

export const metadata: Metadata = {
  title: "个人健康评估问卷",
  description: "填写 NI INNOVATION 个人健康评估问卷，用于初诊、体检预约、MRI 癌症筛查及 CTC 循环肿瘤细胞检测前的健康风险评估。",
  keywords: ["健康评估问卷", "MRI癌症筛查预约", "CTC检测预约", "日本精密体检", "健康风险评估"],
};

export default function HealthAssessmentPage() {
  return (
    <>
      <PageHero eyebrow="Personal Health Assessment" title="个人健康评估问卷" description="用于初诊、体检预约、MRI 癌症筛查及 CTC 循环肿瘤细胞检测前的健康风险评估。请根据实际情况填写，以便我们更准确地了解您的健康需求。" />
      <section className="bg-light py-10">
        <div className="container-medical rounded-2xl border border-blue-100 bg-white px-5 py-4 text-sm leading-7 text-slate-600">健康管理流程：<strong className="text-primary">健康评估 → 风险分析 → 精密检查 → 专家解读 → 个性化方案 → 定期随访管理</strong></div>
      </section>
      <section className="section-pad bg-light pt-8"><div className="container-medical"><HealthAssessmentForm /></div></section>
    </>
  );
}
