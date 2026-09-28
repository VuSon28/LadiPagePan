import { Footer } from "@/components/Footer";
import { StickyMessengerCTA } from "@/components/StickyMessengerCTA";
import { BatTuInsightSection } from "@/components/sections/BatTuInsightSection";
import { CertificateSection } from "@/components/sections/CertificateSection";
import { CollectionShowcase } from "@/components/sections/CollectionShowcase";
import { ConsultationProcess } from "@/components/sections/ConsultationProcess";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { MeaningCards } from "@/components/sections/MeaningCards";
import { OfferCountdown } from "@/components/sections/OfferCountdown";
import { PrivilegesSection } from "@/components/sections/PrivilegesSection";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TrustStrip } from "@/components/sections/TrustStrip";

// ExpertSection tạm ẩn cho tới khi có ảnh + thông tin chuyên gia đã xác minh.
export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <TrustStrip />
        <BatTuInsightSection />
        <ConsultationProcess />
        <MeaningCards />
        <ProductShowcase />
        <CollectionShowcase />
        <CertificateSection />
        <PrivilegesSection />
        <TestimonialsSection />
        <OfferCountdown />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMessengerCTA />
    </>
  );
}
