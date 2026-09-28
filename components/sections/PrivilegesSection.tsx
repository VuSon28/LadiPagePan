import { privileges } from "@/data/content";
import { Icon } from "../Icon";
import { Pending } from "../Pending";

export function PrivilegesSection() {
  return (
    <section id="dac-quyen" aria-labelledby="privileges-title" className="section bg-beige/60">
      <div className="container-page">
        <h2 id="privileges-title" className="h2">
          {privileges.title}
        </h2>
        <ul className="mt-6 flex flex-wrap justify-center gap-2">
          {privileges.items.map((item) => (
            <li
              key={item.label}
              className="card soft-shadow flex w-[calc((100%-1rem)/3)] flex-col items-center px-2 py-3.5 text-center"
            >
              <Icon name={item.icon} className="size-7 text-gold-deep" strokeWidth={1.3} />
              <span className="mt-2 text-[12.5px] leading-snug font-medium text-ink">{item.label}</span>
            </li>
          ))}
        </ul>
        {privileges.pending && <Pending className="mt-5">{privileges.pending}</Pending>}
      </div>
    </section>
  );
}
