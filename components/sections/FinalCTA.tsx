import { finalCta } from "@/data/content";
import { Icon } from "../Icon";
import { MessengerCTA } from "../MessengerCTA";

export function FinalCTA() {
  return (
    <section aria-labelledby="final-title" className="band-danger py-12 text-center">
      <div className="container-page">
        <h2
          id="final-title"
          className="mx-auto max-w-[20ch] font-serif text-[25px] leading-[1.25] font-semibold whitespace-pre-line"
        >
          {finalCta.title}
        </h2>

        <ul className="mt-7 flex items-start justify-center gap-4">
          {finalCta.stats.map((stat) => (
            <li key={stat.label} className="flex w-[30%] flex-col items-center">
              <span className="icon-ring size-14 bg-[var(--fill-soft)]">
                <Icon name={stat.icon} className="size-6" strokeWidth={1.3} />
              </span>
              <span className="mt-2.5 font-serif text-[19px] leading-none font-semibold">{stat.value}</span>
              <span className="mt-1.5 text-[11.5px] leading-snug text-[var(--text-soft)]">{stat.label}</span>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-6 max-w-[34ch] text-[13.5px] leading-relaxed text-[var(--text-soft)]">{finalCta.body}</p>

        <div className="mt-6 flex justify-center">
          <MessengerCTA id="final-cta" source="final" label={finalCta.cta} />
        </div>
      </div>
    </section>
  );
}
