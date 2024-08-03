// 1.Phạm vi toàn cục (Global scope)
var globalVar = "Tôi là cây toàn cục, nhìn thấy tôi từ mọi nơi!";

// Truy cập biến toàn cục từ bên ngoài hàm
console.log(globalVar); // Tôi là cây toàn cục, nhìn thấy tôi từ mọi nơi!

function checkGlobalVar() {
    // Truy cập được biến toàn cục từ bên trong hàm
    console.log(globalVar); // Tôi là cây toàn cục, nhìn thấy tôi từ mọi nơi!
}

checkGlobalVar();

// 2.Phạm vi hàm (Function scope)
function funcGarden() {
    let localVar = "Tôi là cây cục bộ, chỉ nhìn thấy tôi trong phòng này!";
    console.log(localVar); // Tôi là cây cục bộ, chỉ nhìn thấy tôi trong phòng này!
}

funcGarden();

// console.log(localVar); // Uncaught ReferenceError: localVar is not defined

// 2.1.Trong trường hợp các hàm lồng nhau:
var globalVar = "Biến toàn cục";

function outerFunction() {
    let outerVar = "Biến ngoài";

    function innerFunction() {
        let innerVar = "Biến trong";

        console.log(innerVar); // Biến trong
        console.log(outerVar); // Biến ngoài
        console.log(globalVar); // Biến toàn cục
    }

    innerFunction();

    console.log(outerVar); // Biến ngoài
    // console.log(innerVar); // Uncaught ReferenceError: innerVar is not defined
}

outerFunction();

console.log(globalVar); // Biến toàn cục
// console.log(outerVar); // Uncaught ReferenceError: outerVar is not defined

// 3.Phạm vi khối (Block scope)
if (true) {
    var blockScopedVar = "Tôi chỉ tồn tại trong khối if này";
    console.log(blockScopedVar); // Tôi chỉ tồn tại trong khối if này
}

console.log(blockScopedVar); // Uncaught ReferenceError: blockScopedVar is not defined

// 3.1 Trường hợp sử dụng cú pháp rút gọn của if-else (không sử dụng ngoặc nhọn {}) thì mỗi nhánh của if-else vẫn là một khối code.
if (true) var blockScopedVar = "Tôi chỉ tồn tại trong khối if này";

console.log(blockScopedVar); // Uncaught ReferenceError: blockScopedVar is not defined
// 3.2.Thậm chí bạn có thể sử dụng độc lập một cặp ngoặc nhọn {} để tạo ra một phạm vi khối.
{
    var blockScopedVar = "Tôi chỉ tồn tại trong khối này";
    console.log(blockScopedVar); // Tôi chỉ tồn tại trong khối này
}

console.log(blockScopedVar); // Uncaught ReferenceError: blockScopedVar is not defined

// 4.Phạm vi module (Module scope)
// Export biến
// File: myModule.js
// export const myVar = 1;
// export function myFunction() {
//   console.log("Hello world");
// }

//Import và sử dụng các giá trị được export:
// File: main.js
// import { myVar, myFunction } from './myModule.js';
// console.log(myVar); // 1
// myFunction(); // Hello world

// 5.Mỗi hàm sẽ tạo ra một phạm vi mới
// (1) Phạm vi toàn cục

function hamCha() {
    // (2) Phạm vi của hamCha

    function hamCon() {
        // (3) Phạm vi của hamCon
    }
}

// 6.Cách JavaScript tìm kiếm biến (Scope chain)
// (3) Tìm thấy biến myVar
let myVar = "Hello, tôi ở đây!"; // Biến toàn cục

function hamCha() {
    // (2) Tìm biến myVar trong phạm vi hamCha
    // Kết quả: không thấy => Tiếp tục tìm kiếm phạm vi ngoại cục

    function hamCon() {
        // (1) Tìm biến myVar trong phạm vi hamCon
        // Kết quả: không thấy => Tiếp tục tìm kiếm phạm vi ngoại cục
        console.log(myVar);
    }
    hamCon();
}

hamCha();

// 7.Hiểu nhầm về phạm vi của var, let, const
if (true) {
    var x = "Tôi là biến var";
}

// Vẫn truy cập được x, dù nó nằm trong block if
console.log(x); // Tôi là biến var

// 8.Không hiểu rõ phạm vi hàm
function myFunction() {
    var y = "Tôi là biến cục bộ";
}
myFunction();
// console.log(y); // Uncaught ReferenceError: y is not defined
