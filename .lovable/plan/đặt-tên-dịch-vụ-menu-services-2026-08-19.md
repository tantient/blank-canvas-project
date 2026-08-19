# Đặt tên dịch vụ & menu Services

Phong cách: tên mô tả cao cấp (rõ nghĩa, tốt cho SEO), song ngữ VI/EN.

## Bộ tên đề xuất

| Khu vực | Tên EN | Tên VI | Đường dẫn |
|---|---|---|---|
| Nhà hàng | Panorama Restaurant | Nhà hàng Panorama | /dining |
| Giải trí | Sky Lounge & Entertainment | Giải trí & Sky Lounge | /entertainment |
| Spa | Serenity Spa & Wellness | Spa & Chăm sóc sức khoẻ | /spa |
| Không gian chung | Grand Lobby & Public Spaces | Sảnh chính & Không gian chung | /public-spaces |
| Boong | Sundeck & Infinity Pool | Boong tắm nắng & Hồ bơi | /sundeck |
| Ngoại thất | Yacht Exterior | Ngoại thất du thuyền | /exterior |

Phòng nghỉ (/cabins) đã có, giữ nguyên.

## Menu

Header thêm mục **Dịch vụ / Services** dạng dropdown (desktop) và nhóm thu gọn (mobile), liệt kê 6 mục trên. Thứ tự menu: Giới thiệu · Phòng nghỉ · Dịch vụ · Thư viện ảnh.

## Trang dịch vụ

Mỗi trang dùng chung một layout kể chuyện:
- Hero ảnh lớn + tên dịch vụ + 1 câu mô tả
- Đoạn giới thiệu ngắn (2-3 câu)
- Danh sách 3-5 điểm nổi bật (icon + tiêu đề + mô tả ngắn)
- Lưới ảnh của khu vực đó, click mở lightbox (tái dùng lightbox của Gallery)
- Điều hướng sang dịch vụ kế tiếp

## Kỹ thuật

- `src/components/services/services-data.ts`: định nghĩa slug, tên VI/EN, mô tả, highlights, và lọc ảnh từ `gallery-data.ts` theo `category`.
- `src/components/services/ServicePage.tsx`: component dùng chung, nhận slug.
- `src/routes/services.$serviceId.tsx`: route động cho 6 dịch vụ; thêm `head()` riêng cho từng dịch vụ (title/description/og).
- Redirect/alias: dùng đường dẫn `/services/<slug>` cho nhất quán, ví dụ `/services/dining`.
- Tách lightbox hiện có trong `GalleryPage.tsx` thành component tái dùng.
- Bổ sung khoá dịch vào `src/components/landing/translations.ts` và cập nhật `Header.tsx`.
