/**
 * Toàn bộ nội dung landing. Sửa copy tại đây, không sửa trong component.
 *
 * Quy ước: giá trị `pending` = nội dung Pancharm cần bổ sung/xác nhận trước khi
 * publish. Component sẽ hiển thị khung [CẦN BỔ SUNG] để không bị sót.
 * Trước khi chạy ads: tìm "pending:" trong file này, phải không còn kết quả.
 */

export const nav = [
  { href: "#quy-trinh", label: "Quy trình tư vấn" },
  { href: "#thiet-ke", label: "Thiết kế thực tế" },
  { href: "#kiem-dinh", label: "Hồ sơ kiểm định" },
  { href: "#dac-quyen", label: "Đặc quyền" },
  { href: "#hoi-dap", label: "Câu hỏi thường gặp" },
];

export const hero = {
  eyebrow: "Vòng đá phong thủy cá nhân hóa",
  title: "Một chiếc vòng được thiết kế riêng theo Bát Tự của bạn",
  body: "Pancharm luận ngày, tháng, năm, giờ sinh để xác định ngũ hành vượng – khuyết, từ đó tư vấn loại đá và thiết kế chiếc vòng phù hợp với mong muốn của riêng bạn.",
  cta: "Nhắn Pancharm – Tư vấn Bát Tự miễn phí",
  microcopy: ["Miễn phí luận Bát Tự", "Không cần điền form"],
  image: {
    src: "/images/hero/hero-pancharm-mobile.webp",
    alt: "Cận cảnh cổ tay đeo ba chuỗi vòng hạt đá màu xanh ngọc phối hạt vàng nhạt, nền lá xanh",
  },
};

export const trustItems = [
  { icon: "gift", label: "Luận Bát Tự 0đ" },
  { icon: "gem", label: "Có hồ sơ kiểm định đá & bạc" },
  { icon: "leaf", label: "Thiết kế riêng theo Bát Tự" },
  { icon: "shield", label: "Bảo hành dây 1 năm" },
];

export const insight = {
  title: "Không chỉ là “màu hợp mệnh” theo năm sinh",
  body: "Chọn vòng đá chỉ theo năm sinh là chưa đủ. Pancharm xem xét đầy đủ ngày, tháng, năm, giờ sinh (Bát Tự) để xác định ngũ hành vượng – khuyết, từ đó tư vấn loại đá và thiết kế phù hợp với mong muốn của bạn.",
  inputs: ["Giờ sinh", "Ngày sinh", "Tháng sinh", "Năm sinh"],
  core: "Bát Tự",
  result: "Ngũ hành vượng / khuyết",
};

export const process = {
  title: "Một chiếc vòng bắt đầu từ Bát Tự của bạn",
  steps: [
    {
      icon: "note",
      title: "Cung cấp ngày, tháng, năm và giờ sinh",
      body: "Chia sẻ thông tin Bát Tự của bạn với Pancharm qua Messenger.",
    },
    {
      icon: "yinyang",
      title: "Pancharm luận Bát Tự và xác định ngũ hành vượng – khuyết",
      body: "Phân tích lá số, xác định ngũ hành của bạn.",
    },
    {
      icon: "crystal",
      title: "Tư vấn loại đá và cách phối phù hợp với mong muốn",
      body: "Gợi ý loại đá, màu sắc và tỷ lệ phối cho riêng bạn.",
    },
    {
      icon: "bracelet",
      title: "Thiết kế và hoàn thiện chiếc vòng dành riêng cho bạn",
      body: "Gửi phương án thiết kế để bạn duyệt trước khi chế tác.",
    },
  ],
  cta: "Nhận tư vấn Bát Tự miễn phí",
};

export const meaning = {
  title: "Mỗi chiếc vòng có thể mang một ý nghĩa đồng hành riêng",
  body: "Tùy theo mong muốn của bạn, Pancharm tư vấn loại đá và thiết kế phù hợp với ý nghĩa phong thủy tương ứng, như một người bạn đồng hành trong cuộc sống.",
  items: [
    { icon: "briefcase", title: "Công việc", body: "Gợi nhắc sự tập trung và vững vàng trên con đường bạn đi." },
    { icon: "coins", title: "Tài chính", body: "Theo quan niệm phong thủy, tượng trưng cho tích lũy và cân bằng." },
    { icon: "heart", title: "Tình cảm", body: "Biểu tượng của sự dịu dàng, kết nối và trân trọng." },
    { icon: "lotus", title: "Bình an", body: "Vật nhỏ đồng hành, nhắc bạn chậm lại và giữ tâm an yên." },
    { icon: "sprout", title: "Học tập & phát triển bản thân", body: "Gợi nhắc tinh thần học hỏi và trưởng thành mỗi ngày." },
  ],
  disclaimer:
    "Mỗi thiết kế được lựa chọn dựa trên mong muốn của khách hàng và ý nghĩa phong thủy tương ứng, không phải cam kết về kết quả cụ thể.",
};

export const collection = {
  title: "Thiết kế thực tế từ Pancharm",
  body: "Mỗi chiếc vòng là một thiết kế được phối riêng theo Bát Tự và mong muốn của người đeo.",
  pending: "Tên bộ sưu tập (Thiên Vi / Diên / Trà An / Vô Vi / Thiên Ân) và mô tả ngắn cho từng ảnh, nếu muốn hiển thị.",
  items: [
    { src: "/images/designs/design-08.webp", alt: "Bàn tay cầm vòng hạt hồng và vàng có mặt đá xanh đậm chạm khắc" },
    { src: "/images/designs/design-03.webp", alt: "Cổ tay đeo nhiều vòng hạt xanh ngọc và hạt hồng, vàng" },
    { src: "/images/designs/design-04.webp", alt: "Lòng bàn tay cầm vòng hạt trắng sữa có charm bạc" },
    { src: "/images/designs/design-07.webp", alt: "Bàn tay cầm vòng hạt xanh đậm có mặt đá chạm khắc" },
    { src: "/images/designs/design-01.webp", alt: "Bàn tay cầm chuỗi hạt đá xanh ngọc và chuỗi hạt hồng, vàng nhạt, đeo nhẫn đá" },
    { src: "/images/designs/design-02.webp", alt: "Cổ tay đeo vòng hạt trắng xanh nhạt với một hạt hồng ở giữa" },
  ],
};

export type Certificate = {
  id: string;
  title: string;
  reportNo: string;
  date: string;
  result: string;
  scope: string;
  thumb: string;
  full: string;
  alt: string;
};

export const certificates = {
  title: "Đá & chất liệu có kiểm định",
  body: "Pancharm lựa chọn đá và chất liệu có hồ sơ kiểm định áp dụng theo từng mẫu, giúp bạn an tâm hơn khi lựa chọn.",
  items: [
    {
      id: "djl-g25-3076",
      title: "Ngọc Jadeite tự nhiên",
      reportNo: "DOJILAB · DJL G25.3076",
      date: "30/06/2025",
      result: "Natural Jadeite Jade · Jade kiểu A · màu cam nâu",
      scope: "Áp dụng cho 01 viên mẫu (1,10 ct) ghi trong chứng thư.",
      thumb: "/images/certificates/cert-dojilab-jadeite-g25-3076-thumb.webp",
      full: "/images/certificates/cert-dojilab-jadeite-g25-3076.webp",
      alt: "Chứng thư kiểm định đá màu DOJILAB số DJL G25.3076, kết quả Natural Jadeite Jade",
    },
    {
      id: "djl-g25-3077",
      title: "Ngọc Jadeite tự nhiên",
      reportNo: "DOJILAB · DJL G25.3077",
      date: "30/06/2025",
      result: "Natural Jadeite Jade · Jade kiểu A · màu lam lục",
      scope: "Áp dụng cho 01 viên mẫu (1,00 ct) ghi trong chứng thư.",
      thumb: "/images/certificates/cert-dojilab-jadeite-g25-3077-thumb.webp",
      full: "/images/certificates/cert-dojilab-jadeite-g25-3077.webp",
      alt: "Chứng thư kiểm định đá màu DOJILAB số DJL G25.3077, kết quả Natural Jadeite Jade",
    },
    {
      id: "k30-06-04",
      title: "Bạc (Ag) 97,94%",
      reportNo: "DOJILAB HN · Mẫu K30.06.04",
      date: "30/06/2025",
      result: "Mẫu lắc kim loại màu trắng · Ag (Bạc) 97,94%",
      scope: "Áp dụng cho mẫu thử được niêm phong ghi trong phiếu.",
      thumb: "/images/certificates/cert-dojilab-bac-ag-01-thumb.webp",
      full: "/images/certificates/cert-dojilab-bac-ag-01.webp",
      alt: "Phiếu kết quả thử nghiệm DOJILAB Hà Nội, mẫu lắc kim loại màu trắng, kết quả Ag (Bạc)",
    },
  ] satisfies Certificate[],
  note: "Mỗi chứng thư chỉ xác nhận đúng mẫu được kiểm định. Chạm vào ảnh để xem rõ; tra cứu số phiếu tại dojilab.vn.",
};

export const privileges = {
  title: "Đặc quyền khi thiết kế vòng cùng Pancharm",
  items: [
    { icon: "scroll", label: "Tặng lá số & luận giải" },
    { icon: "drop", label: "Tặng nước thanh tẩy" },
    { icon: "box", label: "Được xem hàng trước khi nhận" },
    { icon: "shield", label: "Bảo hành miễn phí 1 tháng" },
    { icon: "infinity", label: "Bảo hành dây 1 năm" },
  ],
  pending: "Điều kiện & phạm vi chi tiết của xem hàng, bảo hành 1 tháng, bảo hành dây 1 năm.",
};

// Tạm ẩn khỏi trang cho tới khi có thông tin thật (xem app/page.tsx).
export const expert = {
  eyebrow: "Chuyên gia cố vấn",
  title: "Luận Bát Tự cùng chuyên gia đồng hành",
  pending:
    "Ảnh chân dung thật + họ tên + chức danh + kinh nghiệm/vai trò cố vấn (đã xác minh, có quyền dùng ảnh).",
};

export const testimonials = {
  title: "Khách hàng nói gì sau khi nhận vòng",
  note: "Trích nguyên văn tin nhắn của khách hàng Pancharm, đã ẩn danh.",
  items: [
    {
      quotes: [
        "Vòng rất xinh và vừa tay",
        "Em có khoảng 6 chiếc vòng đá đủ kiểu, nhưng ưng nhất vòng này luôn",
      ],
    },
    {
      quotes: [
        "Thật sự e mua hàng online rất nhiều nhưng chưa thấy shop nào tận tâm mà qtam khách hàng như bên mình",
      ],
    },
    {
      quotes: [
        "Nhưng e có thể chắc chắn vòng bên mình là đá thiên nhiên nha, tại e đeo lâu e thấy nó có vẻ đẹp hơn lúc e mới đeo",
      ],
    },
    { quotes: ["Vòng đẹp lắm ạ. Nhận vòng thấy rất ưng chị à"] },
    { quotes: ["Mà vòng đeo cũng sang nữa", "Ko lẽ mua thêm chiếc thứ 3, mà thật là thích lắm luôn ấy shop"] },
    { quotes: ["Đeo vòng tay ai cũng hỏi nhìn đẹp shop ơi"] },
  ],
};

export const faq = {
  title: "Câu hỏi thường gặp",
  items: [
    {
      id: "gio-sinh",
      q: "Không biết chính xác giờ sinh thì sao?",
      a: "Bạn vẫn có thể nhắn Pancharm. Giờ sinh giúp luận Bát Tự đầy đủ hơn; nếu chưa rõ, tư vấn viên sẽ trao đổi thêm với bạn về cách xử lý phù hợp trong hội thoại.",
    },
    {
      id: "phi-luan",
      q: "Luận Bát Tự có mất phí không?",
      a: "Không. Luận Bát Tự là bước tư vấn không mất phí, giúp bạn hiểu vì sao loại đá và thiết kế được đề xuất phù hợp với mình.",
    },
    {
      id: "giong-anh",
      q: "Vòng có giống mẫu trên ảnh không?",
      a: "Ảnh trên trang là các thiết kế thực tế Pancharm đã làm. Vì mỗi chiếc vòng được phối theo Bát Tự của từng người, loại đá, màu và tỷ lệ có thể khác ảnh mẫu. Pancharm sẽ gửi phương án thiết kế để bạn duyệt trước.",
    },
    {
      id: "kiem-dinh",
      q: "Đá có kiểm định không?",
      a: "Pancharm có hồ sơ kiểm định DOJILAB cho các mẫu đá/chất liệu áp dụng (ví dụ ngọc Jadeite tự nhiên, bạc Ag). Mỗi chứng thư chỉ xác nhận đúng mẫu được kiểm định; bạn có thể hỏi tư vấn viên về hồ sơ của loại đá trong thiết kế của mình.",
    },
    {
      id: "thoi-gian",
      q: "Bao lâu thì nhận được vòng?",
      a: "",
      pending: "Thời gian trả kết quả luận, thời gian làm vòng và thời gian giao hàng.",
    },
    {
      id: "gia",
      q: "Giá được tính ra sao?",
      a: "Giá phụ thuộc vào loại đá, chất liệu và phương án thiết kế. Tư vấn viên sẽ báo giá cụ thể sau khi bạn chọn phương án phù hợp.",
      pending: "Có hiển thị mức giá tham khảo không? Nếu quảng cáo TikTok nhắc giá, trang phải ghi khớp.",
    },
  ] as { id: string; q: string; a: string; pending?: string }[],
};

export const finalCta = {
  title: "Sẵn sàng tìm chiếc vòng dành riêng cho bạn?",
  body: "Nhắn Pancharm để được tư vấn Bát Tự miễn phí và lựa chọn thiết kế phù hợp với mong muốn của bạn.",
  cta: "Nhắn Messenger ngay",
  image: "/images/hero/final-pancharm-01.webp",
};

export const sticky = { cta: "Nhắn Pancharm – Tư vấn miễn phí" };

export const footer = {
  pending: {
    legal: "Tên pháp nhân/đơn vị sở hữu, mã số doanh nghiệp, địa chỉ.",
    contact: "Hotline, email chăm sóc khách hàng.",
    policies: "Link trang Điều khoản và Chính sách bảo hành/đổi trả.",
  },
};
