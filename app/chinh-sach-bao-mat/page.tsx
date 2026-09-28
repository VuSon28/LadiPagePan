import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Pending } from "@/components/Pending";

export const metadata: Metadata = {
  title: "Chính sách bảo mật – Pancharm",
  alternates: { canonical: "/chinh-sach-bao-mat" },
};

// BẢN NHÁP. Cần Pancharm/pháp lý rà soát trước khi publish.
export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="container-page max-w-3xl py-10">
        <h1 className="font-serif text-[30px] leading-tight font-bold">Chính sách bảo mật</h1>
        <Pending className="mt-5">
          Bản nháp. Cần bổ sung tên đơn vị sở hữu, thông tin liên hệ và được Pancharm rà soát trước khi publish.
        </Pending>
        <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-ink [&_h2]:font-serif [&_h2]:text-lg [&_h2]:font-semibold">
          <section>
            <h2>1. Trang này thu thập thông tin gì?</h2>
            <p className="mt-2">
              Trang không có biểu mẫu và không yêu cầu bạn nhập thông tin cá nhân. Chúng tôi sử dụng công cụ đo lường
              (TikTok Pixel và có thể cả Google Analytics) để ghi nhận dữ liệu kỹ thuật như lượt xem trang, thao tác bấm
              nút liên hệ, loại thiết bị và trình duyệt, nhằm đánh giá hiệu quả quảng cáo.
            </p>
          </section>
          <section>
            <h2>2. Thông tin bạn gửi qua Messenger</h2>
            <p className="mt-2">
              Khi bạn nhắn tin cho Pancharm, các thông tin như họ tên, ngày/tháng/năm và giờ sinh chỉ được dùng để luận Bát
              Tự, tư vấn và xử lý đơn hàng của bạn. Những thông tin này không được đưa vào công cụ đo lường quảng cáo.
            </p>
          </section>
          <section>
            <h2>3. Cookie và công cụ bên thứ ba</h2>
            <p className="mt-2">
              TikTok và Google có thể sử dụng cookie theo chính sách riêng của họ. Bạn có thể chặn hoặc xóa cookie trong
              phần cài đặt trình duyệt.
            </p>
          </section>
          <section>
            <h2>4. Liên hệ</h2>
            <Pending className="mt-2">Tên pháp nhân, địa chỉ, email/hotline để tiếp nhận yêu cầu về dữ liệu cá nhân.</Pending>
          </section>
        </div>
        <Link href="/" className="mt-10 inline-block font-semibold text-forest underline underline-offset-4">
          ← Về trang chủ
        </Link>
      </main>
      <Footer />
    </>
  );
}
