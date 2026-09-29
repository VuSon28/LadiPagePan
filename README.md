# Pancharm Landing — TikTok Ads → Messenger

Landing page mobile-first cho funnel **TikTok Ads → Landing → Messenger → Tư vấn Bát Tự**, dựng theo `01_Pancharm_Landing_PreCode_Spec_v1.docx`.

- Next.js 16 (App Router, Turbopack) + Tailwind CSS v4
- Bảng màu: nền đất nung (`clay`) chạy suốt trang, nội dung nằm trong thẻ kem (`cream`). Khối kiểm định là dải nền kem để đổi nhịp.
- Thứ tự khối theo mockup: hero ảnh tràn viền → 4 cam kết → tuyên ngôn “Không chỉ là màu hợp mệnh” → quy trình 4 bước dạng timeline + CTA → sơ đồ Bát Tự → 3 thiết kế tiêu biểu (bấm để xem toàn bộ) → ảnh tràn viền + thư viện + “Thiết kế theo mong muốn” → kiểm định DOJILAB → băng đánh giá vuốt ngang → đặc quyền → ưu đãi đếm ngược → FAQ → CTA cuối kèm 3 số liệu. Phần Chuyên gia (`ExpertSection`) đang tạm ẩn trong `app/page.tsx`.
- Hai khối **đặc quyền** và **ưu đãi đếm ngược** không có trong mockup nhưng được giữ lại; bỏ đi thì xoá dòng tương ứng trong `app/page.tsx`.
- Font: Lora (tiêu đề, serif) + Be Vietnam Pro (nội dung)
- Chỉ có bố cục điện thoại: mọi màn hình (kể cả máy tính) đều hiển thị một cột rộng tối đa 480px, căn giữa (`.phone-shell` trong `app/globals.css`)
- Không có form, không backend, không database
- TikTok Pixel (PageView, ViewContent, Contact) + GA4 tùy chọn

## Chạy thử trên máy

```bash
npm install
cp .env.example .env.local   # điền Messenger URL, Pixel ID
npm run dev                  # http://localhost:3000
```

## Biến môi trường

| Biến | Bắt buộc | Ghi chú |
|---|---|---|
| `NEXT_PUBLIC_MESSENGER_URL` | Có | Ví dụ `https://m.me/pancharm`. Với link m.me, trang tự gắn `?ref=landing_<vị trí>` để biết khách bấm từ nút nào. |
| `NEXT_PUBLIC_TIKTOK_PIXEL_ID` | Có (trước khi chạy ads) | Bỏ trống thì pixel không được tải. |
| `NEXT_PUBLIC_SITE_URL` | Có (production) | Domain chính thức, dùng cho canonical, OG image và sitemap. |
| `NEXT_PUBLIC_GA4_ID` | Không | `G-XXXXXXXXXX` |

Biến `NEXT_PUBLIC_*` được gắn vào lúc build. Sau khi đổi biến trên Vercel, cần **Redeploy**.

## Sửa nội dung

- **Toàn bộ copy:** `data/content.ts`. Không cần sửa component.
- **Ảnh:** `public/images/` (hero, designs, certificates, og), định dạng WebP.
- **Logo:** `public/logo-mark.svg` (trên nền sáng), `public/logo-mark-cream.svg` (bản nét kem dùng trên nền đất) và `app/icon.svg`. Đây là **bản vẽ lại tạm thời**, cần thay bằng file logo gốc.
- **Màu sắc:** token trong `app/globals.css` (`@theme`).

## Tracking

| Event | Nền tảng | Khi nào |
|---|---|---|
| `PageView`, `ViewContent` | TikTok | Khi tải trang |
| `Contact` | TikTok | Khi bấm bất kỳ CTA Messenger nào (`content_name = messenger_<source>`) |
| `messenger_click` | GA4 | Như trên, kèm `source`, `section`, `device` |
| `scroll_25/50/75/90` | GA4 | Khi cuộn tới mốc tương ứng |
| `certificate_open`, `faq_open` | GA4 | Khi mở chứng thư hoặc câu FAQ |
| `products_expand`, `reviews_expand` | GA4 | Khi bấm xem thêm thiết kế hoặc xem thêm đánh giá |

Giá trị `source` gồm `hero`, `process`, `benefit`, `final`, `sticky`. Khi bấm CTA, trang gửi event rồi chờ 250ms mới mở Messenger trong cùng tab, cách này ổn định hơn trong trình duyệt nội bộ của TikTok. Không có dữ liệu cá nhân nào của khách được gửi vào pixel hay GA.

## Deploy: GitHub → Vercel → Domain

1. Tạo repo GitHub **private** rồi push thư mục này lên.
2. Vào Vercel, chọn **Add New Project** rồi import repo. Framework tự nhận là Next.js.
3. Thêm các biến môi trường ở trên cho cả Production và Preview.
4. Deploy, sau đó QA trên link Preview:
   - Test trên iOS Safari, Android Chrome và **trình duyệt nội bộ của TikTok** (mở link từ tin nhắn TikTok).
   - Bấm từng CTA, kiểm tra mở đúng Page Messenger.
   - Dùng **TikTok Pixel Helper** hoặc Events Manager → Test Events để xác nhận PageView, ViewContent và Contact, không bị bắn trùng.
5. Vào Settings → Domains, thêm domain (ví dụ `batu.pancharm.vn`) rồi trỏ DNS theo hướng dẫn của Vercel.
6. Kiểm tra HTTPS và canonical, sau đó mới gắn URL vào TikTok Ads.

## Checklist trước khi chạy ads

Tìm chuỗi `pending` trong `data/content.ts` và `[CẦN BỔ SUNG]` trong thư mục `components/` và `app/`. Phải **không còn kết quả nào**.

- [ ] Logo gốc (SVG/PNG) thay cho bản vẽ tạm
- [ ] Messenger URL + TikTok Pixel ID + domain
- [ ] Chuyên gia cố vấn: ảnh, họ tên, chức danh, bio đã xác minh, rồi bật lại `ExpertSection` trong `app/page.tsx`
- [ ] Mô tả từng BST (Thiên Vi / Diên / Trà An / Vô Vi / Thiên Ân) và ảnh tương ứng
- [ ] Điều kiện chi tiết: xem hàng, bảo hành 1 tháng, bảo hành dây 1 năm
- [ ] FAQ: thời gian nhận vòng; có hiển thị giá hay không
- [ ] Footer: pháp nhân, địa chỉ, hotline/email, link Điều khoản và Chính sách bảo hành
- [ ] Chính sách bảo mật (`app/chinh-sach-bao-mat/page.tsx`) đã được rà soát
- [ ] Xác nhận đã có **quyền sử dụng** feedback (trích nguyên văn, đã ẩn danh) và ảnh sản phẩm
- [ ] Nội dung video TikTok khớp với landing (quà, chính sách, giá nếu có)
- [ ] Số sao trong băng đánh giá: chỉ hiện khi thêm `rating` vào review trong `data/content.ts`. Hiện chưa review nào có `rating` vì các feedback là tin nhắn, không kèm số sao — chỉ thêm khi khách thực sự đánh giá sao.
- [ ] Xác nhận con số “Hơn 1.000 khách hàng” và “20+ năm kinh nghiệm” dùng trong khối đánh giá và CTA cuối

## Ghi chú nội dung

- Các ý nghĩa phong thủy đều trình bày theo quan niệm, không cam kết kết quả. Không thêm các câu kiểu "đổi vận", "may mắn hơn", "tài lộc".
- Feedback chỉ chọn câu về trải nghiệm, chất lượng và dịch vụ. Những câu về may mắn, tài lộc, công việc thăng tiến đã được loại bỏ để tránh bị TikTok từ chối quảng cáo.
- Mỗi chứng thư chỉ ghi đúng kết luận và phạm vi của mẫu được kiểm định. Tên và địa chỉ khách trên phiếu bạc đã được làm mờ.
