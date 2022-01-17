// if (typeof(Storage) !== "undefined"){
//     alert("Yes, this browser have it");
// } else{
//     alert("No, it isn't")
// }

// Khởi tạo localStorage
// Cách 1: 

localStorage.id = "0123456789"

// Cách 2:

localStorage.setItem("motobikeLicense", "Đây là bằng lái của tôi")

// VD: Lưu trữ thông tin người dùng:

let QuocKhanh ={
    name: "Lê Quốc Khánh",
    age: 24,
    address: "Hà nội",
    job: "Student",
    cmnd: "0123456789"
}

// Trước khi lưu trữ trên localStorage. Ta sẽ tiến hành ép kiểu dữ liệu

localStorage.setItem("QuocKhanh", JSON.stringify(QuocKhanh))

// Khi lưu trữ trên localStorage: Ta chỉ có thể lưu trữ dưới dạng text ( string )


// Lấy dữ liệu từ trên localStorage và sử dụng:

console.log(localStorage.cmnd)
console.log(localStorage.getItem("motobikeLicense"))

// Sử Value (giá trị) trong localStorage như thế nào:
// Cách 1:
localStorage.cmnd = "0987654321 + Đây là CMT mới được cập nhập"
// Cách 2:
localStorage.setItem("cmnd", "0987654321 + Đây là CMT mới được update trong LocalStorage")

// Xoá từ khoá và giá trong localStorage
localStorage.removeItem("cmnd")
localStorage.removeItem("id")



