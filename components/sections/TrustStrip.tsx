import { trustItems } from "@/data/content";
import { Icon } from "../Icon";

export function TrustStrip() {
  return (
    <section aria-label="Cam kết của Pancharm" className="border-b border-cream/15 pb-9">
      <ul className="container-page grid grid-cols-4 gap-2">
        {trustItems.map((item) => (
          <li key={item.label} className="flex flex-col items-center text-center">
            <span className="icon-ring size-12">
              <Icon name={item.icon} className="size-[22px] text-cream" strokeWidth={1.3} />
            </span>
            <span className="mt-2.5 text-[12px] leading-[1.35] font-medium whitespace-pre-line text-cream/90">
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
