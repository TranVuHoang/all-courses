# Chương 5: Chữ đậm, chữ nghiêng

## 5.1 thẻ strong và thẻ b

```
# 1. Giống nhau
# 2. Khác nhau
# 3. Trường hợp sử dụng
```

Trong các bài học trước, chúng ta đã biết thẻ `<b>` được sử dụng để in đậm nội
dung. Trong bài này này, chúng ta sẽ ôn lại kiến thức và tìm hiểu thêm về thẻ
`<strong>` các bạn nhé.

`# 1. Giống nhau`

Thẻ `<b>` và `<strong>` giống nhau về cách hiển thị, các trình duyệt hiển thị nội dung của 2 thẻ này dưới dạng chữ in đậm.

Ví dụ:

```html
<p>
  <b>Xin chào!</b>
</p>
<p>
  <strong>Xin chào!</strong>
</p>
```

`# 2. Khác nhau`

Thẻ `<b>` và `<strong>` khác nhau về ngữ nghĩa và mục đích sử dụng.

Thẻ b

Thẻ `<b>` thường được sử dụng để in đậm một đoạn văn bản, nhằm thu hút sự chú ý
của người đọc vào nội dung này.

Thẻ strong

Thẻ `<strong>` sử dụng khi muốn thể hiện sự quan trọng, nghiêm trọng, khẩn cấn,...

```html
<p>
  Học và viết code luôn trên trang web, <b>có rất nhiều bài tập</b> sau mỗi
  video, bạn sẽ làm được 8 dự án sau khoá học này.
</p>

<p>
  Lưu ý: Để đảm bảo hệ thống không quá tải, F8
  <strong>chỉ pre-order 500 xuất</strong> trong đợt này.
</p>
```

<hr />

`# 3. Trường hợp sử dụng`

Phần lớn thời gian chúng ta sử dụng thẻ `<b>` và `<strong>` là vì chúng ta muốn
in đậm một phần nội dung. Trong thực tế, đôi khi việc lựa chọn thẻ `<b>` hay
`<strong>` có thể là sự ngẫu nhiên của người viết code(trong trường hợp chưa nắm
được ngữ nghĩa của thẻ).

Vậy sử dụng 2 thẻ này như nào cho đúng?

Các bạn có thể tuân thủ theo cách sau:

- Khi muốn in đậm nội dung: sử dụng thẻ `<b>` hoặc CSS, với mục đích in đậm để
  gây sự chú ý thông thường thì sử dụng thẻ `<strong>` chưa hợp lý về ngữ nghĩa.

- Khi muốn thể hiện nội dung là quan trọng: sử dụng thẻ `<strong>` là hợp lý,
  thẻ `<b>` hoặc CSS sẽ chưa hợp lý vì không có ngữ nghĩa thể hiện sự quan trọng.

```
Tóm tắt:
- Nội dung trong thẻ <b> và <strong> đều được trình duyệt hiển thị dưới dạng
chữ in đậm, kết quả hiển thị là giống nhau.
- Sự khác nhau giữ <b> và <strong> là về mặt ngữ nghĩa sử dụng
- Thẻ <b> sử dụng khi đơn giản là muốn gây sự chú ý vào một nội dung
- Thẻ <strong> sử dụng khi muốn thể hiện sự quan trọng, nghiêm trọng, khẩn cấp,...
```

## 5.6 Thẻ strong với headings

Tình huống sử dụng

Khi làm việc, đôi khi chúng ta có thể bắt gặp một thiết kế tương tự như dưới đây.
Ví dụ:

```html
<style>
  .highlight {
    -webkit-text-fill-color: transparent;
    background: -webkit-linear-gradient(45deg, #5ebbff -33%, #a174ff 69%);
    -webkit-background-clip: text;
    background-clip: text;
  }
</style>
<h1>
  Cách dễ nhất để học <strong class="highlight">HTML CSS</strong> cho người mới
  bắt đầu
</h1>
```

Ví dụ trên mình đã sử dụng CSS để thay đổi màu chữ cho giống thiết kế. Tuy nhiên,
vì chúng ta chưa học tới CSS nên mình sẽ giải thích ý nghĩa của chúng trong chương
học về CSS nhé.

Vậy trong ý 1, nhiệm vụ của chúng ta là thêm 1 thẻ HTML để bao bọc các từ
"HTML CSS". Câu hỏi đặt ra ở đây là: Chúng ta sẽ sử dụng thẻ nào là hợp lý?

Hãy ưu tiên chọn thẻ theo trình tự sau:

1. Đúng về ngữ nghĩa (HTML Sematic), mục đích sử dụng của thẻ.
2. Độ phù hợp về styles mặc định của thẻ so với thiết kế

Nếu chúng ta phải cân nhắc về ngữ nghĩa và styles thì chúng ta nên chọn ngữ nghĩa, có 2 lý do chính:

1. Mỗi thẻ HTML được tạo ra là có mục đích
2. Ưu tiên ngữ nghĩa hơn vì styles có thể dùng CSS

Cách lựa chọn thẻ HTML phù hợp ở trên có thể áp dụng trong mọi lúc bạn viết code HTML
