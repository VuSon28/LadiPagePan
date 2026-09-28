"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { certificates, type Certificate } from "@/data/content";
import { gaEvent } from "@/lib/analytics";
import { Icon } from "../Icon";

export function CertificateSection() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<Certificate | null>(null);

  function open(cert: Certificate) {
    setActive(cert);
    dialogRef.current?.showModal();
    gaEvent("certificate_open", { certificate: cert.id });
  }

  return (
    <section id="kiem-dinh" aria-labelledby="cert-title" className="section">
      <div className="container-page">
        <h2 id="cert-title" className="h2">
          {certificates.title}
        </h2>
        <p className="lead mt-3">{certificates.body}</p>

        <ul className="mt-6 grid grid-cols-3 gap-2">
          {certificates.items.map((cert) => (
            <li key={cert.id}>
              <button
                type="button"
                onClick={() => open(cert)}
                className="group block w-full text-left"
                aria-label={`Phóng to chứng thư ${cert.title}, ${cert.reportNo}`}
              >
                <span className="card soft-shadow relative block overflow-hidden">
                  <Image
                    src={cert.thumb}
                    alt={cert.alt}
                    width={600}
                    height={440}
                    sizes="(min-width: 480px) 150px, 33vw"
                    className="aspect-[4/3] w-full bg-white object-cover object-left-top"
                  />
                  <span className="absolute right-1.5 bottom-1.5 grid size-7 place-items-center rounded-full bg-forest/90 text-white">
                    <Icon name="zoom" className="size-4" />
                  </span>
                </span>
                <span className="mt-2 block text-[13px] leading-tight font-semibold text-ink">{cert.title}</span>
                <span className="mt-0.5 block text-[11.5px] leading-tight text-muted">{cert.reportNo}</span>
              </button>
            </li>
          ))}
        </ul>
        <p className="mt-4 flex gap-2 text-[13px] leading-snug text-muted">
          <Icon name="shield" className="mt-0.5 size-4 shrink-0 text-gold-deep" />
          {certificates.note}
        </p>
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setActive(null)}
        onClick={(e) => e.target === dialogRef.current && dialogRef.current?.close()}
        aria-label={active ? `${active.title}, ${active.reportNo}` : "Chứng thư"}
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
            <img src={active.full} alt={active.alt} className="h-auto max-h-[75dvh] w-full object-contain" />
            <div className="border-t border-line px-4 py-3 text-sm">
              <p className="font-semibold">
                {active.title} · {active.reportNo} · {active.date}
              </p>
              <p className="text-muted">{active.result}</p>
              <p className="mt-1 text-muted italic">{active.scope}</p>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
