import Link from "next/link";
import { footer } from "@/data/content";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-clay-deep pt-10 pb-28 text-[13px] text-cream/80">
      <div className="container-page space-y-3">
        <Logo />
        <p>Vòng đá phong thủy được thiết kế riêng theo Bát Tự của bạn.</p>
        <ul className="space-y-1">
          {footer.contact.map((item) => (
            <li key={item.label}>
              <span className="text-cream/55">{item.label}: </span>
              {item.href ? (
                <a href={item.href} className="text-cream underline-offset-4 hover:underline">
                  {item.value}
                </a>
              ) : (
                <span className="text-cream">{item.value}</span>
              )}
            </li>
          ))}
        </ul>
        <nav aria-label="Chính sách" className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/chinh-sach-bao-mat" className="underline underline-offset-4 hover:text-cream">
            Chính sách bảo mật
          </Link>
        </nav>
        <p className="border-t border-cream/15 pt-4 text-[12px] text-cream/60">
          © {new Date().getFullYear()} Pancharm. Các ý nghĩa phong thủy được trình bày theo quan niệm truyền thống, không
          phải cam kết kết quả.
        </p>
      </div>
    </footer>
  );
}
