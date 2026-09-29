"use client";

import { useEffect, useState } from "react";
import { sticky } from "@/data/content";
import { MessengerCTA } from "./MessengerCTA";

/** Hiện khi CTA hero đã rời viewport, ẩn khi CTA cuối trang đang hiển thị. */
export function StickyMessengerCTA() {
  const [heroVisible, setHeroVisible] = useState(true);
  const [finalVisible, setFinalVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero-cta");
    const final = document.getElementById("final-cta");
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === hero) setHeroVisible(entry.isIntersecting);
        if (entry.target === final) setFinalVisible(entry.isIntersecting);
      }
    });
    if (hero) observer.observe(hero);
    if (final) observer.observe(final);
    return () => observer.disconnect();
  }, []);

  const show = !heroVisible && !finalVisible;

  return (
    <div
      aria-hidden={!show}
      inert={!show}
      className={`fixed inset-x-0 bottom-0 z-40 mx-auto max-w-[480px] bg-gradient-to-t from-clay-deep via-clay-deep/90 to-transparent px-4 pt-6 pb-[calc(10px+env(safe-area-inset-bottom))] transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <MessengerCTA source="sticky" label={sticky.cta} />
    </div>
  );
}
