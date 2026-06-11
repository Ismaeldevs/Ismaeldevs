const inputNombre = document.getElementById("inputNombre");
const btnAgregar = document.getElementById("btnAgregar");
const listaInvitados = document.getElementById("listaInvitados");
const aviso = document.getElementById("aviso");

btnAgregar.addEventListener("click", function() {

    const nombre = inputNombre.value.trim();

    // Si el nombre está vacío
    if (nombre === "") {
        aviso.textContent = "Ingresá un nombre.";
        return;
    }

    // Ocultar aviso
    aviso.textContent = "";

    // Crear el <li>
    const li = document.createElement("li");
    li.textContent = nombre + " ";

    // Crear botón Quitar
    const btnQuitar = document.createElement("button");
    btnQuitar.textContent = "Quitar";

    // Eliminar solo ese elemento
    btnQuitar.addEventListener("click", function() {
        li.remove();
    });

    // Agregar botón al <li>
    li.appendChild(btnQuitar);

    // Agregar <li> a la lista
    listaInvitados.appendChild(li);

    // Limpiar y enfocar el input
    inputNombre.value = "";
    inputNombre.focus();
});