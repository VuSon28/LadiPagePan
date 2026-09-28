import { process } from "@/data/content";
import { Icon } from "../Icon";
import { MessengerCTA } from "../MessengerCTA";

export function ConsultationProcess() {
  return (
    <section id="quy-trinh" aria-labelledby="process-title" className="section bg-beige/60">
      <div className="container-page">
        <h2 id="process-title" className="h2">
          {process.title}
        </h2>
        <ol className="mt-6 grid grid-cols-2 gap-3">
          {process.steps.map((step, i) => (
            <li key={step.title} className="card soft-shadow flex flex-col p-3.5">
              <div className="flex items-center gap-2">
                <span className="grid size-10 place-items-center rounded-full border border-gold/60 bg-ivory font-serif text-[17px] font-semibold text-gold-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Icon name={step.icon} className="size-7 text-gold-deep" strokeWidth={1.3} />
              </div>
              <h3 className="mt-3 text-[14px] leading-snug font-semibold text-ink">{step.title}</h3>
              <p className="mt-1.5 text-[13px] leading-snug text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-6 flex justify-center">
          <MessengerCTA source="process" label={process.cta} className="w-full" />
        </div>
      </div>
    </section>
  );
}
