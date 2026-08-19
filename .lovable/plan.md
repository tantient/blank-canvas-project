Plan: Thư viện ảnh + các trang khu vực chi tiết (Nhà hàng, Giải trí, Phòng, ...)

## Yêu cầu đã xác nhận
- Bộ ảnh hiện tại đang tách từ PDF phối cảnh sẽ dùng làm ảnh minh họa tạm cho các trang khu vực.
- Các trang Nhà hàng, Giải trí, Phòng... là dạng giới thiệu thuần, không cần tính năng đặt chỗ.
- Sau này có ảnh thực tế chụp tại du thuyền sẽ thay thế dần ảnh phối cảnh.

## Cách dùng ảnh hiện tại khác với thư viện như thế nào

### Thư viện (đang làm)
- Mục đích: tổng quan toàn bộ không gian du thuyền, cho khách lướt nhanh.
- Layout: lưới ảnh / masonry theo danh mục (Ngoại thất, Khu vực chung, Nhà hàng, Giải trí, Phòng nghỉ).
- Hành vi: click ảnh mở lightbox, có thể lọc theo danh mục, chuyển đổi ngôn ngữ VI/EN.
- Dữ liệu: một mảng ảnh chung, mỗi ảnh có trường `category`.

### Các trang khu vực riêng (sắp làm)
- Mục đích: giới thiệu sâu hơn từng khu vực, kể chuyện và tạo cảm xúc.
- Layout: dạng landing page ngắn, có thể gồm hero image, 2-3 đoạn mô tả, 3-6 ảnh minh họa theo chủ đề, và CTA quay về báo giá/đặt chỗ.
- Hành vi: không lightbox toàn màn hình; ảnh nằm trong bố cục trang, có thể scroll ngang trên mobile.
- Dữ liệu: mỗi trang có danh sách ảnh riêng được gán cứng trong file route, không chia sẻ mảng chung với thư viện.
- SEO: mỗi trang có title, description, og:image riêng (ví dụ og:image của trang Nhà hàng là ảnh nhà hàng đẹp nhất).

## Khác biệt cốt lõi

| Tiêu chí | Thư viện | Trang khu vực riêng |
|----------|----------|---------------------|
| Mục đích | Tổng quan, duyệt nhanh | Giới thiệu chi tiết, storytelling |
| Layout | Grid, lọc, lightbox | Hero + section + ảnh minh họa |
| Dữ liệu | Mảng ảnh chung có category | Mảng ảnh riêng cho từng trang |
| Đường dẫn | `/thu-vien` | `/nha-hang`, `/giai-tri`, `/phong`, ... |
| Tương tác | Lightbox, filter | Scroll, hover, có thể có slider |
| SEO | Một trang tổng | Nhiều trang, mỗi trang meta riêng |

## Cách tiếp cận kỹ thuật

### Bước 1: Tách và upload ảnh PDF (đang thực hiện)
- Chọn 35-40 render đẹp nhất, crop logo/biên trắng, export JPG/WebP.
- Upload lên CDN qua `lovable-assets`, tạo file `.asset.json` tương ứng.
- Gán metadata: `category`, `titleVI`, `titleEN`, `altVI`, `altEN`.

### Bước 2: Xây thư viện
- Tạo route `/thu-vien`.
- Component gallery grid + filter + lightbox.
- Header có dropdown menu khu vực dẫn đến các trang riêng.

### Bước 3: Xây các trang khu vực
- Tạo các route: `/nha-hang`, `/giai-tri`, `/phong`, `/khu-vuc-chung`, `/ngoai-that` (hoặc tên tiếng Anh nếu muốn).
- Mỗi route import các `.asset.json` riêng, không phụ thuộc vào mảng thư viện.
- Nội dung: hero image, tiêu đề, mô tả 2-3 đoạn, 3-6 ảnh minh họa, CTA về form báo giá.
- head() riêng cho mỗi trang với title, description, og:image phù hợp.

### Bước 4: Chuẩn bị cho ảnh thực tế sau này
- Tách dữ liệu ảnh của mỗi trang vào file cấu hình (JSON/TS) riêng, không hardcode trong component.
- Khi có ảnh thực, chỉ cần upload lên CDN và cập nhật file cấu hình; không cần sửa component.
- Giữ nguyên tên trường `alt`, `title`, `category` để dễ thay thế.
- Cân nhắc thêm trường `isRender` để đánh dấu ảnh phối cảnh (có thể ghi chú "hình phối cảnh" nếu cần minh bạch với khách).

## Lưu ý thiết kế
- Ảnh phối cảnh dùng làm ảnh tạm phải đảm bảo chất lượng đủ cao, không bị vỡ trên màn hình lớn.
- Nên crop sát nội dung, bỏ logo DDGROUP và margin trắng để trang riêng nhìn chuyên nghiệp.
- Các trang riêng nên có bố cục khác thư viện, không lặp lại cảm giác "gallery lọc".
- Để tránh phải sửa nhiều khi thay ảnh, không dùng ảnh làm background CSS cứng; dùng `<img>` với `src={asset.url}` để dễ cập nhật.

## Phạm vi lần này (đề xuất)
- Hoàn thiện bước 1 và 2: tách ảnh, upload CDN, xây thư viện `/thu-vien`.
- Tạo trước 1 trang khu vực mẫu (ví dụ `/nha-hang`) để bạn xem cách dùng ảnh khác với thư viện.
- Các trang khu vực còn lại làm tiếp sau khi bạn duyệt mẫu.

## Câu hỏi cần quyết định
- Đường dẫn trang khu vực dùng tiếng Việt (`/nha-hang`) hay tiếng Anh (`/dining`) cho đồng nhất với thương hiệu?
- Trang mẫu đầu tiên bạn muốn làm khu vực nào? (Đề xuất: Nhà hàng vì có nhiều ảnh đẹp.)
- Có cần ghi chú "Hình ảnh phối cảnh" trên ảnh/đầu trang hay không?
