Khôi phục toàn bộ hình ảnh Zenova Cruise sau khi chuyển project

Vấn đề
- Project được chuyển từ tài khoản Lovable cũ (project_id: `2c119f21-b14d-4bc2-8b7d-cf1e8edf1061`) sang tài khoản/project mới.
- Các file `.asset.json` trong `src/assets/` vẫn còn nhưng trỏ về asset_id của project cũ, nên toàn bộ 12 hình đều trả về HTTP 404 trong preview mới.
- Các hình gốc vẫn còn tồn tại trên CDN của project cũ (kiểm tra một URL cũ trả về 200), nên có thể tải về và upload lại.

Mục tiêu
- Khôi phục đúng các hình cũ vào project mới.
- Cập nhật tất cả `.asset.json` để trỏ đến asset_id/project_id mới.
- Xác minh preview hiển thị đầy đủ hero, slides, gallery, logo.

Các bước thực hiện
1. Kiểm tra kỹ thuật CLI
   - Xác nhận `lovable-assets get` hỗ trợ tải asset theo URL/pointer cũ.
   - Lấy project_id hiện tại để dùng khi upload lại.

2. Tải hình gốc từ project cũ
   - Dùng `lovable-assets get` (hoặc `curl`) để tải về 12 file từ các URL cũ trong `src/assets/*.asset.json` vào thư mục tạm.

3. Upload lại vào project mới
   - Với mỗi file đã tải, chạy `lovable-assets create --file <path> > src/assets/<filename>.asset.json`.
   - Điều này tạo ra asset_id, project_id, url, r2_key mới cho project hiện tại.

4. Cập nhật code nếu cần
   - Các component (Hero, HeroMedia, Gallery, Header, About, Footer, QuoteForm) import `.asset.json`, nên tự động nhận `url` mới. Không cần sửa đường dẫn component nếu import giữ nguyên tên file.

5. Xác minh
   - Chạy `bun run build` để đảm bảo import hợp lệ.
   - Kiểm tra preview: mở trang chủ, xác nhận hero, slides, gallery, logo hiển thị đúng.
   - Kiểm tra HTTP status của các URL mới trong `.asset.json`.

Rủi ro và giảm thiểu
- Nếu project cũ bị xóa hoặc asset cũ bị xóa trong quá trình, `lovable-assets get` sẽ thất bại → dừng lại và thông báo.
- Nếu một số hình không thể khôi phục, liệt kê cho người dùng và đề xuất thay bằng hình mới.

Kết quả mong đợi
- 12 file `.asset.json` được cập nhật với asset_id/project_id mới.
- Preview hiển thị đầy đủ hình ảnh như trước khi chuyển tài khoản.
