import { Footer } from "@/components/Footer";
import { StickyMessengerCTA } from "@/components/StickyMessengerCTA";
import { BatTuInsightSection } from "@/components/sections/BatTuInsightSection";
import { BeliefStatement } from "@/components/sections/BeliefStatement";
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

// Thứ tự khối bám theo mockup đã duyệt.
// Đang tạm ẩn: ConsultationProcess (quy trình 4 bước) và ExpertSection — component và
// nội dung vẫn còn, thêm lại bằng cách import rồi chèn vào <main> bên dưới.
export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <TrustStrip />
        <BeliefStatement />
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
    </>
  );
}
