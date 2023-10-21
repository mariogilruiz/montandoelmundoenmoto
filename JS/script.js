
// header load

$(function () {

    $("#header_max").load("header.html");

});

//footer load

$(function () {

    $("#footer_max").load("footer.html");

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


//h2 hidden

document.addEventListener("DOMContentLoaded", function () {
    const elementToHide = document.getElementById("hideOnScroll");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 700) {
            elementToHide.classList.add("hidden");
        } else {
            elementToHide.classList.remove("hidden");
        }
    });
});