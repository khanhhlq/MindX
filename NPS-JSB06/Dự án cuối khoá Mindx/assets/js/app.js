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

document.getElementById("trailer").addEventListener("play", function(){
    let bgMusic = document.getElementById("bg-music");
    bgMusic.pause();
})

document.getElementById("trailer").addEventListener("pause", function(){
    let bgMusic = document.getElementById("bg-music");
    bgMusic.play();
})

function darkModeButton(){
    var element = document.body;
    element.classList.toggle("light-mode");

    element.classList.add("light-mode-body");

    var lightMode = document.getElementById("disableMode");
    var darkMode = document.getElementById("activeMode");

    lightMode.classList.toggle("disableMode");
    darkMode.classList.toggle("disableMode");

}