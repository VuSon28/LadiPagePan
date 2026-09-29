import { process } from "@/data/content";
import { Icon } from "../Icon";
import { MessengerCTA } from "../MessengerCTA";

export function ConsultationProcess() {
  return (
    <section id="quy-trinh" aria-labelledby="process-title" className="section">
      <div className="container-page">
        <h2 id="process-title" className="h2 whitespace-pre-line text-cream">
          {process.title}
        </h2>

        <ol className="mt-8">
          {process.steps.map((step, i) => (
            <li key={step.title} className="flex gap-3.5">
              {/* Cột số thứ tự + đường nối dọc của timeline. */}
              <div className="flex flex-col items-center">
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-cream/45 font-serif text-[13px] font-semibold text-cream">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {i < process.steps.length - 1 && <span aria-hidden="true" className="my-1 w-px flex-1 bg-cream/25" />}
              </div>
              <span className="icon-ring mt-0.5 size-12 self-start bg-cream/10">
                <Icon name={step.icon} className="size-[22px] text-cream" strokeWidth={1.3} />
              </span>
              <div className="flex-1 pb-7">
                <h3 className="text-[15px] leading-snug font-semibold text-cream">{step.title}</h3>
                <p className="mt-1.5 text-[13px] leading-snug text-cream/80">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="rounded-[26px] border border-cream/25 bg-cream/12 px-5 py-6 text-center">
          <h3 className="font-serif text-[19px] leading-snug font-semibold text-cream">{process.ctaCard.title}</h3>
          <p className="mt-1.5 text-[13px] text-cream/80">{process.ctaCard.body}</p>
          <MessengerCTA source="process" label={process.ctaCard.cta} className="mt-5 w-full" />
        </div>
      </div>
    </section>
  );
}
