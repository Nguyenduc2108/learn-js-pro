// 1.Boolean : true / false

// 2.So sánh bằng và không bằng(không nghiêm ngặt)
/**
 * So sánh hai giá trị xem có bằng nhau không (==).
 */
5 == 5; // true
5 == "5"; // true
"Hello" == "Hello"; // true

3 == 4; // false
"Hi" == "Hello"; // false
"hello" == "Hello"; // false

/**
 * So sánh hai giá trị xem có khác nhau không (!=)
 */
3 != 3; // false
3 != "3"; // false
"Hello" != "Hello"; // false

3 != 5; // true
"Hello" != "Hi"; // true

// 3.So sánh bằng và không bằng (Nghiêm ngặt)
/**
 * So sánh hai giá trị xem có bằng nhau không (===).
 */
5 === 5; // true
5 === "5"; // false

/**
 * So sánh hai giá trị xem có khác nhau không (!==)
 */
3 !== 3; // false
3 !== "3"; // true

// 4.So sánh lớn hơn và nhỏ hơn > , <
5 > 3; // true
5 < 3; // false
2 < 2; // false
2 > 2; // false

// 5.So sánh lớn hơn hoặc bằng và nhỏ hơn hoặc bằng >= , <=
2 >= 2; // true
2 <= 2; // true

2 <= 3; // true
3 >= 2; // true

3 >= 4; // false
5 <= 2; // false

// 6.if else
// 6.1 if
var temperature = 40;

if (temperature > 30) {
    console.log("It's a hot day.");
}

// 6.2 else
var temperature = 20;

if (temperature > 30) {
    console.log("It's a hot day.");
} else {
    console.log("It's not a hot day.");
}

// 6.3 else if
var temperature = 18;

if (temperature > 30) {
    console.log("It's a hot day.");
} else if (temperature > 20) {
    console.log("It's a nice day.");
} else {
    console.log("It's a cold day.");
}

// 6.4 Inline if-else
let isRainy = true;

if (isRainy) console.log("Hãy mang theo ô");
else console.log("Không cần mang theo ô");

// 6.5 Toán tử 3 ngôi (Ternary operator)
var temperature = 32;
let result = temperature > 30 ? "It's a hot day." : "It's not a hot day.";

console.log(result); // It's a hot day.

// 6.6 Switch case
let day = 1;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Unknown Day");
}

// 6.7 Fallthrough
let month = 5; // Giả sử tháng 5

switch (month) {
    case 1:
    case 2:
    case 3:
        console.log("Quý 1");
        break;
    case 4:
    case 5:
    case 6:
        console.log("Quý 2"); // Đầu ra cho tháng 5
        break;
    case 7:
    case 8:
    case 9:
        console.log("Quý 3");
        break;
    case 10:
    case 11:
    case 12:
        console.log("Quý 4");
        break;
    default:
        console.log("Tháng không hợp lệ");
}

// Kết quả: Quý 2

// 6.8 Switch case trong hàm
function getQuarter(month) {
    switch (month) {
        case 1:
        case 2:
        case 3:
            return "Quý 1";
        case 4:
        case 5:
        case 6:
            return "Quý 2";
        case 7:
        case 8:
        case 9:
            return "Quý 3";
        case 10:
        case 11:
        case 12:
            return "Quý 4";
        default:
            return "Tháng không hợp lệ";
    }
}

console.log(getQuarter(2)); // Quý 1
console.log(getQuarter(5)); // Quý 2
console.log(getQuarter(8)); // Quý 3
console.log(getQuarter(11)); // Quý 4
console.log(getQuarter(13)); // Tháng không hợp lệ

// 6.9
function checkInteger(number) {
    if (Number.isInteger(number)) {
        return "Số nguyên";
    } else {
        return "Không phải số nguyên";
    }
}

// Sample usage
console.log(checkInteger(4)); // Số nguyên
console.log(checkInteger(3.14)); // Không phải số nguyên

// 6.10
function calculateShipping(distance) {
    if (distance <= 5) {
        return 5000;
    } else {
        return 5000 + (distance - 5) * 1000;
    }
}

// Sample usage
console.log(calculateShipping(3)); // 5000
console.log(calculateShipping(7)); // 7000

// Sample usage
console.log(simpleCalculator("+", 5, 3)); // 8
console.log(simpleCalculator("/", 10, 0)); // Không thể chia cho 0
console.log(simpleCalculator("**", 2, 3)); // Phép tính không hợp lệ
