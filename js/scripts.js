//querySelector

const heading = document.querySelector(".header__texto h2"); // Retorna 0 o 1 Elemento
console.log(heading);
//heading.textContent = 'Nuevo Heading';

//querySelectorALL
const enlaces = document.querySelectorAll(".navegacion a"); // Retorn a 0 o todos
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

const btnEnviar = document.querySelector(".boton--primario");
btnEnviar.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Enviando Formulario..");
});
