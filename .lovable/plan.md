# Restructure kiến trúc website & hoàn thiện menu mới

Mục tiêu: chuyển từ phát triển tính năng rời rạc sang một cấu trúc domain rõ ràng, dễ mở rộng, đồng thời bổ sung các trang còn thiếu theo menu mới.

## Menu chính cuối cùng

Logo (về Trang chủ) · Hải Trình · Phòng Nghỉ · Dịch vụ · Thư viện ảnh · Ưu Đãi · Giới Thiệu · Nút "Đặt phòng" (link bên thứ 3)

- Hải Trình: `/itineraries` — các chương trình 2N1Đ, 3N2Đ, sunset cruise...
- Phòng Nghỉ: `/cabins` + `/cabins/$cabinId` — đã có, giữ nguyên, cần refactor nhẹ
- Dịch vụ: `/services/$serviceId` — đã có, giữ nguyên
- Thư viện ảnh: `/gallery` — đã có, giữ nguyên
- Ưu Đãi: `/offers` — trang mới
- Giới Thiệu: `/about` — tách riêng thay vì để là section `#about` trong landing

## Trang chủ

Trang chủ giữ vai trò "tổng hợp": hero, điểm nỉnh nổi bật, preview từng khu vực, CTA đặt phòng. Không phải nơi chứa toàn bộ nội dung About.

## Cấu trúc thư mục đề xuất

```text
src/
  routes/                     # route files mỏng, chỉ import component
    __root.tsx
    index.tsx
    about.tsx
    itineraries.tsx
    cabins.index.tsx
    cabins.$cabinId.tsx
    services.$serviceId.tsx
    gallery.tsx
    offers.tsx
  components/
    layout/                   # Header, Footer, shell dùng chung
    ui/                       # shadcn / base UI
    theme/                    # ThemeProvider, ThemeToggle
    home/                     # Hero, About, Gallery, QuoteForm của landing
    cabins/                   # CabinPage, CabinDetailPage, cabins-data
    services/                 # ServicePage, services-data
    gallery/                  # GalleryPage, Lightbox, gallery-data
    itineraries/              # ItineraryPage, itineraries-data
    offers/                   # OffersPage, offers-data
    about/                    # AboutPage
  lib/
    translations.ts           # tập trung i18n, thay vì nằm trong landing
    utils.ts                  # đã có
  assets/                     # asset.json giữ nguyên
```

## Công việc cụ thể

### 1. Tái cấu trúc hiện có (không phá hủy)

- Di chuyển `src/components/landing/translations.ts` → `src/lib/translations.ts`
- Di chuyển `src/components/landing/About.tsx` → `src/components/about/AboutPage.tsx` và tạo route `/about`
- Tách phần Hero của landing khỏi phần About — About trở thành trang riêng
- Di chuyển `src/components/gallery/cabins-data.ts` → `src/components/cabins/`
- Di chuyển `src/components/gallery/CabinsPage.tsx` → `src/components/cabins/`
- Di chuyển `src/components/gallery/CabinDetailPage.tsx` → `src/components/cabins/`
- Cập nhật tất cả import path tương ứng
- Xóa section About trong landing page; landing chỉ còn hero + highlight + quick-links + CTA

### 2. Cập nhật Header và điều hướng

- Sửa `src/components/landing/Header.tsx` (hoặc `src/components/layout/Header.tsx`) với menu mới:
  - Hải Trình, Phòng Nghỉ, Dịch vụ, Thư viện ảnh, Ưu Đãi, Giới Thiệu
- Dịch vụ vẫn giữ dropdown desktop + nhóm mobile
- Thêm nút "Đặt phòng" trỏ đến URL bên thứ 3 (do bạn cung cấp)
- Logo về `/`
- Bổ sung translation keys cho menu mới

### 3. Tạo các trang mới

- **Trang Giới thiệu `/about`**: tái sử dụng nội dung hiện có từ `About.tsx`, bổ sung hình ảnh, giá trị cốt lõi, số liệu thống kê (nếu có), liên hệ/footer
- **Trang Hải Trình `/itineraries`**: 2-3 hải trình tiêu biểu (2N1Đ Hạ Long, 3N2Đ Hạ Long–Lan Hạ, Sunset/Day Cruise), mỗi hải trình có timeline, điểm đến, bao gồm/không bao gồm, ảnh tương ứng
- **Trang Ưu Đãi `/offers`**: danh sách các gói ưu đãi/khuyến mãi hiện tại, mỗi offer có ảnh, tiêu đề, mô tả, điều kiện, CTA

### 4. SEO & metadata

- Sửa `src/routes/__root.tsx`: xóa "Lovable App" / "Lovable Generated Project", thay bằng metadata mặc định của Zenova Cruise
- Mỗi route mới phải có `head()` riêng với title, description, og:title, og:description, twitter:card
- Các route đã có (gallery, cabins, services) kiểm tra lại metadata để đảm bảo nhất quán

### 5. Data & assets

- Tạo `src/components/itineraries/itineraries-data.ts` với nội dung song ngữ VI/EN
- Tạo `src/components/offers/offers-data.ts` với nội dung song ngữ VI/EN
- Sử dụng ảnh từ gallery đã upload cho các trang mới, ưu tiên ảnh ngoại thất, phòng, boong tắm nắng, nhà hàng
- Không tải thêm ảnh nếu có thể tái sử dụng

### 6. Kiểm thử

- Build kiểm tra lỗi route và type
- Chạy Playwright kiểm tra toàn bộ menu, các route mới, dark mode, chuyển ngôn ngữ
- Kiểm tra metadata SEO trên từng route

## Kết quả mong đợi

Website có cấu trúc domain rõ ràng, menu chuẩn, mỗi mục menu là một route SEO-friendly, landing page gọn gàng hơn, booking dẫn ra ngoài bằng CTA. Các trang Hải trình, Ưu đãi, Giới thiệu được bổ sung đầy đủ.
