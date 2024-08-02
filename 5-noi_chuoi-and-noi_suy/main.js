// 1.Chuỗi là gì?
"This is a string!"; // Tạo chuỗi với nháy đơn
"This is another string"; // Tạo chuỗi với nháy kép
`This is yet another string!`; // Tạo chuỗi với backticks

// 2.Tạo chuỗi với nháy đơn
let single = "Single";

// 3.Tạo chuỗi với nháy kép
let double = "Double";

// 4.Tạo chuỗi với backticks
let backticks = `Backticks`;
let name1 = "JavaScript";

`Xin chào, đây là ${name1}!
Chúng ta có thể xuống dòng trực tiếp.`;

// 5.Nối chuỗi
// Nối chuỗi
let greeting = "Xin chào, " + "tôi là " + "Huy.";

console.log(greeting); // Xin chào, tôi là Huy.
"Xin" + " " + "chào!"; // 'Xin chào!'

let greeting1 = "Xin";
let message = greeting1 + " chào!";

console.log(message); // Xin chào!

let message1 = "Đây là chuỗi chứa dấu nháy đơn: I'm learning JavaScript!";
console.log(message1); // Đây là chuỗi chứa dấu nháy đơn: I'm learning JavaScript!

let message2 = 'Đây là chuỗi chứa dấu nháy kép: "JavaScript is fun!"';
console.log(message2); // Đây là chuỗi chứa dấu nháy kép: "JavaScript is fun!"

// Các cách làm
// 1.cách làm sai
let a = 10;
let b = 20;
let message3 = "Tổng của " + a + " và " + b + " là: " + a + b;
console.log(message3); // Tổng của 10 và 20 là: 1020

// 2.cách làm đúng (cách 1)
let a1 = 10;
let b1 = 20;
let message4 = "Tổng của " + a1 + " và " + b1 + " là: " + (a1 + b1);

console.log(message4); // Tổng của 10 và 20 là: 30

// 3.cách làm đúng (cách 2)
let a2 = 10;
let b2 = 20;
let total = a2 + b2; // Thực hiện phép cộng trước
let message5 = "Tổng của " + a2 + " và " + b2 + " là: " + total;

console.log(message5); // Tổng của 10 và 20 là: 30

// 4.cách làm đúng (cách 3 - nên sử dụng)
let a3 = 10;
let b3 = 20;
let total1 = a3 + b3; // Thực hiện phép cộng trước
let message6 = `Tổng của ${a3} và ${b3} là: ${total1}`;

console.log(message6); // Tổng của 10 và 20 là: 30

// 6.Template literals
// 1.Nội suy chuỗi
// Nội suy chuỗi
let name = "Linh";
let story = `Và đây là câu chuyện của ${name}.`;

console.log(story); // Và đây là câu chuyện của Linh.

// 2.Nội suy biến vào chuỗi
let language = "JavaScript";
let message7 = `Tôi đang học ${language}!`;

console.log(message7); // Tôi đang học JavaScript!

// Chuỗi nhiều dòng
let message8 = `Xin chào, đây là JavaScript!
Chúng ta có thể xuống dòng trực tiếp.`;

console.log(message8); // Xin chào, đây là JavaScript!
// Chúng ta có thể xuống dòng trực tiếp.

// Nội suy và nhiều dòng (ví dụ 1)
let name2 = "JavaScript";

let message9 = `Xin chào, đây là ${name2}!
Chúng ta có thể xuống dòng trực tiếp.`;

console.log(message9); // Xin chào, đây là JavaScript!
// Chúng ta có thể xuống dòng trực tiếp.

// Nội suy và nhiều dòng (ví dụ 2):
let part1 = "Học lập trình";
let part2 = "không khó.";
let combined = `${part1}
${part2}`;

console.log(combined); // Học lập trình
// không khó.

// Chuỗi chứa nháy đơn và nháy kép
let quote = `She said, "I'm learning JavaScript!"`;

console.log(quote); // She said, "I'm learning JavaScript!"
