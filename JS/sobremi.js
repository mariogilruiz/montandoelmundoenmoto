//scrollY position en consola

window.onscroll = function () {
    var y = window.scrollY;
    console.log(y);
};


// -------- efecto texto inicial de las pages comunes aparareciendo desde eje Y 


document.addEventListener("DOMContentLoaded", function () {
    const hiddenDivph = document.getElementById("index_cap_blog_h2");
    const hiddenDivph2 = document.getElementById("index_cap_blog_h2_name");


    setTimeout(() => {

    }, 1000);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 790) {

            hiddenDivph2.classList.add("appear_map");
            setTimeout(() => {
                hiddenDivph.classList.add("appear_map");
            }, 1000);


        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const hiddenDivph = document.getElementById("h4_content_02_about");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 1000) {
            hiddenDivph.classList.add("apper_text_pages");
        }
    });
});

//------ efecto aparacion de los div desde el eje Y


document.addEventListener("DOMContentLoaded", function () {
    const hiddenDivph = document.getElementById("content_02_about_02");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 1250) {
            hiddenDivph.classList.add("appear_slow");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const hiddenDivph = document.getElementById("content_02_about_03");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 1750) {
            hiddenDivph.classList.add("appear_slow");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const hiddenDivph = document.getElementById("content_02_about_04");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 2250) {
            hiddenDivph.classList.add("appear_slow");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const hiddenDivph = document.getElementById("index_cap_blog_h2_01");
    const hiddenDivph2 = document.getElementById("index_cap_blog_h2_name_01");


    setTimeout(() => {

    }, 1000);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 2750) {

            hiddenDivph2.classList.add("appear_map");
            setTimeout(() => {
                hiddenDivph.classList.add("appear_map");
            }, 1000);


        }
    });
});



//slider o1

let currentSlide = 0;
const slides = document.getElementById('slider').children;
const totalSlides = slides.length;
const indicatorContainer = document.getElementById('slider-info');

function showSlide(index) {
    if (index < 0) {
        currentSlide = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }

    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.display = 'none';
    }

    slides[currentSlide].style.display = 'block';
    updateSlideIndicators();
}

function updateSlideIndicators() {
    indicatorContainer.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (i === currentSlide) {
            indicator.classList.add('active');
        }
        // Agregar un evento de clic para cambiar la diapositiva
        indicator.addEventListener('click', function () {
            showSlide(i);
        });
        indicatorContainer.appendChild(indicator);
    }
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Mostrar la primera imagen al cargar la página
showSlide(currentSlide);

// Auto avanzar cada 10 segundos
setInterval(nextSlide, 10000);


//------ efecto aparacion de los h2 desde el eje X


// document.addEventListener("DOMContentLoaded", function () {
//     const hiddenDivph = document.getElementById("el_mundo");

//     window.addEventListener("scroll", function () {
//         if (window.scrollY > 90) {
//             hiddenDivph.classList.add("appear_X_right");
//         }
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const hiddenDivph = document.getElementById("en_moto");

//     window.addEventListener("scroll", function () {
//         if (window.scrollY > 250) {
//             hiddenDivph.classList.add("appear_X_right");
//         }
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const hiddenDivph = document.getElementById("con_mario");

//     window.addEventListener("scroll", function () {
//         if (window.scrollY > 400) {
//             hiddenDivph.classList.add("appear_X_right");
//         }
//     });
// });


// efecto amquina escribir de proxiamante


// animacion texto maquina page-03


function animacion() {
    let textoAnimacion = [
        ["P", "R", "O", "X", "I", "M", "A", "M", "E", "N", "T", "E", " ", ".", ".", "."],
        ["I", "R", "É", " ", "", "E", "S", "C", "R", "I", "B", "I", "E", "N", "D", "O"],
        ["+", " ", "H", "I", "S", "T", "O", "R", "I", "A",],
        ["+", " ", "A", "V", "E", "N", "T", "U", "R", "A", "S"]

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