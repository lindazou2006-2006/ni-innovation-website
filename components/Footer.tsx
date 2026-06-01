import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { company } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-[#102f49] text-white/75">
      <div className="container-medical grid gap-10 py-16 md:grid-cols-[1.35fr_.8fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="rounded-lg bg-white p-1"><Image src="/logo.png" width={54} height={54} alt="NI INNOVATION Logo" className="h-12 w-12 rounded-md object-cover" /></span>
            <span>
              <strong className="block text-[16px] tracking-[.14em] text-white">NI INNOVATION</strong>
              <span className="mt-1 block text-[10px] font-bold tracking-[.1em] text-blue-200">恩立信国际医疗支援</span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7">专注日本医疗协调、国际患者支援与健康管理服务，以专业沟通连接日本优质医疗资源。</p>
        </div>
        <div>
          <h3 className="font-semibold text-white">快速导航</h3>
          <div className="mt-5 grid gap-3 text-sm">
            <Link href="/about" className="hover:text-white">关于恩立信</Link>
            <Link href="/services" className="hover:text-white">服务项目</Link>
            <Link href="/services/mri" className="hover:text-white">MRI 筛查</Link>
            <Link href="/services/ctc" className="hover:text-white">CTC 检测</Link>
            <Link href="/health-assessment" className="hover:text-white">健康评估问卷</Link>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-white">联系我们</h3>
          <div className="mt-5 grid gap-3 text-sm">
            <a href={`tel:${company.phone}`} className="flex gap-3 hover:text-white"><Phone size={17} />{company.phone}</a>
            <a href={`mailto:${company.email}`} className="flex gap-3 hover:text-white"><Mail size={17} />{company.email}</a>
            <p className="flex gap-3 leading-6"><MapPin size={17} className="mt-1 shrink-0" />{company.address}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">© 2025 NI INNOVATION Co., Ltd. All Rights Reserved.</div>
    </footer>
  );
}
