"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { certificates } from "@/data/content";
import { gaEvent } from "@/lib/analytics";
import { Icon } from "../Icon";

/** Nội dung đang mở trong lightbox: ảnh DOJILAB hoặc chứng thư. */
type Zoomed = { src: string; alt: string; title: string; lines: string[] };

export function CertificateSection() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<Zoomed | null>(null);

  function open(item: Zoomed, event: string, id: string) {
    setActive(item);
    dialogRef.current?.showModal();
    gaEvent(event, { certificate: id });
  }

  return (
    <section id="kiem-dinh" aria-labelledby="cert-title" className="section">
      <div className="container-page">
        <div className="text-center">
          <div aria-hidden="true" className="flex items-center justify-center gap-3 text-gold">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <Icon name="lotus" className="size-7" strokeWidth={1.2} />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h2 id="cert-title" className="h2 mt-3 text-[27px]">
            {certificates.title}
          </h2>
          <p className="lead mx-auto mt-3 max-w-[36ch]">{certificates.body}</p>
        </div>

        <ul className="mt-6 grid grid-cols-2 gap-3">
          {certificates.photos.map((photo) => (
            <li key={photo.src}>
              <button
                type="button"
                onClick={() =>
                  open(
                    { src: photo.src, alt: photo.alt, title: photo.caption, lines: photo.credit ? [photo.credit] : [] },
                    "dojilab_photo_open",
                    photo.src,
                  )
                }
                aria-label={`Phóng to ảnh: ${photo.caption}`}
                className="card soft-shadow group block h-full w-full overflow-hidden rounded-3xl text-left"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={600}
                  height={800}
                  sizes="(min-width: 480px) 220px, 50vw"
                  className="aspect-[3/4] w-full object-cover"
                />
                <span className="flex items-center gap-2 px-3 py-3">
                  <span className="min-w-0 flex-1">
                    <span className="block font-serif text-[14.5px] leading-snug font-medium text-ink">
                      {photo.caption}
                    </span>
                    {photo.credit && <span className="mt-0.5 block text-[11.5px] text-muted">{photo.credit}</span>}
                  </span>
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-beige text-gold-deep transition-colors group-hover:bg-gold/30">
                    <Icon name="chevron" className="size-4" strokeWidth={2} />
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>

        <ul className="mt-4 grid grid-cols-3 gap-2.5">
          {certificates.items.map((cert) => (
            <li key={cert.id}>
              <button
                type="button"
                onClick={() =>
                  open(
                    {
                      src: cert.full,
                      alt: cert.alt,
                      title: `${cert.title} · ${cert.reportNo} · ${cert.date}`,
                      lines: [cert.result, cert.scope],
                    },
                    "certificate_open",
                    cert.id,
                  )
                }
                className="group block w-full text-left"
                aria-label={`Phóng to chứng thư ${cert.title}, ${cert.reportNo}`}
              >
                <span className="card soft-shadow relative block overflow-hidden rounded-2xl p-1.5">
                  <Image
                    src={cert.thumb}
                    alt={cert.alt}
                    width={600}
                    height={440}
                    sizes="(min-width: 480px) 150px, 33vw"
                    className="aspect-[4/3] w-full rounded-xl bg-white object-cover object-left-top"
                  />
                  <span className="absolute right-2.5 bottom-2.5 grid size-8 place-items-center rounded-full bg-forest text-white shadow-md">
                    <Icon name="zoom" className="size-4" />
                  </span>
                </span>
                <span className="mt-2 block font-serif text-[14px] leading-tight font-medium text-ink">
                  {cert.title}
                </span>
                <span className="mt-1 block text-[11.5px] leading-tight tracking-wide text-muted uppercase">
                  {cert.reportNo}
                </span>
              </button>
            </li>
          ))}
        </ul>

        <p className="card mt-5 flex items-center gap-3 rounded-2xl bg-ivory px-4 py-3.5 text-[13px] leading-snug text-muted">
          <span className="grid size-10 shrink-0 place-items-center rounded-full border border-gold/60 bg-white text-gold-deep">
            <Icon name="shield" className="size-5" />
          </span>
          <span>
            {certificates.note}{" "}
            <a
              href={certificates.noteLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gold-deep underline-offset-4 hover:underline"
            >
              {certificates.noteLink.label}
            </a>
            .
          </span>
        </p>
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setActive(null)}
        onClick={(e) => e.target === dialogRef.current && dialogRef.current?.close()}
        aria-label={active?.title ?? "Ảnh phóng to"}
        className="m-auto max-h-[92dvh] w-[min(96vw,1100px)] max-w-none rounded-2xl bg-white p-0 backdrop:bg-ink/80"
      >
        {active && (
          <div className="relative">
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="absolute top-2 right-2 z-10 grid size-11 place-items-center rounded-full bg-ink/80 text-white"
              aria-label="Đóng"
            >
              <Icon name="close" className="size-5" />
            </button>
            {/* Ảnh gốc chỉ tải khi mở lightbox. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={active.src} alt={active.alt} className="h-auto max-h-[75dvh] w-full object-contain" />
            <div className="border-t border-line px-4 py-3 text-sm">
              <p className="font-semibold">{active.title}</p>
              {active.lines.map((line, i) => (
                <p key={line} className={i === 0 ? "text-muted" : "mt-1 text-muted italic"}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
