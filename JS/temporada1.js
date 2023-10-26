//-------- efecto texto inicial de las pages comunes aparareciendo desde eje Y 

document.addEventListener("DOMContentLoaded", function () {
    const hiddenDivph = document.getElementById("p_descript_la_serie_p");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 1) {
            hiddenDivph.classList.add("apper_text_pages");
        }
    });
});
