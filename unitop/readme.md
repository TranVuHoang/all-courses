# 2 Công thức 5 bước học hiệu quả

- 1. Ghi chép - tóm tắt bài học
- 2. Thực hành ngay
- 3. Làm bài tập, đồ án đầy đủ
- 4. Đăng bài lên nhóm reviews - nhận biết lỗi sai
- 5. Cải tiến tối ưu

# 3. 4 THIẾT BỊ CẦN CHUẨN BỊ

- 1.Máy tính
- 2. Mạng internet
- 3. Môi trường học tập yên tĩnh: phòng trọ, thư viện, trung tâm học liệu
- 4. Sổ ghi chép mục tiêu, bài học, nháp

# 4. THIẾT LẬP MỤC TIÊU

- Tôi là: TRẦN VŨ HOÀNG, tôi quyết định hoàn thành chương trình HTML CSS 21 ngày trong 1 tuần
- Lý do: đi làm tuyển dụng vị trí kỹ sư Vinfast JSC, và theo đổi em Trangg xinh yêu
- Thời gia: từ ngày 24/02/2026 - 1/3/2026

# 5. KẾT HOẠCH HỌC TẬP

- 1. Học mỗi ngày bao nhiêu giờ?
- 2. Học vào buổi nào?
- 3. Khung giờ tập trung?
- 4. Đưa ra checklist bài cần học mỗi ngày
     => Nên đảm bảo ít nhất 2-3 giờ tập trung, nếu nhiều thời gian có thể học 8-12h

# 6. CÀI ĐẶT XAMPP ✅

# 7. CÀI ĐẶT TRÌNH SOẠN THẢO VSCODE ✅

# 8. QUY TRÌNH CHẠY DỰ ÁN ĐẦU TIÊN TRÊN SERVER

- 1. Tạo dự án trên htdocs( với backend)
- 2. Đưa dự án vào visual studio code
- 3. Xây dựng dự án
- 4. Khởi động xampp, run apache
- 5. Truy cập vào dự án trên trình duyệt http://localhost/yourProject

# 9. TẠO CẤU TRÚC FILE THƯ MỤC VÀ THÊM VÀO VSCODE

- Tạo dự án trong htdocs, và kéo thả vào vscode

# 10. CHẠY DỰ ÁN VỚI LIVE SERVER

- Live server là extension của vscode giúp chạy dự án realtime ở trên trình duyệt
- Lợi ích:
  -- Nhanh
  -- Tiện lợi
  -- Thấy ngay kết quả khi lưu code

# 11. CẤU TRÚC HTML CỦA WEBSITE

- HTML LÀ GÌ?
- Html là ngôn ngữ đánh dấu siêu văn bản - Hyper Text Markup Language
- Các phần tử html được định nghĩa bởi các thẻ
- Html mô tả cấu trúc website thông qua các thẻ - được ví như là "sương sống" của website
- Trình duyệt không hiển thị các thẻ mà hiển thị nội dung theo định dạng của thẻ
- Thẻ html định nghĩa nhiều nội dung như: Tiêu đề, đoạn văn, hình ảnh, form...

# 12. Chú thích(comment) code html

- phím tắt: ctr/cmd + /
- Tác dụng: dùng để chú thích cho dòng code, đoạn code, tạo sự rõ ràng, dễ hiểu cho bản thân và người đọc code
- Thẻ chú thích nó chỉ có tác dụng cho người lập trình viên, không có tác dụng trong biên dịch hiển thị giao diện

# 13. Thẻ định nghĩa tiêu đề nội dung

- Thẻ heading: h1 -> h6
- Tác dụng: hiển thị tiêu đề, dễ đọc, dễ nắm bắt tạo trải nghiệm tốt cho người đọc
- Công cụ khai báo nội dung cho Google biết nội dung quan trọng của website
- Hiển thị: kích thước giảm dần từ h1 đến h6
- Note: trong 1 trang web thẻ h1 chỉ được phép xuất hiện duy nhất 1 lần, và nó thường nằm ở đầu trang web

# 14. Thẻ định nghĩa đoạn văn bản trong website

- Thẻ p: `paragraph`
- Tác dụng: dùng để định nghĩa hiển thị nội dung là văn bản trên website, có thể là bài báo, nội dung mô tả sản phẩm
- Hiển thị: văn bản hiển thị như kiểu word, text hiển thị trừ trái sang phải, từ trên xuống dưới.

# 15. Tạo văn bản demo 1 cách nhanh tróng với lorem

- Cách dùng: lorem + tab hoặc lorem{number(số từ)} + tab

# 16. Thẻ xuống dòng nội dung trong website

- Thẻ br(xuống dòng)
- Tác dụng: Dùng để xuống dòng nội dung ngay tại vị trí khai báo thẻ
- Hiển thị: Nội dung phía sau thẻ </br> được xuống dòng. Nếu dử dụng nhiều thẻ `<br>` đồng thời sẽ xuống dòng bấy nhiêu dòng tương ứng.

# 17. Thêm thẻ hình ảnh vào website

- Thẻ `img` hình ảnh
- Tác dụng: thẻ `img` giúp hiển thị hình ảnh trong website
- Thuộc tính:
  -- src: chứa đường dẫn của hình ảnh
  -- alt: mô tả hình ảnh khi ảnh không được load -> tốt cho SEO web
  -- title: hiển thị tiêu đề hình ảnh

# 18. 2 loại đường dẫn trong website

- Đường dẫn tương đối:
  Đường dẫn dùng để kết nối tài nguyên trong cùng 1 dự án như hình ảnh, trang html. Đường dẫn được tạo ra từ mối tương quan file gọi và đối được gọi. (nên dùng)
- Ví dụ đường dẫn tương đối: `./images/img1.png`

- Đường dẫn tuyệt đối:
  Đường dẫn đến phần tử thông qua

# 19. Thiết lập thẻ liên kết trong website

- Thẻ `a`
- Tác dụng: Thẻ `<a>` giúp tạo mạng lưới liên kết các trang trong cùng 1 trang web và tạo sự liên kết giữa nhiều website với nhau
- Thuộc tính:
  -- `href`: khai báo đường dẫn liên kết
  -- `target`: có value: \_blank, ...

# 20. Tạo mục lục nội dung bài viết trong html

- Tác dụng: Dùng để liên kết nhanh đến nội dung cần xem trong bài viết
- Cách hoạt động: Kết nối link ở mục lục với tiêu đề ở nội dung cần đọc
- ví dụ:
<pre>
     <a href="#part-1"> Mục luc </a>
     <h2 id="part-1"> Tiêu đề 1 </h2>
</pre>

# 21. Thẻ in đậm, in nghiêng, gạch chân text

- Tác dụng: in đậm đậm(b)b, in nghiêng(i), gạch chân (u)

# 22. Tên file HTML làm trang chủ website

- webpage.com
  |-- index.html
  |-- category.html
  |-- detail.html
  |-- images/
  |-- css/
  |-- js/

# 25. Thẻ danh sách không thứ tự

- Thẻ ul - li
- Tác dụng: Hiển thị nội dung dạng danh sách, có cấu trúc lặp đi lặp lại như: Menu, danh sách bài viết, danh sách sản phảm...
- Tác dụng: Một số type: disc, square, circle, none...

# 26. Thẻ danh sách có thứ tự ol

- Thẻ ol - li
- Tác dụng: Hiển thị nội dung dạng danh sách có thứ tự, như đề mục từn phần trong một nội dung.
- Type: một số type: a, A, i, I, 1

# 2.17: Thẻ hiển thị thông tin phụ(số lượng, mô tả phụ)

<pre>
Thẻ định dạng thông tin phụ
Tác dụng:
Dùng để hiển thị thông tin phụ trên website như: số lượng, giá,...
<!-- Giá sản phẩm -->
<span> Giá: 500.000đ</span>
<!-- Số lượng comment -->
<span class="num-comments">100</span>
</pre>

# 2.18: Thẻ định dạng gạch ngang text (giá cũ)

<pre>
Thẻ gạch ngang text(giá cũ)
<body>
  <!-- Giá cũ -->
  <del>250.000đ</del>
</body>
Tác dụng: Gạch ngang một đoạn text mà chúng ta muốn cho người dùng biết nội dung đó không còn giá như: Giá cũ
</pre>

# 2.19: Hiển thị thông tin dạng bảng trong website

<pre>
<table border="1">
      <thead>
        <tr>
          <th rowspan="2">#</th>
          <th colspan="2">Sản phẩm</th>
        </tr>
        <tr>
          <th>Tên sản phẩm</th>
          <th>Giá tiền</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Iphone 17 pro max 1TB</td>
          <td>43.990.000đ</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Samsung galaxy S25 ultra</td>
          <td>23.990.000đ</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Iphone 17 pro max 1TB</td>
          <td>43.990.000đ</td>
        </tr>
      </tbody>
    </table>
    Tác dụng: Dùng để hiển thị dữ liệu bảng như danh sách user, đơn hàng, tính năng sản phẩm,...
    Thuộc tính:
    border: thiết lập border
    rowspan: nhóm hàng
    colspan: nhóm cột
</pre>

# 2.21: Tạo tiêu đề phần tử form - auto focus

<pre>
Tác dụng: Sử dụng label để hiển thị tiêu đề của input, kết hợp tạo hiệu ứng auto focus vào input khi click vào label
for="username"
id="username"

Ex:
<label for="username">Tên đăng nhập</label>
<input type="text" name="username" id="username">
</pre>

# 2.22: [HTML5] Tạo phần tử form nhập dữ liệu email, số lượng

<pre>
Form nhập dữ liệu email - number
Tác dụng: Nhập dữ liệu email, số lượng(số nguyên)
min="0"
max="10"

Ex:
<input type="email" name="email">
<input type="number" name="amount">
</pre>

# 2.23: [HTML5]Tạo phần tử form nhập dữ liệu ngày tháng

<pre>
Tạo input nhập dữ liệu ngày/ tháng/ năm
Form nhập dữ liệu ngày tháng(date)
`Tác dụng`: nhập dữ liệu ngày tháng một cách tiện lợi qua cửa sổ ngày tháng.
type="date"

<label for="birth"> Ngày sinh</lable>
<input type="date" name="birth" id="birth">
</pre>

# 2.24: Tạo phần tử form select box

<pre>
Form nhập dữ liệu select box
Tác dụng: Nhập dữ liệu theo kiểu dropdown, chọn một trong nhiều lựa chọn

Ex:
  <form action="">
    <label for="city">Thành phố: </label>
    <select name="city" id="city">
      <option value="">Chọn thành phố</option>
      <option value="1">Hà Nội</option>
      <option value="2">Hải Phòng</option>
      <option value="3">Hưng Yên</option>
    </select>
  </form>
</pre>

# 2.25: Tạo phần tử form radio box

<pre>
Form nhập dữ liệu radio box
Tác dụng: tạo ra hộp chọn một trong 1 vài lựa chọn như: giới tính
Ex:

</pre>

# 2.26: Form nhập dữ liệu checkbox

<pre>
Tạo input nhập dữ liệu kiểu Check box
Tác dụng: Giúp chọn một hoặc nhiều lựa chọn trong một danh sách.

Ví dụ: Chọn sở thích, chọn môn học

    <form action="">
      <label for="hobby">Chọn sở thích:</label><br />
      <input type="checkbox" name="hobby" value="book" id="book" />
      <label for="book">Đọc sách</label><br />
      <input type="checkbox" name="hobby" value="shopping" id="shopping" />
      <label for="shopping">Mua sắm</label><br />
      <input type="checkbox" name="hobby" value="music" id="music" />
      <label for="music">Nghe nhạc</label><br />
    </form>
</pre>

# 2.27: Form nhập dữ liệu textarea

<pre>
Form nhập dữ liệu đoạn văn bản
Tác dụng: Giúp nhập liệu nội dung văn bản tổ chức nhiều dòng, ví du:
chi tiết bài viết, chi tiết sản phẩm,...
Thuộc tính:
cols: số hàng
rows: số cột

Ví dụ: Chọn sở thích, chọn môn học
      <form action="">
      <label for="post">Chi tiết bài viết</label><br /><br />
      <!-- Lưu chi tiết bài  -->
      <textarea name="post" id="post" cols="60" rows="10"></textarea>
      </form>
</pre>

# 2.28: Phần tử form lưu trữ dữ liệu ngầm

<pre>
Phần tử form lưu trữ dữ liệu ngầm
Tác dụng:
Thẻ giúp lưu trữ dữ liệu ngầm(không do người dùng nhập) gửi lên server
Chú ý: Được áp dụng nhiều khi làm việc với PHP
<input type="hidden" name="redirect-to" value="http://unitop.vn">
</pre>

# 2.29: Phần tử submit dữ liệu form

<pre>
Submit dữ liệu form lên server
    <form action="">
      <input type="submit" value="login" name="btn-login" />
      <button name="btn-reg">Register</button>
    </form>
</pre>

# 2.30: Thẻ div phân chia layout website

<pre>
Thẻ div phân chia layout
Tác dụng:
thẻ div dùng để chia layout web thành những khu vực cụ thể. Giúp dễ quản lý và quyết định cách hiển thị của từng phần
    <div class="container">
      <div id="header">Header</div>
      <div id="content">Content</div>
      <div id="footer"></div>
    </div>
</pre>

# Phần 3: Nhập môn Css

## 3.1: Giới thiệu css và một số thuộc tính cơ bản

<pre>
CSS là gì?
CSS là viết tắt của: Cascading Style Sheets
CSS quyết định cách các thẻ html hiển thị trên màn hình, trên nhiều thiết bị khác nhau(responsive)
CSS có thể điều khiển hiển thị nhiều trang cùng một lúc
CSS có thể lưu tách riêng với nội dung html bằng tập tin đuôi .css
CSS nhúng vào html dễ dàng qua 3 cách(inline, internal, external)

Ví dụ:

#wrapper {
  width: 960px;
  margin: 0 auto;
}
p{
  color: #333;
}
</pre>

# 3.2: Cú pháp viết code css

<pre>
Cú pháp viết code css
Chú thích:
selector: Bộ chọn
property: Thuộc tính
value: Giá trị thuộc tính

Chú ý:
Mỗi style (property: value) kết thúc bằng dấu chấm phẩy(;)
Ví dụ:
selector {
  property-1: value-1;
  property-2: value-2;
}
#container {
  width: 960px;
  margin: 0 auto;
  border: 1px solid black;
  padding: 20px;
}
</pre>

# 3.3 Ba cách nhúng css vào html

<pre>
  3 Cách:
  Cách 1: inline - viết css trực tiếp trên thẻ html
  Cách 2: internal: Thêm một khối css vào html
  Cách 3:external: Nhúng css qua link mở rộng .css
  Chú ý:
  Khi vào dự án thường file lưu css riêng(external) để dễ quản lý
  Ví dụ:
</pre>
  <!-- inline css -->
  <h1 style="color: red;"> Lorem ipsum </h1>
  <!-- internal css -->
  <style>
    h1 {
      color: rgb(1, 117, 162);
    }
  </style>
  <!-- external css  -->
  <link rel="stylesheet" href="./style.css">

# 3.4 Cách comment code css

<pre>
  /* =======SECTION====== */
  /* -----Sub Section----- */
  /* comment line */

  Tại sao cần comment code css

  - Chú thích ý nghĩa của đoạn code
  - Chú thích ý nghĩa của dòng code
</pre>

# 3.5 Selector toàn cục universal

<pre>
   Uinversal selector
   Tác dụng: Bộ chọn phổ quá* tác động đến bất kỳ phần tử nào
</pre>

# 3.6 Selector Element Html

<pre>
  Tác dụng:
  Bộ chọn là tất cả các phần tử html khớp với tên thẻ html được chỉ ra

  h6 {
  color: red;
  }
  p {
  fontsize: 14px;
  }
</pre>

# 3.7 Class Selector

<pre>
  Tác dụng:
  Bộ chọn là tất cả các phần tử html có class được chỉ ra

  .text-center {
  text-alin: center;
  }
  .text-red {
  color: red;
  }

</pre>

# 3.8 Khái niệm id và cách sử dụng selector id

<pre>
  Tác dụng:
  id là nhãn dùng để định dạng một phần tử và nó duy nhất trong trang.
  Bộ chọn là phần tử html có id được chỉ ra.

  #header {
    background: #333;
    padding: 10px 0;
    text-align: center;
  }
</pre>

# 3.9 Selector con cháu, hậu duệ

<pre>
  selector1 selector2 {
    <!-- khai báo style -->
  }
  Tác dụng:
  Chọn tất cả các phần tử thuộc selector2 và có tổ tiên là selector1
  ul a {
    color: blue;
    font-size: 15px;
  }
</pre>
# 4.1 Thiết lập font chữ cho text
font-family: ...;
Tác dụng:
Thuộc tính định nghĩa font chữ cho text, Text có thể có một hoặc nhiều font
Chú ý:
Mỗi font cách nhau bởi dấu phẩy(,)
font có nhiều từ có dấu