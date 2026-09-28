import Image from "next/image";
import { collection } from "@/data/content";
import { Pending } from "../Pending";

export function CollectionShowcase() {
  return (
    <section id="thiet-ke" aria-labelledby="collection-title" className="section bg-white">
      <div className="container-page">
        <h2 id="collection-title" className="h2">
          {collection.title}
        </h2>
        <p className="lead mt-3">{collection.body}</p>
        <ul className="mt-6 grid grid-cols-3 gap-2">
          {collection.items.map((item) => (
            <li key={item.src}>
              <Image
                src={item.src}
                alt={item.alt}
                width={720}
                height={900}
                sizes="(min-width: 480px) 150px, 33vw"
                className="aspect-[4/5] w-full rounded-xl object-cover"
              />
            </li>
          ))}
        </ul>
        {collection.pending && <Pending className="mt-5">{collection.pending}</Pending>}
      </div>
    </section>
  );
}
