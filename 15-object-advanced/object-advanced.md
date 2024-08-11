# 1. Object Advanced

# 2. Kiểu dữ liệu nguyên thủy (Primitive)

    . giá trị nguyên thủy là bất biến (immutable)
    .  1 khi một giá trị nguyên thủy được tạo, giá trị đó 0 thể thay đổi

# 4. Kiểu dữ liệu tham chiếu (Reference)

    .  kiểu tham chiếu lưu trữ địa chỉ (tham chiếu) của giá trị trong bộ nhớ, thay vì giá trị thực tế
    Biến person, numbers và sum
    thực chất chỉ lưu trữ địa chỉ tham chiếu tới giá trị
    trong bộ nhớ Heap, 0 trực tiếp lưu trữ chúng

    . cần sử dụng Object.assign() để copy thuộc tính sang một object mới
    Lưu ý cách này chỉ là sao chép nông (shallow copy)
    Nếu có object con bên trong thì nó chỉ sao chép tham chiếu
    chứ không tạo ra object mới cho object con đó

    . structuredClone() -> sao chép sâu (deep copy)
        copy càng sâu => hiệu năng càng kém

=> muốn so sánh 2 object => chuyển thành JSON rồi so sánh
JSON.stringify()

# 5. Các cách so sánh objects

    . khi so sánh kiểu dữ liệu tham chiếu
    => ko so sánh nội dung mà so sánh tham chiếu với nhau

    . so sánh = JSON.stringify() nếu 2 object mà có thứ tự thuộc tính !== nhau
    => sẽ sai ( lý do là nó chuyển thành 2 chuỗi khác nhau)

==> cách so sánh 2 object chỉ quan tâm đến thông tin thuộc tính bên trong

    ==> dùng thư viện lodash => dùng hàm _.isEqual() có sẵn để so sánh

# 6. Xây dựng logic game basic

    Game Tom and Jerry

    1. có name , hp, atk
        => tấn công thì mất máu (func attack)
        kiểm tra xem tấn công bao nhiêu lần thì chết (hp = 0) => func isAlive()
        . lượt tấn công (check chẵn lẻ odd: Jerry ; even: Tom)

    2. phòng thủ
        . hp remaining = hp - atk - defense ( trong func attack)

        . nếu defense của Jerry >  defense của Tom
        => damage thành âm => Mỗi lần đánh xong thì máu Jerry tăng lên => BUG
        ==> check cho damage = 0 để ko gây sát thương âm và ko bị tăng máu

        . Dùng Math.max()

        . check máu âm => cho bằng 0

    3. tốc độ
        . check ai speed > hơn thì đánh trước => nếu con bị đánh còn hp thì đánh trả lại
            = speed => đánh random

    4. Chỉ số phản công

#### tạo xác xuất % => Math.random() => Math.random < tỉ lệ => sẽ phản công (phản công, 2 mặt chẵn lẻ , tung đồng xu, t-x, tỉ lệ, cường hóa)

    . sai logic => bị đánh chết => vẫn phản công được

===> Vấn đề của object literals => bị lặp phương thức

# 7. Function / Object Constructor (Hàm tạo)

    . ko dùng arrow func do ko hỗ trợ

    . instance là một đối tượng cụ thể được tạo từ một hàm tạo
    Instance kế thừa tất cả các thuộc tính và phương thức từ hàm tạo mà nó được tạo ra
    nhưng giá trị của các thuộc tính có thể khác nhau giữa các instance

    .  tạo nhiều đối tượng có cùng khuôn mẫu mà không cần định nghĩa lại các thuộc tính và phương thức cho mỗi đối tượng

    . Ưu điểm khi dùng:
        . Tái sử dụng code, giảm trùng lặp code
        . Tạo đối tượng theo một khuôn mẫu nhất quán

# 8. Ứng dụng : (Bài toán và ví dụ:)

## 8.1. Quản lý nhân vật: Tạo các đối tượng Tom & Jerry với thuộc tính và phương thức giống nhau (ví dụ đã đưa ra trong video bài học).

## 8.2. Quản lý nhân viên: Dễ dàng tạo và quản lý thông tin của nhiều nhân viên trong một công ty.

## 8.3. Quản lý sản phẩm: Tạo các đối tượng sản phẩm với thông tin và phương thức quản lý giống nhau.

        1. làm ứng dụng quản lý sinh viên
            1.1. 1 sinh viên là 1 đối tượng
            => tạo ra bản thiết kế Student
            => các đối tượng sinh viên tạo ra từ bản thiết kế đó

===> Mở rộng:

1. quản lý nhà trọ : 1 ngôi nhà là 1 đối tượng
   (đã thuê, chưa thuê, đã bán, muốn bán, đã bị niêm phong, kích thước, giá tiền thuê, mua, điện, nước,...)

2. quản lý công việc: 1 công việc là 1 đối tượng
   (add, edit, remove, completed, thêm lời nhắc,...)

# 9. Các hàm tạo dựng sẵn (Built-in Javascript Constructor)

    . String , Number , Boolean, Array, Function, ...

    . String(x), Number(x), Boolean(x) => Ép kiểu

    . Array, Object: Làm việc với array , object

        . Array.isArray(x),  x instanceof Array,...
        (kiểm tra có phải mảng không)

        . Object.assign(x,y), Object.keys(x),...

        . Function: Tạo hàm động (Tạo hàm từ chuỗi)

        . null, undefined: Không có hàm tướng ứng
        . BigInt, Symbol: Có hàm, không phải constructor

=> dùng từ khóa new => trả về đối tường => là object

## 9.1 Wrapper Object

## 9.2. Hàm tạo trả về đối tượng khi sử dụng từ khóa new

=> Cách lấy ra => dùng .valueOf()

# 10. Object Prototypes chi tiết

    . là cơ chế kế thừa
    thuộc tính và phương thức của đối tượng trong JS

    . Object.prototype
        . tạo thuộc tính , phương thức mới

        . Kiểm tra 1 thuộc tính có thuộc sở hữu của Object hay ko
        => dùng hàm có sẵn hasOwnProperty()

        - sửa hàm có sẵn của JS

# 11. Cơ chế Autoboxing => dễ làm việc với kiểu dữ liệu nguyên thủy, giúp có thể truy cập thuộc tính và phương thức

    . nguyên lý : tạo ra 1 đối tượng tạm thời

    . cơ chế tự động trong JS
    => ko thể can thiệp để thay đổi cơ chế

    . nul , undefined => ko có autoboxing
