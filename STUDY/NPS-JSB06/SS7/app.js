// Tạo đối tượng Object

// let dog = {}; // => Bạn đã tạo thành công một đối tượng dog
// console.log(dog);

// Thêm thuộc tính cho đối tượng dog
// dog.name = "Ngáo";
// console.log(dog);

// let leQuocKhanh = {
//     key: value,
//     name: "Quoc Khanh",
//     age: 15,
//     sex: "Male",
//     cccd: 1234567890,
//     address: "Phú Yên",
//     hobbies: "Coding",
//     crush: "Single",
// }
// console.log(conNguoi); // => Thuộc tính làm nên đối tượng đó

// THAO TÁC C,R,U,D đối với Object
// Thêm một thuọc tính weight vào đối tượng trên

// leQuocKhanh.weight = "50kg" // Nếu như đã có thuộc tính này, => update giá trị thành 70kg. Nếu như chưa có thuộc tính ưeight thì thêm mới vào

// console.log("Đối tượng Lê Quốc Khánh sau khi thêm thuộc tính weight là:", leQuocKhanh);

// R: sử dụng console.log(obj)

// U: Update một thuộc tính trong object
// leQuocKhanh.weight = "55kg";
// console.log("Đối tượng Lê Quốc Khánh sau khi update thuộc tính weight là:", leQuocKhanh);

// D: delete 1 thuộc tính trong oject

// delete leQuocKhanh.weight;
// console.log("Dối tượng Lê Quốc Khánh sau khi delete thuộc tính weight là:", leQuocKhanh);

// Function (Hàm trong javascript)

// Tạo ra một hàm để tính tổng 2 số nguyên bất kì

// function sumNumber(a, b){
//     console.log(a + b);
//     console.log(a, b);
// }

// sumNumber(1, 2); // Gọi tới hàm sumNumber

// Ví dụ về return và không return

// function sumNumber1(a, b){
//     return a + b;
// }

// function sumNumber2(a, b){
//     console.log(a + b);
// }

// sumNumber1(1, 2);
// console.log("sumNumber1 trả về tổng 2 số bất kỳ như sau =>", sumNumber1(1, 2));
// sumNumber2(1, 2);

// VD về return với hàm

// function oneToTen(){
//     for (let i = 1; i <= 10; i++){
//         console.log(i);
//         if (i === 5){
//             return "Thoát vòng lặp tại ví trí thứ 5!"; // Thoát vòng lặp tại vị trí thứ 5 nhé
//         }
//     }
// }

// console.log(oneToTen());

// DOM (DOCUMENT OBJECT MODEL) trong website 
const h1 = document.getElementById("welcome");
console.log(h1);
// Thay đổi nội dung text bên trong thẻ
h1.innerText = "Nah!!!";
// Thay đổi, thêm mới 1 thẻ bên trong thẻ được lây ra với thuộc tính innnerHTML

h1.innerHTML = 
`<div>Đây là thẻ div mới được tạo bởi JS</div>
<span>Đây là thẻ span mới được tạo bởi JS</span>
`;

h1.style.color = "green";

// Lấy ra thẻ div có class là : "container"

const div = document.querySelector(".container");
console.log(div);


function changeColor(){
    div.style.color = "pink";
}

function changeColor2(){
    h1.style.color = "purple";
}

