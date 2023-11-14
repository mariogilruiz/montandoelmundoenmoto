// -------- efecto H3 de las pages comunes aparareciendo desde eje Y con un delay de 300ms

window.onload = function () {
    setTimeout(function () {
        var h3_descript_page = document.getElementById("h3_descript_page");
        h3_descript_page.classList.add("apper_text_pages");
    }, 400);
};