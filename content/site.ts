import {
  Activity, BadgeCheck, Building2, CalendarCheck, Car, CircleDot,
  ClipboardCheck, FileSearch, Globe2, HeartPulse, Languages, Microscope,
  ScanLine, ShieldCheck, Stethoscope, Video, type LucideIcon,
} from "lucide-react";

export const company = {
  name: "株式会社 NI INNOVATION",
  cnName: "恩立信国际医疗支援",
  shortName: "NIIN",
  phone: "092-511-0906",
  email: "info@ni-innovation.com",
  address: "福岡市南区長丘二丁目16-8-302",
};

export type Service = {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export const coreServices: Service[] = [
  {
    title: "MRI 全身癌症筛查",
    subtitle: "DWIBS / DWI",
    description: "通过全身磁共振弥散加权成像，辅助评估身体多个部位的异常风险。",
    href: "/services/mri",
    icon: ScanLine,
  },
  {
    title: "CTC 循环肿瘤细胞检测",
    subtitle: "Circulating Tumor Cells",
    description: "通过血液样本进行循环肿瘤细胞分析，为健康风险评估与动态观察提供参考。",
    href: "/services/ctc",
    icon: Microscope,
  },
  {
    title: "第二诊疗意见",
    subtitle: "Second Opinion",
    description: "协助整理医学资料，对接日本专科医生，为后续诊疗决策提供专业参考。",
    href: "/services#second-opinion",
    icon: FileSearch,
  },
  {
    title: "日本在线诊疗",
    subtitle: "Online Consultation",
    description: "跨越地域限制，与日本医疗机构在线沟通，获得更便捷的专业医疗支持。",
    href: "/services#online",
    icon: Video,
  },
];

export const allServices: Service[] = [
  {
    title: "日本在线诊疗",
    subtitle: "远程会诊",
    description: "根据客户需求与医学资料，协调日本医疗机构开展线上诊疗或远程咨询。",
    href: "/contact",
    icon: Video,
  },
  {
    title: "医疗协调服务",
    subtitle: "医院预约",
    description: "协助匹配适合的日本医院与专科，完成预约、资料递交及就诊流程协调。",
    href: "/contact",
    icon: CalendarCheck,
  },
  {
    title: "医疗翻译服务",
    subtitle: "专业医疗翻译",
    description: "提供线上线下医疗翻译支持，协助准确沟通病情、诊疗方案与注意事项。",
    href: "/contact",
    icon: Languages,
  },
  {
    title: "第二诊疗意见",
    subtitle: "权威专家咨询",
    description: "对接日本专科医生审阅既往资料，为进一步检查与诊疗方向提供意见。",
    href: "/contact",
    icon: FileSearch,
  },
  {
    title: "日本高端体检",
    subtitle: "个性化健康管理",
    description: "结合年龄、病史与关注重点，协调日本医疗机构制定个性化体检方案。",
    href: "/contact",
    icon: ClipboardCheck,
  },
  {
    title: "赴日医疗支援",
    subtitle: "签证、接送、住宿安排",
    description: "围绕赴日就医实际需求，协助办理医疗签证、接送、住宿及就诊陪同。",
    href: "/contact",
    icon: Car,
  },
  ...coreServices.slice(0, 2),
];

export const advantages = [
  { title: "日本优质医疗资源", text: "合作大学附属医院及专科医疗机构", icon: Building2 },
  { title: "一站式医疗协调", text: "诊疗预约、翻译、陪诊全流程服务", icon: Globe2 },
  { title: "专业医疗翻译", text: "线上线下医疗翻译支持", icon: Languages },
  { title: "安心赴日医疗", text: "签证、接送、住宿全方位安排", icon: ShieldCheck },
];

export const mriBenefits = [
  { title: "全身癌症筛查", text: "一次检查可覆盖身体多个部位，为异常风险评估提供影像参考。", icon: Activity },
  { title: "检查效率较高", text: "在一次影像检查中完成多部位扫描，便于系统了解身体情况。", icon: CalendarCheck },
  { title: "无电离辐射", text: "磁共振检查不使用 X 射线，也无需注射放射性示踪剂。", icon: ShieldCheck },
];

export const ctcBenefits = [
  { title: "辅助早期风险评估", text: "从血液样本中分析循环肿瘤细胞，为健康管理提供参考。", icon: HeartPulse },
  { title: "血液检测", text: "通过采集外周血完成检测，流程清晰，便于安排。", icon: CircleDot },
  { title: "相对无创", text: "相较部分影像与组织学检查，采血方式对身体负担较小。", icon: ShieldCheck },
  { title: "支持动态观察", text: "可结合医生建议复查，用于辅助了解相关指标的变化趋势。", icon: BadgeCheck },
];
