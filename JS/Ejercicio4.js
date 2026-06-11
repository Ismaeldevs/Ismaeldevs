const inputNombre = document.getElementById("inputNombre");
const preview = document.getElementById("preview");

// Escuchar cuando el usuario escribe
inputNombre.addEventListener("input", function() {

    const nombre = inputNombre.value.trim();

    // Si el campo está vacío
    if (nombre === "") {
        preview.textContent = "Escribí tu nombre arriba.";
    } else {
        // Si hay texto
        preview.textContent = `¡Hola, ${nombre}!`;
    }
});