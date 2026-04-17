# Phần 7: Một số quy tắc quan trọng

## 7.1 Quy tắc đặt tên chuyên nghiệp

<pre>
Quy tắc đặt tên file, folder, class, id, function
- Có ý nghĩa: home.html
- Ưu tiên tiếng anh: detail.html
- Ký tự thuộc vào [A-Za-z0-9_]: category.html
- Bắt đầu bằng chữ cái hoặc dấu gạch dưới: text-center
- Nếu một từ nên viết thường(home.html)
- Nếu có 2 từ trở lên cần phân biệt các từ
  - Ký tự đầu tiên của từ liền sau viết hoa
  - Các từ ngăn cách nhau bởi dấu gạch ngang(text-center) hoặc gạch dưới (text_center)

</pre>

## 7.2 Cấu trúc file/folder khi xây dựng giao diện

<pre>
Cấu trúc thư mục, file của theme website giúp hệ thống trở nên khoa học, dễ dàng quản lý, chỉnh sửa trong quá trình phát triển website.

project/
|-- assets/
|   |-- css/
|   |   |-- reset.css
|   |   |-- style.css
|   |-- images/
|   |   |-- logo.png
|   |   |-- top-header.png
|   |-- js/
|   |   |-- main.js
|   |   |--jquery.js
|   |-- fonts/
|-- index.html
|-- detail.html
...

</pre>

## 7.3: Quy tắc chống sập độ cao khi sử dụng float

<pre>
Kỹ thuật  chống sập độ cao khối
Sập độ cao là hiện tượng xảy ra khi một khối cha có các khối con bên trong đồng loạt float dẫn đến độ cao của nó trở về 0.
Giải pháp sử dụng class clearfix chống sập độ cao.

Có 2 vị trí đặt:
- Trực tiếp vào div bị sập độ cao
- Thêm vào clearfix vào trước thẻ đóng của khối sập độ cao

Cách làm:
.clear-fix:afer{
  content:"";
  display:block;
  clear:both;
  visibility: hidden;
  line-height: 0;
  height: 0;
}

.clear-fix {
  clear: both;
  display: block;
}
</pre>

## 7.4: Tư duy tạo hệ thống file css dùng chung

<pre>
Tư duy tạo kho class dùng chung:
Trong quá trình xây dựng giao diện web có rất nhiều
class tính năng được dùng đi dùng lại nhiều lần.
Để tối ưu nó bạn nên tạo ra một bộ thư viện class
cho các chức năng khác nhau và dùng chung cho nhiều dự án.

Chú ý: Tạo file global.css để lưu bộ class dùng chung.
Ví dụ:
.float-left
.float-right
.text-center
.tex-left
...
</pre>

## 7.5 Quy tắc chống ảnh tràn khung

<pre>
Ảnh tràn khung là hiện tượng kích thước ảnh lớn hơn
kích thước khung dẫn đến khu vực hiển thị ảnh
tràn ra bên ngoài.

Giải pháp: mặc định cho hình ảnh có độ rộng lớn nhất 100% và độ cao tự động

Cú pháp:
img {
  max-width: 100%;
  height: auto;
}

<div class="post-thumb">
  <img src="html-css.jpg">
</div>
</pre>

## 7.6: Xây dựng định dạng hiển thị chung - reset css

<pre>
Đồng bộ đa trình duyệt với reset css
Mỗi trình duyệt có thể có các hiển thị mặc định khác nhau
với các thẻ như margin, padding, font,...
chính vì vậy để website sau khi xây dựng xong chạy ổn định
trên các thiết bị cần có thao tác reset css hiển thị theo định dạng
chung được quy định ban đầu.
=> sử dung reset css

Chú ý:
- File reset.css được đặt trên tất cả các file css trong chương trình
- Trình biên dịch sẽ chạy vào reset.css trướ, nó đóng vai trò
là một bộ lọc trước khi hiển thị theo định dạng mà chúng ta mong muốn đăng sau.

/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

</pre>
