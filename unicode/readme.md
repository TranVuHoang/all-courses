1. Lập trình web là gì?

- Sử dụng các kỹ thuật lập trình thông qua ngôn ngữ lập trình web
- Tạo ra các trang web hoạt động trên môi trường internet
- Ngôn ngữ(ngôn ngữ đánh dấu, ngôn ngữ makeup, ngôn ngữ lập trình): HTML, CSS, Javascript, PHP,...

2. Thiết kế web là gì?

- Sử dụng các kỹ thuật đồ họa thông qua các phần mềm thiết kế đồ hoạ -> giao diện của website
- Định dạng ảnh, định dạng html
- Phần mềm sử dụng: Photoshop, XD, AI,...

3. Lộ trình học lập trình web
   3.1 Frontend

- HTML(Ngôn ngữ đánh dấu siêu văn bản): Tạo bộ khung, nội dung
- CSS(ngôn ngữ make up)
- Javascript(ngôn ngữ lập trình)
- jQuery, Plugin của jQuery
- Front-end Framework: Bootstrap
- Thư viện: Font-Awesome, Owl carousel, Fancybox,...
- Responsive Web Design
- Frame work Javascript: Reactjs, Vuejs, Angular,...

  3.2 Back-End

- PHP
- SQL (NoSQL)
- MySQL, SQL Server, MôngDB(NoSQL)
- PHP & MySQL
- Lập trình website, sử dụng PHP & MySQL (PHP thuần)
- Lập trình hướng đối tượng(OOP)
- MVC (Model-Contoller-View)
- Lập trình website sử dụng OOP + MVC
- Xử lý ảnh (Tạo captcha, đóng dấu logo), CURL, API, gửi email, thư viện: PHPExcel, PHPPDF,...
- PHP Framework: Laravel, Cake, Zend,...
- CMS(Content Management System): WordPress, Opencart, Magento,...
- GIT: công cụ quản lý phiên bản
- Server, tên miền: Deploy webssite lên môi trường internet

4. Phương pháp học lập trình web

- Không học lý thuyết xuông
- Học chắc kiến thức cơ bản, giải thuật, thuật toán,...
- Hiểu bản chất
- Phương pháp: lý thuyết(không học hết) => thực hành
  => Làm dự án(module nhỏ, chức năng cơ bản sau đó đi lên chức năng khó) => lý thuyết => làm dự án

5. Học lập trình web xong làm gì?

- Front-End Developer
- PHP Developer(Laravel Framework, Codigniter)
- Kết hợp front-end và back-end
- WordPress Developer
- Web Fullstack Developer
- Freelancer
- Kết hợp giữa làm thuê và Freelancer
- Products: Làm sản phẩm -> cho thuê hoặc bán, Plugin CMS, package framework,...

## 2

Website được cấu tạo như thế nào?

- HTML + CSS + Javascript
- Fonts
- Images, Icons,
- Chrome Dev

Website hoạt động như thế nào?
Yêu cầu => gửi đến server => server xử lý
(database) => trả về dưới dạng html/css hiển thị giao diện người dùng => gửi tiếp yêu cầu => server xử lý => trả về dạng html

Trình duyệt hoạt động như nào?
Người dùng gửi yêu cầu => server tiếp nhận => xử lý => trả kết quả cho trình duyệt(thông tin, nội dung html) => kiểm tra: css, js, ảnh, icon, fonts

Công cụ chuẩn bị:

- Phần mềm viết code: Vscode, Sublime Text, PHPStorm,...
- Phần mềm tạo server ảo(Localhost): Xampp

# Module 2: Ngôn ngữ HTML

<pre>
1. Giới thiệu ngôn ngữ HTML
- Html là ngôn ngữ đánh dấu siêu văn bản để hiển thị nội dung trang web(trình duyệt sẽ biên dịch html để hiển thị nội dung trang web cho người dùng.)
- Html được cấu tạo bởi các thẻ(tag)
- html không phải ngôn ngữ lập trình
- html có trên 80 thẻ
- ví dụ: <p> đây là đoạn văn bản </p>

Làm sao để nhớ các thẻ html?
- Nhớ theo chức năng
- Nhớ theo loại thẻ: thẻ đủ và thẻ rỗng
- nhớ theo nhóm thẻ: block và inline

Cấu trúc trang html
<!doctype html>
<html>
<head>
  <title>Tiêu đề trang web</title>
  <meta charset="utf-8">
</head>
<body>
  Nội dung trang web
</body>
</html>

 Nguyên tắc khi viết html
 - Mở và đóng thẻ html đúng theo thứ tự
 - Các thẻ html có thể lồng nhau(nhưng phải tuân thủ quy định về đóng mở)
 - Thẻ inline nằm trong thẻ block( về mặt hiển thị có thể viết ngược lại, nhưng không chuẩn w3school)
 - trang web kiểm tra w3c:
    - https://www.freeformatter.com
    - https://validator.w3.org

Các nhóm thẻ html trong nhóm block
- thẻ heading: h1 -> h6
- thẻ paragraph: <p> Nội dung </p>
- Thẻ phân chia khu vực: <div>Nội dung </div>
- Thẻ danh sách:
    - Theo thứ tự: <ol><li></li></ol>
    - không theo thứ tự: <ul><li></li></ul>
- Thẻ <nav>
- Thẻ <header >
- Thẻ <section>
- Thẻ <article>
- Thẻ <aside>
- Thẻ <footer>
- Thẻ <figure> - <figcaption>
- Thẻ trích dẫn: <blockquote> Nội dung </blockquote>
</pre>
