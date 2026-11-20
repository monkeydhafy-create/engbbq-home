const GAME_URL = "https://loot.engbbq.me";

const ROUTES = {
  "/": renderHome,
  "/features": renderFeatures,
  "/guide": renderGuide,
};

function renderHome() {
  return `
    <section class="hero-card">
      <div class="hero-pill">🟢 Máy chủ Thế Giới Mở đang hoạt động • Đồng bộ Realtime</div>
      <h1 class="hero-title">
        Chào mừng đến với <span class="highlight">ENGBBQ</span><br />
        Săn Kho Báu &amp; Sinh Tồn 2D
      </h1>
      <p class="hero-desc">
        Khám phá thành phố, công viên sinh thái và sân vận động; mở rương báu vật,
        mua đất ven hồ xây dựng dinh thự, triệu hồi thú cưng Hạng S và giao dịch tại Nhà Đấu Giá liên server.
      </p>
      <div class="hero-actions">
        <a href="${GAME_URL}" class="btn-hero-primary" target="_blank" rel="noopener noreferrer">
          🎮 Chơi Game Sinh Tồn (loot.engbbq.me) ▸
        </a>
        <a href="#/features" class="btn-hero-secondary" data-route="/features">
          ✨ Xem Tính Năng Nổi Bật
        </a>
      </div>

      <div class="quick-stats">
        <div class="stat-box">
          <div class="stat-val">🗺️ 2 Bản Đồ Lớn</div>
          <div class="stat-lbl">Việt Nam &amp; Nhật Bản với khu Vùng Xanh, Vùng Vàng, Vùng Đỏ</div>
        </div>
        <div class="stat-box">
          <div class="stat-val">🏰 Khu Biệt Thự Ven Hồ</div>
          <div class="stat-lbl">240 ô đất tự chọn, 16 mẫu dinh thự &amp; hiển thị cả khi offline</div>
        </div>
        <div class="stat-box">
          <div class="stat-val">🐾 Gacha Thú Cưng</div>
          <div class="stat-lbl">999🪙/lượt • Triệu hồi sao băng &amp; Hào quang Pet Hạng A / S</div>
        </div>
      </div>
    </section>
  `;
}

function renderFeatures() {
  const items = [
    {
      icon: "💎",
      title: "Săn Kho Báu & Giải Đố",
      desc: "Lục tìm vật phẩm từ thường đến Đồ Đỏ quý hiếm, mở khóa két sắt Hoàng Gia và tối ưu Balo lưới chiến thuật.",
    },
    {
      icon: "🏞️",
      title: "Bất Động Sản & Dinh Thự",
      desc: "Mua từng ô đất 1×1 ven hồ, ghép cụm xây dinh thự 1×1 đến 4×4, lưu trữ kho vô cực và trưng bày bảo vật.",
    },
    {
      icon: "🐾",
      title: "Thú Cưng Đồng Hành",
      desc: "Triệu hồi thú cưng Hạng C → S với kỹ năng đánh hơi rương báu, cảnh báo cảnh sát và cộng chỉ số sinh tồn.",
    },
    {
      icon: "⚖️",
      title: "Nhà Đấu Giá & Cloud Sync",
      desc: "Treo bán vật phẩm 24h giữa các người chơi và đồng bộ tiến trình an toàn qua tài khoản Cloud.",
    },
  ];

  return `
    <div class="section-head">
      <h1 class="section-title">✨ Tính Năng Thế Giới Mở</h1>
      <p class="section-sub">Toàn bộ trải nghiệm tại <a href="${GAME_URL}" target="_blank" rel="noopener noreferrer" style="color:#fde047;font-weight:700;">loot.engbbq.me</a></p>
    </div>
    <div class="cards-grid">
      ${items
        .map(
          (it) => `
        <article class="feature-card">
          <div class="feature-icon">${it.icon}</div>
          <h2 class="feature-title">${it.title}</h2>
          <p class="feature-desc">${it.desc}</p>
        </article>
      `,
        )
        .join("")}
    </div>
    <div style="margin-top:28px;text-align:center;">
      <a href="${GAME_URL}" class="btn-hero-primary" target="_blank" rel="noopener noreferrer">
        🚀 Mở Game Ngay (loot.engbbq.me)
      </a>
    </div>
  `;
}

function renderGuide() {
  const steps = [
    {
      n: 1,
      title: "Truy cập vào game tại loot.engbbq.me",
      desc: "Chơi trực tiếp trên trình duyệt PC hoặc Mobile, không cần cài đặt.",
    },
    {
      n: 2,
      title: "Đăng nhập hoặc Tạo tài khoản Cloud (☰ → Tài khoản)",
      desc: "Lưu giữ an toàn toàn bộ tiền vàng, balo, thú cưng, đất và dinh thự khi đổi thiết bị.",
    },
    {
      n: 3,
      title: "Săn đồ, mua đất ven hồ & triệu hồi thú cưng",
      desc: "Tìm rương ở Công viên & Sân vận động, bán đồ kiếm vàng, mua đất xây dinh thự và thử vận may tại Nhà Nhận Nuôi.",
    },
  ];

  return `
    <div class="section-head">
      <h1 class="section-title">📖 Hướng Dẫn Nhanh Tân Thủ</h1>
      <p class="section-sub">3 bước đơn giản để bắt đầu hành trình sinh tồn.</p>
    </div>
    <div class="guide-list">
      ${steps
        .map(
          (s) => `
        <div class="guide-step">
          <span class="guide-num">${s.n}</span>
          <div>
            <h2 class="feature-title">${s.title}</h2>
            <p class="feature-desc">${s.desc}</p>
          </div>
        </div>
      `,
        )
        .join("")}
    </div>
    <div style="margin-top:28px;text-align:center;">
      <a href="${GAME_URL}" class="btn-hero-primary" target="_blank" rel="noopener noreferrer">
        🎮 Vào Chơi Game Sinh Tồn Ngay
      </a>
    </div>
  `;
}

function getRoute() {
  const raw = window.location.hash.replace(/^#/, "") || "/";
  return ROUTES[raw] ? raw : "/";
}

function renderApp() {
  const route = getRoute();
  const root = document.getElementById("app-root");
  if (!root) return;

  root.innerHTML = ROUTES[route]();
  root.style.animation = "none";
  void root.offsetWidth;
  root.style.animation = "";

  document.querySelectorAll(".nav-link").forEach((el) => {
    el.classList.toggle("is-active", el.getAttribute("data-route") === route);
  });
}

window.addEventListener("hashchange", renderApp);
window.addEventListener("DOMContentLoaded", renderApp);
renderApp();
