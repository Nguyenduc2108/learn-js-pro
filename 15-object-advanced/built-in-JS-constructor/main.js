/**
 * 1. Built-in JS Constructor   
    String , Number , Boolean, Array, Function, ...

    String(x), Number(x), Boolean(x) => Ép kiểu

    Array, Object: Làm việc với array , object

    Array.isArray(x),  x instanceof Array,...
    (kiểm tra có phải mảng không)

    Object.assign(x,y), Object.keys(x),...

    Function: Tạo hàm động (Tạo hàm từ chuỗi)

    null, undefined: Không có hàm tướng ứng
    BigInt, Symbol: Có hàm, không phải constructor

 */

let str = new String("Hello");
let num = new Number(123);
let arr = new Array(1, 2, 3);
let obj = new Object();
let func = new Function("x", "y", "return x + y");
