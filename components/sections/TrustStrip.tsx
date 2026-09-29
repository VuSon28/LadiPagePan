import { trustItems } from "@/data/content";
import { Icon } from "../Icon";

export function TrustStrip() {
  return (
    <section aria-label="Cam kết của Pancharm" className="band-clay pb-9">
      <ul className="container-page grid grid-cols-4 items-start gap-2">
        {trustItems.map((item) => (
          <li key={item.label} className="flex flex-col items-center text-center">
            <span className="icon-ring size-12">
              <Icon name={item.icon} className="size-[22px]" strokeWidth={1.3} />
            </span>
            <span className="mt-2.5 text-[11px] leading-[1.35] font-medium text-balance text-[var(--text-soft)]">
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
