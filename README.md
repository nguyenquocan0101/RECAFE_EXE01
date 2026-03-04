# Dự án RE:CAFÉ - Cấu trúc Thư mục

Chào mừng bạn đến với dự án **RE:CAFÉ**! Đây là cấu trúc thư mục được thiết kế để mở rộng từ một trang web tĩnh hiện tại lên một ứng dụng web hoàn chỉnh có backend và database trong tương lai.

## Chi tiết các thư mục:

- `/public/`: **ĐÂY LÀ THƯ MỤC CHÍNH CỦA WEBSITE.** Mọi thứ hiển thị cho người dùng phải nằm ở đây.
    - `index.html`: File trang chủ (Entry point).
    - `/assets/`: Hình ảnh, icons, fonts.
    - `/css/`: Quản lý style (Vanilla CSS).
    - `/js/`: Chứa logic JavaScript phía client.
    - `/blog/`: Chứa các bài viết blog.
- `/backend/`: **(Dành cho tương lai)** Chứa mã nguồn server.
- `/docs/`: Lưu trữ tài liệu dự án.
    - `/api/`: Định nghĩa các luồng xử lý dữ liệu.
    - `/models/`: Cấu trúc dữ liệu Database.

## Hướng dẫn phát triển:
1. Bạn nên di chuyển các đoạn mã CSS trong `index.html` vào file riêng trong `/css/` để file HTML sạch hơn.
2. Hình ảnh nên được phân loại rõ ràng trong `/assets/images/`.
3. Khi bạn sẵn sàng tích hợp Database, chúng ta sẽ bắt đầu thiết lập thư mục `/backend/`.

"Think smart. Build better." ☕♻️
