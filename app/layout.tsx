import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, Lora } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { site } from "@/lib/site";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const title = "Pancharm – Vòng đá phong thủy thiết kế riêng theo Bát Tự";
const description =
  "Pancharm luận Bát Tự từ ngày, tháng, năm và giờ sinh để tư vấn loại đá và thiết kế chiếc vòng riêng cho bạn. Luận Bát Tự miễn phí qua Messenger.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "Pancharm",
    title,
    description,
    images: [{ url: "/images/og/og-pancharm.jpg", width: 1200, height: 630, alt: "Vòng đá Pancharm đeo trên cổ tay" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/og/og-pancharm.jpg"] },
};

export const viewport: Viewport = {
  themeColor: "#F8F5EF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className={`${lora.variable} ${beVietnam.variable} antialiased`}>
      <body>
        <div className="phone-shell">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
