const titulo = document.getElementById("titulo");
const btnCambiar = document.getElementById("btnCambiar");

btnCambiar.addEventListener("click", function() {
    titulo.textContent = "¡Bienvenido al DOM!";
    titulo.style.color = "navy";
});