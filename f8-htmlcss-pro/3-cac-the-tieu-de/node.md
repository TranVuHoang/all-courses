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

## 3.11 Thẻ tiêu đề h3, h4, h5, h6

```
# 1. Thẻ tiêu đề h3-h6
# 2. Tránh bỏ qua các cấp độ
# 3. Các thẻ tiêu đề và SEO
```

`# 1. Thẻ tiêu đề h3-h6`

Qua các bài học trước,chúng ta đã tìm hiểu chi tiết về thẻ `<h1>`, `<h2>`.
Trong bài này, chúng ta sẽ tìm hiểu về các thẻ `h` còn lại:

- h3
- h4
- h5
- h6

Tương tự như cách thẻ `<h2>` liên quan tới thẻ `<h1>`:

- Thẻ `<h3>` là tiêu đề con của thẻ `<h2>`
- Thẻ `<h4>` là tiêu đề con của thẻ `<h3>`
- Thẻ `<h5>` là tiêu đề con của thẻ `<h4>`
- Thẻ `<h6>` là tiêu đề con của thẻ `<h5>`

Các thẻ càng gần với `h6` càng ít được sử dụng. Bạn cũng không cần phải sử dụng
tất cả các thẻ `h`, nó tuỳ thuộc vào nội dung bạn muốn hiển thị.

Mục tiêu của việc sử dụng các thẻ `h` là để tạo ra cấu trúc phân cấp nội dung cho
trang web của bạn. Gíup người dùng và công cụ tìm kiếm có thể dễ dàng hiểu được
nội dung mà trang web đang đề cập.

<hr />

`# 2. Tránh bỏ qua các cấp độ`

Khi sử dụng các thẻ `h`, bạn nên tránh bỏ qua các cấp độ tiêu đề. Nếu bạn đang
sử dụng thẻ `h1`, thì sau đó nên là thẻ `h2`. Tránh bỏ qua thẻ `h2` mà đi tới luôn thẻ `h3`. Tương tự như vậy cho tới thẻ `h6`.

<hr />

`# 3. Các thẻ tiêu đề và SEO`

Tối ưu hoá công cụ tìm kiếm(tiếng Anh: Search Engine Optimization - SEO) là hoạt
động tối ưu trang web nhằm nâng cao thứ hạng trang web trong kết quả của công cụ
tìm kiếm.

Các tiêu dề có vai trò quan trọng trong SEO, nó cung cấp nội dung từ khoá và cấu
trúc phân cấp nội dung trang web cho các công cụ tìm kiếm. Từ đó, các công cụ tìm
kiếm như Google Search có thể đánh giá, phân tích và xếp hạng cho trang web.

```
Tóm tắt:
- Trong HTML có 5 thẻ tiêu đề từ `h1-h6`. Trong đó `h1` là cấp cao nhất,
`h6` là cấp thấp nhất.
- Các thẻ càng gần với `h6` càng ít được sử dụng. Bạn cũng không cần phải
sử dụng tất cả các thẻ `h`, nó tuỳ thuộc vào nội dung bạn muốn thể hiện
- Tránh bỏ qua các cấp độ tiêu đề. Nếu bạn đang sử dụng thẻ `h1`, thì sau đó
nên là thẻ `h2`. Tránh bỏ qua thẻ `h2` mà đi tới luôn thẻ `h3`
- Các tiêu đè có vai trò quan trọng trong `SEO`, nó cung cấp nội dung từ khoá
và cấu trúc phân cấp nội dung trang web cho các công cụ tìm kiếm.
```

## 3.15 Những sai lầm thường gặp

```
# 1. Sử dụng nhiều h1 trên cùng một trang
# 2. Sử dụng thẻ h vì nó phù hợp với kích thước phông chữ
# 3. Không tuân thủ cấu trúc tiêu đề
# 4. Hoàn toàn không sử dụng thẻ tiêu đề
# 5. Sử dụng thẻ tiêu đề cho nội dung không phải tiêu đề.
```

`# 1. Sử dụng nhiều h1 trên cùng một trang`

Thẻ `<h1>` nên được sử dụng cho tiêu đề chính cho trang web hiện tại của bạn
và nên đặt ở phần đầu nội dung của bạn. Nếu bạn có một trang nói chi tiết về
sản phẩm Laptop DELL XPS 9710x thì bạn nên sử dụng thẻ `<h1>` với tên sp đó.

```html
<h1>Laptop DELL XPS 9710x</h1>
```

Nếu sau đó bạn có đề cập tới một chiếc laptop khác là Laptop Razer 15 2022 thì
bạn nên có một trang riêng cho sản phẩm đó với tên của nó nằm trong thẻ `<h1>`

<hr />

`# 2. Sử dụng thẻ h vì nó phù hợp với kích thước phông chữ`

Lỗi này gặp chủ yếu do các nhà phát triển trang web chưa biết cách sử dụng đúng
các thẻ tiêu đề. Ví dụ: họ không sử dụng thẻ `<h1>` chỉ vì nó quá lớn so với thiết
kế mà họ đang tìm kiếm, nên họ chọn sử dụng thẻ `<h2>` hoặc `<h3>`.

Tuy nhiên, bạn chỉ cần sử dụng CSS để tạo kiểu cho các tiêu đề theo cách chúng ta muốn, vì vậy kích thước phông chữ không nên được dùng để xem xét khi quyết định lựa
chọn các thẻ tiêu đề.

<hr />

`# 3. Không tuân thủ cấu trúc tiêu đề`

Tất cả các tiêu đề nên tuân theo một cấu trúc rõ ràng. Vì vậy, một `<h2>` phải theo
sau một `<h1>`, một `<h3>` phải theo sau `<h2>`,... Bạn tránh quên điều này và hãy
nhớ thêm rằng bạn có thể dễ dàng thay đổi kích thước của các thẻ tiêu đề bằng CSS.

Ví dụ, sau đây là một cấu trúc tiêu đề tốt:

```html
<pre>
  <h1>Thú cưng phổ biến ở Việt Nam</h1>
    <h2>Chó Husky ở Việt Nam</h2>
      <h3>Chế độ ăn kiêng của chó Husky</h3>
      <h3>Đặc điểm của cho Husky</h3>
    <h2>Chuột Hamster ở Việt Nam</h2>
      <h3>Chế độ ăn kiêng cho chuột Hamster</h3>
      <h3>Đặc điểm của chuột Hamster</h3>
</pre>
```

Ví dụ trên có thể không chính xác khi nói chó Husky và chuột Hamster ở Việt Nam. Nó
chỉ là ví dụ, chúng ta sẽ không xét về việc 2 loài này có ở Việt Nam thật hay không nhé.

<hr />

`# 4. Hoàn toàn không sử dụng thẻ tiêu đề`
Điều này thường xảy ra khi nhà phát triển web chưa hiểu được ý nghĩa và tầm quan
trọng của việc sử dụng các thẻ tiêu đề.

Kết hợp sử dụng các thẻ tiêu đề giúp tạo ra cấu trúc phân cấp nội dung. Giúp người
dùng và công cụ tìm kiếm dễ dàng nắm bắt được nội dung trang web của bạn.

<hr />

`# 5. Sử dụng thẻ tiêu đề cho nội dung không phải tiêu đề.`
Điều này thường xảy ra trong quá khứ, các nhà phát triển trang web thường sử dụng
các "tricks" để "đánh lừa" công cụ tìm kiếm. Bởi vì họ biết rằng các công cụ tìm kiếm
sẽ ưu tiên cho các nội dung trong thẻ `<h>`, họ thường spam các từ khoá SEO trong thẻ
`h` trên trang web.

Ngày nay, các công cụ tìm kiếm đã rất thông minh. Các "tricks" spam từ khoá trong các
thẻ `h` không mang lại tác dụng, thậm chí còn phản tác dụng

| Nếu cần lời khuyên cho việc làm SEO tốt. Mình khuyên các bạn nên chú trọng tới việc mang lại nội dung có giá trị thực sự cho người sử dụng. Các công cụ tìm kiếm ngày nay đủ thông minh để đánh gía được trang web của bạn thực sự tốt cho người
dùng từ đó nâng cao thứ hạng của trang web trong kết quả tìm kiếm.

```
Tóm tắt:
- Nên sử dụng tối đa một thẻ <h1> trên cùng 1 trang
- Không sử dụng thẻ `h` chỉ vì nó phù hợp với kích thước font chữ
- Nên tuân thủ cấu trúc các thẻ `h` để tạo ra cấu trúc phân cấp cho nội dung webpage
- Làm SEO tốt là mang lại giá trị nội dung đích thực cho nguời sử dụng. Không nên
spam các từ khoá trong các thẻ tiêu đề nhằm "đánh lừa" công cụ tìm kiếm.

```
