import { trustBadge } from "@/data/content";
import { Icon } from "../Icon";

/** Một thông điệp tin cậy, đặt trên nền nâu đậm + chữ vàng mật để tách khỏi dải cam của hero. */
export function TrustStrip() {
  return (
    <section aria-label="Cam kết của Pancharm" className="band-clay pb-9">
      <div className="container-page">
        <p className="soft-shadow flex items-center gap-3.5 rounded-[22px] border border-honey/35 bg-clay-deep px-4 py-3.5 text-cream">
          <span className="grid size-12 shrink-0 place-items-center rounded-full border border-honey/60 text-honey">
            <Icon name={trustBadge.icon} className="size-6" strokeWidth={1.3} />
          </span>
          <span className="leading-tight">
            <span className="block text-[13px] font-medium tracking-[0.04em] text-cream/85 uppercase">
              {trustBadge.lead}
            </span>
            <strong className="mt-1 block font-serif text-[min(5.4vw,22px)] font-bold whitespace-nowrap text-honey">
              {trustBadge.highlight}
            </strong>
          </span>
        </p>
      </div>
    </section>
  );
}
