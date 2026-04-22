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
