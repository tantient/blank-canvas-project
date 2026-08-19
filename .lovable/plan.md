Plan: Tạo menu Services dropdown + các trang khu vực dịch vụ

## Mục tiêu
Thêm mục **Services / Dịch vụ** trên header dạng dropdown, dẫn đến các trang giới thiệu chi tiết từng khu vực dịch vụ trên du thuyền. Tất cả song ngữ VI/EN, URL tiếng Anh, đồng bộ dark mode, có SEO meta riêng từng trang.

## Các dịch vụ sẽ làm trang
Dựa trên bộ ảnh đã tách từ PDF (49 ảnh) và định hướng du thuyền 6 sao, các khu vực dịch vụ sẽ làm thành trang riêng:

| # | URL | Tiếng Việt | Tiếng Anh | Ảnh có sẵn |
|---|-----|------------|-----------|------------|
| 1 | `/dining` | Ẩm thực | Dining | 6 ảnh (main, outdoor, panorama) |
| 2 | `/entertainment` | Giải trí | Entertainment | 11 ảnh (lounge, karaoke, cigar, poker, kids, family, business) |
| 3 | `/wellness` | Spa & Wellness | Spa & Wellness | 3 ảnh (foot massage, spa rooms) |
| 4 | `/public-spaces` | Không gian chung | Public Spaces | 8 ảnh (lobby, reception, lounge, pool, jacuzzi, stair) |
| 5 | `/deck` | Boong & Sundeck | Deck & Sundeck | 3 ảnh (sunset, terrace) |
| 6 | `/exterior` | Ngoại thất | Exterior | 6 ảnh (cruise exterior) |

Lưu ý: `/cabins` đã có từ trước và sẽ giữ nguyên là mục riêng trên header, không đưa vào dropdown Services.

## Việc cần làm

### 1. Cập nhật Header — thêm dropdown Services
- Thêm `services` vào `translations.ts` (nav + dropdown labels VI/EN).
- Thêm vào `Header.tsx` một dropdown hover/focus: desktop hiện menu con, mobile hiện accordion.
- Các mục trong dropdown: Dining, Entertainment, Spa & Wellness, Public Spaces, Deck & Sundeck, Exterior.
- Giữ nguyên các mục hiện tại: About, Gallery, Cabins, theme toggle, language toggle, quote button.

### 2. Tạo dữ liệu cho từng trang dịch vụ
- Tạo `src/components/services/services-data.ts`.
- Mỗi dịch vụ là một object gồm: id, slug, nameVi, nameEn, taglineVi, taglineEn, descVi, descEn, hero image, gallery images (chọn từ `gallery-data.ts`), highlights (amenities) VI/EN, CTA text.
- Không hardcode ảnh trong component, dùng import `.asset.json` riêng từng trang.

### 3. Tạo các route và component trang dịch vụ
- Tạo route file: `src/routes/dining.tsx`, `entertainment.tsx`, `wellness.tsx`, `public-spaces.tsx`, `deck.tsx`, `exterior.tsx`.
- Mỗi route có `head()` với title, description, og:title, og:description, og:image (hero của trang), twitter:image.
- Tạo component dùng chung: `src/components/services/ServiceAreaPage.tsx` (hero + intro + highlights + gallery grid + CTA).
- Layout mỗi trang: hero full-width, 1-2 đoạn mô tả, 3-6 ảnh minh họa, danh sách tiện ích, nút CTA về form báo giá.

### 4. Đa ngôn ngữ
- Mở rộng `translations.ts` với namespace `services` chứa các label chung (hero, highlights, cta, back...).
- Mỗi trang dịch vụ dùng dữ liệu từ `services-data.ts` + từ điển chung từ `getT(lang)`.

### 5. Đồng bộ thiết kế
- Dùng token màu sẵn có: `zenova-ink`, `zenova-ivory`, `zenova-gold`, `zenova-slate`, `zenova-sand`.
- Ảnh dùng `<img>` với `src={asset.url}` thay vì background CSS, để dễ thay ảnh thực sau này.
- Giữ typography uppercase tracking-wide cho headings, khoảng cách section giống trang `/cabins`.

### 6. SEO & meta
- Mỗi route leaf có `head()` riêng; không đặt og:image trên `__root.tsx`.
- Title mẫu: `Dining — Zenova Cruise` / `Ẩm thực — Zenova Cruise`.
- Description mẫu: tóm tắt 2 dòng về dịch vụ, có bản VI/EN.

### 7. Kiểm tra
- Build dev pass.
- Playwright kiểm tra dropdown mở/đóng, navigate đến 6 trang mới, ảnh hero/gallery load đúng.
- Kiểm tra dark mode và language toggle trên từng trang mới.

## Phạm vi lần này
- Làm dropdown menu + 6 trang dịch vụ.
- Không làm tính năng đặt chỗ/booking trong các trang này; chỉ có CTA về form báo giá hoặc Zalo link.
- Không làm animation phức tạp; giữ scroll mượt và hover states đơn giản.

## Quyết định cần chốt
- Có muốn gộp `/deck` và `/exterior` thành một mục "Decks & Exterior" hay giữ tách riêng?
- Có muốn thêm mục dịch vụ không có ảnh riêng (ví dụ: thuyền kayak, lịch trình, đưa đón) hay chỉ làm các khu vực đã có ảnh?
