import Link from "next/link";
import { footer } from "@/data/content";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink pt-10 pb-28 text-[13px] text-ivory/75">
      <div className="container-page space-y-3">
        <Logo light />
        <p>Vòng đá phong thủy được thiết kế riêng theo Bát Tự của bạn.</p>
        <FooterPending>{footer.pending.legal}</FooterPending>
        <FooterPending>{footer.pending.contact}</FooterPending>
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
