/**
 * Toàn bộ nội dung landing. Sửa copy tại đây, không sửa trong component.
 *
 * Quy ước: giá trị `pending` = nội dung Pancharm cần bổ sung/xác nhận trước khi
 * publish. Component sẽ hiển thị khung [CẦN BỔ SUNG] để không bị sót.
 * Trước khi chạy ads: tìm "pending:" trong file này, phải không còn kết quả.
 */

export const nav = [
  { href: "#mau-vong", label: "Mẫu vòng & giá" },
  { href: "#thiet-ke", label: "Thiết kế theo mong muốn" },
  { href: "#kiem-dinh", label: "Hồ sơ kiểm định" },
  { href: "#danh-gia", label: "Khách hàng nói gì" },
  { href: "#uu-dai", label: "Ưu đãi hôm nay" },
  { href: "#hoi-dap", label: "Câu hỏi thường gặp" },
];

export const hero = {
  eyebrow: "Vòng đá phong thủy cá nhân hóa",
  /**
   * Tiêu đề cố định đúng 3 dòng; `em` = cụm nhấn mạnh (to, đậm, nhấp nháy).
   * Giữ mỗi dòng ngắn — dòng 3 là dòng dài nhất và phải vừa màn hình 360px.
   */
  title: [
    [{ text: "Một chiếc vòng được" }],
    [{ text: "thiết kế riêng", em: true }, { text: " theo" }],
    [{ text: "sinh nhật", em: true }, { text: " và " }, { text: "ước muốn", em: true }, { text: " của bạn" }],
  ] as { text: string; em?: boolean }[][],
  body: "Sống thuận mệnh là chìa khoá hoá giải vận hạn, khó khăn.",
  offer: {
    lead: "Tặng",
    label: "ngay lá số và luận giải trị giá",
    value: "500.000đ",
    newPrice: "0đ",
    suffix: "ngay hôm nay",
  },
  cta: "Nhận tư vấn Bát Tự miễn phí",
  image: {
    src: "/images/hero/hero-pancharm-mobile.webp",
    alt: "Cận cảnh cổ tay đeo ba chuỗi vòng hạt đá màu xanh ngọc phối hạt vàng nhạt, nền lá xanh",
  },
};

/** Thông điệp tin cậy duy nhất ngay dưới hero. */
export const trustBadge = {
  icon: "yinyang",
  lead: "Chuyên gia phong thuỷ",
  highlight: "20+ năm kinh nghiệm",
};

/** Khối tuyên ngôn giữa hero và quy trình. */
export const belief = {
  title: "Không chỉ là “màu hợp mệnh”",
  subtitle: "Mà là thiết kế từ Bát Tự của riêng bạn",
  body: "Mỗi người có một lá số Bát Tự khác nhau. Pancharm phân tích ngũ hành vượng/khuyết để tư vấn loại đá, phối màu và thiết kế phù hợp với mong muốn của bạn.",
};

export const insight = {
  /** `em` = cụm nhấn mạnh (đậm, nổi, nhấp nháy). */
  title: [
    { text: "Có phải bạn đang chọn vòng " },
    { text: "hợp mệnh", em: true },
    { text: " hay " },
    { text: "mệnh khuyết", em: true },
    { text: "?" },
  ] as { text: string; em?: boolean }[],
  body: "10 người mệnh Hoả nhưng có 10 tính cách khác nhau, vậy có thể đeo cùng 1 loại đá không?",
  diagramTitle: "Vậy 1 chiếc vòng Pancharm được tạo ra thế nào?",
  designImage: {
    src: "/images/bat-tu/thiet-ke-thien-vi-ti-huu.webp",
    alt: "Vòng Thiên Vi full đá tròn 8 ly Tì Hưu: hạt thạch anh hồng, vàng, moonstone phối tì hưu ngọc xanh",
    caption: "Thiết kế thực tế: Thiên Vi full đá tròn 8 ly Tì Hưu",
  },
  meaningImage: {
    src: "/images/bat-tu/y-nghia-thien-vi-ti-huu.webp",
    alt: "Ý nghĩa từng loại đá trong vòng: Ngọc Phỉ Thuý bình an thuận lợi; Hắc Nguyệt Quang trợ Mộc; Thạch anh hồng trợ Hoả – Thổ; Moonstone trợ Thuỷ; Thạch anh vàng trợ Kim; viên chủ chọn theo mong ước lớn nhất; tì hưu chiêu tài giữ lộc; charm cỏ may mắn và đồng xu tiền tài",
    caption: "Mỗi viên đá trong vòng đều có vai trò riêng",
  },
  inputs: [
    { label: "Giờ sinh", sub: "(Thời)", icon: "clock" },
    { label: "Ngày sinh", sub: "(Nhật)", icon: "sun" },
    { label: "Tháng sinh", sub: "(Nguyệt)", icon: "moon" },
    { label: "Năm sinh", sub: "(Niên)", icon: "leaf" },
  ],
  core: "Bát Tự",
  result: "Ngũ hành vượng / khuyết",
  elements: [
    { label: "Mộc", icon: "leaf" },
    { label: "Hỏa", icon: "flame" },
    { label: "Thổ", icon: "mountain" },
    { label: "Kim", icon: "metal" },
    { label: "Thủy", icon: "drop" },
  ],
  goal: "Mục tiêu mong muốn",
  outcome: "Tìm ra chính xác tỷ lệ bạn cần bổ sung",
};

export const process = {
  title: "Quy trình thiết kế vòng\ncá nhân hóa",
  steps: [
    {
      icon: "note",
      title: "Cung cấp thông tin",
      body: "Ngày, tháng, năm, giờ sinh và mong muốn (công việc, tài chính, tình cảm…)",
    },
    {
      icon: "yinyang",
      title: "Chuyên gia phân tích Bát Tự",
      body: "Phân tích ngũ hành vượng/khuyết, đưa ra định hướng phù hợp",
    },
    {
      icon: "pen",
      title: "Tư vấn & thiết kế vòng",
      body: "Lựa chọn loại đá, màu sắc, charm phù hợp với năng lượng của bạn",
    },
    {
      icon: "bracelet",
      title: "Chế tác & gửi đến bạn",
      body: "Hoàn thiện thủ công, kiểm định chất lượng và bàn giao",
    },
  ],
  ctaCard: {
    title: "Tư vấn Bát Tự hoàn toàn miễn phí",
    body: "cùng chuyên gia 20+ năm kinh nghiệm",
    cta: "Nhận tư vấn ngay",
  },
};

/** Nhóm mong muốn, hiển thị thành chip trong khối “Thiết kế theo mong muốn”. */
export const meaning = {
  items: [
    { icon: "briefcase", title: "Công việc", body: "Gợi nhắc sự tập trung và vững vàng trên con đường bạn đi." },
    { icon: "coins", title: "Tài chính", body: "Theo quan niệm phong thủy, tượng trưng cho tích lũy và cân bằng." },
    { icon: "heart", title: "Tình cảm", body: "Biểu tượng của sự dịu dàng, kết nối và trân trọng." },
    { icon: "lotus", title: "Bình an", body: "Vật nhỏ đồng hành, nhắc bạn chậm lại và giữ tâm an yên." },
    { icon: "sprout", title: "Học tập", body: "Gợi nhắc tinh thần học hỏi và trưởng thành mỗi ngày." },
  ],
  disclaimer:
    "Mỗi thiết kế được lựa chọn dựa trên mong muốn của khách hàng và ý nghĩa phong thủy tương ứng, không phải cam kết về kết quả cụ thể.",
};

export type Product = {
  name: string;
  /** Giá bản dây bạc (bản chuẩn); `fromPrice` = bản titan/cước rẻ nhất nếu có. */
  price: number;
  fromPrice?: number;
  image: string;
  alt: string;
};

/**
 * Giá lấy từ "Pancharm giá bán sp [cập nhật 17072026].pdf" (bảng giá nội bộ số 2).
 * Giá đã gồm thuế, áp dụng cổ tay 14–16cm. Phân khúc xếp theo giá bản bạc.
 * Thiên Ân: dùng giá chính thức từ 22/07/2026. Ảnh tách từ chính file PDF.
 * Không đưa mã sản phẩm / ghi chú nội bộ lên trang.
 */
export const products = {
  title: "Một số thiết kế tiêu biểu",
  body: "Mỗi chiếc vòng là một bản thiết kế riêng, phù hợp với năng lượng và mong muốn của từng khách hàng.",
  segments: [
    {
      label: "Dưới 1 triệu",
      items: [
        {
          name: "Thiên Vi ngũ hành 10 đá",
          price: 499000,
          fromPrice: 299000,
          image: "/images/products/thien-vi-ngu-hanh-10-da.webp",
          alt: "Lắc bạc Thiên Vi 10 viên đá ngũ hành nhiều màu kèm charm cỏ bốn lá",
        },
        {
          name: "Thiên Vi ngũ hành full đá tự do",
          price: 599000,
          fromPrice: 499000,
          image: "/images/products/thien-vi-full-da-tu-do.webp",
          alt: "Vòng Thiên Vi full đá tự do nhiều màu: vàng, xanh, hồng, trắng",
        },
        {
          name: "Trà An ngọc dây chỉ sáp",
          price: 720000,
          image: "/images/products/tra-an-ngoc-chi-sap.webp",
          alt: "Vòng Trà An dây chỉ sáp màu be có hoa trà ngọc và charm chữ cái",
        },
        {
          name: "Thiên Vi full đá gần tròn",
          price: 750000,
          fromPrice: 550000,
          image: "/images/products/thien-vi-full-da-gan-tron.webp",
          alt: "Vòng Thiên Vi full đá gần tròn phối hồng, cam, xanh ngọc",
        },
      ],
    },
    {
      label: "1 – 2 triệu",
      items: [
        {
          name: "Thiên Vi full đá tròn 6 ly",
          price: 1500000,
          fromPrice: 1300000,
          image: "/images/products/thien-vi-da-tron-6ly.webp",
          alt: "Vòng Thiên Vi full đá tròn 6 ly phối hồng, vàng, xám, bi bạc",
        },
        {
          name: "Vô Vi Phỉ Thuý Lam",
          price: 1550000,
          image: "/images/products/vo-vi-phi-thuy-lam-pdf.webp",
          alt: "Vòng Vô Vi phối ngọc trai, ngọc phỉ thuý lam bánh xe và charm trái tim bạc",
        },
        {
          name: "Trà An ngọc Phỉ Thuý Lam",
          price: 1550000,
          fromPrice: 1350000,
          image: "/images/products/tra-an-phi-thuy-lam.webp",
          alt: "Vòng Trà An hoa trà ngọc, ngọc phỉ thuý lam và ngọc trai",
        },
        {
          name: "Thiên Vi mix Lu Thống 6 ly",
          price: 1780000,
          fromPrice: 1580000,
          image: "/images/products/thien-vi-lu-thong-6ly.webp",
          alt: "Vòng Thiên Vi đá tròn 6 ly có một lu thống san hô đỏ ở giữa",
        },
      ],
    },
    {
      label: "2 – 3 triệu",
      items: [
        {
          name: "Ngọc Phỉ Thuý Miến Điện mục tiêu",
          price: 2060000,
          fromPrice: 1860000,
          image: "/images/products/ngoc-mien-dien-muc-tieu.webp",
          alt: "Vòng full ngọc phỉ thuý Miến Điện 6 ly có một viên đá hồng ở giữa và charm bạc",
        },
        {
          name: "Thiên Vi full đá tròn 8 ly Tì Hưu",
          price: 2390000,
          fromPrice: 2190000,
          image: "/images/products/thien-vi-ti-huu-8ly-pdf.webp",
          alt: "Vòng Thiên Vi đá tròn 8 ly có tì hưu ngọc phỉ thuý lam và charm bạc",
        },
        {
          name: "Thiên Ân quấn 1 Phúc – Lộc – Thọ",
          price: 2525000,
          fromPrice: 2325000,
          image: "/images/products/thien-an-quan-1.webp",
          alt: "Tay cầm vòng Thiên Ân quấn 1: ngọc bích xanh, đá bánh xe nhiều màu và charm rơi",
        },
        {
          name: "Lắc tay Thiên Ân mục tiêu",
          price: 2725000,
          image: "/images/products/lac-thien-an-muc-tieu.webp",
          alt: "Lắc tay bạc Thiên Ân có đồng điếu ngọc phỉ thuý và đá bánh xe nhiều màu",
        },
      ],
    },
    {
      label: "Từ 3 triệu",
      items: [
        {
          name: "Thiên Ân quấn 1 charm hoa Ưu Đàm",
          price: 3150000,
          fromPrice: 2950000,
          image: "/images/products/thien-an-quan-1-uu-dam.webp",
          alt: "Vòng Thiên Ân ngọc bích xanh, đồng điếu ngọc trắng và charm hoa ưu đàm",
        },
        {
          name: "Thiên Ân quấn 3 Ngũ Phúc",
          price: 6025000,
          fromPrice: 5825000,
          image: "/images/products/thien-an-quan-3-ngu-phuc.webp",
          alt: "Vòng Thiên Ân quấn 3 vòng: ngọc bích xanh, đá bánh xe cam hồng và đồng điếu ngọc",
        },
        {
          name: "Thiên Ân quấn 3 Phúc – Lộc – Thọ",
          price: 6290000,
          fromPrice: 6090000,
          image: "/images/products/thien-an-quan-3-phuc-loc-tho.webp",
          alt: "Vòng Thiên Ân quấn 3 trải trên khay: ngọc bích xanh, đá bánh xe và charm rơi",
        },
      ],
    },
  ] satisfies { label: string; items: Product[] }[],
  /** Ô thứ 4 cho phân khúc chưa đủ 4 mẫu. */
  customTile: { title: "Thiết kế riêng theo yêu cầu", body: "Nhắn Pancharm để được báo giá" },
  note: "Giá bản dây bạc, đã gồm thuế, miễn phí vận chuyển; áp dụng cổ tay 14–16cm. Bản titan/cước có giá thấp hơn. Loại đá, màu và tỷ lệ phối được điều chỉnh lại theo Bát Tự của riêng bạn.",
};

/** Khối “Thiết kế theo mong muốn của riêng bạn”: ảnh tràn viền + chip mong muốn + thư viện ảnh thật. */
export const design = {
  band: {
    src: "/images/hero/final-pancharm-01.webp",
    alt: "Lòng bàn tay cầm vòng hạt ngọc xanh đậm phối charm ngọc trắng, nền lá cây",
  },
  title: "Thiết kế theo mong muốn\ncủa riêng bạn",
  body: "Từ màu sắc, loại đá đến charm, tất cả đều được chọn lựa và chế tác riêng theo năng lượng và câu chuyện của bạn.",
  cta: "Nhận tư vấn thiết kế vòng",
  galleryTitle: "Ảnh khách hàng gửi về",
  gallery: [
    { src: "/images/designs/design-08.webp", alt: "Bàn tay cầm vòng hạt hồng và vàng có mặt đá xanh đậm chạm khắc" },
    { src: "/images/designs/design-03.webp", alt: "Cổ tay đeo nhiều vòng hạt xanh ngọc và hạt hồng, vàng" },
    { src: "/images/designs/design-04.webp", alt: "Lòng bàn tay cầm vòng hạt trắng sữa có charm bạc" },
    { src: "/images/designs/design-07.webp", alt: "Bàn tay cầm vòng hạt xanh đậm có mặt đá chạm khắc" },
    { src: "/images/designs/design-01.webp", alt: "Bàn tay cầm chuỗi hạt đá xanh ngọc và chuỗi hạt hồng, vàng nhạt, đeo nhẫn đá" },
    { src: "/images/designs/design-02.webp", alt: "Cổ tay đeo vòng hạt trắng xanh nhạt với một hạt hồng ở giữa" },
    { src: "/images/designs/design-09.webp", alt: "Cổ tay đeo ba chuỗi vòng: hai chuỗi xanh ngọc và một chuỗi hạt hồng" },
    { src: "/images/designs/design-05.webp", alt: "Bàn tay cầm chuỗi hạt xanh ngọc phối hạt hồng, vàng và hoa ngọc trắng" },
    { src: "/images/designs/design-10.webp", alt: "Lòng bàn tay cầm vòng ngọc xanh đậm có tì hưu chạm khắc" },
    { src: "/images/designs/design-11.webp", alt: "Bàn tay cầm vòng hạt hồng, vàng, xám phối đoạn hạt xanh ngọc và charm cỏ bốn lá" },
    { src: "/images/designs/design-12.webp", alt: "Bàn tay cầm lắc hạt xanh nhạt, vàng có charm bạc hình vô cực" },
    { src: "/images/designs/design-06.webp", alt: "Bàn tay cầm dây chuyền bạc mảnh có hai hạt đá trắng và charm nơ" },
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
  title: "Đá & chất liệu đã kiểm định",
  body: "Pancharm lựa chọn đá và chất liệu có hồ sơ kiểm định áp dụng theo từng mẫu, giúp bạn an tâm hơn khi lựa chọn.",
  photos: [
    {
      src: "/images/dojilab/pancharm-tai-dojilab-v2.webp",
      alt: "Đại diện Pancharm đứng trước biển Viện Ngọc học và Trang sức DOJILAB Hà Nội",
      caption: "Pancharm tại Viện DOJILAB Hà Nội",
    },
    {
      src: "/images/dojilab/dojilab-phong-lab.webp",
      alt: "Chuyên viên DOJILAB soi kiểm định đá quý bằng kính hiển vi trong phòng thí nghiệm",
      caption: "Phòng kiểm định DOJILAB",
      credit: "Ảnh: dojilab.vn",
    },
  ] as { src: string; alt: string; caption: string; credit?: string }[],
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
  note: "Các nguyên liệu đều được kiểm định đạt chuẩn trước khi thiết kế và sản xuất. Chạm vào ảnh để xem rõ chứng thư; tra cứu số phiếu tại",
  noteLink: { label: "dojilab.vn", href: "https://dojilab.vn" },
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

export type Review = {
  /** Số sao nếu khách có gửi đánh giá kèm sao; để trống thì không hiển thị sao. */
  rating?: number;
  /** Tên đã che kiểu sàn TMĐT (chữ đầu + *** + chữ cuối) — không đăng tên thật. */
  name: string;
  meta: string;
  quotes: string[];
  photos?: { src: string; alt: string }[];
};

/**
 * Trích NGUYÊN VĂN từ ảnh chụp tin nhắn trong thư mục feedback/ (không sửa chính tả,
 * "…" = lược bớt). Không thêm, không bịa đánh giá; muốn thêm phải có ảnh gốc.
 */
export const testimonials = {
  title: "Khách hàng nói về Pancharm",
  subtitle: "Hơn 1.000 khách hàng đã lựa chọn và tin tưởng",
  note: "Trích nguyên văn tin nhắn khách hàng gửi Pancharm, đã ẩn tên. Đây là cảm nhận cá nhân của từng khách hàng, không phải cam kết về kết quả.",
  initialCount: 6,
  items: [
    {
      name: "T***n",
      meta: "Đã mua tại Pancharm · Messenger",
      quotes: [
        "Vòng rất xinh và vừa tay",
        "Đeo vào cảm thấy người rất nhẹ nhàng, thư thái",
        "Em có khoảng 6 chiếc vòng đá đủ kiểu, nhưng ưng nhất vòng này luôn",
        "Trước hay thay đổi vòng, nhưng từ ngày đeo vòng này là không đổi nữa, chỉ thích đeo vòng này thôi",
      ],
      photos: [
        { src: "/images/reviews/review-t-binh-yen-1.webp", alt: "Ảnh khách gửi: cổ tay đeo vòng hạt đỏ cam" },
        { src: "/images/reviews/review-t-binh-yen-2.webp", alt: "Ảnh khách gửi: cận cảnh vòng hạt đỏ cam trên cổ tay" },
      ],
    },
    {
      name: "H***n",
      meta: "03/2026 · Messenger",
      quotes: [
        "Kiểu ban đầu em dùng vòng em cũng nghĩ đơn giản như là đeo một vòng trang sức bình thường thui í, nhưng mà sau tết em đi làm lại, kiểu công việc khá suôn sẻ, thuận lợi í, ngày nào cũng kí được hợp đồng, mà khách cũng dễ tính, thoải mái.",
        "Nói chung là dạo này em không bị suy nghĩ tiêu cực như trước mà kiểu thoải mái lắm í",
      ],
    },
    {
      name: "C***h",
      meta: "Đã mua tại Pancharm · Messenger",
      quotes: [
        "Hôm qua rằm em có thanh tẩy vòng qua làn hương gỗ Palo Santo, em đeo thì em thấy thích và cảm giác nó trong trong á.",
        "Từ hôm đeo vòng, em thấy có cơ hội việc làm khác xuất hiện, tâm cũng nhẹ nhàng.",
      ],
      photos: [
        { src: "/images/reviews/review-kh-4.webp", alt: "Ảnh khách gửi: cổ tay đeo vòng hạt đỏ, vàng, trắng dưới nắng" },
        { src: "/images/reviews/review-kh-1.webp", alt: "Ảnh khách gửi: tay đeo vòng trước tán lá" },
        { src: "/images/reviews/review-kh-2.webp", alt: "Ảnh khách gửi: cổ tay đeo vòng hạt nhiều màu" },
        { src: "/images/reviews/review-kh-3.webp", alt: "Ảnh khách gửi: vòng trên cổ tay, nền cây xanh" },
      ],
    },
    {
      name: "Khách hàng ẩn danh",
      meta: "17/03/2026 · Messenger",
      quotes: [
        "Shop ơi em nhận được vòng rồi ạ. Nhân tiện em muốn gửi lời feedback tuyệt vời đến Pancharm.",
        "Em đã có kết quả học tập đúng như những gì em mong đợi. Em nhận được nhiều động lực trong quá trình học tập…",
        "Em cảm ơn Pancharm nhiều ạ.",
      ],
    },
    {
      name: "M***y",
      meta: "Đã mua tại Pancharm · Messenger",
      quotes: [
        "Tốt ạ nhờ hữu duyên gặp shop tốt còn rất tốt hơn nữa là khác từ trong gia đình đến ra ngoài xã hội còn có nhiều chuyện tốt xảy ra đến với em ko thể ngờ ạ vòng của em đeo nay bóng lắm ạ",
      ],
      photos: [{ src: "/images/reviews/review-my-my.webp", alt: "Ảnh khách gửi: cổ tay đeo vòng hạt đỏ phối hạt trắng, vàng" }],
    },
    {
      name: "T***o",
      meta: "Đã mua tại Pancharm · Messenger",
      quotes: [
        "Dạ e cũng không biết nó có thay đổi cs em không nhưng nói chung em thấy kiểu tâm mình nó an yên hơn từ khi va vào con đường đá phong thuỷ ạ",
        "Kiểu như e thấy mình bớt nóng tính hơn xưa",
        "Nhưng e có thể chắc chắn vòng bên mình là đá thiên nhiên nha, tại e đeo lâu e thấy nó có vẻ đẹp hơn lúc e mới đeo",
        "Coa mấy hạt nó trong hơn",
      ],
    },
    {
      name: "Khách hàng ẩn danh",
      meta: "29/01/2026 · Messenger",
      quotes: [
        "Dạ Trộm vía lắm ạ. Công việc đến mà em bất ngờ",
        "Lúc đầu công việc em nhận thì cũng chỉ là bình thường thôi ạ. Nhưng khi em về thì được xét duyệt vào luôn khung. Em thi mãi mà không có duyên đậu thì giờ được xét vào ạ.",
      ],
    },
    {
      name: "Khách hàng ẩn danh",
      meta: "Đã mua tại Pancharm · Messenger",
      quotes: [
        "Đợt mik đeo vòng mua lần đầu ấy, vòng đó thiên về tài lộc hơn",
        "Vậy mà đeo xong công việc mik lên hẳn, mik thu nhập gấp đôi luôn",
        "Giờ mình đeo thêm vòng mình mua lần sau, vòng mix cân bằng ấy",
      ],
    },
    {
      name: "Khách hàng ẩn danh",
      meta: "Đã mua tại Pancharm · Messenger",
      quotes: [
        "Vòng đẹp lắm ạ. Nhận vòng thấy rất ưng chị à",
        "Đeo 1 tg rồi e thấy thoải mái ,may mắn, khi nào tinh thần tụt most chạm tới vòng thấy an tĩnh lắm chị",
      ],
    },
    {
      name: "Khách hàng ẩn danh",
      meta: "Đã mua tại Pancharm · Messenger",
      quotes: [
        "Thật sự là cũng hơn 2 tháng đeo vòng của shop thấy có nhiều biến động. Thứ nhất là em vừa thi bằng lái xe hạng B nói chung là em cũng run sợ rớt mà trộm vía là thi đậu 1 lần duy nhất.",
      ],
    },
    {
      name: "Khách hàng ẩn danh",
      meta: "Mua tặng mẹ · Messenger",
      quotes: [
        "Nói chung là mẹ e rất ưng ạ",
        "Cứ khen nhã nhặn rồi lại còn bảo cô phải mua tặng mẹ lâu rồi chứ bgio cô mua hơi muộn chút nhg mẹ ưng ý",
      ],
    },
    {
      name: "Khách hàng ẩn danh",
      meta: "Đã mua tại Pancharm · Messenger",
      quotes: [
        "Mà vòng đeo cũng sang nữa",
        "Ko lẽ mua thêm chiếc thứ 3, mà thật là thích lắm luôn ấy shop",
      ],
    },
    {
      name: "Khách hàng ẩn danh",
      meta: "Đã mua tại Pancharm · Messenger",
      quotes: [
        "Thật sự e mua hàng online rất nhiều nhưng chưa thấy shop nào tận tâm mà qtam khách hàng như bên mình",
      ],
    },
  ] satisfies Review[],
};

/** Khối ưu đãi + đồng hồ đếm ngược. Hạn ưu đãi: 23:59:59 mỗi ngày theo giờ Việt Nam. */
export const offer = {
  title: "Thời gian ưu đãi còn lại",
  body: "Tặng lá số & luận giải Bát Tự trị giá 500.000đ, miễn phí cho khách nhắn tin trong hôm nay.",
  units: ["Ngày", "Giờ", "Phút", "Giây"],
  cta: "Nhắn tin nhận tư vấn ngay",
  commitments: [
    { icon: "box", label: "Kiểm tra vòng trước khi thanh toán" },
    { icon: "truck", label: "Miễn phí vận chuyển toàn quốc" },
    { icon: "refund", label: "Hoàn tiền ngay nếu phát hiện đá giả" },
  ],
};

export const faq = {
  title: "Câu hỏi thường gặp",
  moreLabel: "Xem tất cả",
  initialCount: 5,
  items: [
    {
      id: "gio-sinh",
      q: "Không biết chính xác giờ sinh thì sao?",
      a: "Bạn vẫn có thể nhắn Pancharm. Giờ sinh giúp luận Bát Tự đầy đủ hơn; nếu chưa rõ, chuyên viên (trợ lý thầy cố vấn) sẽ trao đổi thêm với bạn về cách xử lý phù hợp trong hội thoại.",
    },
    {
      id: "phi-luan",
      q: "Luận Bát Tự có mất phí không?",
      a: "Hiện tại Pancharm đang tặng luận giải Bát Tự, bạn nhắn sớm kẻo hết chương trình nhé.",
    },
    {
      id: "giong-anh",
      q: "Vòng có giống mẫu trên ảnh không?",
      a: "Ảnh trên trang là các thiết kế thực tế Pancharm đã làm. Vì mỗi chiếc vòng được phối theo Bát Tự của từng người, loại đá, màu và tỷ lệ có thể khác ảnh mẫu. Pancharm sẽ gửi phương án thiết kế để bạn duyệt trước.",
    },
    {
      id: "kiem-dinh",
      q: "Đá có kiểm định không?",
      a: "Pancharm có hồ sơ kiểm định DOJILAB cho các mẫu đá/chất liệu áp dụng (ví dụ ngọc Jadeite tự nhiên, bạc Ag). Mỗi chứng thư chỉ xác nhận đúng mẫu được kiểm định; bạn có thể hỏi chuyên viên về hồ sơ của loại đá trong thiết kế của mình.",
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
      a: "Các mẫu vòng Pancharm có giá từ 299.000đ (bản dây titan) đến khoảng 6.300.000đ, đã gồm thuế và miễn phí vận chuyển. Giá cuối cùng phụ thuộc vào loại đá, chất liệu và phương án thiết kế; chuyên viên sẽ báo giá cụ thể sau khi bạn chọn phương án phù hợp.",
    },
  ] as { id: string; q: string; a: string; pending?: string }[],
};

export const finalCta = {
  title: "Bắt đầu hành trình cân bằng\nnăng lượng của riêng bạn",
  body: "Nhắn Pancharm để được tư vấn Bát Tự miễn phí và lựa chọn thiết kế phù hợp với mong muốn của bạn.",
  cta: "Nhận tư vấn Bát Tự miễn phí",
  stats: [
    { icon: "users", value: "1.000+", label: "Khách hàng tin tưởng" },
    { icon: "yinyang", value: "20+ năm", label: "Kinh nghiệm" },
    { icon: "shield", value: "100%", label: "Đá tự nhiên có kiểm định" },
  ],
};

export const sticky = { cta: "Nhắn Pancharm – Tư vấn miễn phí" };

/** Liên hệ lấy từ pancharm.vn (09/2026). */
export const footer = {
  contact: [
    { label: "Hotline", value: "0964 198 663", href: "tel:0964198663" },
    { label: "Email", value: "pancharmvn@gmail.com", href: "mailto:pancharmvn@gmail.com" },
    { label: "Địa chỉ", value: "Ngõ 79 An Dương Vương, Tây Hồ, Hà Nội" },
  ],
  pending: {
    legal: "Tên pháp nhân/đơn vị sở hữu và mã số doanh nghiệp.",
    policies: "Link trang Điều khoản và Chính sách bảo hành/đổi trả/hoàn tiền.",
  },
};
