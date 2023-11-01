
// header load

$(function () {

    $("#header_max").load("../pages/header.html");
});

//footer load

$(function () {

    $("#footer_max").load("../pages/footer.html");
});

//footer_XS load

$(function () {

    $("#footer_XS").load("../pages/footerXS.html");
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

//header&banner_home effect

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    const superpuesto = document.querySelector(".superpuesto");
    const logo_h = document.getElementById("logo_h");
    const bttn_home = document.getElementById("bttn_home");
    const bttn_sesion = document.getElementById("bttn_sesion");
    const bttn_h = document.getElementById("bttn_h");
    const bttn_p = document.getElementById("bttn_p");
    const nav_plus = document.getElementById("nav_plus");

    const scrollPosition = window.scrollY;

    if (scrollPosition > 30) {
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
        // nav_plus.classList.remove("header_top");
        logo_h.classList.remove("header_opacity");
        bttn_home.classList.remove("header_opacity");
        bttn_sesion.classList.remove("header_opacity");
        bttn_h.classList.remove("header_opacity");
        bttn_p.classList.remove("header_opacity");
        // nav_plus.classList.remove("header_opacity");
    }
});

//animation onclick menu plus

document.getElementById("bttn_p").onclick = function () { nav_plus_hidden() };

function nav_plus_hidden() {

    document.getElementById("nav_plus").classList.toggle("hidden_nav_plus");
    document.getElementById("bttn_p").classList.toggle("close");
    document.getElementById("bttn_h").classList.toggle("hidden_bttn_h");
    document.getElementById("bttn_p").classList.toggle("opacity_plus");
    document.getElementById("logo_h").classList.toggle("opacity_plus");
    document.getElementById("bttn_home").classList.toggle("hidden_bttn_header");
    document.getElementById("bttn_sesion").classList.toggle("hidden_bttn_header");
}

//animation onclick boton fuell open

document.getElementById("nav_chek").onclick = function () { bttn_fuel_hidden() };

function bttn_fuel_hidden() {

    document.getElementById("nav_chek").classList.toggle("hidden_bttn_fuel");
    document.getElementById("bttn_home").classList.toggle("header_grey");
    document.getElementById("bttn_sesion").classList.toggle("header_grey");
    document.getElementById("logo_h").classList.toggle("header_grey");
    document.getElementById("bttn_p").classList.toggle("header_grey");
    document.getElementById("bttn_h").classList.toggle("opacity_plus");
    document.getElementById("bttn_p").classList.toggle("hidden_bttn_h");
}

//animation onclick boton span close

document.getElementById("nav_chek").onclick = function () { bttn_fuel_span() };

function bttn_fuel_span() {

    document.getElementById("nav_chek").classList.toggle("hidden_bttn_fuel");
    document.getElementById("bttn_home").classList.toggle("header_grey");
    document.getElementById("bttn_sesion").classList.toggle("header_grey");
    document.getElementById("logo_h").classList.toggle("header_grey");
    document.getElementById("bttn_p").classList.toggle("header_grey");
    document.getElementById("bttn_h").classList.toggle("opacity_plus");
    document.getElementById("bttn_p").classList.toggle("hidden_bttn_h");
}


// funcion sumar y resta un litro al total del repostaje se añade aqui para evitar el error NaN, 
// ya que al estar en archivos enlazados y no poner enlazar en el mismo HTML de header porque al usar 
// la funcion de JQUERY da error.







