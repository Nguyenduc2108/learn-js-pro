# 1. operator logical advanced ( toán tử logical nâng cao)

    . Toán tử AND và OR không chỉ trả về Boolean
    . Thực tế, toán tử && và || sẽ trả về giá trị của 1 trong các toán hạng
    không nhất thiết phải là giá trị Boolean

## 1.2. AND

    . && trả về giá trị “falsy” đầu tiên
    Nếu không có giá trị “falsy”, trả về giá trị cuối cùng

    . value1 && value2
        . value1 : falsy => trả về value1
        . value1 : truthy => trả về value2

## 1.3. OR

        . Trả về giá trị “truthy” đầu tiên
        Nếu không có giá trị “truthy”, trả về giá trị cuối cùng

## 1.4. “Đánh giá ngắn gọn” là gì?

        . là khi có thể biết kết quả cuối cùng mà không cần xem xét hết biểu thức
        => quá trình kiểm tra sẽ dừng và trả về kết quả
        => Điều này giúp tránh làm công việc thừa
        => giúp tối ưu hơn vì xử lý trở nên nhanh hơn

        . Có hai loại “Đánh giá ngắn gọn”:
            . Toán tử && (AND):
            . Toán tử || (OR):

### 1.4.1. Áp dụng “Đánh giá ngắn gọn”

==> Kết luận: Cách tận dụng “Đánh giá ngắn gọn”
. Toán tử && (AND): Sắp xếp các điều kiện có khả năng trả về “falsy” nhiều hơn lên trước
. Toán tử || (OR): Sắp xếp các điều kiện có khả năng trả về “truthy” nhiều hơn lên trước

=> Điều này giúp tối ưu hóa việc đánh giá biểu thức và cải thiện hiệu suất của chương trình

## 1.5. Các ứng dụng khác của toán tử AND và OR

### 1.5.1. Kiểm tra điều kiện và gọi hàm

### 1.5.2. Gán giá trị mặc định

### 1.5.3. Lấy một giá trị theo độ ưu tiên

//////////////////////////////

## 1.6. Toán tử Nullish(??)

    . Toán tử Nullish coalescing (??) là toán tử logical trả về toán hạng bên phải của nó
    khi toán hạng bên trái là null hoặc undefined
    => Ngược lại trả về toán hạng bên trái của nó

    . vế trái là null , undefined => trả về vế phải

### 1.6.1.Cú pháp sử dụng

    . let kết_quả = biến ?? giá_trị_mặc_định;

    . Ví dụ thực tế sử dụng Nullish coalescing:
        . Nullish coalescing thường được sử dụng để
        cung cấp một giá trị mặc định khi
        giá trị hiện tại của nó là null hoặc undefined

### 1.6.2.Tình huống trong thực tế

### 1.6.3.Cách khắc phục với Nullish coalescing

    . Sử dụng if-else.
    . 3 ngôi

## 1.7.Những lưu ý quan trọng

### 1.7.1.Khi nào nên sử dụng Nullish coalescing?

    . Khi xử lý các giá trị có thể là null hoặc undefined
    . Đặt giá mặc định và tránh nhầm với các “falsy” khác

### 1.7.2.So sánh Nullish Coalescing (??) và OR (||):

### 1.7.3.“Đánh giá ngắn gọn” (short-circuit evaluation)

### 1.7.4.Có thể lỗi cú pháp khi dùng với AND hoặc OR

    . thêm dấu ()
