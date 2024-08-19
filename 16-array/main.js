Array.prototype.find2 = function (callback, thisValue) {
    const length = this.length;
    for (let i = 0; i < length; i++) {
        if (i in this) {
            if (callback.call(thisValue, this[i], i, this)) {
                return this[i];
            }
        }
    }
};

Array.prototype.filter2 = function (callback, thisValue) {
    const length = this.length;
    const result = [];
    for (let i = 0; i < length; i++) {
        if (i in this) {
            if (callback.call(thisValue, this[i], i, this)) {
                result.push(this[i]);
            }
        }
    }
    return result;
};

Array.prototype.map2 = function (callback, thisValue) {
    const length = this.length;
    const result = [];
    for (let i = 0; i < length; i++) {
        if (i in this) {
            result[i] = callback.call(thisValue, this[i], i, this);
        }
    }
    return result;
};

Array.prototype.every2 = function (callback, thisValue) {
    const length = this.length;
    for (let i = 0; i < length; i++) {
        if (i in this) {
            if (!callback.call(thisValue, this[i], i, this)) {
                return false;
            }
        }
    }
    return true;
};

Array.prototype.some2 = function (callback, thisValue) {
    const length = this.length;
    for (let i = 0; i < length; i++) {
        if (i in this) {
            if (callback.call(thisValue, this[i], i, this)) {
                return true;
            }
        }
    }
    return false;
};

let items = [
    "apple",
    "banana",
    "mango",
    "orange",
    "banana",
    "pineapple",
    "apple",
    "mango",
    "orange",
];

const result = items.filter((item, index) => {
    return items.indexOf(item) === index;
});

console.log(result);

let arr = ["Bilbo", "Gandalf", "Nazgul"];

const newArr = arr.map2((item) => {
    return `<li>${item}</li>`;
});

const html = `<ul>${newArr.join("")}</ul>`;
console.log(html);

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const kq = fruits.reduce((obj, item) => {
    if (item in obj) {
        obj[item]++;
    } else {
        obj[item] = 1;
    }
    return obj;
}, {});

console.log(kq);
// {apple: 3, banana: 2, orange: 1}
