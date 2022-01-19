// 1. Hằng số là các giá trị có thể xác định 1 lần duy nhất ( được gán giá trị 1 lần duy nhất)
const Pi = 3.14;
console.log("Pi: ", Pi);

// 2. Block & Scoped ( Các cú pháp khai báo: let, var)
let a = "Hello"
var b = "World"
console.log(a+ " " + b)

// Ví dụ:
{
    {
        let cha = "Đây là biến được khai báo ở khối 2";
        {
            console.log("cha: ", cha);
        }
    }
    console.log("cha: ", cha); // Sẽ bị lỗi: vì nằm ở ngoài block
}