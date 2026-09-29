import Image from "next/image";
import { design, meaning } from "@/data/content";
import { Icon } from "../Icon";
import { MessengerCTA } from "../MessengerCTA";

/** Ảnh tràn viền + khối “Thiết kế theo mong muốn của riêng bạn”. */
export function CollectionShowcase() {
  return (
    <section id="thiet-ke" aria-labelledby="design-title" className="band-sand">
      <Image
        src={design.band.src}
        alt={design.band.alt}
        width={960}
        height={1200}
        sizes="(min-width: 480px) 480px, 100vw"
        className="aspect-[4/3] w-full object-cover object-center"
      />

      <div className="container-page py-10 text-center">
        <h2 id="design-title" className="h2 whitespace-pre-line">
          {design.title}
        </h2>
        <p className="lead">{design.body}</p>

        <ul className="mt-5 flex flex-wrap justify-center gap-2">
          {meaning.items.map((item) => (
            <li
              key={item.title}
              className="flex items-center gap-1.5 rounded-full border border-[var(--line-soft)] bg-[var(--fill-soft)] px-3 py-1.5 text-[13px] font-medium text-clay"
            >
              <Icon name={item.icon} className="size-4" strokeWidth={1.4} />
              {item.title}
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-4 max-w-[38ch] text-[12px] leading-snug text-muted italic">{meaning.disclaimer}</p>

        <div className="mt-6 flex justify-center">
          <MessengerCTA source="benefit" label={design.cta} variant="clay" />
        </div>
      </div>
    </section>
  );
}
