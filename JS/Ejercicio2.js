const cuadrado = document.getElementById("cuadrado");
const btnRojo = document.getElementById("btnRojo");
const btnAmarillo = document.getElementById("btnAmarillo");
const btnVerde = document.getElementById("btnVerde");

btnRojo.addEventListener("click", function() {
    cuadrado.style.backgroundColor = "red";
});

btnAmarillo.addEventListener("click", function() {
    cuadrado.style.backgroundColor = "yellow";
});

btnVerde.addEventListener("click", function() {
    cuadrado.style.backgroundColor = "green";
});