const tarjeta = document.getElementById("tarjeta");
const btnToggle = document.getElementById("btnToggle");

btnToggle.addEventListener("click", function() {

    // Alternar la clase "oculto"
    const estaOculta = tarjeta.classList.toggle("oculto");

    // Cambiar texto del botón
    if (estaOculta) {
        btnToggle.textContent = "Mostrar";
    } else {
        btnToggle.textContent = "Ocultar";
    }

});

