// -------- efecto H3 de las pages comunes aparareciendo desde eje Y con un delay de 300ms

window.onload = function () {
    setTimeout(function () {
        var h3_descript_page = document.getElementById("h3_descript_page");
        h3_descript_page.classList.add("apper_text_pages");
    }, 400);
};

//cloud 2 hidden

document.addEventListener("DOMContentLoaded", function () {
    const elementToHide_2 = document.getElementById("inital_max_proyecto");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 2000) {
            elementToHide_2.classList.add("hidden_hoome");
            elementToHide_2.classList.remove("hidden_home_back");

        } else {
            elementToHide_2.classList.remove("hidden_hoome");
            elementToHide_2.classList.add("hidden_home_back");
        }
    });
});