// let numberA = +prompt("Nhap so A");
// let numberB = +prompt("Nhap so B");

// function isNumber(value) {
//     return typeof value === "number" && !isNaN(value);
// }

// if (!isNumber(numberA) || !isNumber(numberB)) {
//     console.log("Number is invalid");
// } else {
//     console.log(`Total of A vs B is ${numberA + numberB}`);
// }

// vd
"3" + 2; // "32"

// ép kiểu chủ động(rõ ràng)
Number("123"); // 123

// ép kiểu ngầm định
5 + ""; // "5"

// 1.string
String(123); // "123"
(123).toString(); // "123"
// Lưu ý: không áp dụng được cho `null` và `undefined`
`${123}`; // "123"
// hoặc
123 + ""; // "123"

// 2.number
Number("456"); // 456
Number(true); // 1
Number(null); // 0
+"456"; // 456
+true; // 1
+null; // 0

Number("abc"); // NaN
Number(undefined); // NaN

parseInt("123", 10); // 123
parseFloat("123.45"); // 123.45

// 3.boolean
Boolean(1); // true
Boolean(0); // false
Boolean("hello"); // true
Boolean(""); // false

!!0; // false
!!1; // true

// Lưu ý
3 === "3"; // false, vì một là số và một là chuỗi
3 === 3; // true, cùng kiểu và giá trị
