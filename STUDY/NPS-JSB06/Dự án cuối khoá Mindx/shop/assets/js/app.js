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

function dropListMenu2(){
    document.querySelector(".rowtwo").classList.remove("load-more-drop");
    document.querySelector(".load-more-btn").classList.add("load-more-drop");
}

function darkModeButton(){
    var element = document.body;
    element.classList.toggle("light-mode");

    element.classList.add("light-mode-body");

    var lightMode = document.getElementById("disableMode");
    var darkMode = document.getElementById("activeMode");

    lightMode.classList.toggle("disableMode");
    darkMode.classList.toggle("disableMode");

}
