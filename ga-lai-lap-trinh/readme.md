# 5. HTML là gì - Tìm hiểu về html, css ,js

HTML (hyper text markup language): Ngôn ngữ đánh dấu siêu văn bản

- html không phải là ngôn ngữ lập trình
- html xác định nội dung và cấu trúc của 1 trang web
- html đánh dấu các nội dung khác nhau của văn bản: paragraph - đoạn văn, links - liên kết, headings - tiêu đề, images - hình ảnh,...

# 6.Cấu trúc tệp html - tìm hiểu DOCTYPE, thẻ html, thẻ head trong lập trình web

`<!DOCTYPE html>`
doctype là mã khai báo cho trình duyệt biết rằng bạn đang sử dụng html 5 - phiên bản mới nhất của html hiện taị
1 số định dạng cuả các phiên bản html5 cũ - (tham khảo):
html 4.1 strict, html 4.01 transitional,...

- Thẻ `head`: <head></head>
  ✅ Thẻ head là một phần tử html được sử dụng để chứa các thông tin về trang web mà không được hiển thị trực tiếp trên trình duyệt của người dùng.
  ✅ Các thông tin trong thẻ head như tiêu đề trang, mô tả trang, từ khoá, thông tin tác giả, các tập tin css và js được liên kết với trang, và nhiều thông tin khác.
  ✅ Các thông tin trong thẻ head rất quan trọng trong việc tối ưu công cụ tìm kiếm (SEO), vì chúng giúp các công cụ tìm kiếm hiểu được nội dung và ý nghĩa của trang web.

# 7. Tìm hiểu thẻ body- thẻ heading h1-h6

- Tìm hiểu thẻ body: <body></body>
  ✓ Thẻ `body` là một phần tử html được sử dụng để chứa nội dung chính của trang web, bao gồm các phần tử như văn bản, hình ảnh, đọan mã js, các phần tử định dạng,...
  ✓ Các phần tử html bên trong thẻ body được hiển thị trực tiếp lên trình duyệt của người dùng, và chúng tạo thành nội dung chính của trang web

✅ thẻ h - được sử dụng để định nghĩa tiêu đề của trang web
✅ thẻ p - paragraph <p></p> để chứa đoạn văn bản
✅ thẻ b - bold <b></b> để in đậm (dùng strong thay thế thể hiện nội dung quan trọng)
✅ thẻ i italic - in nghiêng( dùng em thay thế để nhấn mạnh nội dung)
✅ thẻ u - underline gạch chân
✅ thẻ a - anchor: gắn kèm đường link
✅ thẻ img - image: hình ảnh
✅ thẻ ul - un ordered list: danh sách không có thứ tự
✅ thẻ ol - ordered list: danh sách có thứ tự.

✅ thẻ h - được sử dụng để định nghĩa tiêu đề của trang web
✓ Có 65 loại thẻ h, được đánh số từ h1 -> h6, tương ứng với các kích cỡ và mức độ quan trọng của tiêu đề.
✓ Các thẻ `h` có cấp độ khác nhau, với h1 là thẻ tiêu đề lớn nhất và quan trọng nhất, còn h6 là tiêu đề nhỏ nhất và ít quan trọng nhất
✓ Các thẻ này có thể được sử dụng để trình bày các phần khác nhau của trang web, như tiêu đề của trang web, tiêu đề bài viết, phần mục lục, phần giới thiệu nội dung chính của trang.
✓ Chú ý: Thẻ h1 là thẻ tiêu đề chính của trang web, được sử dụng để chỉ ra nội dung chính của trang web. Chỉ nên sử dụng 1 thẻ h1 duy nhất. Việc sử dụng nhiều thẻ h1 trên cùng 1 trang có thể gây nhầm lẫn cho các máy chủ tìm kiếm về nội dung chính của trang web

# Tìm hiểu thẻ hr, br

✅ thẻ `br` - break(thẻ tự đóng-closing tag): ngắt dòng
✅ Thẻ `hr` - horizontal rule (thẻ tự đóng-closing tag) - Tạo đường kẻ ngang ngăn cách trang

# 10. Tìm hiểu về thẻ b, i, u

✅ Thẻ b: bold - in đậm (dùng strong thay thế thể hiện nội dung quan trọng)
✅ Thẻ i: italic - in nghiêng (dùng em-emphasis để nhấn mạnh nội dung)
✅ thẻ u - underline gạch chân

# 11 Thẻ list trong html, ul, ol unordered list

✅ Thẻ ul - unorder list : danh sách không có thứ tự
✅ Thẻ ol - ordered list: danh sách có thứ tự
✅ Thẻ li - list item: là thẻ con trực tiếp của ul, ol

# 12 Thẻ liên kết - a(anchor)

✅ Thẻ a: anchor - gắn kèm liên kết, email, phone,...

- thẻ a bắt buộc phải có thuộc tính href="url" để khai báo url mà trang sẽ được chuyển đến.
- href="" -> tải lại trang
- href="#" -> cuộn lên đầu trang

# 13 Thẻ img:

✅ `img` - là thẻ tự đóng(self closing tag) để hiển thị hình ảnh trên website

- thuộc tính src: được sử dụng để chỉ định đường dẫn tới tập tin cuả hình ảnh(source image file)
- alt: để hiển thị text khi lỗi ảnh
- hỗ trợ trình đọc màn hình cho người khiếm thị
- Công cụ tìm kiếm thu thập dữ liệu trên trang
