Plan: Thư viện ảnh + trang khu vực chi tiết + đa ngôn ngữ VI/EN (Zenova Cruise)

## Yêu cầu đã xác nhận
- Bộ ảnh hiện tại đang tách từ PDF phối cảnh sẽ dùng làm ảnh minh họa tạm cho các trang khu vực.
- Các trang Nhà hàng, Giải trí, Phòng... là dạng giới thiệu thuần, không cần tính năng đặt chỗ.
- Sau này có ảnh thực tế chụp tại du thuyền sẽ thay thế dần ảnh phối cảnh.
- Toàn bộ giao diện làm đa ngôn ngữ **VI/EN ngay từ đầu**, có **toggle chọn ngôn ngữ trên header**.
- URL các trang dùng tiếng Anh; nội dung hiển thị song ngữ.

## Cách dùng ảnh hiện tại khác với thư viện như thế nào

### Thư viện (đang làm)
- Mục đích: tổng quan toàn bộ không gian du thuyền, cho khách lướt nhanh.
- Layout: lưới ảnh / masonry theo danh mục (Exterior, Public Spaces, Dining, Entertainment, Cabins).
- Hành vi: click ảnh mở lightbox, có thể lọc theo danh mục, chuyển đổi ngôn ngữ VI/EN.
- Dữ liệu: một mảng ảnh chung, mỗi ảnh có trường `category`.

### Các trang khu vực riêng (sắp làm)
- Mục đích: giới thiệu sâu hơn từng khu vực, kể chuyện và tạo cảm xúc.
- Layout: dạng landing page ngắn, có thể gồm hero image, 2-3 đoạn mô tả, 3-6 ảnh minh họa theo chủ đề, và CTA quay về báo giá/đặt chỗ.
- Hành vi: không lightbox toàn màn hình; ảnh nằm trong bố cục trang, có thể scroll ngang trên mobile.
- Dữ liệu: mỗi trang có danh sách ảnh riêng được gán trong file cấu hình, không chia sẻ mảng chung với thư viện.
- SEO: mỗi trang có title, description, og:image riêng (ví dụ og:image của trang Dining là ảnh nhà hàng đẹp nhất); title/description đều có bản VI/EN.

## Khác biệt cốt lõi

| Tiêu chí | Thư viện | Trang khu vực riêng |
|----------|----------|---------------------|
| Mục đích | Tổng quan, duyệt nhanh | Giới thiệu chi tiết, storytelling |
| Layout | Grid, lọc, lightbox | Hero + section + ảnh minh họa |
| Dữ liệu | Mảng ảnh chung có category | Mảng ảnh riêng cho từng trang |
| Đường dẫn | `/gallery` | `/dining`, `/entertainment`, `/cabins`, ... |
| Tương tác | Lightbox, filter | Scroll, hover, có thể có slider |
| SEO | Một trang tổng | Nhiều trang, mỗi trang meta riêng |

## Cách tiếp cận kỹ thuật

### Bước 1: Mở rộng đa ngôn ngữ trước
- Mở rộng `translations.ts` với namespace `gallery`, `cabins`, `common`, `header`, `nav`.
- Thêm toggle VI/EN vào header (cạnh theme toggle hoặc logo), lưu `lang` vào localStorage.
- Cập nhật `use-language.ts` nếu cần, đảm bảo SSR không bị mismatch với localStorage.
- Tất cả route `head()` sẽ trả title/description theo ngôn ngữ hiện hành; og:title/og:description cũng song ngữ.

### Bước 2: Tách và upload ảnh PDF
- Chọn 35-40 render đẹp nhất, crop logo/biên trắng, export JPG/WebP.
- Upload lên CDN qua `lovable-assets`, tạo file `.asset.json` tương ứng.
- Gán metadata: `category`, `titleVI`, `titleEN`, `altVI`, `altEN`.

### Bước 3: Xây thư viện
- Tạo route `/gallery`.
- Component gallery grid + filter + lightbox.
- Header có dropdown menu khu vực dẫn đến các trang riêng; nhãn menu lấy từ translations.

### Bước 4: Xây các trang khu vực
- Tạo các route: `/dining`, `/entertainment`, `/cabins`, `/public-spaces`, `/exterior`.
- Mỗi route import các `.asset.json` riêng, không phụ thuộc vào mảng thư viện.
- Nội dung: hero image, tiêu đề, mô tả 2-3 đoạn, 3-6 ảnh minh họa, CTA về form báo giá.
- head() riêng cho mỗi trang với title, description, og:image phù hợp.

### Bước 5: Chuẩn bị cho ảnh thực tế sau này
- Tách dữ liệu ảnh của mỗi trang vào file cấu hình (JSON/TS) riêng, không hardcode trong component.
- Khi có ảnh thực, chỉ cần upload lên CDN và cập nhật file cấu hình; không cần sửa component.
- Giữ nguyên tên trường `alt`, `title`, `category` để dễ thay thế.
- Không dùng nhãn "hình phối cảnh" trên giao diện.

## Lưu ý thiết kế
- Ảnh phối cảnh dùng làm ảnh tạm phải đảm bảo chất lượng đủ cao, không bị vỡ trên màn hình lớn.
- Nên crop sát nội dung, bỏ logo DDGROUP và margin trắng để trang riêng nhìn chuyên nghiệp.
- Các trang riêng nên có bố cục khác thư viện, không lặp lại cảm giác "gallery lọc".
- Để tránh phải sửa nhiều khi thay ảnh, không dùng ảnh làm background CSS cứng; dùng `<img>` với `src={asset.url}` để dễ cập nhật.
- Toggle ngôn ngữ nên nằm cạnh theme toggle hoặc trong header chính, dùng nhãn VI/EN rõ ràng, không dùng icon cờ để tránh tranh cãi chính trị.

## Phạm vi lần này (đề xuất)
- Hoàn thiện bước 1 (đa ngôn ngữ) và bước 2 (tách ảnh, upload CDN).
- Xây thư viện `/gallery` với filter + lightbox + ngôn ngữ.
- Ưu tiên cao nhất: xây trang **Phòng ở** (`/cabins`) làm trang khu vực mẫu, vì đây là khu vực khách quan tâm nhất.
- Các trang khu vực còn lại (Dining, Entertainment, Public Spaces, Exterior) làm tiếp sau khi bạn duyệt mẫu Cabins.

## Trang Phòng ở làm kỹ hơn các trang khác
- Chia theo từng hạng phòng (ví dụ: Suite, Deluxe, Standard...) thay vì gộp chung một lưới ảnh.
- Mỗi hạng phòng có: ảnh lớn nổi bật, tên hạng phòng, mô tả ngắn, danh sách tiện nghi, diện tích/hướng nhìn nếu có, và vài ảnh phụ.
- Bố cục xen kẽ ảnh trái/phải để tạo nhịp, khác hẳn cảm giác lưới của thư viện.
- Dữ liệu hạng phòng để trong một file cấu hình riêng (mảng object), dễ thêm hạng phòng và dễ thay ảnh phối cảnh bằng ảnh thực sau này.
- og:image của trang là ảnh phòng đẹp nhất; nếu sau này tách trang chi tiết cho từng hạng phòng thì cấu trúc dữ liệu này dùng lại được ngay.

## Quyết định đã chốt
- Đường dẫn toàn bộ dùng tiếng Anh: `/gallery`, `/cabins`, `/dining`, `/entertainment`, `/public-spaces`, `/exterior`.
- Hạng phòng tạm nhóm theo ảnh phối cảnh trong PDF (đặt tên tạm dạng Suite / Deluxe / Standard theo quy mô không gian nhìn thấy trong ảnh), bạn chỉnh tên và thông số sau.
- Không ghi chú "hình ảnh phối cảnh" trên ảnh hay đầu trang; bỏ luôn trường `isRender`.
- Nội dung hiển thị song ngữ VI/EN; URL là tiếng Anh.
