"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2, ClipboardCheck, LockKeyhole, Send } from "lucide-react";

const habits = {
  smoking: ["从不吸烟", "已戒烟", "偶尔吸烟", "每天吸烟"],
  drinking: ["不饮酒", "偶尔饮酒", "每周 1-3 次", "每周 4 次以上"],
  alcohol: ["啤酒", "红酒", "白酒", "清酒", "其他"],
  exercise: ["基本不运动", "每周 1-2 次", "每周 3-5 次", "每周 5 次以上"],
  sleepHours: ["少于 5 小时", "5-6 小时", "6-8 小时", "8 小时以上"],
  sleepQuality: ["很好", "一般", "较差", "长期失眠"],
};

const histories = ["高血压", "糖尿病", "高脂血症", "冠心病", "脑梗塞", "肝病", "肾病", "癌症", "甲状腺疾病", "其他"];
const familyHistories = ["肺癌", "胃癌", "肠癌", "肝癌", "乳腺癌", "前列腺癌", "糖尿病", "高血压", "心脑血管疾病", "无相关病史"];
const symptoms = {
  全身症状: ["体重明显下降", "长期疲劳", "发热", "夜间盗汗", "食欲减退"],
  呼吸系统: ["长期咳嗽", "痰中带血", "胸闷", "呼吸困难"],
  消化系统: ["胃痛", "胃胀", "反酸", "便血", "大便习惯改变"],
  神经系统: ["头晕", "头痛", "记忆力下降", "肢体麻木"],
};
const riskFactors = ["年龄 40 岁以上", "长期吸烟", "长期饮酒", "家族癌症病史", "工作环境接触化学物质", "经常熬夜", "长期高压力", "肥胖（BMI ≥ 25）", "糖尿病", "慢性炎症病史"];
const goals = ["癌症筛查", "心脑血管疾病预防", "慢病管理", "体重管理", "睡眠改善", "抗衰老", "亚健康调理", "免疫力提升", "其他"];
const interests = ["全身 MRI 癌症筛查", "CTC 循环肿瘤细胞检测", "PET-CT 检查", "基因检测", "心脑血管精密检查", "肠胃镜检查", "抗衰老检测", "营养医学检测", "私人健康管理计划"];

function Section({ number, title, children }: { number: string; title: string; children: ReactNode }) {
  return (
    <section className="medical-card p-6 md:p-8">
      <div className="flex items-center gap-3 border-b border-blue-100 pb-5">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">{number}</span>
        <h2 className="text-xl font-bold text-dark">{title}</h2>
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function Input({ label, type = "text", suffix }: { label: string; type?: string; suffix?: string }) {
  return <label className="grid gap-2 text-sm font-bold text-dark">{label}<span className="flex items-center rounded-xl border border-blue-100 bg-light px-4 focus-within:border-secondary focus-within:bg-white"><input type={type} className="w-full bg-transparent py-3.5 text-sm font-normal outline-none" />{suffix && <span className="text-xs text-slate-400">{suffix}</span>}</span></label>;
}

function Options({ name, items, radio = false }: { name: string; items: string[]; radio?: boolean }) {
  return <div className="flex flex-wrap gap-x-5 gap-y-3">{items.map(item => <label key={item} className="flex cursor-pointer items-center gap-2 text-sm text-slate-600"><input type={radio ? "radio" : "checkbox"} name={name} value={item} className="h-4 w-4 accent-primary" />{item}</label>)}</div>;
}

function HabitBlock({ title, children }: { title: string; children: ReactNode }) {
  return <div className="rounded-2xl bg-light p-5"><h3 className="text-sm font-bold text-dark">{title}</h3><div className="mt-4 grid gap-4">{children}</div></div>;
}

export function HealthAssessmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <form className="grid gap-6" onSubmit={handleSubmit}>
      {submitted && <div className="flex gap-3 rounded-2xl border border-green-200 bg-green-50 p-5 text-sm leading-7 text-green-800"><CheckCircle2 className="mt-1 shrink-0" size={19} /><p><strong>问卷已完成。</strong><br />当前为网站演示提交。正式上线后可接入加密邮件、CRM 或预约管理系统。</p></div>}

      <Section number="01" title="基本信息">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Input label="姓名" /><div className="grid gap-2 text-sm font-bold text-dark">性别<Options name="gender" items={["男", "女"]} radio /></div><Input label="出生年月" type="month" />
          <Input label="年龄" type="number" /><Input label="国籍" /><Input label="身高" type="number" suffix="cm" />
          <Input label="体重" type="number" suffix="kg" /><Input label="BMI" type="number" /><Input label="联系电话" type="tel" />
          <Input label="电子邮箱" type="email" />
        </div>
      </Section>

      <Section number="02" title="生活习惯评估">
        <div className="grid gap-5 lg:grid-cols-2">
          <HabitBlock title="吸烟情况"><Options name="smoking" items={habits.smoking} radio /><div className="grid gap-4 sm:grid-cols-2"><Input label="每日约" suffix="支" /><Input label="吸烟年限" suffix="年" /></div></HabitBlock>
          <HabitBlock title="饮酒情况"><Options name="drinking" items={habits.drinking} radio /><p className="text-xs font-bold text-slate-500">常饮酒种</p><Options name="alcohol" items={habits.alcohol} /></HabitBlock>
          <HabitBlock title="运动情况"><Options name="exercise" items={habits.exercise} radio /><Input label="运动项目" /></HabitBlock>
          <HabitBlock title="睡眠情况"><p className="text-xs font-bold text-slate-500">平均睡眠时间</p><Options name="sleepHours" items={habits.sleepHours} radio /><p className="text-xs font-bold text-slate-500">睡眠质量</p><Options name="sleepQuality" items={habits.sleepQuality} radio /></HabitBlock>
        </div>
      </Section>

      <Section number="03" title="既往病史">
        <p className="mb-4 text-sm text-slate-500">是否患有以下疾病：</p>
        <div className="overflow-x-auto rounded-2xl border border-blue-100">
          <table className="w-full min-w-[430px] text-sm"><thead className="bg-light text-left text-dark"><tr><th className="px-4 py-3">疾病</th><th className="px-4 py-3">有</th><th className="px-4 py-3">无</th></tr></thead><tbody>{histories.map(item => <tr key={item} className="border-t border-blue-50"><td className="px-4 py-3 text-slate-600">{item}</td><td className="px-4 py-3"><input type="radio" name={`history-${item}`} value="yes" className="accent-primary" /></td><td className="px-4 py-3"><input type="radio" name={`history-${item}`} value="no" className="accent-primary" /></td></tr>)}</tbody></table>
        </div>
        <label className="mt-5 grid gap-2 text-sm font-bold text-dark">其他疾病说明<textarea rows={3} className="rounded-xl border border-blue-100 bg-light px-4 py-3 text-sm font-normal outline-none focus:border-secondary focus:bg-white" /></label>
      </Section>

      <Section number="04" title="家族病史"><p className="mb-4 text-sm text-slate-500">直系亲属（父母、兄弟姐妹）是否患有：</p><Options name="familyHistory" items={familyHistories} /><label className="mt-5 grid gap-2 text-sm font-bold text-dark">备注<textarea rows={3} className="rounded-xl border border-blue-100 bg-light px-4 py-3 text-sm font-normal outline-none focus:border-secondary focus:bg-white" /></label></Section>

      <Section number="05" title="当前身体状况"><p className="mb-4 text-sm text-slate-500">近半年是否出现以下情况：</p><div className="grid gap-5 md:grid-cols-2">{Object.entries(symptoms).map(([title, items]) => <HabitBlock key={title} title={title}><Options name={title} items={items} /></HabitBlock>)}</div></Section>

      <Section number="06" title="癌症风险评估"><p className="mb-4 text-sm text-slate-500">是否符合以下情况：</p><Options name="riskFactors" items={riskFactors} /></Section>
      <Section number="07" title="健康管理目标"><p className="mb-4 text-sm text-slate-500">您最关注的问题：</p><Options name="goals" items={goals} /></Section>
      <Section number="08" title="日本精密医疗项目意向"><p className="mb-4 text-sm text-slate-500">希望进一步了解：</p><Options name="interests" items={interests} /></Section>

      <Section number="09" title="健康风险评分（医疗机构填写）">
        <div className="mb-5 flex gap-3 rounded-2xl bg-blue-50 p-4 text-sm leading-6 text-primary"><ClipboardCheck className="mt-0.5 shrink-0" size={18} />此区域由医疗机构工作人员结合问卷、检查结果及专业判断填写。</div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{["心脑血管风险", "糖尿病风险", "肿瘤风险", "代谢综合征风险", "睡眠风险", "心理压力风险"].map(item => <Input key={item} label={item} />)}</div>
        <div className="mt-5"><p className="mb-3 text-sm font-bold text-dark">综合评估等级</p><Options name="riskLevel" items={["低风险", "中风险", "高风险"]} radio /></div>
        <label className="mt-5 grid gap-2 text-sm font-bold text-dark">医师建议<textarea rows={4} className="rounded-xl border border-blue-100 bg-light px-4 py-3 text-sm font-normal outline-none focus:border-secondary focus:bg-white" /></label>
      </Section>

      <div className="medical-card bg-dark p-6 text-white md:p-8">
        <div className="flex gap-3"><LockKeyhole className="mt-1 shrink-0 text-secondary" size={20} /><p className="text-sm leading-7 text-white/75">提交的信息仅用于健康咨询、预约前沟通及风险评估参考，不构成疾病诊断。正式上线时应接入安全的数据传输和存储系统，并按照适用法规处理个人健康信息。</p></div>
        <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-primary transition hover:-translate-y-1 hover:shadow-lg">提交健康评估 <Send size={16} /></button>
      </div>
    </form>
  );
}
