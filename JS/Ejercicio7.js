const inpNombre = document.getElementById("inpNombre");
const inpProfesion = document.getElementById("inpProfesion");
const inpColor = document.getElementById("inpColor");
const btnGenerar = document.getElementById("btnGenerar");
const resultados = document.getElementById("resultados");
const avisoP = document.getElementById("avisoP");

btnGenerar.addEventListener("click", function() {

    const nombre = inpNombre.value.trim();
    const profesion = inpProfesion.value.trim();
    const color = inpColor.value;

    // Validar campos
    if (nombre === "" || profesion === "") {
        avisoP.textContent = "Completá nombre y profesión.";
        return;
    }

    avisoP.textContent = "";

    // Crear tarjeta
    const tarjeta = document.createElement("div");

    tarjeta.style.borderLeft = "6px solid " + color;
    tarjeta.style.borderRadius = "8px";
    tarjeta.style.padding = "12px";
    tarjeta.style.marginTop = "10px";
    tarjeta.style.backgroundColor = "#f5f5f5";

    // Crear nombre
    const h3 = document.createElement("h3");
    h3.textContent = nombre;

    // Crear profesión
    const p = document.createElement("p");
    p.textContent = profesion;

    // Crear botón eliminar
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar tarjeta";

    btnEliminar.addEventListener("click", function() {
        tarjeta.remove();
    });

    // Armar la tarjeta
    tarjeta.appendChild(h3);
    tarjeta.appendChild(p);
    tarjeta.appendChild(btnEliminar);

    // Agregar al DOM
    resultados.appendChild(tarjeta);

    // Limpiar formulario
    inpNombre.value = "";
    inpProfesion.value = "";
    inpNombre.focus();
});