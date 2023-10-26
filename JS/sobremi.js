//-------- efecto texto inicial de las pages comunes aparareciendo desde eje Y 

document.addEventListener("DOMContentLoaded", function () {
    const hiddentext = document.getElementById("p_descript_sobremi");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 1) {
            hiddentext.classList.add("apper_text_pages");
        }
    });
});
