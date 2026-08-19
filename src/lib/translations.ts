export type Lang = "vi" | "en";

const translations = {
  vi: {
    nav: {
      about: "Giới thiệu",
      cabins: "Phòng nghỉ",
      services: "Dịch vụ",
      gallery: "Thư viện ảnh",
      itineraries: "Hải trình",
      offers: "Ưu đãi",
      quote: "Nhận báo giá",
      book: "Đặt phòng",
    },
    hero: {
      tagline: "Du thuyền 6 sao tại vịnh Hạ Long",
      title: "ZENOVA CRUISE",
      subtitle:
        "Tĩnh lặng giữa biển trời. Trải nghiệm đẳng cấp giữa kỳ quan thiên nhiên.",
      cta: "Nhận báo giá ngay",
      scroll: "Cuộn xuống",
    },
    about: {
      label: "VỀ ZENOVA",
      title: "Tinh hoa nghỉ dưỡng trên vịnh",
      body: "Zenova Cruise mang đến không gian riêng tư, dịch vụ cá nhân hóa và hành trình khám phá vịnh Hạ Long – Lan Hạ theo phong cách 6 sao. Mỗi khoảnh khắc trên tàu đều được thiết kế để bạn tìm lại sự cân bằng và phiêu lưu theo cách của riêng mình.",
      features: [
        { title: "40 suite hướng biển", desc: "Ban công riêng, tầm nhìn 270°" },
        { title: "Ẩm thực 5 sao", desc: "Thực đơn fusion theo ngày" },
        { title: "Spa & wellness", desc: "Liệu trình chăm sóc toàn diện" },
        { title: "Dịch vụ 24/7", desc: "Quản gia riêng trên tàu" },
      ],
      values: {
        label: "GIÁ TRỊ CỐT LÕI",
        title: "Lấy khách làm trung tâm",
        items: [
          { title: "Yên tĩnh", desc: "Không gian và nhịp điệu được thiết kế để bạn thực sự thư giãn." },
          { title: "Chu đáo", desc: "Mỗi yêu cầu nhỏ đều được ghi nhận và đáp ứng kịp thời." },
          { title: "Bản địa", desc: "Ẩm thực, trị liệu và trải nghiệm gắn liền với văn hóa vịnh." },
          { title: "Bền vững", desc: "Vận hành thân thiện với hệ sinh thái biển đảo." },
        ],
      },
    },
    gallery: {
      label: "KHÔNG GIAN",
      title: "Zenova qua từng góc nhìn",
      subtitle: "Từng chi tiết được chuẩn bị cho kỳ nghỉ hoàn hảo.",
      captions: ["Suite hướng biển", "Nhà hàng fine-dining", "Sundeck & hồ bơi"],
    },
    form: {
      label: "ĐĂNG KÝ",
      title: "Nhận báo giá nhanh",
      subtitle: "Để lại thông tin, đội ngũ tư vấn sẽ liên hệ trong 24 giờ.",
      name: "Họ tên",
      phone: "Số điện thoại",
      email: "Email",
      date: "Ngày dự kiến",
      message: "Ghi chú / Yêu cầu đặc biệt",
      submit: "Gửi yêu cầu",
      success: "Đã gửi yêu cầu! Zenova sẽ liên hệ bạn sớm.",
    },
    itineraries: {
      label: "HẢI TRÌNH",
      title: "Chọn hành trình của bạn",
      subtitle: "Từ chuyến đi ngắn ngày đến hành trình khám phá sâu hơn giữa vịnh Hạ Long – Lan Hạ.",
      duration: "Thời lượng",
      includes: "Bao gồm",
      excludes: "Không bao gồm",
      highlights: "Điểm nhấn",
      cta: "Tư vấn hải trình",
    },
    offers: {
      label: "ƯU ĐÃI",
      title: "Các gói đặc biệt đang mở",
      subtitle: "Những ưu đãi được cập nhật theo mùa, giúp bạn tận hưởng Zenova với giá trị tốt nhất.",
      terms: "Điều kiện",
      cta: "Nhận ưu đãi",
    },
    footer: {
      rights: "© 2026 Zenova Cruise. All rights reserved.",
      tagline: "HA LONG BAY · LAN HA BAY",
      contact: ["+84 902 000 000", "booking@zenovacruise.com", "Vịnh Hạ Long · Lan Hạ, Việt Nam"],
    },
  },
  en: {
    nav: {
      about: "About",
      cabins: "Cabins",
      services: "Services",
      gallery: "Gallery",
      itineraries: "Itineraries",
      offers: "Offers",
      quote: "Get a quote",
      book: "Book now",
    },
    hero: {
      tagline: "Six-star cruise in Ha Long Bay",
      title: "ZENOVA CRUISE",
      subtitle:
        "Stillness on the sea. A luxury journey through a natural wonder.",
      cta: "Get a quote now",
      scroll: "Scroll",
    },
    about: {
      label: "ABOUT ZENOVA",
      title: "The essence of bay-side luxury",
      body: "Zenova Cruise offers private spaces, personalized service and curated voyages across Ha Long Bay and Lan Ha Bay in true six-star style. Every moment aboard is designed to help you rediscover balance and adventure on your own terms.",
      features: [
        { title: "40 ocean-view suites", desc: "Private balcony, 270° vistas" },
        { title: "Five-star dining", desc: "Daily fusion menus" },
        { title: "Spa & wellness", desc: "Holistic treatments" },
        { title: "24/7 service", desc: "Dedicated onboard butler" },
      ],
      values: {
        label: "CORE VALUES",
        title: "Centered on our guests",
        items: [
          { title: "Quiet", desc: "Spaces and rhythms designed for genuine relaxation." },
          { title: "Attentive", desc: "Every small request is noticed and handled promptly." },
          { title: "Local", desc: "Dining, therapies and experiences rooted in bay culture." },
          { title: "Sustainable", desc: "Operations that respect the sea-and-island ecosystem." },
        ],
      },
    },
    gallery: {
      label: "SPACES",
      title: "Zenova in every view",
      subtitle: "Every detail is prepared for a perfect stay.",
      captions: ["Ocean-view suite", "Fine-dining restaurant", "Sundeck & pool"],
    },
    form: {
      label: "QUOTE",
      title: "Request a quick quote",
      subtitle: "Leave your details and our concierge will reach out within 24 hours.",
      name: "Full name",
      phone: "Phone number",
      email: "Email",
      date: "Expected date",
      message: "Notes / Special requests",
      submit: "Send request",
      success: "Request sent! Zenova will contact you soon.",
    },
    itineraries: {
      label: "ITINERARIES",
      title: "Choose your voyage",
      subtitle: "From a short escape to a deeper exploration of Ha Long Bay and Lan Ha Bay.",
      duration: "Duration",
      includes: "Includes",
      excludes: "Excludes",
      highlights: "Highlights",
      cta: "Tailor an itinerary",
    },
    offers: {
      label: "OFFERS",
      title: "Special packages now open",
      subtitle: "Seasonal offers updated regularly so you can experience Zenova at the best value.",
      terms: "Terms",
      cta: "Claim offer",
    },
    footer: {
      rights: "© 2026 Zenova Cruise. All rights reserved.",
      tagline: "HA LONG BAY · LAN HA BAY",
      contact: ["+84 902 000 000", "booking@zenovacruise.com", "Ha Long Bay · Lan Ha, Vietnam"],
    },
  },
};

export function getT(lang: Lang) {
  return translations[lang] ?? translations.vi;
}
