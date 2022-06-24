function searchBox(){
    document.querySelector(".search-box").classList.remove("displayNone");
    document.querySelector(".hiddenBox").classList.add("noneSearchBox");
    document.querySelector(".removeSearchBox").classList.remove("noneSearchBox");
    document.querySelector(".account").classList.add("accountDisplayNone");
}

function removeSearchBox(){
    document.querySelector(".search-box").classList.add("displayNone");
    document.querySelector(".hiddenBox").classList.remove("noneSearchBox");
    document.querySelector(".removeSearchBox").classList.add("noneSearchBox");
    document.querySelector(".account").classList.remove("accountDisplayNone");
}

function scaleMenuOpen(){
    document.querySelector(".navbar-scale-menu").classList.remove("displayMenuNone");
    document.querySelector(".scaleMenuFirst").classList.add("scaleMenuClose");
    document.querySelector(".scaleMenuSecond").classList.remove("scaleMenuClose");
}

function scaleMenuClose(){
    document.querySelector(".navbar-scale-menu").classList.add("displayMenuNone");
    document.querySelector(".scaleMenuFirst").classList.remove("scaleMenuClose");
    document.querySelector(".scaleMenuSecond").classList.add("scaleMenuClose");
}

let commentNews = document.getElementById("comment");
let nameNews = document.getElementById("name");
let emailNews = document.getElementById("email");

const phanHoi = document.getElementById('send-form');

phanHoi.addEventListener("submit", function(){
    event.preventDefault();

    let check = {
        binhLuan: phanHoi.binhLuan.value.trim(),
        ten: phanHoi.ten.value.trim(),
        diaChiEmail: phanHoi.diaChiEmail.value.trim()
    }

    alert("Gửi phản hồi thành công!")
    console.log("Đã submit thành công form và gửi đi dữ liệu");

    phanHoi.binhLuan.value = "";
    phanHoi.ten.value = "";
    phanHoi.diaChiEmail.value = "";

});

function darkModeButton(){
    var element = document.body;
    element.classList.toggle("light-mode");

    element.classList.add("light-mode-body");

    var lightMode = document.getElementById("disableMode");
    var darkMode = document.getElementById("activeMode");

    lightMode.classList.toggle("disableMode");
    darkMode.classList.toggle("disableMode");

}