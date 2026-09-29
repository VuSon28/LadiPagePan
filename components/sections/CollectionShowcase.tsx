import Image from "next/image";
import { design } from "@/data/content";

/** Ảnh tràn viền + thư viện ảnh khách gửi về. Khối “Thiết kế theo mong muốn” đã bỏ theo yêu cầu (nội dung vẫn trong content.ts). */
export function CollectionShowcase() {
  return (
    <section id="thiet-ke" aria-labelledby="gallery-title" className="band-pine">
      <Image
        src={design.band.src}
        alt={design.band.alt}
        width={960}
        height={1200}
        sizes="(min-width: 480px) 480px, 100vw"
        className="aspect-[4/3] w-full object-cover object-center"
      />

      <div className="container-page py-9">
        <h2 id="gallery-title" className="text-center font-serif text-[24px] leading-snug font-bold text-rosewood">
          {design.galleryTitle}
        </h2>
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
    </section>
  );
}
