# Cập nhật trang Phòng nghỉ — tàu 44 phòng, 4 hạng phòng

## Mục tiêu

Thay 3 hạng phòng đang có (Zenova Suite / Deluxe Bay View / Ocean Cabin) bằng 4 hạng phòng thật, sửa toàn bộ "40 phòng" thành "44 phòng", và đổi khối hạng phòng sang dạng 4 card có nút "Liên hệ báo giá" (chưa hiện giá).

## Dữ liệu 4 hạng phòng (thứ tự cao → thấp)

| Hạng | Diện tích | Số phòng | Sức chứa tối đa |
|---|---|---|---|
| Owner's Suite | 80 m² | 2 | 4 khách |
| Grand Suite | 58–62 m² | 4 | 4 khách |
| Junior Suite (loại A) | 30–33 m² | 13 | 4 khách |
| Junior Suite (loại B) | 30–35 m² | 25 | 3 khách |

Tổng: 2 + 4 + 13 + 25 = 44 phòng.

Giường của tất cả các hạng: 1 giường đôi hoặc 2 giường đơn.

Ghi chú hiển thị dưới nhóm Junior Suite: loại A và loại B khác sức chứa, số khách tối đa chính xác sẽ xác nhận theo từng phòng cụ thể khi khách chọn phòng — không gộp thành một con số chung.

## Cấu trúc mỗi card

- Tên hạng phòng
- Diện tích
- Số lượng phòng trên tàu
- Giường: 1 giường đôi hoặc 2 giường đơn
- Sức chứa tối đa
- Ảnh render + mô tả ngắn
- Nút "Liên hệ báo giá" (link Zalo, không hiển thị giá)

## Thay đổi kỹ thuật

1. `src/components/cabins/cabins-data.ts`
   - Viết lại `cabinTypes` với 4 mục, id: `owners-suite`, `grand-suite`, `junior-suite-a`, `junior-suite-b`.
   - Thêm trường `roomCount` và `maxGuests`, giữ `area`, `view`, `hero`, `gallery`, `amenities`, `desc` (song ngữ VI/EN).
   - Cập nhật `cabinDetails` theo 4 id mới: sức chứa, giường (1 giường đôi / 2 giường đơn), vị trí tầng, highlights và sơ đồ bố trí tương ứng diện tích mới.
   - Ảnh: tái sử dụng render có sẵn — suite-01/02/03 + bath-02 cho Owner's Suite và Grand Suite, deluxe-01/02 + bath-01 cho Junior A, standard-01..04 + corridor cho Junior B.

2. `src/components/cabins/CabinsPage.tsx`
   - Đổi khối liệt kê xen kẽ trái/phải hiện tại thành lưới 4 card đồng nhất, mỗi card có đủ thông số và nút "Liên hệ báo giá".
   - Sửa mô tả hero: "40 phòng nghỉ hướng biển" → "44 phòng nghỉ hướng biển" (và bản EN).
   - Thêm dòng ghi chú về khác biệt sức chứa giữa Junior Suite A và B.

3. `src/components/cabins/CabinDetailPage.tsx`
   - Bổ sung số lượng phòng vào bảng thông số, đổi CTA thành "Liên hệ báo giá".

4. Cập nhật số phòng ở các nơi khác
   - `src/lib/translations.ts`: "40 suite hướng biển" → "44 suite hướng biển" (VI + EN).
   - `src/components/services/services-data.ts`: 3 chỗ nhắc 40 phòng → 44.
   - `src/components/offers/offers-data.ts`: điều kiện đang ghi "Zenova Suite hoặc Deluxe Bay View" → đổi sang tên hạng mới.
   - `src/routes/cabins.index.tsx`: cập nhật title/description SEO theo tên hạng mới.

5. Kiểm thử
   - Build + kiểm tra 4 route chi tiết `/cabins/owners-suite`, `/cabins/grand-suite`, `/cabins/junior-suite-a`, `/cabins/junior-suite-b` bằng Playwright, cả light lẫn dark mode.

## Chưa có / cần bạn xác nhận sau

- Giá từng hạng phòng (đang để nút liên hệ).
- Mô tả riêng chi tiết cho từng hạng nếu bạn có văn bản chính thức; hiện tại tôi sẽ viết mô tả ngắn dựa trên ảnh render và diện tích.
