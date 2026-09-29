import { Footer } from "@/components/Footer";
import { StickyMessengerCTA } from "@/components/StickyMessengerCTA";
import { BatTuInsightSection } from "@/components/sections/BatTuInsightSection";
import { BeliefStatement } from "@/components/sections/BeliefStatement";
import { CertificateSection } from "@/components/sections/CertificateSection";
import { CollectionShowcase } from "@/components/sections/CollectionShowcase";
import { ConsultationProcess } from "@/components/sections/ConsultationProcess";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { OfferCountdown } from "@/components/sections/OfferCountdown";
import { PrivilegesSection } from "@/components/sections/PrivilegesSection";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TrustStrip } from "@/components/sections/TrustStrip";

// Thứ tự khối bám theo mockup đã duyệt. ExpertSection tạm ẩn cho tới khi có ảnh +
// thông tin chuyên gia đã xác minh.
export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <TrustStrip />
        <BeliefStatement />
        <ConsultationProcess />
        <BatTuInsightSection />
        <ProductShowcase />
        <CollectionShowcase />
        <CertificateSection />
        <TestimonialsSection />
        <PrivilegesSection />
        <OfferCountdown />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMessengerCTA />
    </>
  );
}
