## 3.1 Thẻ tiêu đề h1

```
# 1. Giúp công cụ tìm kiếm hiểu nội dung trang web
# 2. Nâng cao trải nghiệm người dùng
# 3. Nâng cao khả năng tiếp cận
```

Trong HTML có 6 thẻ tiều đề từ `h1-h6`. Con số trong tên thẻ thể hiện cấp độ
(tiếng Anh: Level) của thẻ, cấp độ ở đây là việc ưu tiên thứ tự sử dụng thẻ.
Trong đó `cấp 1` là ưu tiên cao nhất, `cấp 6` là ưu tiên thấp nhất.

Thẻ `<h1>` được sử dụng làm tiêu đề chính cho trang web. Đây là phần tiêu đề nổi bật
nhất, dễ thấy nhất, mang thông điệp ngắn gọn gíup người dùng và công cụ tìm kiếm hiểu
trang web của bạn nói về điều gì.

`# 1. Giúp công cụ tìm kiếm hiểu nội dung trang web`

John Mueller của Google nói rằng: thẻ `<h1>` giúp Google hiểu cấu trúc và nội dung
của một trang web. Vì vậy, bạn nên sử dụng thẻ `<h1>` cho tiêu đề web của bạn.
| Tham khảo thêm: Đề xuất sử dụng thẻ h1 từ Google.

<hr />

`# 2. Nâng cao trải nghiệm người dùng`

Trong nhiều TH, thẻ `<h1>` là một phần trong cấu trúc phân cấp của trang web. Trong
đó thẻ `<h1>` là tiêu đề nổi bật nhất, sau đó là: `h2`, `h3`,...

<hr />

`# 3. Nâng cao khả năng tiếp cận`

Khả năng tiếp cận cho trang web(tiếng Anh: Web accessibility) đề cập đến việc
thiết kế các trang web đáp ứng cho mọi người, bao gồm cả người khuyết tật.

Vì vậy, ta có thể hiểu ngắn gọn "Web accessibility" là các phương án đề làm cho
mọi người, bao gồm cả người khuyết tật, đều có thể dễ dàng truy cập và sử dụng trang
web.

Theo nghiên cứu ngày của webAIM, 60% nguời dùng trình đọc màn hình thích tiêu đề trang web là 1 thẻ `<h1>`

| ở gần cuối khoá học, mình có một chương nói riêng về "web accessibility" các bạn nhé.

```
Tóm tắt:
- Nội dung thẻ `<h1>` giúp Google hiểu về cấu trúc và nội dung webpage(trang web)
- Chỉ nên sử dụng tối đa 1 thẻ `<h1>` trong 1 trang
- Nên sử dụng thẻ `<h1>` cho tất cả các trang quan trọng
- Thẻ `<h1>` Giúp nâng cao trải nghiệm người dùng và khả năng tiếp cận(tiếng Anh:
Web accessibility) cho trang web. Giúp mọi người, bao gồm cả người khuyết tật có thể
dễ dàng sử dụng trang web.
```

## 3.5 Thẻ tiêu đề h2

```
# 1. Tìm hiều thẻ h2
# 2. Cầu trúc phân cấp
```

`# 1. Tìm hiều thẻ h2`

Thẻ `<h2>` được sử dụng làm tiêu đề các phần chính trong một trang web. Thẻ `<h2>`
được sử dụng làm tiêu đề con của thẻ `<h1>`.

Ví dụ:

```html
<h1>Lộ trình học</h1>
<h2>Lộ trình học Frontend</h2>
<h2>Lộ trình học Backend</h2>
```

Lưu ý, thẻ `<h2>` được dùng làm tiêu đề con của thẻ `<h1>` ở đây nghĩa là về mặt trình bày và ý nghĩa sử dụng, không phải đề cập tới việc đưa thẻ `<h2>` vào bên
trong thẻ `<h1>`.

Ví dụ sử dụng sai:

```html
<h1>
  Lộ trình học
  <h2>Lộ trình học Frontend</h2>
  <h2>Lộ trình học Backend</h2>
</h1>
```

Chúng ta sẽ không lồng các thẻ `h` vào nhau khi sử dụng
Sử dụng thẻ `<h2>` trong thực tế(nhán để xem video):

`# 2. Cầu trúc phân cấp`

Sự kết hợp của các thẻ `h` trong một trang web giúp tạo nên hệ thống phân cấp
về mặt nội dung. Giúp người sử dụng và các công cụ tìm kiếm sẽ xác định được bố cục
nội dung của một trang web.

Để tự xác định được cấu trúc các thẻ `h`, đơn giản bạn chỉ cần nghĩ như lúc đang viết một bài blog:

- Tiêu đề chính của bài blog dùng thẻ `h1`
- Tiêu đề chính trong bài blog dùng thẻ `h2`
- Các ý phụ trong mỗi phần dùng thẻ `h3`
- Tương tự như vậy cho tới thẻ `h6`

Trong thực tế, cũng hiếm khi chúng ta phải sử dụng đến thẻ `h6`. Vì các nội dung
thông thường có từ `1-4` cấp độ, vậy nên chúng ta sẽ thường thấy thẻ `h1-h4` được
sử dụng. Trong đó thẻ `h1-h2` thường xuyên được sử dụng hơn cả.

```
Tóm tắt:
- Sử dụng thẻ h2 làm tiêu đề các phần chính trong trang web, đây được coi là tiêu đề
con của tiêu dề h1
- Không sử dụng các thẻ h lồng nhau
- Các thẻ h được sử dụng để tạo hệ thống phân cấp nội dung
- Xác định các thẻ tiêu đề bằng ý nghĩa nội dung của nó, không phải dựa trên kích
thước của nó.
```
