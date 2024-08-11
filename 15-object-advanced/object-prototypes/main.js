Number.prototype.moneyFormat = function () {
    return `${this}đ`;
}; // => nên tránh

let number = new Number(999);

console.log(number.moneyFormat()); // 999đ
