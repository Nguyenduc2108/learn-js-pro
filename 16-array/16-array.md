# 1. Mảng => làm việc với Array => làm việc với phương thức của Array (Tổng quan)

    . cách học => ghi nhớ tên T.A(nghĩa)
        . nhận tham số gì
        . trả về cái gì

# 2. Làm việc với mảng cơ bản

    - Lưu ý: Cách ghi chú: 3 ý
        1. dùng để làm gì, hưu ích(dùng) trong tính huống nào
        2. có những tham số nào nào và vai trò của từng tham số
        3. hàm return về cái gì

    - Các phương thức của Array
        1. push():
            - thêm 1 or nh` phần tử vào cuối array
            - trả về độ dài mới của array


        2. pop():
            - xóa phần tử cuối array
            - trả về phần tử vừa xóa

        3. unshift():
             - thêm 1 or nh` phần tử vào đầu array
            - trả về độ dài mới của array

        4. shift():
            - xóa phần tử đầu array
            - trả về phần tử vừa xóa

        5. indexOf():
            - tìm chỉ số(index) đầu tiên của 1 phần tử trong mảng
            - không thấy => trả về -1
            - có tham số index để chỉ định tìm từ vị trí số index

        6. lastIndexOf(): tìm từ cuối về đầu
            - tìm chỉ số(index) cuối cùng của 1 phần tử trong mảng
            - không thấy => trả về -1
            - có tham số index để chỉ định tìm từ vị trí số index

        7. includes():
            - kiểm 1 array có chứa 1 phần tử cụ thể hay không
            - trả về true / false

        8. join():
            - nối all phần tử trong array thành 1 chuỗi , mặc định ngăn cách nhau = dấu ,
            - có thể chỉ định cách ngăn cách giữa các phần tử

        9. reverse():
            - đảo ngược array
            - trả vể array đảo ngược

        10. toString():
            - chuyển array thành chuỗi
            - ngăn cách nhau = dấu ,
        => thêm cách chuyển 1 đối tượng sang chuỗi : 1. String(value)
                                                     2. value + ""

        11. slice():
            - tạo 1 copy or trích xuất 1 phần of array từ start -> end mà không làm thay đổi initial array
            - trả về 1 new array chứa các phần tử được cắt từ start -> end

            - Các trường hợp: (start, end không bắt buộc)
                1. slice(): copy array -> new array
                2. slice(start): trích xuất(cắt)  initial array từ start -> cuối array
                3. slice(start, end): trích xuất(cắt)  initial array từ start -> trước chỉ số of end

        12. splice():
            - nối, thêm , sửa , xóa phần tử bất kỳ trong array
            - sửa thẳng vào array gốc

        13. concat():
            - nối 2 or nh` mảng vào thành 1 array
            - trả về 1 new array -> 0 thay đổi initial array

=> ứng dụng: gửi email cho user and guest => thay vì dùng 2 vòng lặp thì concat() lại thành 1 array rồi gửi

        14. flat():
            - làm phẳng array ; depth(number, infinity): độ sau muốn làm phẳng
            - trả về 1 new array


        15. forEach():
            - duyệt array and thực hiện 1 function lên mỗi phần tử of array
            - 0 trả về 1 new array => chỉ thực hiện hành động lặp và xử lý

        - Các phương thức tìm kiếm trong array:

        16. find():
            - tìm phần tử đầu tiên trong array thỏa mãn 1 hàm kiểm tra
            - không có phần tử thỏa mãn => trả về undefined

        17. findLast():
            - tìm phần tử cuối cùng trong array thỏa mãn 1 hàm kiểm tra
            - không có phần tử thỏa mãn => trả về undefined

        18. findIndex():
            - giống find => nhưng trả về index
            - không thấy => trả về -1

        19. findLastIndex():
            - giống findLast => nhưng trả về index
            - không thấy => trả về -1

        20. filter():
            - duyệt mảng => trả về 1 new array gồm các phần tử thỏa mãn điều kiện
            -


        21. map():
            - trả về 1 new array , chứa các phần tử mới
            phần tử trong mảng mới được trả về tương ứng phần tử trong callback

        => 3 dấu hiệu để có thể rút gọn:
            1. gọi 1 hàm và truyền 1 hàm trong hàm đó
            2. trong hàm lại gọi 1 hàm
            3. hàm cha truyền tham số gì thì hàm con nhận đúng tham số đó

        22. every(): (&&)
            - kiểm tra all phần tử trong array đều phải thỏa mãn dk
            - đúng -> true / sai -> false

        23. some(): (||)
            - kiểm tra đúng ít nhất 1 phần tử trong array đều phải thỏa mãn dk
            - đúng -> true / sai -> false

=> trong thực tế => Array luôn phải check length

        24. reduce():
            - xử lý, kết hợp các phần tử trong mảng => trả về 1 giá trị duy nhất
            => nên viết ra kết quả kỳ vọng

        25. sort():
            - sắp xếp các phần tử trong mảng theo 1 thứ tự nhất định
            - sắp xếp số:
                . lớn đến nhỏ => b - a
                . nhỏ đến lớn => a - b

==> Các cách copy 1 mảng mới:

    1. dùng slice()
    2. dùng Object.assign([], mảng cần copy)
    3. dùng concat() => [].concat(mảng cần copy)
    4. dùng Array.from()

    5. Sao chép sâu : structuredClone()
