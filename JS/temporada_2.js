// animacion texto maquina page-03


function animacion() {
    let textoAnimacion = [
        ["P", "R", "O", "X", "I", "M", "A", "M", "E", "N", "T", "E", ".", ".", "."],
        ["+", " D", "Í", "A", "S",],
        ["+", " K", "I", "L", "O", "M", "E", "T", "R", "O", "S",],
        ["+", " P", "A", "I", "S", "E", "S",],
        ["+", " A", "V", "E", "N", "T", "U", "R", "A", "S",],
        ["N", "O", " T", "E", " L", "O", " P", "I", "E", "R", "D", "A", "S",]
    ];

    let letraContador = -1;
    let nivelArray = 0;

    const contenedorAnimacion = document.querySelector(".animation_machine_text");

    function pintarTexto() {
        letraContador++;
        contenedorAnimacion.textContent += textoAnimacion[nivelArray][letraContador];

        if (letraContador === textoAnimacion[nivelArray].length - 1) {
            clearInterval(intervalo);

            setTimeout(() => {

                intervalo = setInterval(() => {
                    contenedorAnimacion.textContent = "";
                    letraContador--;
                    textoAnimacion[nivelArray].pop();

                    textoAnimacion[nivelArray].forEach((elemento) => {
                        contenedorAnimacion.textContent += elemento;
                    });

                    if (letraContador < 0) {
                        clearInterval(intervalo);
                        nivelArray++;
                        intervalo = setInterval(pintarTexto, 150);


                        if (nivelArray > textoAnimacion.length - 1) {
                            clearInterval(intervalo);
                            nivelArray = 0;
                            animacion();
                        }
                    }

                }, 150);

            }, 1000);
        }
    }
    let intervalo = setInterval(pintarTexto, 150);
}
window.addEventListener("load", animacion);
