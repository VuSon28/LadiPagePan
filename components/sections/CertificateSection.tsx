"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { certificates } from "@/data/content";
import { gaEvent } from "@/lib/analytics";
import { Icon } from "../Icon";

/** Nội dung đang mở trong lightbox: ảnh DOJILAB hoặc chứng thư. */
type Zoomed = { src: string; alt: string; title: string; lines: string[] };

/** Dải nền kem, tạo nhịp nghỉ giữa các khối nền đất. */
export function CertificateSection() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<Zoomed | null>(null);

  function open(item: Zoomed, event: string, id: string) {
    setActive(item);
    dialogRef.current?.showModal();
    gaEvent(event, { certificate: id });
  }

  return (
    <section id="kiem-dinh" aria-labelledby="cert-title" className="band-clay section">
      <div className="container-page">
        <h2 id="cert-title" className="h2">
          {certificates.title}
        </h2>
        <p className="lead">{certificates.body}</p>

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
                className="group block h-full w-full text-left"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={600}
                  height={800}
                  sizes="(min-width: 480px) 220px, 50vw"
                  className="aspect-[3/4] w-full rounded-2xl object-cover"
                />
                <span className="mt-2 block text-[12.5px] leading-snug font-medium">{photo.caption}</span>
                {photo.credit && <span className="mt-0.5 block text-[11px] text-[var(--text-soft)]">{photo.credit}</span>}
              </button>
            </li>
          ))}
        </ul>

        <ul className="mt-5 grid grid-cols-3 gap-2.5">
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
                <span className="relative block overflow-hidden rounded-2xl border border-line bg-white p-1.5">
                  <Image
                    src={cert.thumb}
                    alt={cert.alt}
                    width={600}
                    height={440}
                    sizes="(min-width: 480px) 150px, 33vw"
                    className="aspect-[4/3] w-full rounded-xl bg-white object-cover object-left-top"
                  />
                  <span className="absolute right-2.5 bottom-2.5 grid size-8 place-items-center rounded-full bg-clay text-cream shadow-md">
                    <Icon name="zoom" className="size-4" />
                  </span>
                </span>
                <span className="mt-2 block text-[11.5px] leading-tight font-medium">{cert.title}</span>
                <span className="mt-1 block text-[10.5px] leading-tight tracking-wide text-[var(--text-soft)] uppercase">
                  {cert.reportNo}
                </span>
              </button>
            </li>
          ))}
        </ul>

        <p className="card mt-5 flex items-center gap-3 px-4 py-3.5 text-[12.5px] leading-snug text-muted">
          <span className="grid size-10 shrink-0 place-items-center rounded-full border border-line bg-white text-clay">
            <Icon name="shield" className="size-5" />
          </span>
          <span>
            {certificates.note}{" "}
            <a
              href={certificates.noteLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-clay underline-offset-4 hover:underline"
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
            <div className="border-t border-line px-4 py-3 text-sm text-ink">
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
