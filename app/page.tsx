import { Footer } from "@/components/Footer";
import { OrderNotificationToast } from "@/components/OrderNotificationToast";
import { StickyMessengerCTA } from "@/components/StickyMessengerCTA";
import { TikTokBannerHint } from "@/components/TikTokBannerHint";
import { BatTuInsightSection } from "@/components/sections/BatTuInsightSection";
import { CertificateSection } from "@/components/sections/CertificateSection";
import { CollectionShowcase } from "@/components/sections/CollectionShowcase";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { OfferCountdown } from "@/components/sections/OfferCountdown";
import { PrivilegesSection } from "@/components/sections/PrivilegesSection";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Vòng đá phong thủy cá nhân hóa theo Bát Tự – Pancharm",
  description:
    "Pancharm luận Bát Tự từ ngày, tháng, năm và giờ sinh để tư vấn loại đá và thiết kế chiếc vòng phong thủy riêng cho bạn.",
  image: [
    `${site.url}/images/hero/hero-pancharm-mobile.webp`,
    `${site.url}/images/og/og-pancharm.jpg`,
  ],
  brand: { "@type": "Brand", name: "Pancharm" },
  offers: {
    "@type": "AggregateOffer",
    lowPrice: 720000,
    highPrice: 6025000,
    priceCurrency: "VND",
    availability: "https://schema.org/InStock",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TikTokBannerHint />
      <main>
        <HeroSection />
        <TrustStrip />
        <BatTuInsightSection />
        <ProductShowcase />
        <CollectionShowcase />
        <CertificateSection />
        <TestimonialsSection />
        <PrivilegesSection />
        <FAQSection />
        <OfferCountdown />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMessengerCTA />
      <OrderNotificationToast />
    </>
  );
}
