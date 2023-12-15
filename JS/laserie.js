// Pintar los paises de colores

document.getElementById("tienda_01").onmouseover = function () { sesion_01() };
document.getElementById("AL").setAttribute("fill", "red");

function sesion_01() {

    document.getElementById("AL").setAttribute("fill", "#bc6317");
    document.getElementById("ES").setAttribute("fill", "#bc6317");
    document.getElementById("FR").setAttribute("fill", "#bc6317");
    document.getElementById("IT").setAttribute("fill", "#bc6317");
    document.getElementById("SI").setAttribute("fill", "#bc6317");
    document.getElementById("HR").setAttribute("fill", "#bc6317");
    document.getElementById("ME").setAttribute("fill", "#bc6317");
    document.getElementById("AD").setAttribute("fill", "#bc6317");
    document.getElementById("AL").setAttribute("fill", "#bc6317");



}

document.getElementById("tienda_01").onmouseout = function () { sesion_01_out() };

function sesion_01_out() {

    document.getElementById("AL").setAttribute("fill", "#ececec");
    document.getElementById("ES").setAttribute("fill", "#ececec");
    document.getElementById("FR").setAttribute("fill", "#ececec");
    document.getElementById("IT").setAttribute("fill", "#ececec");
    document.getElementById("SI").setAttribute("fill", "#ececec");
    document.getElementById("HR").setAttribute("fill", "#ececec");
    document.getElementById("ME").setAttribute("fill", "#ececec");
    document.getElementById("AD").setAttribute("fill", "#ececec");
    document.getElementById("AL").setAttribute("fill", "red");


}

// Efecto posicon actual aparce y desaparece con hover en el pais segun su ID

document.getElementById("AL").onmouseover = function () { location_today() };

function location_today() {

    document.getElementById("position_today").classList.add("appear_map_selecction");

}


document.getElementById("AL").onmouseout = function () { location_today_of() };


function location_today_of() {

    document.getElementById("position_today").classList.remove("appear_map_selecction");

}


// Muestra el texto 

document.addEventListener("DOMContentLoaded", function () {
    const hiddenDivph = document.getElementById("p_descript_la_serie_p");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 1) {
            hiddenDivph.classList.add("apper_text_pages");
        }
    });
});



// Muestra el mapa_svg

document.addEventListener("DOMContentLoaded", function () {
    const hiddenDiv = document.getElementById("europe_svg");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 700) {
            hiddenDiv.classList.add("appear_map");
        }
    });
});

// Muestra el div con los selectores de temporadas

document.addEventListener("DOMContentLoaded", function () {
    const hiddenDiv = document.getElementById("map_selection");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 700) {
            hiddenDiv.classList.add("appear_map_selecction");
        }
    });
});




// Funcion del contador una vez sea añadida la clase que muestra el div que contiene la funcion 

var countStarted = false;

function countWhenClassAppears() {
    if ($('#map_selection').hasClass('appear_map_selection')) {
        if (!countStarted) {
            // Contador hasta 71
            var counter1 = { var: 0 };
            var countTween1 = TweenMax.to(counter1, 5, {
                var: 71,
                onUpdate: function () {
                    var number = Math.round(counter1.var);
                    $('.counter1').html(number);
                },
                onComplete: function () {
                    // Puedes agregar aquí cualquier lógica que desees cuando el contador 1 llega a 71
                },
                ease: Circ.easeOut
            });

            // Contador hasta 12000
            var counter2 = { var: 0 };
            var countTween2 = TweenMax.to(counter2, 5, {
                var: 12000,
                onUpdate: function () {
                    var number = Math.round(counter2.var);
                    $('.counter2').html(number);
                },
                onComplete: function () {
                    // Puedes agregar aquí cualquier lógica que desees cuando el contador 2 llega a 12000
                },
                ease: Circ.easeOut
            });

            // Contador hasta 7
            var counter3 = { var: 0 };
            var countTween3 = TweenMax.to(counter3, 5, {
                var: 7,
                onUpdate: function () {
                    var number = Math.round(counter3.var);
                    $('.counter3').html(number);
                },
                onComplete: function () {
                    // Puedes agregar aquí cualquier lógica que desees cuando el contador 3 llega a 7
                },
                ease: Circ.easeOut
            });

            countStarted = true; // Marca la bandera como true para indicar que se ha iniciado
        }
    } else {
        $(window).on('scroll', function () {
            var mapSelectionOffset = $('#map_selection').offset().top;
            var windowScroll = $(window).scrollTop();

            if (!countStarted && windowScroll + $(window).height() >= mapSelectionOffset) {
                // Contador hasta 71
                var counter1 = { var: 0 };
                var countTween1 = TweenMax.to(counter1, 5, {
                    var: 71,
                    onUpdate: function () {
                        var number = Math.round(counter1.var);
                        $('.counter1').html(number);
                    },
                    onComplete: function () {
                        // Puedes agregar aquí cualquier lógica que desees cuando el contador 1 llega a 71
                    },
                    ease: Circ.easeOut
                });

                // Contador hasta 12000
                var counter2 = { var: 0 };
                var countTween2 = TweenMax.to(counter2, 5, {
                    var: 12000,
                    onUpdate: function () {
                        var number = Math.round(counter2.var);
                        $('.counter2').html(number);
                    },
                    onComplete: function () {
                        // Puedes agregar aquí cualquier lógica que desees cuando el contador 2 llega a 12000
                    },
                    ease: Circ.easeOut
                });

                // Contador hasta 7
                var counter3 = { var: 0 };
                var countTween3 = TweenMax.to(counter3, 5, {
                    var: 7,
                    onUpdate: function () {
                        var number = Math.round(counter3.var);
                        $('.counter3').html(number);
                    },
                    onComplete: function () {
                        // Puedes agregar aquí cualquier lógica que desees cuando el contador 3 llega a 7
                    },
                    ease: Circ.easeOut
                });

                countStarted = true; // Marca la bandera como true para indicar que se ha iniciado
                $(window).off('scroll');
            }
        });
    }
}

// Llama a la función para comenzar el proceso
$(document).ready(function () {
    countWhenClassAppears();
});




//para tres contadores sin condiciones


// function count() {
//     var counter1 = { var: 0 };
//     var counter2 = { var: 0 };
//     var counter3 = { var: 0 };

//     // Contador hasta 71
//     var countTween1 = TweenMax.to(counter1, 5, {
//         var: 71,
//         delay: 0.8,
//         onUpdate: function () {
//             var number = Math.round(counter1.var);
//             $('.counter1').html(number);
//         },
//         onComplete: function () {
//             // Puedes agregar aquí cualquier lógica que desees cuando el primer contador llega a 71
//         },
//         ease: Circ.easeOut
//     });

//     // Contador hasta 12000
//     var countTween2 = TweenMax.to(counter2, 5, {
//         var: 12000,
//         delay: 0.8,
//         onUpdate: function () {
//             var number = Math.round(counter2.var);
//             $('.counter2').html(number);
//         },
//         onComplete: function () {
//             // Puedes agregar aquí cualquier lógica que desees cuando el segundo contador llega a 12000
//         },
//         ease: Circ.easeOut
//     });

//     // Contador hasta 7
//     var countTween3 = TweenMax.to(counter3, 5, {
//         var: 7,
//         delay: 0.8,
//         onUpdate: function () {
//             var number = Math.round(counter3.var);
//             $('.counter3').html(number);
//         },
//         onComplete: function () {
//             // Puedes agregar aquí cualquier lógica que desees cuando el tercer contador llega a 7
//         },
//         ease: Circ.easeOut
//     });
// }

// count();

