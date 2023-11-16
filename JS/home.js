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
        if (window.scrollY > 1700) {
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


// logica para slider home" mejorar transiciones"

var imagenes = [
    "/images/slider_home/imagen1.webp",
    "/images/slider_home/imagen2.webp",
    "/images/slider_home/imagen3.webp",
    "/images/slider_home/imagen4.webp"
];

var contador = 0;

function moveRight() {
    document.Imagen.src = imagenes[contador];
    contador = (contador + 1) % imagenes.length;
    const $imagen = $(document.Imagen);

    requestAnimationFrame(() => {
        setTimeout(() => {

            gsap.fromTo(
                $imagen,
                { scale: 1.1 },
                {
                    scale: 1,
                    duration: 11,
                    ease: "ease-in-out"
                }
            );
        }, 0);
    });
}

moveRight();

setInterval(moveRight, 10000);



// animacion texto maquina page-03


function animacion() {
    let textoAnimacion = [
        ["a", "n", "i", "m", "a", "s", " ", "?"],
        ["a", "p", "u", "n", "t", "a", "s", " ", "?"],
        ["u", "n", "e", "s", " ", "?",],
    ];

    let letraContador = -1;
    let nivelArray = 0;

    const contenedorAnimacion = document.querySelector(".animation_machine_text");

    function pintarTexto() {
        letraContador++;
        contenedorAnimacion.textContent += textoAnimacion[nivelArray][letraContador];

        if (letraContador === textoAnimacion[nivelArray].length - 1) {
            clearInterval(intervalo);

            setTimeout(() => {

                intervalo = setInterval(() => {
                    contenedorAnimacion.textContent = "";
                    letraContador--;
                    textoAnimacion[nivelArray].pop();

                    textoAnimacion[nivelArray].forEach((elemento) => {
                        contenedorAnimacion.textContent += elemento;
                    });

                    if (letraContador < 0) {
                        clearInterval(intervalo);
                        nivelArray++;
                        intervalo = setInterval(pintarTexto, 150);


                        if (nivelArray > textoAnimacion.length - 1) {
                            clearInterval(intervalo);
                            nivelArray = 0;
                            animacion();
                        }
                    }

                }, 150);

            }, 1000);
        }
    }
    let intervalo = setInterval(pintarTexto, 150);
}
window.addEventListener("load", animacion);


































































