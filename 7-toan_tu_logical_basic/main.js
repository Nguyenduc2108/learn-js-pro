// 1. Toán tử logic AND (&&)
var temperature = 25; // Nhiệt độ 25 độ C
var dayOff = "Sunday"; // Ngày nghỉ là Chủ nhật
var today = "Sunday"; // Ngày hôm nay

if (temperature > 20 && today === dayOff) {
    console.log("Đi picnic!");
} else {
    console.log("Ở nhà!");
}
// Kết quả: Đi picnic!

// cách viết khác
var temperature = 25; // Nhiệt độ 25 độ C
var dayOff = "Sunday"; // Ngày nghỉ là Chủ nhật
var today = "Sunday"; // Ngày hôm nay

// Tách thành biến giúp code có ý nghĩa hơn
var isWeatherGood = temperature > 20;
var hasFreeTime = today === dayOff;

if (isWeatherGood && hasFreeTime) {
    console.log("Đi picnic!");
} else {
    console.log("Ở nhà!");
}
// Kết quả: Đi picnic!

// 2. Toán tử logic OR (||)
let isComedyAvailable = true; // Có phim hài
let isActionAvailable = false; // Không có phim hành động

if (isComedyAvailable || isActionAvailable) {
    console.log("Xem phim vui vẻ!");
} else {
    console.log("Chọn hoạt động khác!");
}
// Kết quả: Xem phim vui vẻ!

// 3. Toán tử logic NOT (!)
let isCatLover = false;

if (!isCatLover) {
    console.log("Không thích mèo!");
}
// Kết quả: Không thích mèo!

// 4.Kết hợp toán tử AND (&&)
let age = 17;
let hasBasicComputerSkills = true;
let isRegistered = true;

if (age > 16 && hasBasicComputerSkills && isRegistered) {
    console.log("Đủ điều kiện tham gia khóa học");
} else {
    console.log("Không đủ điều kiện");
}
// Kết quả: Đủ điều kiện tham gia khóa học

// 5. Kết hợp toán tử OR (||)
var isVipMember = false;
let hasGiftCode = true;
let hasPaidSubscription = false;

if (isVipMember || hasGiftCode || hasPaidSubscription) {
    console.log("Truy cập nội dung VIP");
} else {
    console.log("Không thể truy cập nội dung VIP");
}
// Kết quả: Truy cập nội dung VIP

// 6. Kết hợp toán tử AND và OR
let isNewUser = true;
var isVipMember = false;
let purchaseAmount = 600000;

if ((isNewUser || isVipMember) && purchaseAmount > 500000) {
    console.log("Đủ điều kiện nhận quà");
} else {
    console.log("Không đủ điều kiện");
}
// Kết quả: Đủ điều kiện nhận quà
