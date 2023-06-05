// selecciona la etiqueta h1 y lo guarda en una variable
const titulo = document.querySelector('h1');
// cambia el texto de la etiqueta h1
titulo.innerText = "Los michis son lo mejor";

//Selecciona el id que tiene el nombre "foto" y la guarda en una variable
const foto = document.querySelector('#foto');
//cambia la dirección del archivo de imagen que va a mostrar
foto.src = 'img/gato.jpg';


//Selecciona todos class con el nombre "list-item" y los guarda en un array
const listItems = document.querySelectorAll('.list-item');
//Selecciona solo el que está en la posición 1 y aplica el formato de la clase destacado
listItems[1].classList.add('destacado');

//Selecciona todas las etiquetas p y las guarda en un array
const parrafos = document.querySelectorAll( 'p' );

//Recorre el array para modificar para texto de las etiquetas p
parrafos.forEach( function(parrafo) {    
  parrafo.innerText = '¡Esto es Código PaLante!';
});

//Selecciona la etiqueta h3 y la guarda en una variable
const titulosecundario = document.querySelector( 'h3' );

// Crea un evento que genera una función cuando se hace click en el texto dentro de la etiqueta h3
titulosecundario.addEventListener('mouseover', function(e) {
   e.target.classList.toggle('modificarh3');
});

