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


function episode1(){
    document.querySelector(".episode-1").classList.remove("disable");
    document.querySelector(".episode-2").classList.add("disable");
    document.querySelector(".episode-3").classList.add("disable");
    document.querySelector(".episode-4").classList.add("disable");
    document.querySelector(".episode-5").classList.add("disable");
    document.querySelector(".episode-6").classList.add("disable");
    document.querySelector(".episode-7").classList.add("disable");
    document.querySelector(".episode-8").classList.add("disable");
    document.querySelector(".episode-9").classList.add("disable");

    document.querySelector(".movies-1").classList.remove("movies-hidden");
    document.querySelector(".movies-2").classList.add("movies-hidden");
    document.querySelector(".movies-3").classList.add("movies-hidden");
    document.querySelector(".movies-4").classList.add("movies-hidden");
    document.querySelector(".movies-5").classList.add("movies-hidden");
    document.querySelector(".movies-6").classList.add("movies-hidden");
    document.querySelector(".movies-7").classList.add("movies-hidden");
    document.querySelector(".movies-8").classList.add("movies-hidden");
    document.querySelector(".movies-9").classList.add("movies-hidden");
}

function episode2(){
    document.querySelector(".episode-2").classList.remove("disable");
    document.querySelector(".episode-1").classList.add("disable");
    document.querySelector(".episode-3").classList.add("disable");
    document.querySelector(".episode-4").classList.add("disable");
    document.querySelector(".episode-5").classList.add("disable");
    document.querySelector(".episode-6").classList.add("disable");
    document.querySelector(".episode-7").classList.add("disable");
    document.querySelector(".episode-8").classList.add("disable");
    document.querySelector(".episode-9").classList.add("disable");

    document.querySelector(".movies-2").classList.remove("movies-hidden");
    document.querySelector(".movies-1").classList.add("movies-hidden");
    document.querySelector(".movies-3").classList.add("movies-hidden");
    document.querySelector(".movies-4").classList.add("movies-hidden");
    document.querySelector(".movies-5").classList.add("movies-hidden");
    document.querySelector(".movies-6").classList.add("movies-hidden");
    document.querySelector(".movies-7").classList.add("movies-hidden");
    document.querySelector(".movies-8").classList.add("movies-hidden");
    document.querySelector(".movies-9").classList.add("movies-hidden");
}

function episode3(){
    document.querySelector(".episode-3").classList.remove("disable");
    document.querySelector(".episode-1").classList.add("disable");
    document.querySelector(".episode-2").classList.add("disable");
    document.querySelector(".episode-4").classList.add("disable");
    document.querySelector(".episode-5").classList.add("disable");
    document.querySelector(".episode-6").classList.add("disable");
    document.querySelector(".episode-7").classList.add("disable");
    document.querySelector(".episode-8").classList.add("disable");
    document.querySelector(".episode-9").classList.add("disable");

    document.querySelector(".movies-3").classList.remove("movies-hidden");
    document.querySelector(".movies-1").classList.add("movies-hidden");
    document.querySelector(".movies-2").classList.add("movies-hidden");
    document.querySelector(".movies-4").classList.add("movies-hidden");
    document.querySelector(".movies-5").classList.add("movies-hidden");
    document.querySelector(".movies-6").classList.add("movies-hidden");
    document.querySelector(".movies-7").classList.add("movies-hidden");
    document.querySelector(".movies-8").classList.add("movies-hidden");
    document.querySelector(".movies-9").classList.add("movies-hidden");
}

function episode4(){
    document.querySelector(".episode-4").classList.remove("disable");
    document.querySelector(".episode-1").classList.add("disable");
    document.querySelector(".episode-2").classList.add("disable");
    document.querySelector(".episode-3").classList.add("disable");
    document.querySelector(".episode-5").classList.add("disable");
    document.querySelector(".episode-6").classList.add("disable");
    document.querySelector(".episode-7").classList.add("disable");
    document.querySelector(".episode-8").classList.add("disable");
    document.querySelector(".episode-9").classList.add("disable");

    document.querySelector(".movies-4").classList.remove("movies-hidden");
    document.querySelector(".movies-1").classList.add("movies-hidden");
    document.querySelector(".movies-2").classList.add("movies-hidden");
    document.querySelector(".movies-3").classList.add("movies-hidden");
    document.querySelector(".movies-5").classList.add("movies-hidden");
    document.querySelector(".movies-6").classList.add("movies-hidden");
    document.querySelector(".movies-7").classList.add("movies-hidden");
    document.querySelector(".movies-8").classList.add("movies-hidden");
    document.querySelector(".movies-9").classList.add("movies-hidden");
}

function episode5(){
    document.querySelector(".episode-5").classList.remove("disable");
    document.querySelector(".episode-1").classList.add("disable");
    document.querySelector(".episode-2").classList.add("disable");
    document.querySelector(".episode-3").classList.add("disable");
    document.querySelector(".episode-4").classList.add("disable");
    document.querySelector(".episode-6").classList.add("disable");
    document.querySelector(".episode-7").classList.add("disable");
    document.querySelector(".episode-8").classList.add("disable");
    document.querySelector(".episode-9").classList.add("disable");

    document.querySelector(".movies-5").classList.remove("movies-hidden");
    document.querySelector(".movies-1").classList.add("movies-hidden");
    document.querySelector(".movies-2").classList.add("movies-hidden");
    document.querySelector(".movies-3").classList.add("movies-hidden");
    document.querySelector(".movies-4").classList.add("movies-hidden");
    document.querySelector(".movies-6").classList.add("movies-hidden");
    document.querySelector(".movies-7").classList.add("movies-hidden");
    document.querySelector(".movies-8").classList.add("movies-hidden");
    document.querySelector(".movies-9").classList.add("movies-hidden");
}

function episode6(){
    document.querySelector(".episode-6").classList.remove("disable");
    document.querySelector(".episode-1").classList.add("disable");
    document.querySelector(".episode-2").classList.add("disable");
    document.querySelector(".episode-3").classList.add("disable");
    document.querySelector(".episode-4").classList.add("disable");
    document.querySelector(".episode-5").classList.add("disable");
    document.querySelector(".episode-7").classList.add("disable");
    document.querySelector(".episode-8").classList.add("disable");
    document.querySelector(".episode-9").classList.add("disable");

    document.querySelector(".movies-6").classList.remove("movies-hidden");
    document.querySelector(".movies-1").classList.add("movies-hidden");
    document.querySelector(".movies-2").classList.add("movies-hidden");
    document.querySelector(".movies-3").classList.add("movies-hidden");
    document.querySelector(".movies-4").classList.add("movies-hidden");
    document.querySelector(".movies-5").classList.add("movies-hidden");
    document.querySelector(".movies-7").classList.add("movies-hidden");
    document.querySelector(".movies-8").classList.add("movies-hidden");
    document.querySelector(".movies-9").classList.add("movies-hidden");
}

function episode7(){
    document.querySelector(".episode-7").classList.remove("disable");
    document.querySelector(".episode-1").classList.add("disable");
    document.querySelector(".episode-2").classList.add("disable");
    document.querySelector(".episode-3").classList.add("disable");
    document.querySelector(".episode-4").classList.add("disable");
    document.querySelector(".episode-5").classList.add("disable");
    document.querySelector(".episode-6").classList.add("disable");
    document.querySelector(".episode-8").classList.add("disable");
    document.querySelector(".episode-9").classList.add("disable");

    document.querySelector(".movies-7").classList.remove("movies-hidden");
    document.querySelector(".movies-1").classList.add("movies-hidden");
    document.querySelector(".movies-2").classList.add("movies-hidden");
    document.querySelector(".movies-3").classList.add("movies-hidden");
    document.querySelector(".movies-4").classList.add("movies-hidden");
    document.querySelector(".movies-5").classList.add("movies-hidden");
    document.querySelector(".movies-6").classList.add("movies-hidden");
    document.querySelector(".movies-8").classList.add("movies-hidden");
    document.querySelector(".movies-9").classList.add("movies-hidden");
}

function episode8(){
    document.querySelector(".episode-8").classList.remove("disable");
    document.querySelector(".episode-1").classList.add("disable");
    document.querySelector(".episode-2").classList.add("disable");
    document.querySelector(".episode-3").classList.add("disable");
    document.querySelector(".episode-4").classList.add("disable");
    document.querySelector(".episode-5").classList.add("disable");
    document.querySelector(".episode-6").classList.add("disable");
    document.querySelector(".episode-7").classList.add("disable");
    document.querySelector(".episode-9").classList.add("disable");

    document.querySelector(".movies-8").classList.remove("movies-hidden");
    document.querySelector(".movies-1").classList.add("movies-hidden");
    document.querySelector(".movies-2").classList.add("movies-hidden");
    document.querySelector(".movies-3").classList.add("movies-hidden");
    document.querySelector(".movies-4").classList.add("movies-hidden");
    document.querySelector(".movies-5").classList.add("movies-hidden");
    document.querySelector(".movies-6").classList.add("movies-hidden");
    document.querySelector(".movies-7").classList.add("movies-hidden");
    document.querySelector(".movies-9").classList.add("movies-hidden");
}

function episode9(){
    document.querySelector(".episode-9").classList.remove("disable");
    document.querySelector(".episode-1").classList.add("disable");
    document.querySelector(".episode-2").classList.add("disable");
    document.querySelector(".episode-3").classList.add("disable");
    document.querySelector(".episode-4").classList.add("disable");
    document.querySelector(".episode-5").classList.add("disable");
    document.querySelector(".episode-6").classList.add("disable");
    document.querySelector(".episode-7").classList.add("disable");
    document.querySelector(".episode-8").classList.add("disable");

    document.querySelector(".movies-9").classList.remove("movies-hidden");
    document.querySelector(".movies-1").classList.add("movies-hidden");
    document.querySelector(".movies-2").classList.add("movies-hidden");
    document.querySelector(".movies-3").classList.add("movies-hidden");
    document.querySelector(".movies-4").classList.add("movies-hidden");
    document.querySelector(".movies-5").classList.add("movies-hidden");
    document.querySelector(".movies-6").classList.add("movies-hidden");
    document.querySelector(".movies-7").classList.add("movies-hidden");
    document.querySelector(".movies-8").classList.add("movies-hidden");
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





