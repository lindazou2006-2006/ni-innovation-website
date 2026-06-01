"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company } from "@/content/site";

const nav = [
  { label: "首页", href: "/" },
  { label: "关于恩立信", href: "/about" },
  { label: "服务项目", href: "/services" },
  { label: "MRI 筛查", href: "/services/mri" },
  { label: "CTC 检测", href: "/services/ctc" },
  { label: "健康评估", href: "/health-assessment" },
  { label: "联系我们", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-blue-100/70 bg-white/90 shadow-sm backdrop-blur-xl" : "bg-white/95 backdrop-blur-md"}`}>
      <div className="container-medical flex h-[76px] items-center justify-between">
        <Link href="/" aria-label="NI INNOVATION 首页">
          <span className="flex items-center gap-3">
            <Image src="/logo.png" width={54} height={54} alt="NI INNOVATION Logo" className="h-12 w-12 rounded-lg object-cover" priority />
            <span className="hidden sm:block">
              <strong className="block text-[17px] tracking-[.16em] text-dark">NI INNOVATION</strong>
              <span className="mt-1 block text-[10px] font-bold tracking-[.12em] text-primary">恩立信国际医疗支援</span>
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-5 lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className={`text-[14px] font-medium transition-colors hover:text-primary ${pathname === item.href ? "text-primary" : "text-dark/75"}`}>
              {item.label}
            </Link>
          ))}
        </nav>
        <a href={`tel:${company.phone}`} className="hidden items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-dark lg:flex">
          <Phone size={15} /> {company.phone}
        </a>
        <button className="rounded-lg p-2 text-primary lg:hidden" onClick={() => setOpen(!open)} aria-label="打开菜单">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t border-blue-50 bg-white lg:hidden">
            <div className="container-medical flex flex-col py-4">
              {nav.map((item) => <Link key={item.href} href={item.href} className="border-b border-blue-50 py-3 text-sm font-medium text-dark/80">{item.label}</Link>)}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
