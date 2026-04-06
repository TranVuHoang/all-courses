# 1. Giới thiệu khoá học

<pre>
Giới thiệu phần học HTML CSS
1. What? Học gì?
    -> Quy trình làm ra 1 website
        1. Phân tích thiết kế UI/UX
            -> file photoshop
        2. Cắt html/ css
            -> chuyển photoshop thành html css
        3. Xử lý tương tác javascript
        4. lập trình backend
    -> Học cách cắt html/ css
    -> học html
    -> học css

2. Why? Tại sao học ngôn ngữ html css?
    Để có thể chuyển từ photoshop sang html/css
    Tự làm website
    Bắt đầu học lập trình website
3. How? Học thế nào?
    1. công cụ
        vscode
        sublimetext
    2. chrome
</pre>

# Các thẻ html cơ bản

<pre>
    Học html
        Học thẻ html
        1. Nhóm thẻ cơ bản:
            - html, head, body, title, meta,...
            - chỉ cần tạo file có đuôi là html, sau đó gõ ! + tab sẽ hiển thị template cơ bản.
            - Chuột phải và file, chọn live server(chạy live server)
        2. Thẻ tiêu đề
            - h1 --> chữ to nhất
            - h2 --> chữ to nhì
            - ...
            - h6 --> chữ nhỏ nhất
        3. Thẻ dùng để xuống dòng(hoặc để nhóm)
            - p(paragraph): thẻ văn bản
            - div(divide): phân chia hoặc nhóm
            - br: không có thẻ đóng
        4. Thẻ dùng để trình bày text
            - b(bold): chữ đậm
            - i(italic): in nghiêng
            - a(ancol): dùng để link
            - u(underline): gạch chân chữ
            - del(delete): gạch ngang chữ
        5. Thẻ ảnh và thẻ đường kẻ
            - img(image): thẻ hình ảnh
            - hr: thẻ tạo đường kẻ
</pre>

# Học CSS

    CSS(Cascading Style sheet)
        - file có định dạng đuôi là .css
        - viết mã để mà có thể thay đổi thuộc tính trình bày của html
        - để viết css
            1. link trong html bằng thẻ link
                - link đến a.css
            2. tạo file có đuôi .css
            3. học thuộc các thuộc tính css
                - 1. color(màu chữ)
                - 2. width(độ rộng)
                - 3. margin(căn lề ngoài viền): khoảng cách xung quanh 1 phần tử
                    - margin-top: căn trên
                    - margin-right: căn bên phải
                    - margin-bottom: căn dưới
                    - margin-left: căn trái
                - 4. font-family(font chữ)
                    - font-family: tahoma;
                    - font-family: segoe ui light;
                - ...
# Cách làm menu với html/ css
- Áp dụng thuộc tính display: flex --> làm menu
- 01 - menu là một danh sách đường link
- 02 - menu sử dụng thẻ danh sách (list): ul, li