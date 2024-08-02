# 1.Operator

    1.1. Số nguyên và số thực:
        . Số nguyên (Integer)
        . Số thực (Float)

    1.2. Toán tử số học (Arithmetic Operators):
        . +     Phép cộng
        . -     Phép trừ
        . *     Phép nhân
        . /     Phép chia
        . %     Phép chia lấy số dư
        . ++ 	Tăng giá trị biến lên 1
        . -- 	Giảm giá trị biến đi 1
        . **    Phép lũy thừa

    1.3. Toán tử gán (Assignment Operators):

        Toán tử	    Sử dụng     Ý nghĩa
         =	        x = y	    x = y
         +=	        x += y	    x = x + y
         -=	        x -= y	    x = x - y
         *=	        x *= y	    x = x * y
         /=	        x /= y	    x = x / y
         %=	        x %= y	    x = x % y
         **=        x **= y	    x = x ** y

    1.4. Lỗi thường gặp:
        . Chia một số cho 0: gây ra lỗi trong chương trình
        . Quên ưu tiên phép tính: ưu tiên phép nhân và chia trước, cộng và trừ sau
        . Quên phép chia lấy số dư: phép chia lấy dư sẽ trả về phần dư của phép chia sau khi lấy phần nguyên của kết quả

    1.5. Toán tử i++ (Post-increment) and Toán tử ++i (Pre-increment)
        . Toán tử i++   Trả về giá trị hiện tại của i, sau đó mới tăng giá trị lên 1
        . Toán tử ++i   Tăng giá trị của i lên 1, sau đó trả về giá trị mới
        . Toán tử -- có cách hoạt động tương tự. Điểm khác biệt là toán tử -- trừ đi 1, trong khi ++ là cộng thêm 1

# 2.Function

    2.1. Hàm là gì?
        . là một khối code được thiết kế để thực hiện một tác vụ cụ thể
        . tái sử dụng code
        .  định nghĩa hàm một lần và gọi hàm đó khi cần

    2.2. Định nghĩa hàm (Function definition):
        . từ khóa function
        . sau đó là tên của hàm
        . tiếp theo là một cặp dấu ngoặc đơn ()
        . và một cặp dấu ngoặc nhọn {} bao quanh phần thân của hàm

    2.3. Gọi hàm (Calling a function):
        . sử dụng () sau tên một hàm
        . có thể gọi hàm nhiều lần

    2.4. Hàm có tham số (Parameters):
        . định nghĩa tham số
        . giá trị được truyền vào khi gọi hàm được gọi là đối số
        . có thể có nhiều tham số
        . có thể truyền nhiều đối số tương ứng
        . có thể gọi hàm với số lượng đối số không giống với số lượng tham số (vì không được truyền đối số tương ứng sẽ ra undefined)

    2.5. Tham số mặc định (Default parameters):
        . giá trị mặc định của tham số sẽ được sử dụng khi đối số tương ứng không được truyền giá trị, hoặc khi truyền giá trị là undefined

    2.6. Hàm trả về giá trị (Return value)
        . từ khóa return được sử dụng để trả về kết quả khi gọi một hàm
        . từ khóa return sẽ trả về giá trị và thoát hàm. Khi return được thực thi, những dòng code trong hàm nằm phía sau return sẽ bị bỏ qua
        . có thể sử dụng lại hàm nhiều lần với các đối số khác nhau
        . một hàm không return thì sẽ nhận lại undefined khi gọi hàm

    2.7. Lợi ích khi sử dụng hàm
        . tránh lặp code
        . phân chia vấn đề lớn thành các phần nhỏ
        . lỗi thường gặp

    ==> 1 function chỉ nên làm 1 việc
