Lưu trữ dữ liệu cục bộ HTML5 LocalStorage:

1. LocalStorage là gì?

- Hiện nay, mỗi cookie chỉ cho phép lưu trữ tối đa là 4KB (dữ liệu). LocalStorage có công dụng tương tự với cookie và nó sẽ lưu trữ thông tin trên browser (trình duyệt) mà người dùng truy cập.
- Điểm khác biệt là localStorage cho phép lưu trữ tới 5MB (1MB -> 1000KB)
- Những trình duyệt hỗ trợ LocalStorage: Chrome (tập đoàn google), edge (mặc định MS), firefox (đa nền tảng, nguồn mở), OperaGX (gaming), Brave (private)

- Có 2 loại Storage:

* window.localStorage: lưu trữ dữ liệu vô thời hạn, dữ liệu sẽ được lưu trữ cho tới khi người dùng "clear history"
* window.sessionStorage: Lưu trữ dữ liệu cho 1 phiên làm việc, có nghĩa dữ liệu sẽ bị mất khi người dùng tắt browser

- Mẹo: để kiểm tra xem trình duyệt có hỗ trợ localStorage hay không bằng cách như sau:

* Bấm f12, vào phần Application --> Storage --> Local Storage
