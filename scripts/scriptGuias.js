const obtenerDatos = async () => {
    const response = await fetch('https://randomuser.me/api/?results=4');
    const datos = await response.json();
    return datos;
};

const asignarValores = async (foto, nombre, apellido, nacionalidad, experiencia) => {
    // llamada a la API Random User
    const datos = await obtenerDatos();

    // definir elementos
    const fotoGuia = document.getElementsByClassName(foto);
    const nombreGuia = document.getElementsByClassName(nombre);
    const apellidoGuia = document.getElementsByClassName(apellido);
    const nacionalidadGuia = document.getElementsByClassName(nacionalidad);
    const experienciaGuia = document.getElementsByClassName(experiencia);

    // asignar valores
    try {
        for (var i = 0; i < 4; i++) {
            fotoGuia[i].src = datos.results[i].picture.large;
            nombreGuia[i].textContent = datos.results[i].name.first + ' ';
            apellidoGuia[i].textContent = datos.results[i].name.last;
            nacionalidadGuia[i].textContent += ' ' + datos.results[i].location.country;
            experienciaGuia[i].textContent = experienciaGuia[i].textContent.replace('xx', datos.results[i].registered.age);
        }
    } catch (e) {
        console.log(e);
    }
};

asignarValores('cardImg', 'nombreGuia', 'apellidoGuia', 'nacionalidadGuia', 'experienciaGuia');
