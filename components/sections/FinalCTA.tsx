import Image from "next/image";
import { finalCta } from "@/data/content";
import { MessengerCTA } from "../MessengerCTA";

export function FinalCTA() {
  return (
    <section aria-labelledby="final-title" className="relative isolate overflow-hidden bg-forest py-12 text-center">
      <Image
        src={finalCta.image}
        alt=""
        fill
        sizes="(min-width: 480px) 480px, 100vw"
        className="-z-20 object-cover opacity-40"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(23,61,53,0.92)_35%,rgba(23,61,53,0.7)_100%)]" />
      <div className="container-page">
        <h2 id="final-title" className="mx-auto max-w-[18ch] font-serif text-[26px] leading-[1.25] font-semibold text-white">
          {finalCta.title}
        </h2>
        <p className="mx-auto mt-3 max-w-[34ch] text-[15px] leading-relaxed text-ivory/85">{finalCta.body}</p>
        <div className="mt-6 flex justify-center">
          <MessengerCTA id="final-cta" source="final" label={finalCta.cta} className="w-auto min-w-[240px]" />
        </div>
      </div>
    </section>
  );
}
