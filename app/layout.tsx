import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { company } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ni-innovation.com"),
  title: { default: "恩立信国际医疗支援 | 日本高端医疗协调服务", template: "%s | 恩立信国际医疗支援" },
  description: "株式会社 NI INNOVATION 专注日本医疗协调、MRI 全身癌症筛查、CTC 循环肿瘤细胞检测、第二诊疗意见、在线诊疗与赴日医疗支援。",
  keywords: ["日本医疗", "赴日体检", "医疗协调", "MRI全身癌症筛查", "DWI", "CTC检测", "第二诊疗意见", "在线诊疗"],
  openGraph: {
    title: "恩立信国际医疗支援 | 日本高端医疗协调服务",
    description: "连接日本优质医疗资源，为全球客户提供专业医疗协调服务。",
    url: "https://www.ni-innovation.com",
    type: "website",
    locale: "zh_CN",
    siteName: company.cnName,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  alternateName: company.cnName,
  url: "https://www.ni-innovation.com",
  logo: "https://www.ni-innovation.com/logo.png",
  telephone: company.phone,
  email: company.email,
  address: { "@type": "PostalAddress", streetAddress: company.address, addressCountry: "JP" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
