import { belief } from "@/data/content";
import { Icon } from "../Icon";

/** Khối tuyên ngôn: “Không chỉ là màu hợp mệnh…”, canh giữa trên nền đất. */
export function BeliefStatement() {
  return (
    <section aria-labelledby="belief-title" className="section relative isolate overflow-hidden text-center">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(120%_70%_at_50%_0%,rgba(255,244,236,0.16),transparent_65%)]"
      />
      <div className="container-page">
        <h2 id="belief-title" className="font-serif text-[23px] leading-[1.3] font-semibold text-cream">
          {belief.title}
          <span className="mt-1 block">{belief.subtitle}</span>
        </h2>
        <div aria-hidden="true" className="mt-4 flex items-center justify-center gap-3 text-cream/60">
          <span className="h-px w-14 bg-gradient-to-r from-transparent to-cream/50" />
          <Icon name="lotus" className="size-6" strokeWidth={1.1} />
          <span className="h-px w-14 bg-gradient-to-l from-transparent to-cream/50" />
        </div>
        <p className="mx-auto mt-4 max-w-[34ch] text-[14px] leading-relaxed text-cream/85">{belief.body}</p>
      </div>
    </section>
  );
}
