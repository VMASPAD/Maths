function mostrarMensaje() {
    var selectElement = document.getElementById("integral");
    var valorSeleccionado = selectElement.value;

    var mensajeElement = document.getElementById("mensaje");

    if (valorSeleccionado === "*") {
        console.log("*");
        mensajeElement.textContent = "Seleccionaste el operador *";
    } else if (valorSeleccionado === "/") {
        console.log("/");
        mensajeElement.textContent = "Seleccionaste el operador /";
    } else if (valorSeleccionado === "+") {
        console.log("+");
        mensajeElement.textContent = "Seleccionaste el operador +";
    } else if (valorSeleccionado === "-") {
        console.log("-");
        mensajeElement.textContent = "Seleccionaste el operador -";
    } else {
        console.log("esperando");
        mensajeElement.textContent = "Esperando selección...";
    }
}

// Llamar a la función cuando se requiera, por ejemplo, al hacer clic en un botón.
// Puedes modificar este evento según tus necesidades.
document.getElementById("integral").addEventListener("change", mostrarMensaje);