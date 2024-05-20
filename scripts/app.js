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
    contenedorTitulo.style.left ="55vw";
    contenedorTitulo.style.top="0";
    contenedorTitulo.style.scale="0.6";
}

const clickCruz=(e)=>{
    hamburguesa.style.display="";
    cruz.style.display = "none";
    navBar.style.top = "1vh";
    barraOcultar.style.display = "";
    contenedorTitulo.style.left = "";
    contenedorTitulo.style.top= "";
    contenedorTitulo.style.scale= "";
}


hamburguesa.addEventListener('click', clickHamburguesa);
cruz.addEventListener('click', clickCruz);
