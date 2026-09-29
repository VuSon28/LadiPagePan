import Image from "next/image";
import { design } from "@/data/content";

/** Thư viện ảnh khách hàng gửi về: nền Rosewood Dust, tiêu đề xanh rêu đậm. */
export function CustomerGallery() {
  return (
    <section aria-labelledby="gallery-title" className="band-rosewood">
      <div className="container-page py-9">
        <h2 id="gallery-title" className="text-center font-serif text-[24px] leading-snug font-bold text-evergreen">
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
