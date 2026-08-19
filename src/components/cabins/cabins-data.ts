import suite01 from "@/assets/gallery/zenova-suite-01.jpg.asset.json";
import suite02 from "@/assets/gallery/zenova-suite-02.jpg.asset.json";
import suite03 from "@/assets/gallery/zenova-suite-03.jpg.asset.json";
import deluxe01 from "@/assets/gallery/zenova-deluxe-01.jpg.asset.json";
import deluxe02 from "@/assets/gallery/zenova-deluxe-02.jpg.asset.json";
import standard01 from "@/assets/gallery/zenova-standard-01.jpg.asset.json";
import standard02 from "@/assets/gallery/zenova-standard-02.jpg.asset.json";
import standard03 from "@/assets/gallery/zenova-standard-03.jpg.asset.json";
import standard04 from "@/assets/gallery/zenova-standard-04.jpg.asset.json";
import bath01 from "@/assets/gallery/zenova-bath-01.jpg.asset.json";
import bath02 from "@/assets/gallery/zenova-bath-02.jpg.asset.json";
import corridor from "@/assets/gallery/zenova-corridor.jpg.asset.json";

export interface CabinType {
  id: string;
  nameVi: string;
  nameEn: string;
  descVi: string;
  descEn: string;
  area: string;
  view: string;
  hero: string;
  gallery: string[];
  amenitiesVi: string[];
  amenitiesEn: string[];
}

export const cabinTypes: CabinType[] = [
  {
    id: "suite",
    nameVi: "Zenova Suite",
    nameEn: "Zenova Suite",
    descVi:
      "Hạng phòng rộng nhất trên tàu với phòng khách riêng, cửa kính panorama ôm trọn vịnh và khu tắm thư giãn tách biệt. Không gian dành cho gia đình hoặc cặp đôi muốn sự riêng tư tuyệt đối.",
    descEn:
      "The most spacious accommodation aboard, with a separate living room, panoramic windows framing the bay and a dedicated bathing area. Designed for families or couples seeking absolute privacy.",
    area: "48 m²",
    view: "Panorama 180°",
    hero: suite01.url,
    gallery: [suite02.url, suite03.url, bath02.url],
    amenitiesVi: [
      "Phòng khách riêng",
      "Bồn tắm nhìn ra vịnh",
      "Giường King size",
      "Quản gia riêng 24/7",
      "Minibar cao cấp",
    ],
    amenitiesEn: [
      "Private living room",
      "Bay-view bathtub",
      "King size bed",
      "24/7 private butler",
      "Premium minibar",
    ],
  },
  {
    id: "deluxe",
    nameVi: "Deluxe Bay View",
    nameEn: "Deluxe Bay View",
    descVi:
      "Bố cục mở với vách kính lớn hướng thẳng ra vịnh, tông gỗ ấm và ánh sáng dịu. Cân bằng giữa sự rộng rãi và cảm giác ấm cúng cho hành trình hai đến ba ngày.",
    descEn:
      "An open layout with a full-height glass wall facing the bay, warm timber tones and soft lighting. A balance of space and intimacy for two- to three-day voyages.",
    area: "36 m²",
    view: "Hướng vịnh / Bay view",
    hero: deluxe01.url,
    gallery: [deluxe02.url, bath01.url],
    amenitiesVi: [
      "Cửa kính panorama",
      "Khu làm việc riêng",
      "Phòng tắm đá tự nhiên",
      "Ghế thư giãn bên cửa sổ",
    ],
    amenitiesEn: [
      "Panoramic glazing",
      "Dedicated work nook",
      "Natural stone bathroom",
      "Reading chair by the window",
    ],
  },
  {
    id: "standard",
    nameVi: "Ocean Cabin",
    nameEn: "Ocean Cabin",
    descVi:
      "Phòng tiêu chuẩn của Zenova với thiết kế tối giản, tận dụng tối đa ánh sáng tự nhiên. Đầy đủ tiện nghi cho khách lẻ và nhóm bạn.",
    descEn:
      "Zenova's signature cabin: a minimal design that makes the most of natural light. Fully equipped for solo travellers and groups of friends.",
    area: "28 m²",
    view: "Hướng biển / Sea view",
    hero: standard01.url,
    gallery: [standard02.url, standard03.url, standard04.url, corridor.url],
    amenitiesVi: [
      "Giường đôi hoặc hai giường đơn",
      "Smart TV & loa bluetooth",
      "Vòi sen áp lực cao",
      "Két an toàn điện tử",
    ],
    amenitiesEn: [
      "Double or twin beds",
      "Smart TV & bluetooth speaker",
      "Rain shower",
      "Electronic safe",
    ],
  },
];

export interface LayoutZone {
  labelVi: string;
  labelEn: string;
  /** Toạ độ % trong sơ đồ bố trí */
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface CabinDetail {
  capacityVi: string;
  capacityEn: string;
  bedVi: string;
  bedEn: string;
  deckVi: string;
  deckEn: string;
  highlightsVi: string[];
  highlightsEn: string[];
  layout: LayoutZone[];
}

export const cabinDetails: Record<string, CabinDetail> = {
  suite: {
    capacityVi: "2 người lớn + 2 trẻ em",
    capacityEn: "2 adults + 2 children",
    bedVi: "1 giường King + sofa bed",
    bedEn: "1 King bed + sofa bed",
    deckVi: "Tầng 4 – khu vực riêng tư",
    deckEn: "Deck 4 – private wing",
    highlightsVi: [
      "Phòng khách tách biệt với khu ngủ, phù hợp tiếp khách hoặc làm việc.",
      "Bồn tắm đặt sát cửa kính, ngắm vịnh khi hoàng hôn buông.",
      "Ban công riêng với ghế nằm và bàn trà ngoài trời.",
    ],
    highlightsEn: [
      "A living room fully separated from the sleeping area, ideal for hosting or working.",
      "A bathtub set against the glass wall, facing the bay at sunset.",
      "Private balcony with loungers and an outdoor tea table.",
    ],
    layout: [
      { labelVi: "Ban công", labelEn: "Balcony", x: 2, y: 2, w: 96, h: 18 },
      { labelVi: "Phòng khách", labelEn: "Living room", x: 2, y: 24, w: 54, h: 40 },
      { labelVi: "Phòng ngủ", labelEn: "Bedroom", x: 58, y: 24, w: 40, h: 40 },
      { labelVi: "Phòng tắm", labelEn: "Bathroom", x: 2, y: 68, w: 40, h: 30 },
      { labelVi: "Tủ đồ & lối vào", labelEn: "Wardrobe & entry", x: 44, y: 68, w: 54, h: 30 },
    ],
  },
  deluxe: {
    capacityVi: "2 người lớn + 1 trẻ em",
    capacityEn: "2 adults + 1 child",
    bedVi: "1 giường King hoặc 2 giường đơn",
    bedEn: "1 King bed or 2 twin beds",
    deckVi: "Tầng 3 – hướng vịnh",
    deckEn: "Deck 3 – bay facing",
    highlightsVi: [
      "Vách kính cao hết trần đưa toàn bộ mặt vịnh vào phòng.",
      "Góc làm việc riêng bên cửa sổ, đủ yên tĩnh cho một buổi sáng dài.",
      "Phòng tắm ốp đá tự nhiên với vòi sen áp lực cao.",
    ],
    highlightsEn: [
      "A full-height glass wall brings the entire bay into the room.",
      "A dedicated work nook by the window, quiet enough for a long morning.",
      "Natural stone bathroom with a high-pressure rain shower.",
    ],
    layout: [
      { labelVi: "Ban công", labelEn: "Balcony", x: 2, y: 2, w: 96, h: 16 },
      { labelVi: "Khu ngủ", labelEn: "Sleeping area", x: 2, y: 22, w: 62, h: 46 },
      { labelVi: "Góc làm việc", labelEn: "Work nook", x: 66, y: 22, w: 32, h: 46 },
      { labelVi: "Phòng tắm", labelEn: "Bathroom", x: 2, y: 72, w: 46, h: 26 },
      { labelVi: "Lối vào", labelEn: "Entry", x: 50, y: 72, w: 48, h: 26 },
    ],
  },
  standard: {
    capacityVi: "2 người lớn",
    capacityEn: "2 adults",
    bedVi: "1 giường đôi hoặc 2 giường đơn",
    bedEn: "1 double bed or 2 twin beds",
    deckVi: "Tầng 2 – hướng biển",
    deckEn: "Deck 2 – sea facing",
    highlightsVi: [
      "Thiết kế tối giản, tối ưu ánh sáng tự nhiên suốt cả ngày.",
      "Cửa sổ lớn hướng biển ngay cạnh đầu giường.",
      "Đầy đủ tiện nghi cho khách lẻ và nhóm bạn đi cùng nhau.",
    ],
    highlightsEn: [
      "A minimal design that maximises natural light all day long.",
      "A large sea-facing window right beside the bed.",
      "Fully equipped for solo travellers and groups of friends.",
    ],
    layout: [
      { labelVi: "Cửa sổ hướng biển", labelEn: "Sea-view window", x: 2, y: 2, w: 96, h: 12 },
      { labelVi: "Khu ngủ", labelEn: "Sleeping area", x: 2, y: 18, w: 96, h: 48 },
      { labelVi: "Phòng tắm", labelEn: "Bathroom", x: 2, y: 70, w: 44, h: 28 },
      { labelVi: "Tủ đồ & lối vào", labelEn: "Wardrobe & entry", x: 48, y: 70, w: 50, h: 28 },
    ],
  },
};
