let Grape = [];

for (let i = 0; i <= 15; i++){
    let food = prompt(`Vui lòng nhập tên trái cây thứ ${i}`);
    Grape.push(food);
}

document.writeln("Danh sách các trái cây vừa nhập có tổng cộng 15 loại như sau: " + "</br>");

for (let i = 0; i <= 15; i++){
    document.writeln("</br>" + i + " - " + Grape[i] + "</br>");
}

function myButton() {
    
    let input = prompt("Chọn lựa đi nào: C, R, U, D");

    if (input == 'C' || input == 'c'){
        Grape.push(prompt("Vui lòng nhập trái cây muốn thêm: "));
        document.writeln("Danh sách các trái cây sau khi cập nhập là: " + "</br>");
        for (let i = 0; i <= 16; i++){
            document.writeln("</br>" + i + " - " + Grape[i] + "</br>");
        }
    }

    if (input == 'R' || input == 'r'){
        document.writeln("Danh sách các loại trái cây sau khi được liệt kê dưới đây:");
        for (let i = 0; i <= 15; i++){
            document.writeln("</br>" + i + " - " + Grape[i] + "</br>");
        }
    }

    if (input == 'U' || input == 'u'){
        let update = Grape.indexOf(prompt("Nhập tên của loại trái cây mà bạn muốn cập nhập"));
        Grape[update] = prompt("Nhập lại thông tin của loại trái cây này đi");

        document.writeln("Danh sách các loại trái cây sau khi update:");
        for (let i = 0; i <= 15; i++){
            document.writeln("</br>" + i + " - " + Grape[i] + "</br>");
        }
    }

    if (input == 'D' || input == 'd'){
        let viTriDelete = Grape.indexOf(prompt("Nhập tên trái cây mà bạn muốn xoá"));
        Grape.splice(viTriDelete, 1);
        document.writeln("Danh sách các loại trái cây sau khi được xoá thì còn lại 14 quả như sau");
        for (let i = 0; i <= 14; i++){
            document.writeln("</br>" + i + " - " + Grape[i] + "</br>");
        }
    }

}