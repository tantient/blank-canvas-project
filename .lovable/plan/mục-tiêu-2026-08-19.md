Trang tuyển dụng dạng liên hệ trực tiếp (không form, không database)

## Mục tiêu

Tạo trang `/careers` hiển thị danh sách vị trí tuyển dụng. Mỗi vị trí chỉ có 2 nút liên hệ trực tiếp, mở ra ứng dụng ngoài (Zalo / email client). Không có form nhập liệu, không lưu dữ liệu vào Supabase, không cần xác thực.

## Thông tin cần bổ sung

Trước khi triển khai, cần xác nhận 3 thông tin để điền vào code:

1. Số điện thoại Zalo tuyển dụng (dùng cho tất cả các vị trí hoặc tách riêng từng vị trí).
2. Email tuyển dụng (dùng cho tất cả các vị trí hoặc tách riêng).
3. Danh sách vị trí tuyển dụng: tên vị trí, bộ phận, mô tả ngắn, loại hình công việc (full-time/part-time/seasonal).

> Plan này sử dụng các giá trị placeholder: số Zalo `0902000000`, email `hr@zenovacruise.com`, 4 vị trí mẫu. Bạn có thể cung cấp thông tin thật trước khi approve hoặc để tôi điền placeholder và bạn sửa sau.

## Kiến trúc

```text
src/
  routes/
    careers.tsx              -> /careers
  components/
    careers/
      CareersPage.tsx        -> UI trang tuyển dụng
      careers-data.ts        -> danh sách vị trí + nội dung song ngữ
  lib/
    translations.ts          -> bổ sung khoá dịch "careers" và nav
  components/landing/
    Header.tsx               -> thêm link "Careers / Tuyển dụng" vào menu
```

## Nội dung trang

### 1. Hero section
- Ảnh nền: sử dụng ảnh ngoại thất / đội ngũ Zenova (tái dùng asset sẵn có).
- Tiêu đề song ngữ: "Join Zenova" / "Gia nhập Zenova".
- Subtitle: giới thiệu ngắn về cơ hội làm việc trên du thuyền 6 sao.

### 2. Danh sách vị trí

Mỗi vị trí hiển thị dưới dạng card:
- Tên vị trí (VI + EN)
- Bộ phận / Department
- Loại hình công việc
- Mô tả ngắn 2-3 dòng
- 2 nút hành động:
  - **Liên hệ Zalo / Contact via Zalo**: link `https://zalo.me/[PHONE]`
  - **Gửi Email / Send Email**: link `mailto:[EMAIL]?subject=Ứng tuyển - [Tên vị trí]`

Vị trí mẫu (có thể thay đổi):
1. Nhân viên buồng phòng / Housekeeping Steward
2. Nhân viên nhà hàng / F&B Server
3. Lễ tân / Receptionist
4. Hướng dẫn viên / Cruise Guide

### 3. Call-to-action cuối trang
- Khối văn bản ngắn mời ứng viên liên hệ.
- Nút chính: mở Zalo tuyển dụng.
- Nút phụ: mở email tuyển dụng chung (không subject hoặc subject "Ứng tuyển Zenova").

## Kỹ thuật

- Không dùng `createServerFn`, không dùng Supabase, không có form state.
- Nút Zalo là thẻ `<a>` thuần với `href="https://zalo.me/..."`, `target="_blank"`, `rel="noopener noreferrer"`.
- Nút Email là thẻ `<a>` thuần với `href="mailto:...?subject=..."`.
- Mã hóa subject bằng `encodeURIComponent` trong code.
- Responsive: 1 cột mobile, 2 cột tablet/desktop.
- Theme: tái dụng token màu `--zenova-ink`, `--zenova-ivory`, `--zenova-gold`, hỗ trợ dark mode.

## Routing & SEO

- File `src/routes/careers.tsx`.
- `head()` riêng:
  - title: "Careers — Zenova Cruise"
  - description: "Join the Zenova Cruise team. Explore open positions and contact us directly via Zalo or email."
  - og:title, og:description, og:type, twitter:card.
- Thêm link "Careers" / "Tuyển dụng" vào `Header.tsx` trong menu desktop và mobile.
- Bổ sung khoá dịch trong `src/lib/translations.ts`.

## Các file cần thay đổi

1. `src/lib/translations.ts` — thêm `nav.careers` và toàn bộ dictionary `careers`.
2. `src/components/landing/Header.tsx` — thêm link `/careers`.
3. `src/components/careers/careers-data.ts` — định nghĩa vị trí, nội dung, link.
4. `src/components/careers/CareersPage.tsx` — component hiển thị.
5. `src/routes/careers.tsx` — route + head metadata.
