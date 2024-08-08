for (let i = 1; i <= 5; i++) {
    console.log(i);
}

let userNames = ["User 1", "User 2", "User 3"]; // và 997 tên khác

for (let i = 0; i < userNames.length; i++) {
    console.log(userNames[i]);
}

// Khởi tạo hai biến a và b với giá trị ban đầu
let a = 60;
let b = 48;

// Đảm bảo rằng a luôn lớn hơn b
if (b > a) {
    // Nếu b lớn hơn a, đổi chỗ a và b
    let temp = a; // Sử dụng biến tạm để giữ giá trị của a
    a = b; // Gán giá trị của b cho a
    b = temp; // Gán giá trị tạm (a ban đầu) cho b
}

// Thực hiện vòng lặp để tìm UCLN sử dụng thuật toán Euclid
while (b != 0) {
    let temp = b; // Lưu giá trị hiện tại của b vào biến tạm
    b = a % b; // Cập nhật b bằng phần dư của a chia cho b
    a = temp; // Cập nhật a bằng giá trị cũ của b
    // Lặp lại quy trình này cho đến khi b bằng 0
}

// Khi b = 0, a chính là UCLN của hai số ban đầu
console.log(`Ước chung lớn nhất là ${a}`); // Ước chung lớn nhất là 12

// Break
var products = [
    { id: 1, name: "Sản phẩm A" },
    { id: 2, name: "Sản phẩm B" },
    { id: 3, name: "Sản phẩm C" },
    { id: 4, name: "Sản phẩm D" },
    { id: 5, name: "Sản phẩm E" },
    // ...
]; // Mảng lớn
let searchId = 2; // Mã sản phẩm cần tìm

for (let i = 0; i < products.length; i++) {
    if (products[i].id === searchId) {
        console.log("Found product:", products[i]);
        // Thoát khỏi vòng lặp
        // ngay khi tìm thấy sản phẩm
        break;
    }
}

// Continue
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        // Khi i đạt giá trị 5
        // bỏ qua lần lặp này
        continue;
    }
    console.log(i);
}

// vd 2
let products = [
    {
        name: "Điện thoại thông minh",
        category: "Điện tử",
    },
    {
        name: "Quạt điều hòa",
        category: "Điện tử",
    },
    {
        name: "Sách lập trình JavaScript",
        category: "Sách",
    },
    {
        name: "Bàn làm việc",
        category: "Nội thất",
    },
];

for (let i = 0; i < products.length; i++) {
    if (products[i].category === "Điện tử") {
        continue; // Bỏ qua sản phẩm điện tử
    }
    console.log(`Sản phẩm: ${products[i].name}`);
}

// for in
const person = { name: "Nguyen Van A", age: 30 };

// Duyệt qua keys
for (const key in person) {
    console.log(key);
}

console.log("--------------");

// Duyệt qua keys và giá trị
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

// for of
const colors = ["red", "green", "blue"];

for (const color of colors) {
    console.log(color);
}

const greeting = "Xin chào!";

for (const char of greeting) {
    console.log(char);
}
