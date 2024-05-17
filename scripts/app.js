//Funciones para que al clickear el menu hamburguesa se vea el menu (barraOcultar)
//Y al clickear la cruz se cierre

const hamburguesa= document.getElementById('hamburguesa');
const cruz = document.getElementById('cruz');
const navBar = document.getElementById('navBar');
const barraOcultar = document.getElementById('barraOcultar');
const contenedorTitulo= document.getElementById('contenedorTitulo');

const clickHamburguesa=(e)=>{
    hamburguesa.style.display="none";
    cruz.style.display = "flex";
    navBar.style.top = "0vh";
    barraOcultar.style.display = "flex";
    barraOcultar.style.padding = "0px 20px";
    contenedorTitulo.style.left ="60vw"
}

const clickCruz=(e)=>{
    hamburguesa.style.display="";
    cruz.style.display = "none";
    navBar.style.top = "1vh";
    barraOcultar.style.display = "";
    contenedorTitulo.style.left = "";
}


hamburguesa.addEventListener('click', clickHamburguesa);
cruz.addEventListener('click', clickCruz);


// Nuestros Guías
const obtenerDatos = async () => {
    const response = await fetch('https://randomuser.me/api/?results=4');
    const datos = await response.json();
    return datos;
};

const asignarValores = async (foto, nombre, nacionalidad, experiencia) => {
    // llamada a la API Random User
    const datos = await obtenerDatos();

    // definir elementos
    const fotoGuia = document.getElementsByClassName(foto);
    const nombreGuia = document.getElementsByClassName(nombre);
    const nacionalidadGuia = document.getElementsByClassName(nacionalidad);
    const experienciaGuia = document.getElementsByClassName(experiencia);

    // asignar valores
    try {
        for (var i = 0; i < 4; i++) {
            fotoGuia[i].src = datos.results[i].picture.large;
            nombreGuia[i].textContent = datos.results[i].name.first + ' ' + datos.results[i].name.last;
            nacionalidadGuia[i].textContent += ' ' + datos.results[i].location.country;
            experienciaGuia[i].textContent = experienciaGuia[i].textContent.replace('xx', datos.results[i].registered.age);
        }
    } catch (e) {
        console.log(e);
    }
};

asignarValores('cardImg', 'nombreGuia', 'nacionalidadGuia', 'experienciaGuia');
