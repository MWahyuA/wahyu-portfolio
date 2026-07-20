import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MuhammadWahyu Anggoro | Portfolio",
  description:
    "Website portofolio Muhammad Wahyu Anggoro — Web Developer & UI/UX Designer. Lihat proyek, pengalaman, dan sertifikasi.",
  keywords: ["portfolio", "web developer", "ui/ux designer", "muhammad wahyu anggoro", "wahyu", "awang", "mwa_awang"],
};

import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" data-scroll-behavior="smooth">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
