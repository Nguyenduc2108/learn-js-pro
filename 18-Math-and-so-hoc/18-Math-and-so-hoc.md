# 1. Số học

    1. NaN , isNaN()

    2. parseInt()

    3. Number.prototype.toFixed()
        . lấy số sau dấu thập phân , làm tròn trên, trả về 1 chuỗi

    3e6 => 3 000 000 (6 số 0)

## 1.1. Các cách kiểm tra NaN

    1. typeof x = "number" && isNaN(x)

    2. Number.isNaN(x)

    3. x !== x => NaN

    4. Object.is(NaN, x)

    5. [NaN].includes(x)
