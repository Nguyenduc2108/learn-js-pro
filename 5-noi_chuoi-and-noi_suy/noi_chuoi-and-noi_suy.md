# 1.Nối chuỗi

    1.1. Chuỗi là gì?
        . Một kiểu dữ liệu trong JavaScript
        . Được sử dụng để biểu diễn văn bản
        . Có thể tạo chuỗi bằng dấu nháy đơn (' '), nháy kép (" ") hoặc backticks (` `)

    1.2. Tạo chuỗi với nháy đơn:
        . Đặc điểm: Đây là cách truyền thống nhất để tạo chuỗi
        . Ứng dụng:
            + được sử dụng phổ biến cho các chuỗi đơn giản
            + không cần xuống dòng
            + rất hữu ích khi chuỗi chứa các dấu nháy kép bên trong
        . Ví dụ: 'Xin chào, đây là "JavaScript"!'

    1.3. Tạo chuỗi với nháy kép:
        . Đặc điểm: Tương tự dấu nháy đơn nhưng thường được sử dụng khi chuỗi chứa dấu nháy đơn
        . Ứng dụng:
            + hữu ích khi bạn muốn bao gồm dấu nháy đơn trong chuỗi
            + không cần dùng ký tự thoát (Escape character).
        . Ví dụ: "Đây là 'JavaScript'!"

    1.4. Tạo chuỗi với backticks:
        . Đặc điểm:
            + hỗ trợ nội suy chuỗi (cho phép chèn biến hoặc biểu thức vào chuỗi)
            + cho phép xuống dòng trực tiếp trong chuỗi
        . Ứng dụng:
            + cực kỳ hữu ích khi cần kết hợp chuỗi với biến
            + cực kỳ hữu ích khi cần tạo chuỗi nhiều dòng
        . Ví dụ:
            let name = "JavaScript";

            `Xin chào, đây là ${name}!
            Chúng ta có thể xuống dòng trực tiếp.`;

    1.5. Toán tử nối chuỗi:
        . Cho phép kết hợp hai hoặc nhiều chuỗi thành một
        . Sử dụng ký tự + để nối các chuỗi lại với nhau
        . Lý do sử dụng:
            + nối chuỗi hữu ích trong việc tạo ra kết quả động
            + ví dụ kết hợp tên người dùng với một thông điệp chào mừng
        . Lưu ý khi sử dụng:
            + sự khác biệt giữa nối chuỗi và cộng số
            + toán tử + có thể gây nhầm lẫn vì nó được sử dụng cho cả hai mục đích này
            + thứ tự thực hiện của các phép toán:
                . ví dụ:  3 + 4 + "5" sẽ trả về "75" chứ không phải "345" vì phép cộng số được thực hiện trước, sau đó kết quả được nối với chuỗi "5"
            + chuyển đổi kiểu dữ liệu tự động:
                . ví dụ: "3" + 4 + 5 sẽ trả về "345" chứ không phải 12 vì "3" là chuỗi, khiến các số tiếp theo được chuyển đổi thành chuỗi và nối lại
            + làm sao để tránh nhầm lẫn?
                . tránh sử dụng toán tử + cho cả nối chuỗi và cộng số trong cùng một biểu thức
                . sử dụng dấu ngoặc đơn ()
                . hoặc tách biểu thức thành các biến riêng biệt

# 2.Nội suy

    . Sử dụng ${} bên trong backticks được gọi là “Nội suy”
    . Tạo chuỗi với dấy nháy đơn và nháy kép không hỗ trợ nội suy

    2.1. Nội suy chuỗi:
        . phép chèn trực tiếp các biến hoặc biểu thức vào trong một chuỗi
        . thực hiện thông qua cú pháp ` `, $ và {}

# 3.Template literals

    . “Template literals” còn được gọi là “Template strings”
        + sử dụng backticks (`) để tạo chuỗi
        + đặc điểm là cho phép nội suy - tức là chèn biến hoặc biểu thức trực tiếp vào trong chuỗi
    . một tính năng mới được giới thiệu trong ECMAScript 2015 (còn được gọi là ES6)
    . sử dụng backticks (`) để định nghĩa chuỗi thay vì dấu nháy đơn hoặc nháy kép
    . là khả năng thực hiện nội suy - tức là chèn biến hoặc biểu thức trực tiếp vào trong chuỗi
    . hỗ trợ việc tạo chuỗi đa dòng mà không cần sử dụng các ký tự xuống dòng như \n

# 4. Lỗi thường gặp

    . Sử dụng nhầm ký tự tạo chuỗi:
        + trong chuỗi tạo bởi dấu nháy đơn lại chứa dấu nháy đơn mà không sử dụng ký tự thoát (\)
        + tương tự với chuỗi tạo bởi dấu nháy kép và backticks
    . Nhầm lẫn giữa nối chuỗi và cộng số:
        + "2" + 2 sẽ trả về "22" chứ không phải 4
