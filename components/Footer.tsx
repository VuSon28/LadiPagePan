import Link from "next/link";
import { footer } from "@/data/content";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink pt-10 pb-28 text-[13px] text-ivory/75">
      <div className="container-page space-y-3">
        <Logo light />
        <p>Vòng đá phong thủy được thiết kế riêng theo Bát Tự của bạn.</p>
        <ul className="space-y-1">
          {footer.contact.map((item) => (
            <li key={item.label}>
              <span className="text-ivory/55">{item.label}: </span>
              {item.href ? (
                <a href={item.href} className="text-ivory underline-offset-4 hover:underline">
                  {item.value}
                </a>
              ) : (
                <span className="text-ivory">{item.value}</span>
              )}
            </li>
          ))}
        </ul>
        <FooterPending>{footer.pending.legal}</FooterPending>
        <nav aria-label="Chính sách" className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/chinh-sach-bao-mat" className="underline underline-offset-4 hover:text-white">
            Chính sách bảo mật
          </Link>
        </nav>
        <FooterPending>{footer.pending.policies}</FooterPending>
        <p className="border-t border-white/10 pt-4 text-[12px] text-ivory/60">
          © {new Date().getFullYear()} Pancharm. Các ý nghĩa phong thủy được trình bày theo quan niệm truyền thống, không
          phải cam kết kết quả.
        </p>
      </div>
    </footer>
  );
}

function FooterPending({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-lg border border-dashed border-gold/70 px-3 py-2">
      <span className="font-semibold text-gold">[CẦN BỔ SUNG]</span> {children}
    </p>
  );
}
