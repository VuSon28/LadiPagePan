import Image from "next/image";
import { hero } from "@/data/content";
import { Header } from "../Header";
import { Icon } from "../Icon";
import { MessengerCTA } from "../MessengerCTA";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="band-clay relative isolate flex min-h-[min(150vw,680px)] flex-col justify-end overflow-hidden pb-11"
    >
      {/* Ảnh tràn viền, phủ sắc cam để ăn nhập với bảng màu và giữ chữ đọc rõ. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          preload
          sizes="(min-width: 480px) 480px, 100vw"
          className="object-cover object-[center_28%]"
        />
        <div className="absolute inset-0 bg-clay/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(122,50,8,0.65)_0%,rgba(185,81,24,0.15)_30%,rgba(185,81,24,0.9)_68%,var(--color-clay)_100%)]" />
      </div>

      <Header overlay />

      <div className="container-page">
        <p className="text-[11.5px] leading-relaxed font-semibold tracking-[0.14em] whitespace-nowrap text-[var(--text-soft)] uppercase">
          {hero.eyebrow}
        </p>
        {/*
          Mỗi dòng là một khối không xuống dòng, cỡ chữ đặt trên dòng (theo vw để 3 dòng vừa màn 360px)
          nên khoảng cách dòng đều nhau; cụm nhấn chỉ to hơn 1,2 lần để cả câu đọc liền mạch.
        */}
        <h1 id="hero-title" className="mt-3 font-serif">
          {hero.title.map((line, i) => (
            <span
              key={i}
              className="block text-[min(5.2vw,22px)] leading-[1.45] font-medium whitespace-nowrap"
            >
              {line.map((part) =>
                part.em ? (
                  <strong
                    key={part.text}
                    className="animate-blink text-[1.2em] font-bold"
                  >
                    {part.text}
                  </strong>
                ) : (
                  <span key={part.text}>{part.text}</span>
                ),
              )}
            </span>
          ))}
        </h1>
        <p className="mt-3 max-w-[34ch] text-[15px] leading-[1.6]">
          {hero.body}
        </p>

        {/* Quà tặng trong ngày: thẻ kem để nổi hẳn trên nền ảnh. */}
        <p className="mt-5 flex items-start gap-2.5 rounded-2xl bg-cream px-3.5 py-3 text-[13.5px] leading-snug text-ink">
          <Icon name="gift" className="mt-0.5 size-5 shrink-0 text-clay" />
          <span>
            <strong className="font-bold text-clay">{hero.offer.lead}</strong>{" "}
            {hero.offer.label}{" "}
            <span className="font-semibold">{hero.offer.value}</span> –{" "}
            <strong className="animate-blink text-[17px] font-bold text-clay">
              {hero.offer.newPrice}
            </strong>{" "}
            {hero.offer.suffix}
          </span>
        </p>

        <div className="mt-4">
          <MessengerCTA id="hero-cta" source="hero" label={hero.cta} />
        </div>
      </div>
    </section>
  );
}
