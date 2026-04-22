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
