import img0 from "@/assets/gallery/zenova-bath-01.jpg.asset.json";
import img1 from "@/assets/gallery/zenova-bath-02.jpg.asset.json";
import img2 from "@/assets/gallery/zenova-corridor.jpg.asset.json";
import img3 from "@/assets/gallery/zenova-deck-sunset-01.jpg.asset.json";
import img4 from "@/assets/gallery/zenova-deck-sunset-02.jpg.asset.json";
import img5 from "@/assets/gallery/zenova-deck-terrace.jpg.asset.json";
import img6 from "@/assets/gallery/zenova-deluxe-01.jpg.asset.json";
import img7 from "@/assets/gallery/zenova-deluxe-02.jpg.asset.json";
import img8 from "@/assets/gallery/zenova-dining-main-01.jpg.asset.json";
import img9 from "@/assets/gallery/zenova-dining-main-02.jpg.asset.json";
import img10 from "@/assets/gallery/zenova-dining-outdoor-01.jpg.asset.json";
import img11 from "@/assets/gallery/zenova-dining-outdoor-02.jpg.asset.json";
import img12 from "@/assets/gallery/zenova-dining-panorama-01.jpg.asset.json";
import img13 from "@/assets/gallery/zenova-dining-panorama-02.jpg.asset.json";
import img14 from "@/assets/gallery/zenova-ent-business.jpg.asset.json";
import img15 from "@/assets/gallery/zenova-ent-cigar-01.jpg.asset.json";
import img16 from "@/assets/gallery/zenova-ent-cigar-02.jpg.asset.json";
import img17 from "@/assets/gallery/zenova-ent-family-01.jpg.asset.json";
import img18 from "@/assets/gallery/zenova-ent-family-02.jpg.asset.json";
import img19 from "@/assets/gallery/zenova-ent-karaoke-01.jpg.asset.json";
import img20 from "@/assets/gallery/zenova-ent-karaoke-02.jpg.asset.json";
import img21 from "@/assets/gallery/zenova-ent-kids-01.jpg.asset.json";
import img22 from "@/assets/gallery/zenova-ent-kids-02.jpg.asset.json";
import img23 from "@/assets/gallery/zenova-ent-lounge.jpg.asset.json";
import img24 from "@/assets/gallery/zenova-ent-poker-01.jpg.asset.json";
import img25 from "@/assets/gallery/zenova-exterior-01.jpg.asset.json";
import img26 from "@/assets/gallery/zenova-exterior-02.jpg.asset.json";
import img27 from "@/assets/gallery/zenova-exterior-03.jpg.asset.json";
import img28 from "@/assets/gallery/zenova-exterior-04.jpg.asset.json";
import img29 from "@/assets/gallery/zenova-exterior-05.jpg.asset.json";
import img30 from "@/assets/gallery/zenova-exterior-06.jpg.asset.json";
import img31 from "@/assets/gallery/zenova-public-jacuzzi.jpg.asset.json";
import img32 from "@/assets/gallery/zenova-public-lobby-01.jpg.asset.json";
import img33 from "@/assets/gallery/zenova-public-lobby-02.jpg.asset.json";
import img34 from "@/assets/gallery/zenova-public-lounge.jpg.asset.json";
import img35 from "@/assets/gallery/zenova-public-pool.jpg.asset.json";
import img36 from "@/assets/gallery/zenova-public-reception.jpg.asset.json";
import img37 from "@/assets/gallery/zenova-public-spa-reception.jpg.asset.json";
import img38 from "@/assets/gallery/zenova-public-stair.jpg.asset.json";
import img39 from "@/assets/gallery/zenova-spa-foot.jpg.asset.json";
import img40 from "@/assets/gallery/zenova-spa-room-01.jpg.asset.json";
import img41 from "@/assets/gallery/zenova-spa-room-02.jpg.asset.json";
import img42 from "@/assets/gallery/zenova-standard-01.jpg.asset.json";
import img43 from "@/assets/gallery/zenova-standard-02.jpg.asset.json";
import img44 from "@/assets/gallery/zenova-standard-03.jpg.asset.json";
import img45 from "@/assets/gallery/zenova-standard-04.jpg.asset.json";
import img46 from "@/assets/gallery/zenova-suite-01.jpg.asset.json";
import img47 from "@/assets/gallery/zenova-suite-02.jpg.asset.json";
import img48 from "@/assets/gallery/zenova-suite-03.jpg.asset.json";

export type GalleryCategory =
  | "exterior"
  | "public"
  | "dining"
  | "entertainment"
  | "wellness"
  | "deck"
  | "cabins";

export interface GalleryImage {
  id: string;
  src: string;
  category: GalleryCategory;
  titleVi: string;
  titleEn: string;
}

export const galleryImages: GalleryImage[] = [
  { id: "zenova-bath-01", src: img0.url, category: "cabins", titleVi: "Phòng nghỉ", titleEn: "Cabins" },
  { id: "zenova-bath-02", src: img1.url, category: "cabins", titleVi: "Phòng nghỉ", titleEn: "Cabins" },
  { id: "zenova-corridor", src: img2.url, category: "cabins", titleVi: "Phòng nghỉ", titleEn: "Cabins" },
  { id: "zenova-deck-sunset-01", src: img3.url, category: "deck", titleVi: "Boong & sundeck", titleEn: "Decks & sundeck" },
  { id: "zenova-deck-sunset-02", src: img4.url, category: "deck", titleVi: "Boong & sundeck", titleEn: "Decks & sundeck" },
  { id: "zenova-deck-terrace", src: img5.url, category: "deck", titleVi: "Boong & sundeck", titleEn: "Decks & sundeck" },
  { id: "zenova-deluxe-01", src: img6.url, category: "cabins", titleVi: "Phòng nghỉ", titleEn: "Cabins" },
  { id: "zenova-deluxe-02", src: img7.url, category: "cabins", titleVi: "Phòng nghỉ", titleEn: "Cabins" },
  { id: "zenova-dining-main-01", src: img8.url, category: "dining", titleVi: "Nhà hàng & ẩm thực", titleEn: "Dining" },
  { id: "zenova-dining-main-02", src: img9.url, category: "dining", titleVi: "Nhà hàng & ẩm thực", titleEn: "Dining" },
  { id: "zenova-dining-outdoor-01", src: img10.url, category: "dining", titleVi: "Nhà hàng & ẩm thực", titleEn: "Dining" },
  { id: "zenova-dining-outdoor-02", src: img11.url, category: "dining", titleVi: "Nhà hàng & ẩm thực", titleEn: "Dining" },
  { id: "zenova-dining-panorama-01", src: img12.url, category: "dining", titleVi: "Nhà hàng & ẩm thực", titleEn: "Dining" },
  { id: "zenova-dining-panorama-02", src: img13.url, category: "dining", titleVi: "Nhà hàng & ẩm thực", titleEn: "Dining" },
  { id: "zenova-ent-business", src: img14.url, category: "entertainment", titleVi: "Giải trí", titleEn: "Entertainment" },
  { id: "zenova-ent-cigar-01", src: img15.url, category: "entertainment", titleVi: "Giải trí", titleEn: "Entertainment" },
  { id: "zenova-ent-cigar-02", src: img16.url, category: "entertainment", titleVi: "Giải trí", titleEn: "Entertainment" },
  { id: "zenova-ent-family-01", src: img17.url, category: "entertainment", titleVi: "Giải trí", titleEn: "Entertainment" },
  { id: "zenova-ent-family-02", src: img18.url, category: "entertainment", titleVi: "Giải trí", titleEn: "Entertainment" },
  { id: "zenova-ent-karaoke-01", src: img19.url, category: "entertainment", titleVi: "Giải trí", titleEn: "Entertainment" },
  { id: "zenova-ent-karaoke-02", src: img20.url, category: "entertainment", titleVi: "Giải trí", titleEn: "Entertainment" },
  { id: "zenova-ent-kids-01", src: img21.url, category: "entertainment", titleVi: "Giải trí", titleEn: "Entertainment" },
  { id: "zenova-ent-kids-02", src: img22.url, category: "entertainment", titleVi: "Giải trí", titleEn: "Entertainment" },
  { id: "zenova-ent-lounge", src: img23.url, category: "entertainment", titleVi: "Giải trí", titleEn: "Entertainment" },
  { id: "zenova-ent-poker-01", src: img24.url, category: "entertainment", titleVi: "Giải trí", titleEn: "Entertainment" },
  { id: "zenova-exterior-01", src: img25.url, category: "exterior", titleVi: "Ngoại thất du thuyền", titleEn: "Cruise exterior" },
  { id: "zenova-exterior-02", src: img26.url, category: "exterior", titleVi: "Ngoại thất du thuyền", titleEn: "Cruise exterior" },
  { id: "zenova-exterior-03", src: img27.url, category: "exterior", titleVi: "Ngoại thất du thuyền", titleEn: "Cruise exterior" },
  { id: "zenova-exterior-04", src: img28.url, category: "exterior", titleVi: "Ngoại thất du thuyền", titleEn: "Cruise exterior" },
  { id: "zenova-exterior-05", src: img29.url, category: "exterior", titleVi: "Ngoại thất du thuyền", titleEn: "Cruise exterior" },
  { id: "zenova-exterior-06", src: img30.url, category: "exterior", titleVi: "Ngoại thất du thuyền", titleEn: "Cruise exterior" },
  { id: "zenova-public-jacuzzi", src: img31.url, category: "public", titleVi: "Không gian chung", titleEn: "Public spaces" },
  { id: "zenova-public-lobby-01", src: img32.url, category: "public", titleVi: "Không gian chung", titleEn: "Public spaces" },
  { id: "zenova-public-lobby-02", src: img33.url, category: "public", titleVi: "Không gian chung", titleEn: "Public spaces" },
  { id: "zenova-public-lounge", src: img34.url, category: "public", titleVi: "Không gian chung", titleEn: "Public spaces" },
  { id: "zenova-public-pool", src: img35.url, category: "public", titleVi: "Không gian chung", titleEn: "Public spaces" },
  { id: "zenova-public-reception", src: img36.url, category: "public", titleVi: "Không gian chung", titleEn: "Public spaces" },
  { id: "zenova-public-spa-reception", src: img37.url, category: "public", titleVi: "Không gian chung", titleEn: "Public spaces" },
  { id: "zenova-public-stair", src: img38.url, category: "public", titleVi: "Không gian chung", titleEn: "Public spaces" },
  { id: "zenova-spa-foot", src: img39.url, category: "wellness", titleVi: "Spa & wellness", titleEn: "Spa & wellness" },
  { id: "zenova-spa-room-01", src: img40.url, category: "wellness", titleVi: "Spa & wellness", titleEn: "Spa & wellness" },
  { id: "zenova-spa-room-02", src: img41.url, category: "wellness", titleVi: "Spa & wellness", titleEn: "Spa & wellness" },
  { id: "zenova-standard-01", src: img42.url, category: "cabins", titleVi: "Phòng nghỉ", titleEn: "Cabins" },
  { id: "zenova-standard-02", src: img43.url, category: "cabins", titleVi: "Phòng nghỉ", titleEn: "Cabins" },
  { id: "zenova-standard-03", src: img44.url, category: "cabins", titleVi: "Phòng nghỉ", titleEn: "Cabins" },
  { id: "zenova-standard-04", src: img45.url, category: "cabins", titleVi: "Phòng nghỉ", titleEn: "Cabins" },
  { id: "zenova-suite-01", src: img46.url, category: "cabins", titleVi: "Phòng nghỉ", titleEn: "Cabins" },
  { id: "zenova-suite-02", src: img47.url, category: "cabins", titleVi: "Phòng nghỉ", titleEn: "Cabins" },
  { id: "zenova-suite-03", src: img48.url, category: "cabins", titleVi: "Phòng nghỉ", titleEn: "Cabins" },
];
