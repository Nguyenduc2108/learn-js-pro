# 1.Data types

    . 8 kiểu dữ liệu
        . 1.String:
        . 2.Number:
        . 3.Boolean:
            . true / false
            . tên biến thêm: is, can, has, should

        . 4.Undefined(không xác định / chưa được khởi tạo ):
        . 5.Null(chưa có gì / rỗng):
            . có nhưng mà rỗng
            . type of null => trả ra object

        . 6.Object => trong object có 2 kiểu : array và function
            . key: value
            . 6.1.Array:
            . 6.2.Function:

        . 7.BigInt(Số lớn):
            . hiếm khi dùng
            . tên biến thêm :  big , large

        . 8.Symbol(giá trị duy nhất):
            . không bao h có Symbol = nhau
            . Symbol chỉ = chính nó
            . dùng : tạo ra các thuộc tính trang đối tượng không trùng nhau

# 2.Những tình huống giá trị “undefined” xuất hiện?

## 2.1.Biến được khai báo nhưng chưa được gán giá trị

## 2.2.Một hàm không trả về giá trị

## 2.3.Đối số không được truyền vào hàm

## 2.4.Truy cập một thuộc tính không tồn tại của một đối tượng

## 2.5.Truy cập một phần tử không tồn tại trong một mảng

# 3.Sai lầm thường gặp

## 3.1.Nhầm lẫn giữa String và Number

## 3.2.Không hiểu rõ sự khác biệt giữa Null và Undefined

    . undefined: chưa được khởi tạo or được khởi tạo nhưng không có giá trị
    . null: được khởi tạo và giá trị là rỗng
        . có thể đặt null or dùng để reset giá trị

## 3.3.Không kiểm tra kiểu dữ liệu trước khi xử lý

# 4.Cách kiểm tra kiểu dữ liệu (how to check data types) ( cách kiểm tra đơn giản)

    1. string : type of === "string"
    2. Array:
        . Array.isArray()
        . instance of Array

    3. Object:
        . type of value === "object" && value !== null && !== Array.isArray(value)

    4. Number:
        . type of value === "number" && !isNaN(value)
    5. Null:
        . emptyValue === null
