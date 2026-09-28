import { trustItems } from "@/data/content";
import { Icon } from "../Icon";

export function TrustStrip() {
  return (
    <section aria-label="Cam kết của Pancharm" className="relative z-10 -mt-8 px-4">
      <ul className="card soft-shadow grid grid-cols-2 divide-line p-1 [&>li:nth-child(-n+2)]:border-b [&>li:nth-child(odd)]:border-r [&>li]:border-line">
        {trustItems.map((item) => (
          <li key={item.label} className="flex items-center gap-2.5 px-3 py-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-full border border-gold/70 text-gold-deep">
              <Icon name={item.icon} className="size-[18px]" />
            </span>
            <span className="text-[13px] leading-snug font-medium text-ink">{item.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
