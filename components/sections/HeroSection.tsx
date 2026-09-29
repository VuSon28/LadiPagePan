import Image from "next/image";
import { hero } from "@/data/content";
import { Header } from "../Header";
import { MessengerCTA } from "../MessengerCTA";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[min(150vw,660px)] flex-col justify-end overflow-hidden pb-11"
    >
      {/* Ảnh tràn viền, phủ sắc đất để ăn nhập với bảng màu và giữ chữ đọc rõ. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          preload
          sizes="(min-width: 480px) 480px, 100vw"
          className="object-cover object-[center_28%]"
        />
        <div className="absolute inset-0 bg-clay/55 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(122,61,36,0.65)_0%,rgba(165,92,60,0.15)_30%,rgba(165,92,60,0.88)_68%,var(--color-clay)_100%)]" />
      </div>

      <Header overlay />

      <div className="container-page">
        <p className="max-w-[22ch] text-[12px] leading-relaxed font-semibold tracking-[0.16em] text-cream/85 uppercase">
          {hero.eyebrow}
        </p>
        <h1 id="hero-title" className="mt-3 max-w-[16ch] font-serif text-[31px] leading-[1.2] font-semibold text-cream">
          {hero.title}
        </h1>
        <p className="mt-4 max-w-[38ch] text-[14.5px] leading-relaxed text-cream/85">{hero.body}</p>
        <div className="mt-6">
          <MessengerCTA id="hero-cta" source="hero" label={hero.cta} />
        </div>
      </div>
    </section>
  );
}
