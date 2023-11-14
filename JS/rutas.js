// -------- efecto texto inicial de las pages comunes aparareciendo desde eje Y con un delay de 300ms

window.onload = function () {

    const h3_descript_page = document.getElementById("h4_contents");
    h3_descript_page.classList.add("apper_text_pages");

    const h3_albania = document.getElementById("country_rutas_ALB");
    h3_albania.classList.add("show_country_rout");
    h3_albania.classList.remove("hiddecountry_rout");


};


