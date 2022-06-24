// Câu 1

n = Number(prompt("Vui lòng nhập tham số cho biến number"))

const findEven = (number) => {
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

let container = document.getElementById("container");
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
    }z
    document.write("</br>")
}

// Câu 4

const dongHo = () => {
    let gio = document.getElementById("gio");
    let phut = document.getElementById("phut");
    let giay = document.getElementById("giay");
    let Gio_hien_tai = new Date().getHours();
    let Phut_hien_tai = new Date().getMinutes();
    let Giay_hien_tai = new Date().getSeconds();
    gio.innerHTML = Gio_hien_tai + ":";
    phut.innerHTML = Phut_hien_tai + ":";
    giay.innerHTML = Giay_hien_tai;
}

let Dem_gio = setInterval(Dong_ho, 1000);
