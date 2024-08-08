# 1.Object Basic

## 1.1. Object literal

    . 1 cách tạo object

    1. Các cách thêm key-value cho object:
        . tenObject.key = value

        . tenObject["key"] = value ( thường dùng khi có giá trị từ 1 biến)

    2. Cách truy vấn và cập nhật:
        1. tenObject.key = value mới
        2. tenObject["key"] = value mới

    3. Xóa 1 cặp key-value

        . delete tenObject.key or tenObject["key"]

    4. Sử dụng Object destructuring

    5. Duyệt qua các cặp key-value
        . dùng for in

    6. Cách kiểm tra key trong object
        . key in object

## 1.2. Các sai lầm thường gặp

    . Không kiểm tra tồn tại của key

    . Sử dụng từ khóa dành riêng làm ke
    .

==> lấy dữ liệu từ API(BE) => check trước khi sử dụng =>

## 1.3. Tại sao sửa được Object tạo bởi const?

    . tạo object => tạo 1 địa chỉ ô nhớ => sửa thuộc tính trong ô nhớ

## 1.4. Thuộc tính và phương thức

    1. Object : đối tượng,
    mô tả đối tượng , thực thể xung quanh
    (thuộc tính và phương thức) - (prototype and methods)

    2. thuộc tính: mô tả thông tin đối tượng
    3. phương thức: mô tả hành động và thực hiện hành đọng đối tượng

### 1.4.1. Thuộc tính

    . value còn lại => thuộc tính

### 1.4.5 Phương thức

    . value là hàm => phương thức

# 2. This Basic

    . this tham chiều đến đối tượng(object) mà nó thuộc về(gần nhất)

## 2.1. Tại sao cần sử dụng this?

    . this cung cấp 1 phương thức linh hoạt để truy cập vào đối tượng mà function đang thao tác
    . tăng cường khả năng tái sử dụng và bảo trì code
    . chương trình dễ hiểu và quản lý hơn

# 3. Làm việc với Object cơ bản

    . Viết tắt object, methods
    . tên thuộc tính động []

## 3.1. Destructuring (Phân rã)

## 3.2. Enhanced object literals

## 3.3. Destructuring (Phân rã)

# 4. Phương thức của Object

    1. Object.keys(obj)
        . Object.keys trả về 1 mảng(array) chứa tất cả các keys từ 1 đối tượng(object)

        . Ứng dụng:
            . Duyệt qua các thuộc tính của đối tượng
            . Kiểm tra đối tượng rỗng

    2. Object.values(obj)
        . Object.values trả về 1 mảng(array) chứa tất cả các values từ 1 đối tượng(object)

        . Ứng dụng:
            . Tính toán trên các giá trị của đối tượng
            . Xác định đối tượng có giá trị nào không

    3. Object.entries(obj)
       . Object.entries trả về 1 mảng(array)
       chứa các cặp [key, value] cho 1 thuộc tính trong đối tượng(object)
        Mỗi cặp [key, value] là một mảng gồm hai phần tử

        . Ứng dụng:
            . Duyệt qua đối tượng

    4. Object.assign(target, …sources)
        . Object.assign cho phép bạn sao chép
        các thuộc tính từ 1 hoặc nhiều đối tượng nguồn (source objects)
        vào một đối tượng đích (target object)

        . Có tính ghi đè
        . return về object đầu tiên

    5. Object.freeze(obj) (đóng băng)
        .  Object.freeze để “đóng băng” một đối tượng
        làm cho tất cả các thuộc tính của đối tượng đó trở nên không thể thay đổi

        . ko thêm , sửa, xóa được thuộc tính
        . return về chính object
        . chỉ đóng băng object ngoài cùng => vẫn có thể thay đổi object con
        ==> khi muốn toàn vẹn dữ liệu (đưa ra những cấu hình trong ứng dụng)

        . Ứng dụng:
            . Bảo vệ tính toàn vẹn của dữ liệu trong một đối tượng
            . Tạo các “hằng số đối tượng” trong chương trình

     6. Object.seal(obj) ( niên phong)
        . Object.seal để ngăn chặn việc thêm hoặc xóa các thuộc tính từ một đối tượng
        trong khi vẫn cho phép sửa đổi giá trị của các thuộc tính hiện tại

        . muốn cố định cấu trúc của một đối tượng
        nhưng không muốn hạn chế khả năng cập nhật giá trị của các thuộc tính
        . không thêm không xóa được

# 5. Cách viết "switch" bằng Object
