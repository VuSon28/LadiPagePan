import Image from "next/image";
import { design, meaning } from "@/data/content";
import { Icon } from "../Icon";
import { MessengerCTA } from "../MessengerCTA";

/** Ảnh tràn viền + thư viện ảnh thật + khối “Thiết kế theo mong muốn của riêng bạn”. */
export function CollectionShowcase() {
  return (
    <section id="thiet-ke" aria-labelledby="design-title">
      <Image
        src={design.band.src}
        alt={design.band.alt}
        width={960}
        height={1200}
        sizes="(min-width: 480px) 480px, 100vw"
        className="aspect-[4/3] w-full object-cover object-center"
      />

      <div className="container-page pt-9">
        <h3 className="text-center text-[12px] font-semibold tracking-[0.16em] text-cream/75 uppercase">
          {design.galleryTitle}
        </h3>
        <ul className="mt-4 grid grid-cols-3 gap-2">
          {design.gallery.map((item) => (
            <li key={item.src}>
              <Image
                src={item.src}
                alt={item.alt}
                width={720}
                height={900}
                sizes="(min-width: 480px) 150px, 33vw"
                className="aspect-[4/5] w-full rounded-xl object-cover"
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="container-page py-10 text-center">
        <h2 id="design-title" className="h2 whitespace-pre-line text-cream">
          {design.title}
        </h2>
        <p className="lead">{design.body}</p>

        <ul className="mt-5 flex flex-wrap justify-center gap-2">
          {meaning.items.map((item) => (
            <li
              key={item.title}
              className="flex items-center gap-1.5 rounded-full border border-cream/30 bg-cream/10 px-3 py-1.5 text-[13px] font-medium text-cream"
            >
              <Icon name={item.icon} className="size-4" strokeWidth={1.4} />
              {item.title}
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-4 max-w-[38ch] text-[12px] leading-snug text-cream/70 italic">{meaning.disclaimer}</p>

        <div className="mt-6 flex justify-center">
          <MessengerCTA source="benefit" label={design.cta} />
        </div>
      </div>
    </section>
  );
}
