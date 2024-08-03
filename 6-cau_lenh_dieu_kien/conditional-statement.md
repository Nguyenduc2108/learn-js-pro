# 1.Boolean : true / false

    . Quy ước đặt biến : bắt đầu bằng is, has, can, should : isEven , isOdd, isValue,...

# 2.Toán tử so sánh

    . sử dụng để so sánh hai giá trị, thường trong các lệnh điều kiện

## 2.1.So sánh bằng và không bằng (Không nghiêm ngặt):

        . không nghiêm ngặt (chỉ so sánh giá trị, không so sánh kiểu dữ liệu): ==, !=

## 2.2.So sánh bằng và không bằng (Nghiêm ngặt):

        . nghiêm ngặt (so sánh giá trị và kiểu dữ liệu): ===, !==

=> nên dùng nghiêm ngặt
. So sánh (>, <, >=, <=)

# 3.Câu lệnh điều kiện

## 3.1 if / else

    . if :
        . Cú pháp cơ bản: if (điều kiện) { // Khối lệnh }
        . Nếu điều kiện là true, khối lệnh bên trong được thực thi
    . else :
        . Thêm vào sau một câu lệnh if.
        . Thực thi khối lệnh nếu điều kiện trong if không đúng.
        . Cú pháp:
            if (điều kiện) {
                // Khối lệnh 1
            }
            else {
                // Khối lệnh 2
            }
    . else if :
        . Cho phép thêm nhiều điều kiện kiểm tra.
        . Cú pháp:
            if (điều kiện1) {
                // Khối lệnh 1
            }
            else if (điều kiện2) {
                // Khối lệnh 2
            }
            ...
            else {
                // Khối lệnh cuối
            }

    . If-else flowchart :
        . cách để biểu diễn logic của một chương trình khi phải đưa ra quyết định dựa trên một hoặc nhiều điều kiện

    . Inline if-else :
        . cách viết rút gọn của cấu trúc if-else mà không cần sử dụng dấu {}
        . áp dụng khi mỗi nhánh của if hoặc else chỉ chứa 1 dòng lệnh
        . cú pháp:
            if (điều kiện) lệnh_1;
            else lệnh_2;

## 3.2. Toán tử 3 ngôi (Ternary operator)

    . Một dạng rút gọn của lệnh if-else
    . Cú pháp: điều kiện ? biểu_thức_nếu_true : biểu_thức_nếu_false
    . có thể chạy hàm
    . có thể lồng ghép với nhau

## 3.3 Switch case

    . một cách để thực hiện các hành động khác nhau dựa trên giá trị của một biến hoặc biểu thức
    . một lựa chọn thay thế cho việc sử dụng nhiều câu lệnh if-else liên tiếp
    . sử dụng khi bạn cần so sánh cùng một biến với nhiều giá trị khác nhau
    . Cú pháp:
        switch (biến) {
            case giá_trị_1:
            // Khối lệnh
            break;
            case giá_trị_2:
                // Khối lệnh
                break;
            ...
            default:
                // Khối lệnh mặc định

        }
    . Fallthrough:
        . sử dụng switch-case mà không có break ở mỗi case, gọi là fallthrough
        . Điều này cho phép nhiều case chạy cùng một đoạn code

    . Switch case trong hàm:
        . switch trong hàm, bạn không cần sử dụng break ở cuối mỗi case
        . xảy ra khi bạn sử dụng return để trả về giá trị

# 4.Lưu ý khi sử dụng

## 4.1.Toán tử so sánh

    . Chú ý đến kiểu dữ liệu:
    . Khi sử dụng == và !=, JavaScript sẽ tự động chuyển đổi kiểu dữ liệu để so sánh
        =>  điều này có thể dẫn đến kết quả không mong muốn
    . Sử dụng === và !== để so sánh cả giá trị và kiểu dữ liệu giúp tránh sai lầm này

## 4.2.Câu lệnh if-else

    . Tránh điều kiện quá phức tạp:
        . Điều kiện quá phức tạp trong if-else có thể làm giảm tính rõ ràng và dễ đọc của code
        . Cố gắng giữ cho điều kiện đơn giản và rõ ràng

    . Có thể sử dụng Inline if-else:
        . Khi chỉ có một dòng lệnh trong mỗi nhánh của if-else
            => bỏ qua dấu ngoặc nhọn để code gọn gàng hơn
        . khi thêm nhiều dòng lệnh, đừng quên thêm ngoặc nhọn

## 4.3.Toán tử 3 ngôi

    . Đừng làm code trở nên khó đọc:
        .  (? :) giúp rút gọn code => code trở nên khó đọc
        . đặc biệt khi sử dụng liên tiếp nhiều lần
    . Sử dụng nó cho các điều kiện đơn giản và tránh lạm dụng

## 4.4.Câu lệnh switch case

    . Hãy nhớ sử dụng break:
        . Đừng quên sử dụng break sau mỗi case để tránh “rơi” vào các case tiếp theo

    . Sử dụng khi có nhiều trường hợp:
        . switch thích hợp khi có nhiều trường hợp cần xử lý
        . Đối với chỉ hai ba trường hợp, if-else có thể là lựa chọn tốt hơn về mặt tính rõ ràng

# 5.Lỗi thường gặp

## 5.1.Nhầm lẫn giữa = và == / ===

## 5.2.Quên break trong switch

## 5.3.Sử dụng if-else không hiệu quả

## 5.4.Sử dụng toán tử so sánh không phù hợp
