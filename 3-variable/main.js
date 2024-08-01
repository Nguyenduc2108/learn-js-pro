const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const userName = "John";
const userAge = 25;
const userEmail = "123@gmail.com";
console.log(userName, userAge, userEmail);

var storeName = "Cửa hàng bác Sơn";
let riceQuantity = 100;
const storeAddress = "123 đường ABC";
console.log(storeName, riceQuantity, storeAddress);

riceQuantity = 150; // Cập nhật số lượng gạo

storeName = "Cửa hàng bác Sơn"; // Cập nhật tên cửa hàng

console.log(storeName, riceQuantity);

storeAddress = "456 đường XYZ"; // TypeError: Assignment to constant variable.
console.log(storeAddress);
