//oculta el H2/H1 de la pagina inicial para no verse en la parte del footer

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


//oculta el back de la pagina inicial para no ver afectado el footer debido al Z-index

document.addEventListener("DOMContentLoaded", function () {
    const elementToHide = document.getElementById("container");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 2000) {
            elementToHide.classList.add("hidden_hoome");
            elementToHide.classList.remove("hidden_home_back");

        } else {
            elementToHide.classList.remove("hidden_hoome");
            elementToHide.classList.add("hidden_home_back");
        }
    });
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

//scrollY position en consola

window.onscroll = function () {
    var y = window.scrollY;
    console.log(y);
};

// efecto aparacion div banner transparente

document.addEventListener("DOMContentLoaded", function () {
    const hiddenDiv = document.getElementById("banner_fuel_home_content_02_h3");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 1000) {
            hiddenDiv.classList.add("appear");
        }
    });
});

// Efecto aparacion div pag-02 home

document.addEventListener("DOMContentLoaded", function () {
    const hiddenDiv = document.getElementById("content_02");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 120) {
            hiddenDiv.classList.add("appear");
        }
    });
});


// Efecto aparacion div pag-03 home

document.addEventListener("DOMContentLoaded", function () {
    const hiddenDiv03 = document.getElementById("content_03");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 1500) {
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

// descomentar para haer logica para slider de video //

// var videos = [
//     "/videos/slider_home/video1.mp4",
//     "/videos/slider_home/video1.mp4",
//     "/videos/slider_home/video1.mp4",
//     "/videos/slider_home/video1.mp4"
// ];

// var contador = 0;

// function moveRight() {
//     const $video = $('#video-slider');
//     const $destello = $('.destello');

//     $video.attr('src', videos[contador]);
//     $video[0].play(); // Inicia la reproducción automáticamente

//     contador = (contador + 1) % videos.length;

//     $destello.css('opacity', 0);

//     $video.on('loadedmetadata', function () {
//         // Tu código de zoom y destello aquí, si es necesario
//     });

//     // Detecta cuando el video actual ha terminado y pasa al siguiente
//     $video.on('ended', function () {
//         moveRight();
//     });
// }

// // Llamada inicial para el primer video
// moveRight();

// // Configura el intervalo para cambiar de video cada 10 segundos
// setInterval(moveRight, 10000);

//Logica del slider de la pagina inicial//

var imagenes = [
    "/images/slider_home/imagen1.webp",
    "/images/slider_home/imagen2.webp",
    "/images/slider_home/imagen3.webp",
    "/images/slider_home/imagen4.webp"
];

var contador = 0;

document.addEventListener("DOMContentLoaded", function () {
    // Obtén el elemento
    var miElemento = document.getElementById("miElemento");

    // Función para realizar el destello
    function destellar() {
        // Ajusta la opacidad para mostrar el destello de manera suave
        miElemento.style.opacity = "300";

        // Restaura la opacidad después de 300 ms
        setTimeout(function () {
            miElemento.style.opacity = "0";
        }, 300);
    }

    // Función moveRight
    function moveRight() {
        const $imagen = $(document.Imagen);

        document.Imagen.src = imagenes[contador];
        contador = (contador + 1) % imagenes.length;

        $imagen.on('load', function () {
            gsap.fromTo(
                $imagen,
                { scale: 1.1 },
                {
                    scale: 1,
                    duration: 1,
                    ease: "ease-in-out",

                }
            );
        });
    }

    // Llama a ambas funciones una vez que la página se carga
    destellar();
    moveRight();

    // Configura el intervalo para ejecutar ambas funciones cada 10 segundos
    setInterval(function () {
        destellar();
        moveRight();
    }, 5000);
});

// funcion slider indiviual sin destello

// function moveRight() {
//     const $imagen = $(document.Imagen);
//     const $destello = $('.destello');

//     document.Imagen.src = imagenes[contador];

//     contador = (contador + 1) % imagenes.length;

//     $destello.css('opacity', 0);

//     $imagen.on('load', function () {
//         gsap.fromTo(
//             $imagen,
//             { scale: 1.1 },
//             {
//                 scale: 1,
//                 duration: 10,
//                 ease: "ease-out",
//                 onStart: function () {
//                     gsap.to($destello, { opacity: 1, duration: 0.5, ease: "ease-in-out" });
//                 },
//                 onComplete: function () {
//                     gsap.to($destello, { opacity: 0, duration: 0.5, ease: "ease-in-out" });
//                 }
//             }
//         );
//     });
// }

// moveRight();

// setInterval(moveRight, 10000);


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


// evento modal 

const openmodalMaterial = document.querySelector('.material--modal');
const openmodalProyecto = document.querySelector('.proyecto--modal');


const modal = document.querySelector('.modal');
// const modalContainer = document.querySelector('.modal_container');

const closemodal = document.querySelector('.modal_close');

openmodalMaterial.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modal--show');
    // modalContainer.classList.add('modal_container-show');

});

openmodalProyecto.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modal--show');
    // modalContainer.classList.add('modal_container-show');
});

closemodal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modal--show');
    // modalContainer.classList.remove('modal_container-show');
});



//efecto flash individual

// document.addEventListener("DOMContentLoaded", function () {
//     // Obtén el elemento
//     var miElemento = document.getElementById("miElemento");

//     // Función para realizar el destello
//     function destellar() {
//         // Ajusta la opacidad para mostrar el destello de manera suave
//         miElemento.style.opacity = "1";

//         // Restaura la opacidad después de 300 ms
//         setTimeout(function () {
//             miElemento.style.opacity = "0";
//         }, 200);
//     }

//     // Llama a la función destellar una vez que la página se carga
//     destellar();

//     // Configura el intervalo para ejecutar la función cada 10 segundos
//     setInterval(destellar, 10000);
// });


document.addEventListener('DOMContentLoaded', function () {
    var textos = ['Países visitados hasta la fecha', 'LO MEJOR ESTá POR LLEGAR', 'PRóXIMAMENTE MÁS AVENTURAS'];
    var indice = 0;
    var textoElement = document.getElementById('cambioTexto');

    // Función para cambiar el texto con efecto
    function cambiarTexto() {
        textoElement.style.opacity = 0;
        textoElement.style.transform = 'translateY(20px)';
        setTimeout(function () {
            textoElement.textContent = textos[indice];
            textoElement.style.opacity = 1;
            textoElement.style.transform = 'translateY(0)';
            indice = (indice + 1) % textos.length;
        }, 500);
    }

    // Cargar el primer texto al principio
    cambiarTexto();

    // Cambiar el texto cada 5 segundos
    setInterval(cambiarTexto, 5000);
});




































































