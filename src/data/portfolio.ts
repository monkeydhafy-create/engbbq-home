export interface ProductItem {
  id: "loot" | "ziwei";
  domain: string;
  label: string;
  title: string;
  description: string;
  points: string[];
  href: string;
  cta: string;
  accent: "teal" | "orange";
  offlineNote?: {
    textBefore: string;
    zaloPhone: string;
    zaloHref: string;
    textAfter: string;
  };
}

export const PROFILE = {
  name: "ENGBBQ",
  role: "Fullstack & DevOps Engineer",
  headline: "Thiết kế kiến trúc, lập trình & vận hành sản phẩm từ hạ tầng đến giao diện.",
  bio: "Mình là kỹ sư Fullstack & DevOps, tập trung vào hệ thống thời gian thực, tối ưu hạ tầng và trải nghiệm tương tác trên trình duyệt. Trang cá nhân này lưu trữ các dự án mình trực tiếp thiết kế kiến trúc, phát triển và duy trì vận hành.",
  lootUrl: "https://loot.engbbq.me",
  tuviUrl: "https://tuvi.engbbq.me",
};

export const PRODUCTS: ProductItem[] = [
  {
    id: "loot",
    domain: "loot.engbbq.me",
    label: "Game Web 2D/2.5D",
    title: "Loot — Sinh Tồn & Săn Kho Báu",
    description:
      "Dự án game thế giới mở đa nền tảng chạy trực tiếp trên trình duyệt máy tính và điện thoại. Thiết kế hệ thống bản đồ Việt Nam & Nhật Bản, cơ chế săn vật phẩm quý hiếm, quản lý chỉ số sinh tồn và xây dựng dinh thự ven hồ.",
    points: [
      "Bản đồ Việt Nam & Nhật Bản phân tầng Vùng Xanh, Vàng, Đỏ",
      "Săn Đồ Đỏ, mở khóa két sắt, sắp xếp Balo lưới & né Cảnh sát",
      "240 ô đất xây 16 mẫu dinh thự ven hồ, Thú cưng & Đấu giá 24h",
    ],
    href: "https://loot.engbbq.me",
    cta: "Vào chơi tại loot.engbbq.me",
    accent: "teal",
  },
  {
    id: "ziwei",
    domain: "tuvi.engbbq.me",
    label: "Ứng dụng AI & Tử Vi",
    title: "Tử Vi Đẩu Số Toàn Thư AI",
    description:
      "Hệ thống lập lá số chuẩn Giờ Mặt Trời Thực (63 tỉnh thành), luận giải Bản Mệnh · Đại Hạn và so đôi Hợp Mệnh bằng AI theo trường phái Thiên Kỷ (Nghê Hải Hà) trên kho 8,77 triệu đoạn dữ liệu.",
    points: [
      "An đủ 14 Chính tinh, 12 cung, Tứ Hóa; xem Bản Mệnh · Đại Hạn · Lưu Niên & hỏi đáp AI theo từng cung vị",
      "Xem Hợp Mệnh (So đôi 2 lá số): đối chiếu cung Mệnh, Phu Thê & Ngũ Hành cho Tình Duyên · Gia Đạo · Hợp Tác",
      "2 chế độ đọc linh hoạt: Giảng giải chi tiết & Tóm tắt nhanh 60s (<300 từ)",
    ],
    href: "https://tuvi.engbbq.me",
    cta: "Truy cập tuvi.engbbq.me",
    accent: "orange",
    offlineNote: {
      textBefore: "Nếu vào web không được là do máy chủ đang tạm tắt — nhắn Zalo",
      zaloPhone: "0353933445",
      zaloHref: "https://zalo.me/0353933445",
      textAfter: "để yêu cầu mở và trải nghiệm.",
    },
  },
];