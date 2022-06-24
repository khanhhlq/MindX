// Làm thực đơn bằng Javascript bằng cách áp dụng tương tác và phương thức của Array và Object đã học 
// Gợi ý: áp dụng kiến thức CRUD
// Sau đây là ví dụ code mẫu

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

