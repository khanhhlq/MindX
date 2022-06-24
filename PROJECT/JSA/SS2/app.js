// Sample 1
console.log("*** SAMPLE 1 ***")

let animals = ["Dog", "Cat", "Frog"]

// Create ✅
animals.push("Rabbit")
console.log("CREATE: ", animals)

// READ ✅
console.log("READ: ", animals)

// UPDATE ✅
animals[0] = "mouse"
console.log("UPDATE: ", animals)

// DELETE ✅
animals.splice(1, 2)
console.log("UPDATE: ", animals)

// Sample 2
console.log("*** SAMPLE 2 ***")

let colors = ["red", "blue", "yellow"]

// Create ✅
colors.push("purple")
console.log("CREATE: ", colors)

// READ ✅
console.log("READ: ", colors)

// UPDATE ✅
colors[2] = "white"
console.log("UPDATE: ", colors)

// DELETE ✅
colors.splice(2, 3)
console.log("UPDATE: ", colors)


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


