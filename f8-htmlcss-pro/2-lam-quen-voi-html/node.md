# Chương 2: Làm quen với HTML

## 2.1 Vai trò của HTML, CSS, Javascript

<pre>
HTML (Hyper Text Markup Language) - Ngôn ngữ đánh dấu siêu văn bản,
CSS (Cascading Style Sheets) - Các tập tin định kiểu theo tầng
Javascript là ngôn ngữ lập trình kịch bản
=> Chúng là 3 ngôn ngữ để phát triển web mà trình duyệt có thể hiểu.
Chúng là các ngôn ngữ khác nhau nhưng có quan hệ mậ thiết với nhau,
mỗi ngôn ngữ được thiết kế cho những nhiệm vụ cụ thể.
Việc hiểu rõ được cách chúng làm việc với nhau sẽ giúp bạn sớm
trở thành một nhà phát triển web chuyên nghiệp.

Trước tiên bạn cần nắm được:
  - HTML dùng để thêm ý nghĩa cho nội dung bằng cách đánh dấu nó.
  - CSS dùng để định dạng cho nội dung đã được đánh dấu bởi HTML
  - Javascript dùng để thêm chức năng giúp người dùng có thể tương tác nhiều hơn trang web

Hãy tưởng tượng HTML là phần khung xương của một trang web, CSS là những gì bạn nhìn thấy trên trang web và Js là các hành vi có thể thao tác trên trang web.
</pre>

## 2.3 Chi tiết về ngôn ngữ HTML

<pre>
Ngôn ngữ HTML

# 1. Giới thiệu HTML
# 2. Ngôn ngữ đánh dấu
# 3. Siêu văn bản
# 4. Cú pháp HTML cơ bản

# 1. Giới thiệu HTML

HTML (viết tắt của: Hyper Text Markup Language, ý nghĩa: Ngôn ngữ đánh dấu siêu
văn bản). Đúng vậy, HTML là ngôn ngữ đánh dấu, nó cung cấp cú pháp để đánh dấu
nội dung và không chứa logic lập trình chẳng hạn như if...else.

| HTML là ngôn ngữ đánh dấu, HTML không phải là một ngôn ngữ lập trình |

# 2. Tại sao HTML được gọi là ngôn ngữ đánh dấu

Hiểu đơn giản , ngôn ngữ đánh dấu sẽ giúp bạn có thể đánh dấu nội dung theo cách mang lại
ý nghĩa cho nội dung đó. Hãy tưởng tượng, bạn đang sử dụng một trình soạn thảo và muốn in nghiêng một đoạn văn bản.
Hãy xem ví dụ dưới đây:
<em >"Hôm nay là một ngày đẹp trời"</em>

Việc bạn chọn đoạn văn và in nghiêng chúng chính là một ví dụ cho việc đánh dấu, và trong HTML chúng ta sẽ đánh dấu nội dung bằng cách sử dụng thẻ mở và thẻ đóng.
Tương tự như ví dụ trước, nhưng sử dụng HTML để đánh dấu:

&lt;em&gt; Hôm nay là một ngày đẹp trời &lt;/ em&gt;
kết quả: <em>"Hôm nay là một ngày đẹp trời"</em> (được in nghiêng)

Bản chất của việc xây dựng giao diện trang web là xác định các thành phần nội dung và
đánh dấu chúng bằng các thẻ HTML. Để tạo ra giao diện trang web hoàn chỉnh chúng ta sẽ cần sử dụng thêm CSS.

# 3. Siêu văn bản

Siêu văn bản (tiếng Anh: hypertext) là loại văn bản chứa nhiều loại dữ liệu khác nhau như: văn bản âm thanh, hình ảnh, video,... và các siêu liên kết đên các siêu văn bản khác. Trong khi đó, văn bản thông thường(không phải siêu văn bản) chỉ bao gồm nội dung văn bản và hình ảnh. Ví dụ: một tờ báo, các trang trong một cuốn sách,... không phải là siêu văn bản.

✅ "Chính trang web này là một siêu văn bản. Tới dược bài học này, chắc hẳn bạn đã
trải qua nhiều loại nội dung khác nhau như: văn bản, hình ảnh, video,... và các
siêu liên kết. Như vậy, bạn có thể kết luận các trang web chính là siêu văn bản và
HTML là ngôn ngữ để tạo ra chúng."

# 4. Cú pháp HTML cơ bản

Cú pháp cơ bản của HTML bao gồm thẻ mở và thẻ đóng.
Quan sát ví dụ sau:

&lt;h1&gt;Hôm nay là một ngày đẹp trời&lt;/h1&gt;

Trong ví dụ trên, chúng ta có 1 thẻ `h1`
Thẻ `h1` này được tạo nên từ thẻ mở &lt;h1&gt; và thẻ đóng &lt;/h1&gt;.

Trong HTML có rất nhiều thẻ. Tuy nhiên, trong bài này chúng ta chưa đề cập tới số lượng
các thẻ và ý nghĩa của chúng. Mục đích của bài này là các bạn nắm được cú pháp cơ bản khi sử dụng các thẻ trong HTML.

[                                                                                        ]
  Tóm tắt:
  - HTML là ngôn ngữ đánh dấu siêu văn bản(viết tắt của: Hypertext Markup Language)
  - HTML là ngôn ngữ đánh dấu, không phải là một ngôn ngữ lập trình.
  - Siêu văn bản(tiếng Anh: hypertext) là loại văn bản chứa nhiều loại dữ liệu khác nhau
  như: văn bản, âm thanh, hình ảnh, video,...và các siêu liên kết.
  - Cú pháp cơ bản của HTML bao gồm thẻ mở và thẻ đóng.
[                                                                                       ]
</pre>

## 2.7 Giới thiệu bài thử thách

<pre>
Sử dụng thẻ i để đánh dấu đoạn văn:

Dùng thẻ &lt;i&gt; để đánh dấu đoạn văn bản: `một ngày đẹp trời`
Example: Hôm nay là &lt;i&gt;một ngày đẹp trời&lt;/i&gt;

Result: Hôm nay là <em>một ngày đẹp trời.</em> (pass)

</pre>

## 2.10 Cấu trúc tiêu chuẩn của file HTML

<pre>
Cấu trúc file HTML

# 1. doctype
# 2. thẻ html
# 3. thẻ head
# 4. thẻ body

Mỗi file HTML sẽ phần đuôi mở rộng `.html`. Ví dụ: `index.html`, `product.html`,
`contact.html`,...

Tên file xuất hiện trong các bài học thử thách:
`index.html`

Nội dung của mỗi file HTML cần tuân thủ theo cấu trúc tiêu chuẩn sau:
</pre>

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Các thẻ meta ở đây -->
  </head>
  <body>
    <!-- Nội dung trang web ở đây -->
  </body>
</html>
```

```
Trong đoạn code trên có 4 thành phần:
  - Khai báo <!doctype html>
  - Thẻ <html>
  - Thẻ <head>
  - Thẻ <body>
```

```
# 1. DOCTYPE
Đây là khai báo kiểu cho tài liệu HTML, còn được gọi là DOCTYPE, là dòng code đầu
tiên cần được khai báo trong mọi file HTML.

Khai báo DOCTYPE:
```

```html
<!doctype html>
```

```
Khai báo DOCTYPE có ý nghĩa hướng dẫn cho trình duyệt web hiểu về phiên bản HTML mà trang web đang sử dụng.
Điều này đảm bảo rằng trang web của bạn được xử lý giống nhau trên nhiều trình duyệt khác nhau.

Đảm bảo rằng bạn DOCTYPE ngay đầu tài liệu HTML của mình mà không có bất cứ nội dung
gì trước đó để đảm bảo khai báo này hoạt động đúng đắn trên mọi trình duyệt.

```

```
# 2. Thẻ HTML
Toàn bộ trang web được bao bọc trong cặp thẻ `html` (gồm thẻ mở <html> và thẻ đóng </html>).
Thẻ <html> (hay phần tử <html>) còn được gọi là phần tử gốc(tiếng Anh: root) đây là phần tử cấp cao nhất vì tất cả các phần tử khác đều là con của phần tử này.
```

```html
<!doctype html>
<html>
  <!-- Toàn bộ nội dung trang web nằm ở đây -->
</html>
```

```
Trong thực tế, các trang web sẽ sử dụng thêm thuộc tính `lang` trong thẻ `html`,
điều này nhằm chỉ định ngôn ngữ được sử dụng trong nội dung trang web.

Ví dụ trang web của bạn có nội dung bằng tiếng Việt:
```

```html
<!doctype html>
<html lang="vi">
  <!-- Toàn bộ nội dung trang web nằm ở đây -->
</html>
```

Trong trường hợp nội dung là tiếng Anh:

```html
<!doctype html>
<html lang="en">
  <!-- Toàn bộ nội dung trang web nằm ở đây -->
</html>
```

Các công cụ dịch ngôn ngữ(ví dụ: Google translate) hay các trình đọc màn hình
(screen reader) sẽ sử dụng thuộc tính này để nhận biết được ngôn ngữ của trang web
một cách chính xác.

```
# 3. Thẻ head
Thẻ <head> là nơi chứa các thẻ meta(meta - là các thẻ cung cấp thêm thông tin hiển thị của trang web).
Ví dụ: tiêu đề trang web, các đường link tới file CSS, khả năng thu/ phóng của trang web,...
Sử dụng thẻ <head> trong the <html>:
```

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Các thẻ meta ở đây -->
    <!-- Các đường link css ở đây -->
    <!-- ... -->
  </head>
</html>
```

```
# 4. Thẻ body
Thẻ <body> là nơi chứa toàn bộ nội dung hiển thị của website.
Mọi nội dung bạn từng nhìn thấy trên các trang web đều nằm trong thẻ <body>.

Sử dụng thẻ <body> trong thẻ <html>:
```

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Các thẻ meta ở đây -->
  </head>
  <body>
    <!-- Nội dung trang web ở đây  -->
  </body>
</html>
```
