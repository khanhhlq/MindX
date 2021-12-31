// Câu 1

n = prompt("Vui lòng nhập tham số cho biến number")

function findEven(number){
    console.log("Các số chẵn trong khoảng từ 4 đến", number)
    for (let i = 4; i <= number; i++){
        if (i % 2 == 0){
            console.log(i)
        }
    }
}

if (n >= 4 && n <= 20){
    console.log(findEven(n))
} else{
    alert("Tham số number bị ràng buộc bởi điều kiện 4 <= number <= 20")
}

// Câu 2

var container = document.getElementById("container");
container.addEventListener('mouseover', function(){
    container.style.color = 'red';
});

container = document.getElementById("container");
container.addEventListener('mouseout', function(){
    container.style.color = 'black';
});

// Câu 3

for (let i = 1; i < 6; i++){
    for (let j = 1; j <= i; j++){
        document.writeln("1");
    }
    document.write("</br>")
}

// Câu 4

function Dong_ho() {
    var gio = document.getElementById("gio");
    var phut = document.getElementById("phut");
    var giay = document.getElementById("giay");
    var Gio_hien_tai = new Date().getHours();
    var Phut_hien_tai = new Date().getMinutes();
    var Giay_hien_tai = new Date().getSeconds();
    gio.innerHTML = Gio_hien_tai + ":";
    phut.innerHTML = Phut_hien_tai + ":";
    giay.innerHTML = Giay_hien_tai;
}

var Dem_gio = setInterval(Dong_ho, 1000);
