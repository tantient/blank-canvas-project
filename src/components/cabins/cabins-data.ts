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

export const TOTAL_CABINS = 44;

export interface CabinType {
  id: string;
  nameVi: string;
  nameEn: string;
  descVi: string;
  descEn: string;
  area: string;
  view: string;
  /** Số phòng thuộc hạng này trên tàu */
  roomCount: number;
  /** Sức chứa tối đa (khách) */
  maxGuests: number;
  bedVi: string;
  bedEn: string;
  hero: string;
  gallery: string[];
  amenitiesVi: string[];
  amenitiesEn: string[];
}

const BED_VI = "1 giường đôi hoặc 2 giường đơn";
const BED_EN = "1 double bed or 2 twin beds";

export const cabinTypes: CabinType[] = [
  {
    id: "owners-suite",
    nameVi: "Owner's Suite",
    nameEn: "Owner's Suite",
    descVi:
      "Hạng phòng lớn nhất trên tàu với phòng khách riêng, cửa kính panorama ôm trọn vịnh và khu tắm thư giãn tách biệt. Không gian dành cho gia đình hoặc cặp đôi muốn sự riêng tư tuyệt đối.",
    descEn:
      "The largest accommodation aboard, with a separate living room, panoramic glazing framing the bay and a dedicated bathing area. Designed for families or couples seeking absolute privacy.",
    area: "80 m²",
    view: "Panorama 180°",
    roomCount: 2,
    maxGuests: 4,
    bedVi: BED_VI,
    bedEn: BED_EN,
    hero: suite01.url,
    gallery: [suite02.url, bath02.url],
    amenitiesVi: [
      "Phòng khách riêng",
      "Bồn tắm nhìn ra vịnh",
      "Ban công riêng",
      "Quản gia riêng 24/7",
      "Minibar cao cấp",
    ],
    amenitiesEn: [
      "Private living room",
      "Bay-view bathtub",
      "Private balcony",
      "24/7 private butler",
      "Premium minibar",
    ],
  },
  {
    id: "grand-suite",
    nameVi: "Grand Suite",
    nameEn: "Grand Suite",
    descVi:
      "Không gian rộng rãi với khu tiếp khách nhỏ, vách kính cao hết trần hướng thẳng ra vịnh và phòng tắm riêng biệt. Cân bằng giữa sự sang trọng và cảm giác ấm cúng.",
    descEn:
      "A generous layout with a small lounge corner, full-height glazing facing the bay and a separate bathroom. A balance of luxury and intimacy.",
    area: "58 – 62 m²",
    view: "Hướng vịnh / Bay view",
    roomCount: 4,
    maxGuests: 4,
    bedVi: BED_VI,
    bedEn: BED_EN,
    hero: suite03.url,
    gallery: [suite02.url, bath02.url],
    amenitiesVi: [
      "Khu tiếp khách riêng",
      "Cửa kính panorama",
      "Phòng tắm đá tự nhiên",
      "Ghế thư giãn bên cửa sổ",
      "Minibar",
    ],
    amenitiesEn: [
      "Private lounge corner",
      "Panoramic glazing",
      "Natural stone bathroom",
      "Reading chair by the window",
      "Minibar",
    ],
  },
  {
    id: "junior-suite-a",
    nameVi: "Junior Suite (loại A)",
    nameEn: "Junior Suite (type A)",
    descVi:
      "Bố cục mở với vách kính lớn hướng biển, tông gỗ ấm và ánh sáng dịu. Phù hợp cho gia đình nhỏ hoặc nhóm bạn trong hành trình 2–3 ngày.",
    descEn:
      "An open layout with a large sea-facing window, warm timber tones and soft lighting. Ideal for small families or groups of friends on two- to three-day voyages.",
    area: "30 – 33 m²",
    view: "Hướng biển / Sea view",
    roomCount: 13,
    maxGuests: 4,
    bedVi: BED_VI,
    bedEn: BED_EN,
    hero: deluxe01.url,
    gallery: [deluxe02.url, bath01.url],
    amenitiesVi: [
      "Cửa sổ lớn hướng biển",
      "Góc làm việc riêng",
      "Vòi sen áp lực cao",
      "Smart TV & loa bluetooth",
    ],
    amenitiesEn: [
      "Large sea-facing window",
      "Dedicated work nook",
      "Rain shower",
      "Smart TV & bluetooth speaker",
    ],
  },
  {
    id: "junior-suite-b",
    nameVi: "Junior Suite (loại B)",
    nameEn: "Junior Suite (type B)",
    descVi:
      "Thiết kế tối giản, tận dụng tối đa ánh sáng tự nhiên với đầy đủ tiện nghi tiêu chuẩn Zenova. Lựa chọn phổ biến nhất trên tàu.",
    descEn:
      "A minimal design that makes the most of natural light, with the full set of Zenova standard amenities. The most common cabin aboard.",
    area: "30 – 35 m²",
    view: "Hướng biển / Sea view",
    roomCount: 25,
    maxGuests: 3,
    bedVi: BED_VI,
    bedEn: BED_EN,
    hero: standard01.url,
    gallery: [standard02.url, standard03.url, standard04.url, corridor.url],
    amenitiesVi: [
      "Cửa sổ hướng biển",
      "Smart TV & loa bluetooth",
      "Vòi sen áp lực cao",
      "Két an toàn điện tử",
    ],
    amenitiesEn: [
      "Sea-facing window",
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
  "owners-suite": {
    capacityVi: "Tối đa 4 khách",
    capacityEn: "Up to 4 guests",
    bedVi: BED_VI,
    bedEn: BED_EN,
    deckVi: "Tầng cao – khu vực riêng tư",
    deckEn: "Upper deck – private wing",
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
  "grand-suite": {
    capacityVi: "Tối đa 4 khách",
    capacityEn: "Up to 4 guests",
    bedVi: BED_VI,
    bedEn: BED_EN,
    deckVi: "Tầng giữa – hướng vịnh",
    deckEn: "Mid deck – bay facing",
    highlightsVi: [
      "Vách kính cao hết trần đưa toàn bộ mặt vịnh vào phòng.",
      "Khu tiếp khách nhỏ tách khỏi khu ngủ.",
      "Phòng tắm ốp đá tự nhiên với vòi sen áp lực cao.",
    ],
    highlightsEn: [
      "A full-height glass wall brings the entire bay into the room.",
      "A small lounge corner set apart from the sleeping area.",
      "Natural stone bathroom with a high-pressure rain shower.",
    ],
    layout: [
      { labelVi: "Ban công", labelEn: "Balcony", x: 2, y: 2, w: 96, h: 16 },
      { labelVi: "Khu ngủ", labelEn: "Sleeping area", x: 2, y: 22, w: 60, h: 46 },
      { labelVi: "Khu tiếp khách", labelEn: "Lounge corner", x: 64, y: 22, w: 34, h: 46 },
      { labelVi: "Phòng tắm", labelEn: "Bathroom", x: 2, y: 72, w: 46, h: 26 },
      { labelVi: "Lối vào", labelEn: "Entry", x: 50, y: 72, w: 48, h: 26 },
    ],
  },
  "junior-suite-a": {
    capacityVi: "Tối đa 4 khách",
    capacityEn: "Up to 4 guests",
    bedVi: BED_VI,
    bedEn: BED_EN,
    deckVi: "Hướng biển",
    deckEn: "Sea facing",
    highlightsVi: [
      "Cửa sổ lớn hướng biển ngay cạnh khu ngủ.",
      "Góc làm việc riêng bên cửa sổ, đủ yên tĩnh cho một buổi sáng dài.",
      "Bố cục mở, tối ưu diện tích cho gia đình nhỏ.",
    ],
    highlightsEn: [
      "A large sea-facing window right beside the sleeping area.",
      "A dedicated work nook by the window, quiet enough for a long morning.",
      "An open layout that makes the most of the space for small families.",
    ],
    layout: [
      { labelVi: "Cửa sổ hướng biển", labelEn: "Sea-view window", x: 2, y: 2, w: 96, h: 12 },
      { labelVi: "Khu ngủ", labelEn: "Sleeping area", x: 2, y: 18, w: 62, h: 48 },
      { labelVi: "Góc làm việc", labelEn: "Work nook", x: 66, y: 18, w: 32, h: 48 },
      { labelVi: "Phòng tắm", labelEn: "Bathroom", x: 2, y: 70, w: 44, h: 28 },
      { labelVi: "Tủ đồ & lối vào", labelEn: "Wardrobe & entry", x: 48, y: 70, w: 50, h: 28 },
    ],
  },
  "junior-suite-b": {
    capacityVi: "Tối đa 3 khách",
    capacityEn: "Up to 3 guests",
    bedVi: BED_VI,
    bedEn: BED_EN,
    deckVi: "Hướng biển",
    deckEn: "Sea facing",
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
