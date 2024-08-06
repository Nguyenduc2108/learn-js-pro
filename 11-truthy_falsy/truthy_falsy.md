# 1. Truthy

    . 1 giá trị khi được chuyển sang boolean trả về true được xem là “truthy”
    . Còn lại là truthy

# 2. Falsy

    .  1 giá trị khi được chuyển sang boolean trả về false được xem là "falsy"
    . Các giá trị falsy trong JS:
        1. false
        2. 0, -0 (số không âm), 0n (số 0 kiểu bigint).
        3. ""
        4. null
        5. undefined
        6. NaN

    . “document.all” là một ngoại lệ duy nhất: falsy
        . là một tính năng cũ của các trình duyệt
        . để truy cập các phần tử HTML

# 3.Tính ứng dụng trong thực tế

    .  if trong JavaScript thực thi nếu giá trị của điều kiện là “truthy”

    . Đánh giá điều kiện trong if:
        . Nếu giá trị là Truthy: Câu lệnh if sẽ được thực thi.
        . Nếu giá trị là Falsy: Câu lệnh trong if sẽ không được thực thi, câu lệnh trong else sẽ được thực thi (nếu có).
