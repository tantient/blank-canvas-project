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
