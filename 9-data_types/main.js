// 1. String
let userName = "Nguyễn Văn A";

console.log(typeof userName); // string

// 2. Number
let birthYear = 1990;
let currentYear = 2024;
let age = currentYear - birthYear;

console.log(typeof birthYear); // number

// 3.BigInt
var largeNumber = BigInt("9007199254740991");
let bigNumber = 9007199254740991n;

console.log(typeof largeNumber); // bigint
console.log(typeof bigNumber); // bigint

// 4. Boolean
let isLoggedIn = true;

console.log(typeof isLoggedIn); // boolean

// 5. undefined
let userLocation;

console.log(typeof userLocation); // undefined

// 6. null
let searchResult = null;

console.log(typeof searchResult); // object

// 7. symbol
let uniqueId = Symbol("id");

console.log(typeof uniqueId); // symbol

// 8. Object
let user = {
    name: "Nguyễn Văn A",
    age: 30,
};

console.log(typeof user); // object

// 9. Array
let products = ["iPhone", "Samsung Galaxy", "Google Pixel"];

console.log(typeof products); // object

// 10. Function
function calculateTax(price) {
    const taxRate = 0.1;
    return price * (1 + taxRate);
}

console.log(typeof calculateTax); // function

// 11. Những tình huống giá trị “undefined” xuất hiện?
let example;
console.log(example); // undefined

function testFunction() {
    let a = 1 + 2; // không có lệnh return
}
let result = testFunction();
console.log(result); // undefined

function greet(name) {
    return "Hello " + name;
}
console.log(greet()); // Hello undefined

var obj = { name: "Nguyễn Văn A" };
console.log(obj.age); // undefined

var arr = [1, 2, 3];
console.log(arr[5]); // undefined

function greet(name) {
    return "Hello " + name;
}
console.log(greet()); // Hello undefined

let obj = { name: "Nguyễn Văn A" };
console.log(obj.age); // undefined

let arr = [1, 2, 3];
console.log(arr[5]); // undefined

// ===================== how to check data types ==========================
// 1. String
let greeting = "Hello, world!";
console.log(typeof greeting === "string"); // true

// 2. Number
let value = 30; // Thử thay đổi thành NaN để kiểm tra
console.log(typeof value === "number" && !isNaN(value)); // true

// 3. BigInt
let largeNumber = 9007199254740991n;
console.log(typeof largeNumber === "bigint"); // true

// 4. Boolean
let isStudent = true;
console.log(typeof isStudent === "boolean"); // true

// 5. Null
let emptyValue = null;
console.log(emptyValue === null); // true

// 6. Undefined
let notAssigned;
console.log(typeof notAssigned === "undefined"); // true

// 7. Symbol
let sym = Symbol("unique");
console.log(typeof sym === "symbol"); // true

// 8. Object
let person = { name: "John", age: 30 };
console.log(typeof person === "object" && person !== null && !Array.isArray(person)); // true

// 9. Array
let fruits = ["apple", "banana", "cherry"];
console.log(Array.isArray(fruits)); // true
// hoặc
console.log(fruits instanceof Array); // true

// 10. Function
function greet() {
    return "Hello, world!";
}
console.log(typeof greet === "function"); // true

console.log(typeof greet === "bigint"); // false
