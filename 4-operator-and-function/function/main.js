// 1.Định nghĩa hàm (Function definition)
function functionName() {
    // code block
}

function showGreeting() {
    console.log("Xin chào!");
    console.log("Đây là khóa học JavaScript Pro!");
}

// 2.Gọi hàm (Function call)
showGreeting(); // In ra: Xin chào!
// Đây là khóa học JavaScript Pro!

showGreeting(); // In ra: Xin chào!
// Đây là khóa học JavaScript Pro!

showGreeting(); // In ra: Xin chào!
// Đây là khóa học JavaScript Pro!

// 3.Hàm có tham số (Parameters)
function showGreeting(message) {
    console.log("Xin chào!");
    console.log(message);
}

showGreeting("Đây là khóa học của F8!"); // In ra: Xin chào!
// Đây là khóa học của F8!

showGreeting("Chào mừng bạn đã gia nhập F8!"); // In ra: Xin chào!
// Chào mừng bạn đã gia nhập F8!

// Mỗi tham số ngăn cách bằng một dấu phẩy (,)
function demo(param1, param2, param3) {
    console.log(param1, param2, param3);
}

demo("Value 1", "Value 2", "Value 3"); // In ra: Value 1, Value 2, Value 3
demo("Value 1", "Value 2"); // In ra: Value 1, Value 2, undefined

// 4.Tham số mặc định (Default parameters)
function demo(param1, param2, param3 = "Default value 3") {
    console.log(param1, param2, param3);
}

demo("Value 1", "Value 2"); // In ra: Value 1, Value 2, Default value 3
demo("Value 1", "Value 2", undefined); // In ra: Value 1, Value 2, Default value 3
demo("Value 1", "Value 2", "Value 3"); // In ra: Value 1, Value 2, Value 3

// 5.Hàm có giá trị trả về (Return value)
function sum(a, b) {
    console.log(a + b);
}

function sum(a, b) {
    return a + b;
}

console.log(sum(2, 3)); // In ra: 5
const result = sum(2, 3);
console.log(result); // In ra: 5

const result1 = sum(3, 3);
console.log(result1); // In ra: 6

const result2 = sum(5, 3);
console.log(result2); // In ra: 8

function sum(a, b) {
    a + b;
}
console.log(sum(1, 2)); // In ra: undefined

function sum(a, b) {
    console.log(a + b);
}
sum(2, 5); // In ra: 5

//  Các loại hàm
// 1.Hàm khai báo là gì? (Declaration function)
function tenHam(thamSo) {
    // Khối lệnh
}

function tinhTong(a, b) {
    return a + b;
}
console.log(tinhTong(5, 3)); // 8

// 2.Hàm biểu thức là gì? (Expression function)
const tenHam = function (thamSo) {
    // Khối lệnh
};

const tinhHieu = function (a, b) {
    return a - b;
};
console.log(tinhHieu(5, 3)); // 2

// 3.Hàm mũi tên là gì? (Arrow function)
const tenHam = (thamSo) => {
    // Khối lệnh
};

const tinhTich = (a, b) => {
    return a * b;
};

console.log(tinhTich(5, 3)); // 15
