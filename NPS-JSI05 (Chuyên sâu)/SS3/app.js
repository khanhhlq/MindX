// class Rectangle{
//     constructor(_width, _height, _color){
//         console.log("the Rectangle is being created")

//         this.width = _width;
//         this.height = _height;
//         this.color = _color;
//     }
// }   
// let myRectangle1 = new Rectangle(6, 3, "Blue")
// console.log("myRectangle1:", myRectangle1)

class Square {
    constructor(_width) {
      this.width = _width;
    }

    // phương thức tính diện tích hình vuông
    get area() {
      //get: Dùng để lấy ra giá trị cần thiết
      return this.width * this.width
    }

    // Phương thức setter
    set area(area) {
      // set: Đặt lại giá trị cho ... khi được gọi trực tiếp
      this.width = Math.sqrt(area); // => 5
      this.height = this.width
    }
  }

//   let mySquare1 = new Square(5);
//   console.log("Dien tich hinh vuong 1 la: ", mySquare1.area);

//   let mySquare2 = new Square(4);
//   console.log(mySquare2.area); // kết quả là: 16

  mySquare2.area = 64;
  console.log(mySquare2.width);// 8
  console.log(mySquare2.height);// 8


    // Parent and Child Class 
    class Person {
        constructor(_name, _age, _address) {
          this.name = _name;
          this.age = _age;
          this.address = _address;
        }
  
        describe() {
          console.log(`I am ${this.name} and I am ${this.age} years old. I live in ${this.address}`);
        }
      }
  
  
      // Khoi tao 1 lop con ke thua tu lop cha
      class GiaNam extends Person {
        constructor(_name, _age, _address, _hobbies) {
          super(_name, _age, _address);// hàm để kế thừa các thuộc tính từ cha
          this.hobbies = _hobbies
        }
  
        travel() {
          console.log(`${this.name} is going to Ha Noi Park`);
        }
      }
  
      let nam = new GiaNam("Lương Gia Nam", 17, "Hàng Chiếu", "Computer,Gaming,..");
      console.log(nam);
      console.log(nam.describe());//  In ra gì?
