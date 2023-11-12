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

    // Eliminar la clase _zoom
    // _zoom.classList.remove("_zoom");

    // Añadir la clase _zoom después de 10 milisegundos
    requestAnimationFrame(() => {
        setTimeout(() => {
            // _zoom.classList.add("_zoom");

            // Utilizar GSAP para aplicar el efecto de zoom in
            gsap.fromTo(
                $imagen,
                { scale: 1.1 },
                {
                    scale: 1,
                    duration: 11.5, // Duración del zoom in en segundos
                    ease: "linear"
                }
            );
        }, 0);
    });
}

moveRight();

// Establecer el intervalo para llamar a moveRight cada 10 segundos
setInterval(moveRight, 10000);










































































