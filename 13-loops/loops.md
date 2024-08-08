# 1. Loops (Vòng lặp)

    . thực thi một khối mã lặp đi lặp lại một số lần nhất định
    hoặc cho đến khi một điều kiện nhất định được thỏa mãn

## 1.1. For

    . thực hiện 1 khối lệnh dựa trên số lần xác định từ trước

    . for (khởi_tạo; điều_kiện; cập_nhật) {
    // Khối code được lặp đi lặp lại
    }
    Giải thích :
        let i = 1: Khởi tạo biến i bằng 1
        i <= 100: Điều kiện lặp - vòng lặp sẽ tiếp tục miễn là i nhỏ hơn hoặc bằng 100
        i++: Cập nhật sau mỗi lần lặp - tăng giá trị của i lên 1

#### For in and For of

    .  hai cấu trúc lặp cung cấp trong JavaScript
    để duyệt qua các cấu trúc dữ liệu phức tạp
    như object và mảng
    . for in - object (lấy key)
    . for of - array (lấy giá trị) , string

    . cách truy cập value trong object
        . object.key
        . object["key"]
    . cách kiểm tra key có trong object hay không
        . "key" in object

    . Quên khai báo biến => global

    . Ưu điểm :
        . Giảm thiểu cú pháp cần thiết để truy cập trực tiếp tới giá trị của từng phần tử mảng và chuỗi
        . code trở nên sáng sủa và dễ đọc hơn

### 1.1.1 For in

    . for-in duyệt qua các thuộc tính của một object
    . truy cập vào tất cả các keys (tên thuộc tính) của một object

### 1.1.2 For of

    . for-of duyệt qua các giá trị của tất cả các phần tử trong một mảng(Array) và chuỗi(String)
    . sự lựa chọn tốt
    khi bạn cần xử lý từng giá trị của 1 cấu trúc dữ liệu có thể duyệt được như Array và String

### 1.1.3. Khác biệt giữa for-in, for-of và for?

### 1.1.4. Sự khác biệt chính giữa for-in, for-of và for

    . Mục đích sử dụng:
        . for phù hợp cho các trường hợp cần điều khiển chi tiết vòng lặp
        . for-in để duyệt qua các thuộc tính của object
        . for-of để duyệt qua các giá trị của cấu trúc dữ liệu có thể duyệt được như mảng và chuỗi
    . Kiểu dữ liệu đích
    . Cách sử dụng

### 1.1.5. Tại sao nên sử dụng for-in và for-of hơn là for khi làm việc với array, object?

    . Dễ đọc và sự tiện lợi
    . Giảm thiểu lỗi

### 1.1.6. Sai lầm thường gặp

    . Sử dụng for-in để duyệt mảng
    . Sử dụng for-of cho object
    . Quên sử dụng const hoặc let trong for-in và for-of

## 2. Vòng lặp While

    . thực hiện khối lệnh dựa trên một điều kiện
    và tiếp tục lặp cho đến khi điều kiện đó không còn đúng
    Thích hợp cho các tình huống khi số lần lặp không biết trước

    . while (điều_kiện) {
    // Khối code được lặp đi lặp lại
    }

## 3. Vòng lặp Do-While

    . cấu trúc lặp thực hiện hành động trước rồi mới kiểm tra điều kiện lặp sau
    Điều này đảm bảo rằng thân vòng lặp sẽ được thực thi ít nhất một lần
    ngay cả khi điều kiện ban đầu không được thỏa mãn

    . do {
    // Khối code được lặp đi lặp lại
    } while (điều_kiện);

## 4. So sánh và ứng dụng

### khác : Tại sao vòng lặp quan trọng? => tự động hóa quy trình

    . giúp tiết kiệm thời gian và công sức
    . code dễ quản lý và bảo trì hơn
    . Tái sử dụng code
    . Dễ dàng xử lý dữ liệu phức tạp

#### Vòng lặp lồng nhau

    . xảy ra khi một vòng lặp (for, while, hoặc do...while) được đặt bên trong một vòng lặp khác
    . xử lý hiệu quả các cấu trúc dữ liệu như mảng đa chiều
    hoặc thực hiện các tác vụ kết hợp phức tạp

## 1.5 Break and Continue

    . dùng trong all loops
    . Break:
        . Lệnh break được sử dụng để thoát ra khỏi vòng lặp
        . dừng việc thực thi các lệnh tiếp theo trong vòng lặp đó
        . Lưu ý: Lệnh break chỉ dừng vòng lặp mà nó thuộc về,
        không ảnh hưởng đến các vòng lặp bên ngoài (vòng lặp lồng nhau) hoặc phía trước/sau nó

    . Continue:
        . Lệnh continue được sử dụng để
        bỏ qua phần còn lại của code trong vòng lặp cho lần lặp hiện tại
        tiếp tục với lần lặp tiếp theo
        . Lưu ý: Lệnh continue chỉ ảnh hưởng đến lần lặp hiện tại
        giúp bỏ qua một số trường hợp không mong muốn mà không thoát khỏi vòng lặp

# 2. Sai lầm thường gặp

## 2.1. Vòng lặp vô hạn dẫn tới treo chương trình

## 2.2. Sử dụng vòng lặp không phù hợp với bài toán

## 2.3. Sai điều kiện dẫn tới nhận undefined khi duyệt mảng

## 2.4. Thực hiện công việc không cần thiết trong vòng lặp

# 3. Cách phòng tránh
