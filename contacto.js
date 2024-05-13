function enviarFormulario() {
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var motivo = document.getElementById("motivo").value;
    var mensaje = document.getElementById("mensaje").value;

    // Expresión regular para validar el formato de correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validar que todos los campos estén completos
    if (nombre.trim() === '' || email.trim() === '' || telefono.trim() === '' || motivo === '' || mensaje.trim() === '') {
        alert("Por favor completa todos los campos del formulario.");
        return false; // Evitar que se envíe el formulario
    }

    // Validar el formato del correo electrónico
    if (!emailRegex.test(email)) {
        alert("Por favor ingresa un correo electrónico válido.");
        return false; // Evitar que se envíe el formulario
    }

    // Si pasa todas las validaciones, se puede enviar el formulario
    return true;
}


