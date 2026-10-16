"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { design } from "@/data/content";
import { Icon } from "../Icon";

export function CollectionShowcase() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (lightbox === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [lightbox, close]);

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
          {design.gallery.map((item, i) => (
            <li key={item.src}>
              <button
                type="button"
                onClick={() => setLightbox(i)}
                className="w-full cursor-zoom-in"
                aria-label={`Phóng to: ${item.alt}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={720}
                  height={900}
                  sizes="(min-width: 480px) 150px, 33vw"
                  className="aspect-[4/5] w-full rounded-xl object-cover"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {lightbox !== null && (
        <div
          role="dialog"
          aria-label="Xem ảnh phóng to"
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Đóng"
            className="absolute top-4 right-4 z-10 grid size-10 place-items-center rounded-full bg-white/20 text-white hover:bg-white/30"
          >
            <Icon name="close" className="size-6" strokeWidth={2} />
          </button>
          <Image
            src={design.gallery[lightbox].src}
            alt={design.gallery[lightbox].alt}
            width={1080}
            height={1350}
            className="max-h-[85vh] max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
