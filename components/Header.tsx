"use client";

import Link from "next/link";
import { useState } from "react";
import { nav } from "@/data/content";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

/** Header nằm đè lên ảnh hero, logo ở giữa; menu mở ra danh sách link tới từng phần. */
export function Header({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`${overlay ? "absolute inset-x-0 top-0 z-30" : "relative"} container-page grid h-[72px] grid-cols-[2.75rem_1fr_2.75rem] items-center`}
    >
      {/* Cột trái để trống cùng bề rộng nút menu, nhờ vậy logo nằm đúng giữa màn hình. */}
      <span aria-hidden="true" />
      <Link href="/" aria-label="Pancharm – về đầu trang" className="justify-self-center">
        <Logo size="lg" />
      </Link>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="site-menu"
        aria-label={open ? "Đóng menu" : "Mở menu"}
        className="-mr-2 grid size-11 place-items-center justify-self-end rounded-full text-cream"
      >
        <Icon name={open ? "close" : "menu"} className="size-6" strokeWidth={1.8} />
      </button>
      {open && (
        <nav
          id="site-menu"
          aria-label="Các phần của trang"
          className="card soft-shadow absolute top-16 right-4 left-4 z-40 p-2"
        >
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center justify-between rounded-2xl px-4 text-[15px] font-medium hover:bg-sand"
                >
                  {item.label}
                  <Icon name="chevron" className="size-4 text-clay" strokeWidth={2} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
