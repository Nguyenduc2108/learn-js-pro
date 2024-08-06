# 1. Ép kiểu (type coercion)

    . là quá trình chuyển đổi giá trị từ một kiểu dữ liệu này sang một kiểu khác
    . thường xảy ra tự động
    . chẳng hạn khi sử dụng toán tử so sánh == hoặc các toán tử số học như +, -, v.v.

# 2.Ép kiểu rõ ràng và ép kiểu ngầm

## 2.1.Ép kiểu rõ ràng

    . chủ động chuyển đổi kiểu dữ liệu bằng cách sử dụng các hàm:
        . String() , toString()
        . Number()
        . Boolean()
        . Object()
        . Array()
        . Function()
        . null và undefined: Không có hàm chuyển đổi kiểu dữ liệu tương ứng

## 2.2.Ép kiểu ngầm

    . JavaScript tự động quyết định kiểu dữ liệu
    thường là trong các phép toán và so sánh

# 3.Các trường hợp ép kiểu phổ biến

## 3.1.Ép kiểu sang chuỗi

    . String() : áp dụng vs all
    . toString(): không áp dụng vs null, undefined
    . Template literals hoặc nối chuỗi

## 3.2.Ép kiểu sang số

    . Number()
    . +
    . Lưu ý: Các giá trị:
        . "" (chuỗi rỗng)
        . "0" (chuỗi chứa số 0), "000", 0, -0
        . null, false
        . [], {},  new Date(0)
        ==> khi ép kiểu sang Number sẽ trả về 0
    . chuỗi không phải là số ("abc"), undefined, và NaN không chuyển đổi thành 0 khi sử dụng Number() hoặc +
     =>  Thay vào đó, chúng sẽ trả về NaN (Not-a-Number).

    . parseInt()
    . parseFloat()

## 3.3.Ép kiểu sang Boolean

    . Boolean()
    . !!
    . Lưu ý: 6 giá trị sau đây khi ép kiểu sang boolean sẽ trả về false:
        . false, 0, "" (chuỗi rỗng)
        . null, undefined, NaN

        ==> Mọi giá trị khác khi ép sang boolean đều trở thành true

# 4.Quy tắc ép kiểu ngầm

## 4.1.Ép kiểu ngầm với toán tử so sánh ==

    . cả 2 là undefined hoặc null, trả về true
    . Nếu là số:
        . 1 trong 2 là NaN => false
        . cả 2 số giống hệt nhau => true
    . Nếu là chuỗi, so sánh từng ký tự (cùng độ dài và giống nhau từng ký tự theo vị trí)
    để xác định chúng có giống hệt nhau không.
    . Nếu là boolean, trả về true nếu cả 2 cùng true hoặc cùng false.

## 4.2.Ép kiểu ngầm với toán tử số học

    . Toán tử cộng (+)
    . Toán tử trừ (-)

# 5.Lưu ý quan trọng

    . Nên sử dụng toán tử so sánh nghiêm ngặt
    . Tư duy nghiêm ngặt với kiểu dữ liệu
