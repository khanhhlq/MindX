/*
LocalStorage là gì?
- Nơi chứa dữ liệu tạm thời trên trang web
- Lưu ý: 
    + Dữ liệu này sẽ mất đi khi chúng ta xóa bộ nhớ đệm
    + Chỉ dùng trong chế độ test mode 
    + LocalStorage chỉ lưu trữ các chuỗi thôi
- Khi nào dùng localStorage:
  + Khi cần lưu trữ dữ liệu không quan trọng (không nhạy cảm)
  + Giúp lưu trữ dl tạm thời trước khi nó được đẩy lên máy chủ (sau đó xóa sạch localStorage)
   
- Hạn chế:
  + Chỉ chứa dạng chuỗi
  + Dữ liệu không an toàn
  + Dung lượng lưu trữ hạn chế (5MB)
*/

// Các phương thức chính trong LocalStorage: key(), setItem(), removeItem(), getItem()

// Hàm Key()
// Key(): Dùng để lấy một giá trị/chuỗi từ một vị trí cụ thể. Chỉ mục có thể được truyền vào phương thức key() như một tham số
localStorage.setItem("user", "Khanh")
console.log("user: ", localStorage.key(1))

//setItem(): phương thưc này dùng để lưu trữ các phần tử trong LS
localStorage.setItem("str", "ABCDXYZ")


// lấy ra dữ liệu từ LocalStorage
const getStr = localStorage.getItem("str")
console.log("getStr: ", getStr);

//lưu trữ đối tượng trên LocalStorage 
const Car = {
    brand: "Suzuki",
    color: "white",
    price: 10000
  }
  
localStorage.setItem("car", JSON.stringify(Car));
let car = JSON.parse(localStorage.getItem("car")) 
console.log("car: ", car);
  
  