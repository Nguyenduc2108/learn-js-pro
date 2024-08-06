// 1.Nguyên lý hoạt động toán tử AND
// Trả về falsy đầu tiên
false && true; // false
0 && 1; // 0
"" && null; // ""
5 && NaN && 6; // NaN

// Không có falsy, trả về giá trị cuối cùng
6 && 8; // 8
["Red", "Blue"] && { name: "John" } && "Hello"; // "Hello"
true && 1 && "Hello" && ["Red", "Green"]; // ["Red", "Green"]

// vd1.Kiểm tra obj là Object và không phải null.
var obj = { key: "value" };

if (obj && typeof obj === "object") {
    console.log("Là Object"); // Kết quả được in ra
} else {
    console.log("Không phải là Object");
}

// vd2.Xét trường hợp obj = null
let obj = null;

if (obj && typeof obj === "object") {
    console.log("Là Object");
} else {
    console.log("Không phải là Object"); // Kết quả được in ra
}

// 2.Nguyên lý hoạt động toán tử OR
// Trả về truthy đầu tiên
1 || 0; // 1
"Hello" || ""; // "Hello"
"Hi" || "Hello"; // "Hi"
10 || "Hello" || true; // 10

// Không có truthy, trả về giá trị cuối cùng
0 || NaN; // NaN
"" || 0 || null; // null
NaN || -0 || undefined || false; // false

// vd1. Kiểm tra có firstName hoặc lastName.
var firstName = "";
var lastName = "Nguyen Van A";

if (firstName || lastName) {
    console.log("Có tên"); // Kết quả được in ra
} else {
    console.log("Không có tên");
}

// vd2.Xét trường hợp “Không có tên”
let firstName = "";
let lastName = "";

if (firstName || lastName) {
    console.log("Có tên"); // Kết quả được in ra
} else {
    console.log("Không có tên");
}

// 3.Nguyên lý hoạt động toán tử Nullish Coalescing(??)
let tenNguoiDung = null; // Giả sử tên người dùng trống
let macDinh = "Khách";

let tenHienThi = tenNguoiDung ?? macDinh;
console.log(tenHienThi); // Khách

// 4.Áp dụng toán tử Nullish Coalescing(??) trong việc truy xuất phần tử mảng
function getElement(array, index, defaultValue) {
    return array[index] || defaultValue;
}

let colors = ["Red", "Green", "Blue"];

getElement(colors, 0, "Empty"); // "Red"
getElement(colors, 1, "Empty"); // "Green"
getElement(colors, 2, "Empty"); // "Blue"

getElement(colors, 3, "Empty"); // "Empty"

///
var numbers = [1, 5, 0];

getElement(numbers, 0, "Empty"); // 1
getElement(numbers, 1, "Empty"); // 5
getElement(numbers, 2, "Empty"); // "Empty"

let strings = ["Hello", ""];

getElement(strings, 0, "Empty"); // "Hello"
getElement(strings, 1, "Empty"); // "Empty"

//// if else
function getElement(array, index, defaultValue) {
    if (array[index] !== null && array[index] !== undefined) {
        return array[index];
    }
    return defaultValue;
}

///// if else gọn hơn
function getElement(array, index, defaultValue) {
    const value = array[index];
    if (value !== null && value !== undefined) return value;
    return defaultValue;
}

/// 3 ngôi
function getElement(array, index, defaultValue) {
    const value = array[index];
    const hasValue = value !== null && value !== undefined;
    return hasValue ? array[index] : defaultValue;
}

getElement(["Hello", ""], 1, "Empty"); // ""
getElement([1, 2, 0], 2, "Empty"); // 0

/// Nullish Coalescing
function getElement(array, index, defaultValue) {
    return array[index] ?? defaultValue;
}

strings = ["Hello", ""];
getElement(strings, 0, "Empty"); // "Hello"
getElement(strings, 1, "Empty"); // ""
getElement(strings, 2, "Empty"); // "Empty"

let numbers = [2, 0];
getElement(numbers, 0, "Empty"); // 2
getElement(numbers, 1, "Empty"); // 0
getElement(numbers, 2, "Empty"); // "Empty"

let message = null;
message ?? alert("Không có message");

// let result = value1 ?? value2 && value3; // Lỗi cú pháp
