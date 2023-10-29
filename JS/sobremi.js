// -------- efecto texto inicial de las pages comunes aparareciendo desde eje Y 

document.addEventListener("DOMContentLoaded", function () {
    const hiddenDivph = document.getElementById("h4_content_02_about");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 170) {
            hiddenDivph.classList.add("apper_text_pages");
        }
    });
});

//------ efecto aparacion de los div desde el eje Y


document.addEventListener("DOMContentLoaded", function () {
    const hiddenDivph = document.getElementById("content_02_about_02");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            hiddenDivph.classList.add("appear_slow");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const hiddenDivph = document.getElementById("content_02_about_03");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 800) {
            hiddenDivph.classList.add("appear_slow");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const hiddenDivph = document.getElementById("content_02_about_04");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 1200) {
            hiddenDivph.classList.add("appear_slow");
        }
    });
});