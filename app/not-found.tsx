import Link from "next/link";
import { Header } from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="container-page py-20 text-center">
        <p className="text-[12px] font-semibold tracking-[0.12em] text-cream/75 uppercase">404</p>
        <h1 className="h2 mt-3 text-cream">Không tìm thấy trang</h1>
        <Link href="/" className="mt-8 inline-block font-semibold text-cream underline underline-offset-4">
          Về trang chủ Pancharm
        </Link>
      </main>
    </>
  );
}
