// 1. Object literal
// const objectName = {
//     key1: value1,
//     key2: value2,
//     // thêm nhiều cặp key-value khác ở đây
// };

// Lưu trữ thông tin người dùng
const user = {
    username: "user123",
    email: "user@example.com",
    signUpDate: "2021-01-01",
};

// Định nghĩa cấu hình cho một ứng dụng
const config = {
    apiUrl: "https://api.example.com",
    apiKey: "abc123",
    timeout: 5000,
};

// kiểm tra sự tồn tại của key
// if ("age" in person) {
//     console.log(`Tuổi: ${person.age}`);
// }

// 2. This keyword Basic

// 3. Cách viết "switch" bằng object
function calculate(operation, a, b) {
    const object = {
        add: () => a + b,
        subtract: () => a - b,
        multiply: () => a * b,
        divide: () => (b === 0 ? "Cannot divide by zero." : a / b),
    };
    var action = {
        add: () => a + b,
        subtract: () => a - b,
        multiply: () => a * b,
        divide: () => (b === 0 ? "Cannot divide by zero." : a / b),
    }[operation];
    return (
        object[operation] ||
        (() => "Operation not recognized. Please use add, subtract, multiply, or divide.")
    )();

    const action = object[operation];
    if (action) {
        return action();
    } else return "Operation not recognized. Please use add, subtract, multiply, or divide.";
    return action
        ? action()
        : "Operation not recognized. Please use add, subtract, multiply, or divide.";
    switch (operation) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            if (b === 0) {
                return "Cannot divide by zero.";
            }
            return a / b;
        default:
            return "Operation not recognized. Please use add, subtract, multiply, or divide.";
    }
}

// Testing the function
console.log(calculate("add", 5, 3));
console.log(calculate("subtract", 5, 5));
console.log(calculate("multiply", 5, 3));
console.log(calculate("divide", 9, 3));
console.log(calculate("divide", 5, 0));
console.log(calculate("modulus", 5, 3));
