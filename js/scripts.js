//querySelector
const heading = document.querySelector(".header__texto h2"); // Retorna 0 o 1 Elemento
console.log(heading);
//heading.textContent = 'Nuevo Heading';

//querySelectorALL
const enlaces = document.querySelectorAll(".navegacion a"); // Retorna 0 o todos
console.log(enlaces[0]);
enlaces[0].textContent = "Nuevo texto para enlace";
//enlaces[0].href = 'www.google.com'

//GetByElementByID
const heading2 = document.getElementById("heading");
console.log(heading2);

// Generacion codigo Html desde JS
const nuevoEnlace = document.createElement("A");
console.log(nuevoEnlace);
//agregar href
nuevoEnlace.href = "nuevo-enlace.html";
//agregar texto
nuevoEnlace.textContent = "Tienda";
//agregar classe
nuevoEnlace.classList.add("navegacion__enlace");
//agregarlo al documento
const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);

//Eventos
console.log(5);
// window.addEventListener('load', function(){              //ESPERA Q DESCARGUE HTML,CCS,JS
//     console.log(2);
// })
// document.addEventListener('DOMContentLoaded',function(){  //SOLO ESPERA Q DESCARGUE HTML
//     console.log(4);
// })
// window.onscroll = function(){
//     console.log("SCROLEANDOO..")
// }

//Seleccionar Elemento y Asociar Evento
// const btnEnviar = document.querySelector(".boton--primario");
// btnEnviar.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log("Enviando Formulario..");
// });

// Objeto para almacenar datos del formulario (debe estar antes del evento submit)
const datos = {
  nombre: "",
  email: "",
  mensaje: "",
};

// Seleccionar inputs
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");

// Eventos de inputs y textarea
nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

function leerTexto(e) {
  // console.log(e.target.value);
  datos[e.target.id] = e.target.value;
  console.log(datos);
}

// Evento submit (al final porque usa el objeto 'datos')
const formulario = document.querySelector(".formulario");
formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  // Validar formulario
  const { nombre, email, mensaje } = datos;

  if (nombre === "" || email === "" || mensaje === "") {
    mostrarError("Todos lo campos son obligatorios");
    return;
  }

  //Crear Alerta Enviar formulario
  mostrarMensaje("Se ha enviado el formulario de forma exitosa!!");
});

//Funcion Mostrar Error en Pantalla
function mostrarError(mensaje){
  const error = document.createElement('P');
  error.textContent = mensaje;
  error.classList.add('error');
  console.log(error);

  formulario.appendChild(error);

  //desaparesca despues de segundos
  setTimeout(() => {
    error.remove();
  },2000);
}


function mostrarMensaje(mensaje){
  const alerta = document.createElement('P');
  alerta.textContent = mensaje;
  alerta.classList.add('correcto');
  console.log(alerta);
  formulario.appendChild(alerta);
  setTimeout(() => {
    alerta.remove();
  }, 2000);
}
