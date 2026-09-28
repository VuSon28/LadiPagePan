"use client";

import Link from "next/link";
import { useState } from "react";
import { nav } from "@/data/content";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

/** Header nằm đè lên ảnh hero; menu mở ra danh sách link tới từng phần. */
export function Header({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <header className={`${overlay ? "absolute inset-x-0 top-0 z-30" : "relative"} container-page flex h-14 items-center justify-between`}>
      <Link href="/" aria-label="Pancharm – về đầu trang">
        <Logo />
      </Link>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="site-menu"
        aria-label={open ? "Đóng menu" : "Mở menu"}
        className="-mr-2 grid size-11 place-items-center rounded-full text-ink"
      >
        <Icon name={open ? "close" : "menu"} className="size-6" />
      </button>
      {open && (
        <nav
          id="site-menu"
          aria-label="Các phần của trang"
          className="card soft-shadow absolute top-14 right-4 left-4 z-40 p-2"
        >
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center justify-between rounded-xl px-4 text-[15px] font-medium hover:bg-ivory"
                >
                  {item.label}
                  <Icon name="chevron" className="size-4 text-gold" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
