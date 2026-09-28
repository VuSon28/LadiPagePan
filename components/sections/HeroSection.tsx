import Image from "next/image";
import { hero } from "@/data/content";
import { Header } from "../Header";
import { Icon } from "../Icon";
import { MessengerCTA } from "../MessengerCTA";

export function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden pb-14">
      {/* Ảnh nằm bên phải, mờ dần sang nền ivory để chữ luôn đọc rõ. */}
      <div className="absolute top-0 right-0 -z-10 h-[min(128vw,560px)] w-[64%]">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          preload
          sizes="(min-width: 480px) 310px, 64vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-ivory)_0%,rgba(248,245,239,0.75)_22%,rgba(248,245,239,0)_55%)]"
        />
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ivory/90 to-transparent" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ivory to-transparent" />
      </div>

      <Header overlay />

      <div className="container-page pt-20 [text-shadow:0_0_14px_var(--color-ivory),0_0_4px_var(--color-ivory)]">
        <p className="text-[12px] font-semibold tracking-[0.12em] text-gold-deep uppercase">{hero.eyebrow}</p>
        <span aria-hidden="true" className="mt-2 block h-px w-10 bg-gold" />
        <h1 id="hero-title" className="mt-3 max-w-[15ch] font-serif text-[31px] leading-[1.18] font-semibold text-ink">
          {hero.title}
        </h1>
        <p className="mt-3 max-w-[58%] text-[15px] leading-relaxed font-medium text-ink/85">{hero.body}</p>

        <p className="mt-5 flex items-start gap-2.5 rounded-2xl border border-terracotta/30 bg-white/90 px-3.5 py-3 text-[14px] leading-snug text-ink [text-shadow:none]">
          <Icon name="gift" className="mt-0.5 size-5 shrink-0 text-terracotta" />
          <span>
            {hero.offer.label}{" "}
            <s className="text-muted decoration-terracotta decoration-2">{hero.offer.oldPrice}</s>{" "}
            <strong className="animate-blink text-[17px] font-bold text-terracotta">{hero.offer.newPrice}</strong>{" "}
            {hero.offer.suffix}
          </span>
        </p>

        <div className="mt-4 [text-shadow:none]">
          <MessengerCTA id="hero-cta" source="hero" label={hero.cta} />
        </div>
        <ul className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-ink/80">
          {hero.microcopy.map((text, i) => (
            <li key={text} className="flex items-center gap-1.5">
              {i === 0 ? (
                <Icon name="leaf" className="size-4 text-forest" />
              ) : (
                <span aria-hidden="true" className="size-1 rounded-full bg-gold" />
              )}
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
