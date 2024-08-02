// 1.Toán tử cộng (+)
let sumInt = 5 + 3; // sumInt = 8

let sumIntFlt = 7 + 3.5; // sumIntFlt = 10.5

let sumFlts = 2.3 + 4.7; // sumFlts = 7

let sumNegPos = -10 + 15; // sumNegPos = 5

// 2.Toán tử trừ (-)
let diffInt = 10 - 4; // diffInt = 6

let diffIntFlt = 15 - 2.5; // diffIntFlt = 12.5

let diffFlts = 5.75 - 3.25; // diffFlts = 2.5

let diffPosNeg = 20 - -5; // diffPosNeg = 25

let diffFltInt = 7.5 - 3; // diffFltInt = 4.5

// 3.Toán tử nhân (*)
let prodInt = 4 * 3; // prodInt = 12

let prodIntFlt = 7 * 2.5; // prodIntFlt = 17.5

let prodFlts = 3.5 * 2.2; // prodFlts = 7.7

let prodPosNeg = 5 * -3; // prodPosNeg = -15

let prodZero = 9 * 0; // prodZero = 0

// 4.Toán tử chia (/)
let quotInt = 10 / 2; // quotInt = 5

let quotIntFlt = 9 / 1.5; // quotIntFlt = 6

let quotFlts = 7.5 / 2.5; // quotFlts = 3

let quotPosNeg = 20 / -4; // quotPosNeg = -5

let quotNegInt = -15 / 5; // quotNegInt = -3

let quotZero = 5 / 0; // quotZero = Infinity or -Infinity

// 5.Toán tử chia lấy dư (%)
let result1 = 10 % 3; // result1 = 1, vì 10 chia 3 dư 1
let result2 = 16 % 2; // result2 = 0, vì 16 chia 2 dư 0
let result3 = 8 % 16; // result2 = 8, vì 8 chia 16 dư 8

// 6.Toán tử tăng giá trị lên 1 (++)
let a = 5;
a++;
console.log(a); // 6

// 7.Toán tử giảm giá trị đi 1 (--)
let b = 5;
b--;
console.log(b); // 4

// 8.Toán tử lũy thừa (**)
let c = 3 ** 2; // c = 9, tương đương với 3 mũ 2

// 9.Toán tử gán (=)
let age = 25;
console.log(age); // 25

// 10.Toán tử gán kết hợp (+=, -=, *=, /=, %=)
let aa = 5;
aa += 3; // Tương đương với a = a + 3; giờ a là 8

let bb = 10;
bb -= 4; // Tương đương với b = b - 4; giờ b là 6

let cc = 7;
cc *= 3; // Tương đương với c = c * 3; giờ c là 21

let dd = 20;
dd /= 4; // Tương đương với d = d / 4; giờ d là 5

let aaa = 10;
aaa %= 3; // Tương đương a = a % 3; giờ a là 1, vì 10 chia 3 dư 1

let bbb = 3;
bbb **= 2; // Tương đương b = b ** 2; giờ b là 9, vì 3 mũ 2 là 9

// 11.Toán tử ++i và i++
let i = 5;

console.log(i++); // 5
console.log(i); // 6

console.log(++i); // 6
console.log(i); // 6
