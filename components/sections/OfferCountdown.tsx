"use client";

import { useEffect, useState } from "react";
import { offer } from "@/data/content";
import { Icon } from "../Icon";
import { MessengerCTA } from "../MessengerCTA";

const DAY = 86_400_000;
const VN_OFFSET = 7 * 3_600_000;

/** Ưu đãi có thật trong ngày: đếm tới 23:59:59 giờ Việt Nam, sang ngày mới thì đếm lại. */
function msUntilEndOfDayVN(now: number) {
  const vn = now + VN_OFFSET;
  return Math.floor(vn / DAY) * DAY + DAY - vn;
}

function split(ms: number) {
  const s = Math.floor(ms / 1000);
  return [Math.floor(s / 86_400), Math.floor(s / 3600) % 24, Math.floor(s / 60) % 60, s % 60];
}

export function OfferCountdown() {
  // null trên server để HTML render trước không lệch với giờ của máy khách.
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setRemaining(msUntilEndOfDayVN(Date.now()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const parts = remaining === null ? null : split(remaining);

  return (
    <section id="uu-dai" aria-labelledby="offer-title" className="section bg-beige/60">
      <div className="container-page">
        <div className="card soft-shadow px-4 py-6 text-center">
          <h2 id="offer-title" className="font-serif text-[23px] leading-tight font-semibold text-ink">
            {offer.title}
          </h2>
          <p className="mx-auto mt-2 max-w-[34ch] text-[14px] leading-snug text-muted">{offer.body}</p>

          <div role="timer" aria-live="off" className="mt-5 grid grid-cols-4 gap-2">
            {offer.units.map((unit, i) => (
              <div key={unit}>
                <span className="block rounded-xl bg-terracotta py-3 font-sans text-[30px] leading-none font-bold text-white tabular-nums">
                  {parts ? String(parts[i]).padStart(2, "0") : "--"}
                </span>
                <span className="mt-1.5 block text-[11px] font-semibold tracking-[0.08em] text-muted uppercase">
                  {unit}
                </span>
              </div>
            ))}
          </div>

          <MessengerCTA source="offer" label={offer.cta} className="mt-5 w-full" />
        </div>

        <ul className="mt-4 grid gap-2">
          {offer.commitments.map((item) => (
            <li key={item.label} className="card flex items-center gap-3 px-4 py-3">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-terracotta/10 text-terracotta">
                <Icon name={item.icon} className="size-5" />
              </span>
              <span className="text-[14px] font-semibold text-ink">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
