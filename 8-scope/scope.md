# 1.Phạm vi (Scope)

    . khu vực trong code nơi 1 biến có thể được truy cập và sử dụng
    . Hiểu về phạm vi:
        . phân biệt rõ ràng 1 biến hoặc hàm có thể truy cập
        và sử dụng ở những nơi nào trong code

## 1.1.Phạm vi toàn cục (Global scope)

    . 1 biến được khai báo ở ngoài mọi hàm và block (khối code) là 1 biến toàn cục
    . có thể được truy cập và sử dụng từ bất kỳ đâu trong code, kể cả bên trong các hàm

## 1.2.Phạm vi hàm (Function scope)

    . hàm tạo ra 1 phạm vi mới
    .  biến được khai báo trong hàm (bao gồm cả các tham số của hàm)
    chỉ có thể được truy cập trong phạm vi của hàm đó

    . Trong trường hợp các hàm lồng nhau:
        . hàm con có thể truy cập và sử dụng các biến được khai báo ở các hàm cha
        . hàm cha sẽ không truy cập và sử dụng được các biến được khai báo trong hàm con

## 1.3.Phạm vi khối (Block scope)

    . biến được khai báo bên trong một khối code (thường là bên trong các dấu ngoặc nhọn {})
    chỉ có thể truy cập được bên trong khối code đó

    . let và const cho phép tạo biến có phạm vi khối,
    biến được khai báo bên trong một khối {} sẽ không thể được truy cập từ bên ngoài khối

## 1.4.Phạm vi module (Module scope)

    . Trong một module, biến, hàm, hoặc các thành phần khác mà bạn khai báo
    chỉ có thể truy cập và sử dụng trong chính module đó
    trừ khi chúng được export để sử dụng ở nơi khác
    . sử dụng modules trong trang web:
        . thêm thuộc tính type="module" vào thẻ script trong HTML.

# 2.Lưu ý quan trọng

## 2.1.Mỗi hàm sẽ tạo ra một phạm vi mới

    . mỗi hàm tạo ra 1 phạm vi mới
    . biến được khai báo trong hàm (bao gồm cả các tham số của hàm)
    chỉ có thể được truy cập trong phạm vi của hàm đó

## 2.2.Cách JavaScript tìm kiếm biến (Scope chain)

    . là chuỗi các phạm vi lồng nhau,
    nơi mỗi phạm vi có thể truy cập biến từ phạm vi bên ngoài của nó
    . Khi một biến được truy cập, JavaScript sẽ tìm kiếm biến đó trong phạm vi hiện tại,
    Nếu không tìm thấy, nó sẽ tìm trong phạm vi ngoại cục tiếp theo
    và tiếp tục quá trình này cho đến khi tìm thấy biến hoặc đến phạm vi toàn cục

## 2.3.Hãy sử dụng let và const thay vì dùng var

    . let và const giúp hạn chế lỗi liên quan đến phạm vi
    . let và const có phạm vi block
    . an toàn hơn về mặt phạm vi và giúp quản lý biến hiệu quả hơn

# 3.Sai lầm thường gặp

## 3.1.Sử dụng biến toàn cục khi không thực sự cần thiết

    . tăng khả năng xung đột (giữa tên biến và tên hàm)
    . dễ gây ra các lỗi không mong muốn
    . khó khăn trong quản lý dữ liệu trong chương trình

## 3.2.Hiểu nhầm về phạm vi của var, let, const

    . Sử dụng var thay vì let hoặc const trong các block,
     dẫn đến việc biến có phạm vi rộng hơn so với mong muốn.

## 3.3.Không hiểu rõ phạm vi hàm

    . Sử dụng biến khai báo trong một hàm ở ngoài phạm vi hàm đó

## 4.Tóm tắt phạm vi và từ khóa khai báo

## 4.1.Bảng tóm tắt

    Loại phạm vi	var	    let	    const	function
    Global Scope	✔️	    ✔️	    ✔️	    ✔️
    Function Scope	✔️	    ✔️	    ✔️	    ✔️
    Block Scope	    ❌	   ✔️	   ✔️	   ❌*
    Module Scope	✔️	    ✔️	    ✔️	    ✔️
    . * Trong Module, function cũng có phạm vi khối.

## 4.2.Yếu tố cốt lõi

    . Phụ thuộc vào nơi được khai báo
    . Phụ thuộc vào tính chất của từ khóa khai báo

## 4.3.Cách trả lời phỏng vấn

    . let và const có “phạm vi khối” (block scope)
    . var và function khai báo bắt đầu với function có “phạm vi hàm” (function scope)
    .
