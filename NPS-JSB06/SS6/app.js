// console.log("SS6.js onload");

// In ra trên console Họ và Tên của mình

// let firstName, surName, lastName;

// firstName = "Khánh";
// surName = "Quốc";
// lastName = "Lê";

// console.log("In ra console họ và tên của mình: ", lastName, surName, firstName);

// Chia lấy phần nguyên
// console.log("Chia lấy phần nguyên của phép chia 4/3 là: ", 4/3);
// Chia lấy phần dư
// console.log("Chia lấy phần dư của phép chia 4/3 là: ", 4%3);

// Chuỗi trong Javascript

// Đếm chuỗi của biến x 

// x = "Hello World!";
// console.log("Trong biến x có", x.length, "kí tự");

// Bài toán về vòng lặp trong JS

// In ra các số lẻ từ 1 đến 10 ( Dùng vòng lặp while )

// let n = 1;
// while(n <= 10){
//     if(n % 2 != 0){
//         console.log("Các số lẻ từ 1 đến 10 là:", n);
//     }
//     n++;
// }

// Câu lệnh ngăn cách cho 2 đoạn code trên và dưới ở dòng này

// console.log("-------------------------------") 

// In ra các số chẵn từ 1 đến 10 ( Dùng vòng lặp do while )

// let i = 1;
// do{
//     if(i % 2 == 0){
//         console.log("Các số chẵn từ 1 đến 10 là:", i);
//     }
//     i++;
// }while(i <= 10);

// Array (Mảng) trong Javascript

// Liệt các món có từ "bánh"
// let monAn = Array("Quán chúng tôi có nhiều loại bánh như sau:", "Bánh bèo", "Bánh xèo", "Bánh Cuốn", "Bánh Canh", "Bánh hỏi", "Bánh giày", "Bánh chưng")
// console.log(monAn);

// Sử dụng push() để thêm một phần tử vào cuối một mảng nào đó

// let arr = ["Lê", "Quốc"]
// arr.push(prompt("Nhập phần tử mà bạn muốn thêm vào mảng arr:"));
// console.log("Mảng sau khi thêm một phần tử là:", arr);

// Cú pháp để chỉnh sửa một dữ liệu nào đó trong một mảng

// let array = Array("Thịt chó", "Cá nướng", "Tôm hấp");
// array[0] = "Thịt cầy"
// console.log("Mảng sau khi update là:", array);

// Xoá một phần tử nào đó trong mảng

// let array_one = Array("Thịt cá", "Thịt cầy", "Thịt cáo", "Thịt tôm");
// array_one.splice(2, 1);
// console.log("Mảng sau khi delete là:", array_one);

// Bài tập JS

let n = prompt("Người dùng nhập vào số món ăn muốn lưu");
n = Number(n);
let menu = [];
let i = 1
do {
  let x = prompt(`Mời người dùng nhập vào món ăn thứ ${i}`);
  menu.push(x);
  i = i + 1;
}
while (i <= n);

console.log("Menu món ăn hiện tại là", menu);
let input;

do {
  input = prompt("Mời người dùng nhập vào C,R,U,D");
  if (input == 'c') { // tại đây kiểm tra input == c hay ko
    menu.push(prompt("Mời người dùng nhập món ăn muốn thêm"));
    console.log("Menu món ăn sau khi thêm là:", menu);
  }
  else if (input == 'r') {
    console.log("Menu món ăn được in ra là:", menu);
  }
  else if (input == 'u') {
    // tìm được vị tri của phần tử muốn update
    let viTriUpdate = menu.indexOf(prompt("người dùng nhập món muốn update"))
    menu[viTriUpdate] = prompt("Người dùng nhập món ăn mới thay thế món cũ:")
    console.log("Menu món ăn sau khi update là:", menu);
  }
  else if (input == 'd') {
    let viTriDelete = menu.indexOf(prompt("người dùng nhập món muốn Delete"));
    menu.splice(viTriDelete, 1);
    console.log("Menu món ăn sau khi delete là:", menu);
  }
  else {
    alert("Không tồn lại lựa chọn => thoát vòng lặp");
  }
}
while (input == 'c' || input == 'r' || input == 'u' || input == 'd');


