import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { site } from "@/lib/site";
import "./globals.css";

// Cặp font theo mẫu tham chiếu: Playfair Display (tiêu đề, có nghiêng) + Inter (chữ thường).
// Dùng bản variable nên không cần liệt kê từng độ đậm.
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "vietnamese"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
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
  themeColor: "#A55C3C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className={`${playfair.variable} ${inter.variable} antialiased`}>
      <body>
        <div className="phone-shell">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
