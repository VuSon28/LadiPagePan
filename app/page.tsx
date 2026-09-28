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
import { PrivilegesSection } from "@/components/sections/PrivilegesSection";
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
        <CollectionShowcase />
        <CertificateSection />
        <PrivilegesSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMessengerCTA />
    </>
  );
}
