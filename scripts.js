
const botonMarcos = document.getElementById("botonMarcos");
const divMarcos = document.getElementById("divMarcos");

botonMarcos.addEventListener("click", function() {
    cambiarEstilos();
});

function cambiarEstilos() {
    const randomColor = obtenerColorAleatorio();
    divMarcos.style.backgroundColor = randomColor;
    divMarcos.style.color = randomColor === "#000000" ? "#ffffff" : "#000000";
}

function obtenerColorAleatorio() {
    const letras = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}
