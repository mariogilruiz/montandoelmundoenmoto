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


// codigo para que al finalizar el div añade la clase 


function detectarScrollAlFinal() {
    var miDiv = document.getElementById('content_ph');
    var alturaDelDiv = miDiv.offsetHeight;
    var alturaDeLaVentana = window.innerHeight;
    var posicionDelDiv = miDiv.getBoundingClientRect().top;

    if (alturaDeLaVentana >= posicionDelDiv + alturaDelDiv) {

        miDiv.classList.add('apper_ph');
    }
}


window.addEventListener('scroll', function () {
    detectarScrollAlFinal();
});

// Llamar a la función al cargar la página para verificar si el contenido inicial ya está al final
detectarScrollAlFinal();



// logica para slider

var imagenes = [
    "/images/slider_home/imagen1.webp",
    "/images/slider_home/imagen2.webp",
    "/images/slider_home/imagen3.webp",
    "/images/slider_home/imagen4.webp"
];

var contador = 0;

function moveRight() {
    const $imagen = $(document.Imagen);
    const $destello = $('.destello');

    document.Imagen.src = imagenes[contador];

    contador = (contador + 1) % imagenes.length;

    $destello.css('opacity', 0);

    $imagen.on('load', function () {
        gsap.fromTo(
            $imagen,
            { scale: 1.1 },
            {
                scale: 1,
                duration: 10,
                ease: "ease-in-out",
                onStart: function () {
                    gsap.to($destello, { opacity: 1, duration: 0.5, ease: "ease-in-out" });
                },
                onComplete: function () {
                    gsap.to($destello, { opacity: 0, duration: 0.5, ease: "ease-in-out" });
                }
            }
        );
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


































































