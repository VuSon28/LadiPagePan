import { trustBadge } from "@/data/content";
import { Icon } from "../Icon";

/** Một thông điệp tin cậy trên dải xanh mạ tràn viền, chữ nâu đỏ nhấp nháy để tách khỏi dải cam của hero. */
export function TrustStrip() {
  return (
    <section aria-label="Cam kết của Pancharm" className="bg-sprout py-4 text-brick">
      <p className="container-page flex items-center justify-center gap-3">
        <span className="grid size-11 shrink-0 place-items-center rounded-full border-[1.5px] border-brick/60">
          <Icon name={trustBadge.icon} className="size-6" strokeWidth={1.5} />
        </span>
        <span className="animate-blink leading-tight">
          <span className="block text-[13px] font-semibold tracking-[0.04em] uppercase">{trustBadge.lead}</span>
          <strong className="mt-0.5 block font-serif text-[min(5.6vw,23px)] font-bold whitespace-nowrap">
            {trustBadge.highlight}
          </strong>
        </span>
      </p>
    </section>
  );
}
