Đơn giản hóa trang tuyển dụng — 1 Zalo, 1 email chung

## Mục tiêu

Trang `/careers` chỉ còn **một số Zalo duy nhất** và **một email duy nhất** cho toàn bộ mục tuyển dụng. Các card vị trí không còn 2 nút liên hệ riêng; liên hệ tập trung thành 1 cặp CTA chung trên trang.

- Số Zalo thật: `0979768969`
- Email mặc định (do chưa được cung cấp): `hr@zenovacruise.com`

## Thay đổi

### 1. `src/components/careers/careers-data.ts`

- `ZALO_PHONE` → `0979768969`.
- Sửa `buildEmailLink`:
  - Bỏ tham số tên vị trí (`positionTitleVi`, `positionTitleEn`).
  - Trả về `mailto:hr@zenovacruise.com?subject=` + subject chung:
    - VI: `Ứng tuyển Zenova`
    - EN: `Application to Zenova`
- Giữ nguyên `jobPositions` và `CAREER_HERO`.

### 2. `src/components/careers/CareersPage.tsx`

- Bỏ 2 nút `Liên hệ Zalo` / `Gửi Email` trong mỗi card vị trí.
- Card vị trí chỉ còn: bộ phận, loại hình công việc, tên vị trí, mô tả ngắn.
- Giữ khối CTA chung ở cuối trang với 1 nút Zalo và 1 nút Email duy nhất (dùng `ZALO_PHONE` và `RECRUIT_EMAIL` đã cập nhật).
- Thêm 1 dòng hướng dẫn ngắn dưới tiêu đề danh sách vị trí, ví dụ: "Vui lòng liên hệ bộ phận nhân sự qua Zalo hoặc email bên dưới."
- Giữ toàn bộ layout, responsive, dark mode và hiệu ứng `Reveal`.

### 3. `src/lib/translations.ts`

- Cập nhật `careers.openingsSubtitle` cho cả VI/EN để phù hợp với cách liên hệ chung (không còn "Pick a role and reach out directly").
- Các key `contactZalo` / `sendEmail` giữ nguyên vì vẫn dùng ở CTA chung.

## Kỹ thuật

- Không dùng form, database, `createServerFn`.
- Nút Zalo vẫn là `<a>` thuần với `href="https://zalo.me/..."`, `target="_blank"`, `rel="noopener noreferrer"`.
- Nút Email vẫn là `<a>` thuần với `href="mailto:..."`, `subject` được `encodeURIComponent`.
- Sử dụng token màu sẵn có (`--zenova-gold`, `--zenova-ink`, v.v.) để đồng bộ theme.

## Kiểm tra

- Build dev (`bun run build:dev`) để đảm bảo không lỗi.
- Chụp preview `/careers` ở desktop (1280px) và mobile (375px) để xác nhận:
  - Card vị trí không còn 2 nút liên hệ.
  - CTA chung cuối trang hiển thị đúng và link Zalo/email trỏ đến `0979768969` / `hr@zenovacruise.com`.
