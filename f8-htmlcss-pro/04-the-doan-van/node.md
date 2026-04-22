## 4.1 Thẻ p

```
# 1. Tìm hiểu về thẻ p
# 2. Ví dụ về cách sử dụng thẻ p
```

` # 1. Tìm hiểu về thẻ p`

Các đoạn văn bản chiếm một phần lớn trong nội dung của các trang web. Trong bài này,
chúng ta sẽ tìm hiểu chi tiết hơn về cách sử dụng thẻ `<p>` để làm việc với đoạn văn bản.

Chữ `p` viết tắt của `paragraph` (ý nghĩa: đoạn văn). Viết nhanh thẻ này với Emmet:
gõ `p` + `tab`.

Cách sử dụng:

```html
<p>Nội dung đoạn văn bản</p>
```

Thẻ `<p>` được dùng để thể hiện một đoạn văn bản trên trang web. Ví dụ như một bài
blog được tạo ra bởi nhiều đoạn văn bản.

`# 2. Ví dụ về cách sử dụng thẻ p`

Mỗi đoạn văn bản có thể nằm trong một thẻ `<p>`, một đoạn văn có thể bao gồm nhiều
câu.
Ví dụ, đoạn văn sau gồm 2 câu:

```html
<p>
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, repellendus
  rerum! Dolorem laudantium excepturi ex recusandae facere, laborum dolores
  maiores.
</p>
```

Thẻ `<p>` cũng có thể được sử dụng cho các đoạn văn bản ngắn, không nhất thiết phải
sử dụng với các đoạn văn bản dài và nhiều câu văn.

Ví dụ:

```html
<p>Chào bạn.</p>
<p>Tôi muốn một em Husky.</p>
```

Trong thực tế, phần lớn các bài viết được tạo nên từ nhiều đoạn văn bản khác nhau.
Mỗi đoạn văn này sẽ nằm trong một thẻ `<p>`.

Bạn sẽ nhận thấy rằng một đoạn văn luôn bắt đầu trên một dòng mới. Ngoài ra, các
trình duyệt sẽ tự động thêm một số khoảng trắng phía trên và dưới để ngăn cách giữa
các đoạn văn.

Bạn sẽ dễ dàng thấy điều này khi chúng ta có nhiều đoạn văn liên tiếp.

Khoảng các giữa các thẻ `<p>` được gọi là khoảng cách lề(tiếng Anh: margin)
đây là khoảng cách mặc định, chúng ta có thể sửa lại khoảng cách này khi sử dụng CSS

```
Tóm tắt:
- Thẻ <p> được sử dung để hiển thị một đoạn văn bản trên trang web.
- Một đoạn văn không nhất thiết phải nhiều hơn một câu, có thể sử dụng thẻ <p>
với các đoạn văn bản ngắn.
- Mỗi the <p> sẽ luôn nằm trên 1 dòng mới. Ngoài ra, trình duyệt sẽ tự động thêm
khoảng lề trên và dưới để ngăn cách giữa các thẻ <p>.
```

## 4.8 Thẻ br

```
# 1. Giới thiệu thẻ br
# 2. Cách sử dụng thẻ br
```

`# 1. Giới thiệu thẻ br`
Thẻ ngắt dòng(tiếng Anh: break element) trong HTML là `<br />`, được sử dụng để tạo
ra một dòng mới(ngắt dòng) trong cùng một đoạn văn. Đây là thẻ tự đóng.

Trong thực tế
, thẻ `<br>` rất hữu ích để tạo điểm ngắt dòng cho một bài thơ hoặc một địa chỉ.

Ví dụ: một bài thơ:

```html
<p>
  Mọc giữa dòng sông xanh <br />
  Một bông hoa tím biếc <br />
  Ơi con chim chiền chiện <br />
  Hót chi mà vang trời <br />
  Từng giọt long lanh rơi <br />
  Tôi đưa tay tôi hứng.
</p>
```

Trong HTML, nhiều khoảng trắng hoặc dấu ngắt dòng chỉ được coi là một khoảng trắng
(một dấu cách). Vì vậy, nếu bạn sử dụng dấu ngắt dòng trong code thì kết quả có thể
không như ý.

Ví dụ không sử dụng `<br />`:

```html
<p>
  Mọc giữa dòng sông xanh Một bông hoa tím biếc Ơi con chim chiền chiện Hót chi
  mà vang trời Từng giọt long lanh rơi Tôi đưa tay tôi hứng.
</p>
```

Có thể bạn sẽ nghĩ, mỗi thẻ `<p>` luôn bắt đầu trên một dòng mới. Vậy vì sao không
sử dụng mỗi dòng bằng một thẻ `<p>`? chúng ta sẽ tìm hiểu điều này trong phần tiếp theo.

<hr />

`# 2. Cách sử dụng thẻ br`

Hãy xem xét hai đoạn mã HTML qua hai ví dụ dưới đây:
Ví dụ ngắt dòng bằng thẻ `<br />`:

```html
<p>
  Mọc giữa dòng sông xanh <br />
  Một bông hoa tím biếc <br />
  Ơi con chim chiền chiện
</p>
```

Ví dụ, ngắt dòng bằng việc sử dụng thẻ `<p>`:

```html
<p>Mọc giữa dòng sông xanh</p>
<p>Một bông hoa tím biếc</p>
<p>Ơi con chim chiền chiện</p>
```

Kết quả hiển thị trên trình duyệt của 2 đoạn mã trên gần như giống hệt nhau.
Tuy nhiên, chúng khác nhau về ngữ nghĩa sử dụng và khả năng truy cập(web accessibility).

Tuy hiển thị giống nhau. Nhưng theo bạn, đâu mới là cách sử dụng đúng đắn?

Câu trả lời là:

Thẻ `<br>` không nên được sử dụng để phân tách hai đoạn văn hoặc hai nội
dung khác nhau để đảm bảo tính ngữ nghĩa. TH duy nhất bạn nên sử dụng thẻ `<br>`
đó là để tạo dòng mới trong cùng một đoạn văn.

```
Tóm tắt:
- Thẻ ngắt dòng(tiếng Anh:line break element) trong HTML là <br />, được
sử dụng để tạo ra một dòng mới trong một đoạn văn. Đây là một thẻ tự đóng.
- Trong thực tế, thẻ <br> rất hữu ích để tạo điểm ngắt dòng cho một bài thơ
hoặc một địa chỉ.
- Trong HTML, nhiều khoảng trắng hoặc dấu ngắt dòng chỉ được coi là một khoảng trắng
- Thẻ `<br>` không nên được sử dụng để phân tách hai đoạn văn hoặc hai nội
dung khác nhau để đảm bảo tính ngữ nghĩa. TH duy nhất bạn nên sử dụng thẻ `<br>`
đó là để tạo dòng mới trong cùng một đoạn văn.
```

## 4.15 Những sai lầm thường gặp

```
# 1. Thẻ p lồng thẻ p
# 2. Không sử dụng thẻ p
# 3. Sử dụng thẻ br để tạo khoảng cách
# 4. Quá nhiều nội dung trong một thẻ p
```

`# 1. Thẻ p lồng thẻ p`

Mỗi thẻ `<p>` là một đoạn văn bản độc lập. Không có tình huống một đoạn văn lại nằm
trong một đoạn văn khác. Chính vì vậy, trong HTML thẻ `<p>` không thể sử dụng lồng
trong thẻ `<p>`. Nếu bạn cố tình làm điều này, trình duyệt sẽ không làm việc đúng như
bạn mong đợi, các thẻ `<p>` có thể bị tách ra khỏi nhau và sinh ra các thẻ `<p>` dư thừa.

Ví dụ sử dụng đúng:

```html
<p>Đoạn văn thứ nhất</p>
<p>Đoạn văn thứ hai</p>
```

Ví dụ sử dụng sai:

```html
<p>
  Đoạn văn thứ nhất
  <p>Đoạn văn thứ hai</p>
</p>
```

Nhìn kết quả có thể chúng ta sẽ không nhận ra sự khác biệt, Tuy nhiên, khi kiểm tra
các thẻ `<p>` này bạn sẽ thấy chúng có vấn đề.

Trong video, mình có minh hoạ rõ điểm này.

`# 2. Không sử dụng thẻ p`

Trong một số tình huống, có thể bạn sẽ nhận thấy việc không dùng thẻ `<p>`
cũng cho kết quả không khác biệt nhiều so với việc có dùng thẻ `<p>`.

Ví dụ, có sử dụng thẻ `<p>`:

```html
<body>
  <h1>Uống nước rất quan trọng</h1>
  <p>
    Ngay cả những người khoẻ mạnh cũng cần hình thành thói quen uống nước thường
    xuyên và uống đủ nước theo khoa học.
  </p>
</body>
```

Ví dụ, không sử dụng thẻ `<p>`:

```html
<body>
  <h1>Uống nước rất quan trọng</h1>
  Ngay cả những người khoẻ mạnh cũng cần hình thành thói quen uống nước thường
  xuyên và uống đủ nước theo khoa học.
</body>
```

=> Không sử dụng thẻ `<p>` trong tình huống này có một số vấn đề:

1. Không đảm bảo tính ngữ nghĩa
2. Không thể CSS riêng cho đoạn văn bản
3. Không tối ưu cho khả năng truy cập

`# 3. Sử dụng thẻ br để tạo khoảng cách`

Đây cũng là một sai lầm phổ biến. Thông thường, các nhà phát triển chưa hiểu rõ
mục đích sử dụng thẻ `<br />` hoặc đôi khi họ hơi "lười" có thể dẫn tới sai lầm này.

Trường hợp thường thấy là dùng thẻ `<br>` để ngăn cách hai đoạn văn. Trong khi, để
đảm bảo đúng ngữ nghĩa nên sử dụng 2 thẻ `<p>` riêng biệt.

Ví dụ, sử dụng chưa tốt:

```html
<p>
  Ngay cả những người khoẻ mạnh cũng cần hình thành thói quen uống nước thường
  xuyên và uống đủ nước theo khoa học.
  <br />
  <br />
  Nước sẽ được cung cấp từ hai nguồn. Trong đó, nguôn nước từ thức ăn hàng ngày
  chiếm khoảng 20-30% nhu cầu của cơ thế và các loại đồ uống bảo đảm khoảng
  70-80% còn lại.
</p>
```

Vấn đề tồn tại ở cách viết trên:

1. Chưa đảm bảo tính ngữ nghĩa, 2 đoạn văn bản cần sử dụng 2 thẻ `<p>`.
2. Chưa tối ưu cho khả năng tiếp cận trình đọc màn hình sẽ không thể di chuyển
   giữa 2 đoạn văn(1 thẻ `<p>` trình đọc sẽ thấy 1 đoạn văn)

Khi đó, cách viết tốt hơn là:

```html
<p>
  Ngay cả những người khoẻ mạnh cũng cần hình thành thói quen uống nước thường
  xuyên và uống đủ nước theo khoa học.
</p>
<p>
  Nước sẽ được cung cấp từ hai nguồn. Trong đó, nguôn nước từ thức ăn hàng ngày
  chiếm khoảng 20-30% nhu cầu của cơ thế và các loại đồ uống bảo đảm khoảng
  70-80% còn lại.
</p>
```

`# 4. Quá nhiều nội dung trong một thẻ p`
Hãy xem hai ví dụ sau đây.
Nhiều nội dung trong một thẻ p:

```html
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quasi sequi ut
  quas tempore nesciunt maiores delectus cum quibusdam explicabo? Dolores
  adipisci temporibus delectus sint aperiam ad dolorum nemo alias cumque dolor
  assumenda eligendi natus quae obcaecati explicabo in asperiores ipsa nihil,
  omnis at. Molestiae incidunt ipsum obcaecati illo, deserunt similique? Et
  nobis modi, cumque sit iusto dignissimos nihil. Minima eaque, ut recusandae
  laboriosam ipsam explicabo? Minus quae, aspernatur incidunt eligendi, totam
  dolorum earum itaque dignissimos nihil adipisci molestiae quisquam officiis
  quas nobis eius fugit voluptas ut quos ducimus. Voluptatem laboriosam dicta
  quae, culpa, velit laudantium dolores ab illum odit maiores nostrum odio amet
  doloribus consequatur, fugit eaque? Laboriosam amet ut porro ad veritatis odit
  labore iusto eius quae est in beatae molestiae dignissimos, quos similique,
  quam eos, aut dolores hic consectetur libero iure illo dolorem! Id veniam,
  itaque exercitationem cumque nihil quas qui reiciendis officiis quaerat. Saepe
  accusamus, quidem culpa similique, maiores magni delectus facilis
  exercitationem ad, perferendis nemo aliquid ut quibusdam suscipit incidunt
  odio perspiciatis debitis vitae rerum dolore nobis iste aspernatur consequatur
  nulla? Voluptatum, facere ipsa error rerum repellat asperiores, nihil
  praesentium nam necessitatibus obcaecati odit voluptatem ex mollitia adipisci
  iure aut magni atque eos laudantium aperiam?
</p>
```

Chia nhỏ nội dung thành nhiều thẻ p:

```html
<p>
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque quidem hic,
  eius, voluptatibus qui, obcaecati accusantium voluptas laborum unde ducimus
  veritatis ullam rerum natus! Ipsam ipsa quisquam voluptas laboriosam
  necessitatibus.
</p>
<p>
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, itaque quos?
  Iusto consequuntur doloremque eveniet reprehenderit necessitatibus corporis
  quaerat harum itaque dolorem sint. Eos iusto voluptas qui illo modi quia?
</p>
<p>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quis!
  Dolorem veniam molestiae non esse illo, voluptate laboriosam aperiam
  reiciendis voluptates molestias odio? Doloribus illum ab accusamus cumque
  autem eum?
</p>
```

Trong hai ví dụ trên, ví dụ 2 là cách làm tốt hơn, bởi vì:

- Trình bày "thông thoáng" hơn, cảm giác dễ đọc hơn.
- Tách thành các đoạn văn với những ý khác nhau
- Đảm bảo về tính ngữ nghĩa khi thể hiện nhiều đoạn văn
- Tối ưu hơn cho khả năng truy cập (Web accessibility)

| Nắm chắc những kiến thức trong chương này có thể giúp bạn viết bài(blog, docs,vv)
tốt hơn.

```
Tóm tắt:
- Mỗi thẻ `<p>` là một đoạn văn bản độc lập. Không có tình huống một đoạn văn lại nằm
trong một đoạn văn khác.
- Luôn sử dụng thẻ `<p>` cho các đoạn văn bản để đảm bảo tính ngữ nghĩa và tối ưu khả
năng truy cập
- Thẻ <br> chỉ sử dụng với mục đích ngắt dòng trong các đoạn văn, không sử dụng để
tạo khoảng cách lề giữa các dòng.
- Tính ngữ nghĩa là rất quan trọng trong HTML, bản thân mỗi thẻ HTML được tạo ra là
để đánh dấu giúp nội dung có ý nghĩa hơn.
```
