import { belief } from "@/data/content";
import { Icon } from "../Icon";

/** Khối tuyên ngôn: “Không chỉ là màu hợp mệnh…”, mở đầu dải nền be. */
export function BeliefStatement() {
  return (
    <section aria-labelledby="belief-title" className="band-sand section pb-8 text-center">
      <div className="container-page">
        <h2 id="belief-title" className="font-serif text-[23px] leading-[1.3] font-semibold text-clay">
          {belief.title}
          <span className="mt-1 block">{belief.subtitle}</span>
        </h2>
        <div aria-hidden="true" className="mt-4 flex items-center justify-center gap-3 text-clay/70">
          <span className="h-px w-14 bg-gradient-to-r from-transparent to-clay/50" />
          <Icon name="lotus" className="size-6" strokeWidth={1.1} />
          <span className="h-px w-14 bg-gradient-to-l from-transparent to-clay/50" />
        </div>
        <p className="mx-auto mt-4 max-w-[34ch] text-[14px] leading-relaxed text-muted">{belief.body}</p>
      </div>
    </section>
  );
}
