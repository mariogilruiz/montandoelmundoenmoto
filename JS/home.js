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


//home hidden

document.addEventListener("DOMContentLoaded", function () {
    const elementToHide = document.getElementById("container");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 900) {
            elementToHide.classList.add("hidden_hoome");
            elementToHide.classList.remove("hidden_home_back");

        } else {
            elementToHide.classList.remove("hidden_hoome");
            elementToHide.classList.add("hidden_home_back");
        }
    });
});


// div effect --- HOME

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


// logica para slider home- se repiten imagenes 

var imagenes = [
    "/images/slider_home/imagen1.webp",
    "/images/slider_home/imagen2.webp",
    "/images/slider_home/imagen3.webp",
    "/images/slider_home/imagen4.webp"
];
var contador = 0;
const _zoom = document.getElementById("background-div");


function moveRight() {
    document.Imagen.src = imagenes[contador];
    contador = (contador + 1) % imagenes.length;
    const $imagen = $(document.Imagen);


    _zoom.classList.remove("_zoom");

    requestAnimationFrame(() => {
        setTimeout(() => {
            _zoom.classList.add("_zoom");
        }, 0);
    });


}

moveRight();

setInterval(moveRight, 10000);









































































