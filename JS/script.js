
// header load

$(function () {

    $("#header_max").load("../pages/header.html");

});

//footer load

$(function () {

    $("#footer_max").load("../pages/footer.html");

});

// text ramdon

document.addEventListener("DOMContentLoaded", function () {
    const texts = document.querySelectorAll(".text");
    let currentIndex = 0;

    function rotateText() {
        texts[currentIndex].classList.remove("visibility");
        currentIndex = (currentIndex + 1) % texts.length;
        texts[currentIndex].classList.add("visibility");
    }

    texts[currentIndex].classList.add("visibility");

    setInterval(rotateText, 5000);
});

//scrollY position

window.onscroll = function () {
    var y = window.scrollY;
    console.log(y);
};

//h2 hidden

document.addEventListener("DOMContentLoaded", function () {
    const elementToHide = document.getElementById("hideOnScroll");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 340) {
            elementToHide.classList.add("hidden");
            elementToHide.classList.remove("hidden_back");

        } else {
            elementToHide.classList.remove("hidden");
            elementToHide.classList.add("hidden_back");
        }
    });
});

// div effect

document.addEventListener("DOMContentLoaded", function () {
    const hiddenDiv = document.getElementById("content_02");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 120) {
            hiddenDiv.classList.add("appear");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const hiddenDiv03 = document.getElementById("content_03");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 920) {
            hiddenDiv03.classList.add("appear");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const hiddenDivph = document.getElementById("content_ph");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 2137) {
            hiddenDivph.classList.add("apper_ph");
        }
    });
});

//header&banner_home effect

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    const superpuesto = document.querySelector(".superpuesto");
    const logo_h = document.getElementById("logo_h");
    const bttn_home = document.getElementById("bttn_home");
    const bttn_sesion = document.getElementById("bttn_sesion");
    const bttn_h = document.getElementById("bttn_h");
    const bttn_p = document.getElementById("bttn_p");


    const scrollPosition = window.scrollY;

    if (scrollPosition > header.offsetHeight) {
        superpuesto.style.opacity = "0";
        header.classList.add("header_top");
        logo_h.classList.add("header_opacity");
        bttn_home.classList.add("header_opacity");
        bttn_sesion.classList.add("header_opacity");
        bttn_h.classList.add("header_opacity");
        bttn_p.classList.add("header_opacity");

    } else {
        superpuesto.style.opacity = "1";
        header.classList.remove("header_top");
        logo_h.classList.remove("header_opacity");
        bttn_home.classList.remove("header_opacity");
        bttn_sesion.classList.remove("header_opacity");
        bttn_h.classList.remove("header_opacity");
        bttn_p.classList.remove("header_opacity");
    }
});


//animation onclick menu plus

