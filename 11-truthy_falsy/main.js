if (document.all) {
    console.log("Truthy");
} else {
    console.log("Falsy"); // Đoạn code này sẽ được thực thi
}

console.log(typeof document.all); // "undefined"

// áp dụng trong if else
var myString = "";

if (myString === "") {
    // <-- Chú ý chỗ này
    console.log("Chuỗi rỗng"); // Kết quả này sẽ được in ra
} else {
    console.log("Chuỗi có dữ liệu");
}

var myString = "";

if (myString !== "") {
    // <-- Chú ý chỗ này
    console.log("Chuỗi có dữ liệu");
} else {
    console.log("Chuỗi rỗng"); // Kết quả này sẽ được in ra
}

let myString = "";

if (myString) {
    // Giờ chỉ còn thế này
    console.log("Chuỗi có dữ liệu");
} else {
    console.log("Chuỗi rỗng"); // Kết quả này sẽ được in ra
}
