document.getElementById("tienda_01").onmouseover = function () { sesion_01() };

function sesion_01() {

    document.getElementById("AL").setAttribute("fill", "#bc6317");
    document.getElementById("ES").setAttribute("fill", "#bc6317");
    document.getElementById("FR").setAttribute("fill", "#bc6317");
    document.getElementById("IT").setAttribute("fill", "#bc6317");
    document.getElementById("SI").setAttribute("fill", "#bc6317");
    document.getElementById("HR").setAttribute("fill", "#bc6317");
    document.getElementById("ME").setAttribute("fill", "#bc6317");
    document.getElementById("AD").setAttribute("fill", "#bc6317");


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


}


