// ---------maps
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

// efecto posicon actual aparce y desaparece con hover en el pais segun su ID

document.getElementById("AL").onmouseover = function () { location_today() };

function location_today() {

    document.getElementById("position_today").classList.add("appear_map_selecction");

}


document.getElementById("AL").onmouseout = function () { location_today_of() };


function location_today_of() {

    document.getElementById("position_today").classList.remove("appear_map_selecction");

}


//-------- effect text 

document.addEventListener("DOMContentLoaded", function () {
    const hiddenDivph = document.getElementById("p_descript_la_serie_p");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 1) {
            hiddenDivph.classList.add("apper_ph");
        }
    });
});





// afecto aparacion mapa_svg

document.addEventListener("DOMContentLoaded", function () {
    const hiddenDiv = document.getElementById("europe_svg");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 700) {
            hiddenDiv.classList.add("appear_map");
        }
    });
});

// afecto aparacion selctores map

document.addEventListener("DOMContentLoaded", function () {
    const hiddenDiv = document.getElementById("map_selection");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 700) {
            hiddenDiv.classList.add("appear_map_selecction");
        }
    });
});


