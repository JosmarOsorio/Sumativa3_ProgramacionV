//Desarrollado Por: JOSMAR OSORIO y STEPHANIA SALMERÓN. Para: Programación V-UBA Prof. Elizabeth del Valle
//CARRUSEL
const fila = document.querySelector('.contenedor-carrusel'); /*Declaramos una constante llamada fila donde se selecionará el elemento del contenedor principal del carrusel que tiene la clase "contenedor-carrusel".*/
const peliculas = document.querySelectorAll('.pelicula');/*Declaramos otra constante llamada peliculas donde se va almacenar todos los elementos que tiene la clase película dentro del carrusel. */

const flechaDerecha = document.getElementById('flecha-derecha');
const flechaIzquierda = document.getElementById('flecha-izquierda');
/*Estas dos contantes alamecenan una referencia a los botones para poder agregarle funcionalidad.*/

flechaDerecha.addEventListener('click', () => {//Agregamos un detector de elementos a los botones, el evento que causa es el click, cuando se hace click al botón
  fila.scrollLeft += fila.offsetWidth;
}); 

flechaIzquierda.addEventListener('click', () => {
  fila.scrollLeft -= fila.offsetWidth;
});
/*Dentro de esta función se accede a la propiedad "scrollLeft" del elemento fila, que representa la cantidad de pixeles que el contenido se ha desplazado horizontalmente hacia la iziquierda o derecha. Esto a su vez se le suma el valor de "fila.offsetWidth" que es el ancho del contenedor del carrusel*/

peliculas.forEach((pelicula) => {
    pelicula.addEventListener('mouseenter', (e) => {
      const elemento = e.currentTarget;
      setTimeout(() => {
        peliculas.forEach(pelicula => pelicula.classList.remove('hover')); 
        elemento.classList.add('hover'); 
      }, 200);
    });
  });
  /*Creamos un ciclo forEach por cada elemento de pelicula, dentro de este ciclo se agrega un detector de eventos a cada elemnto, este evento se activa cuando el cursor del mouse entra sobre el elemento película. Utilizamos la función setTimeout para retrasar la ejecución del código por 200milisegundos*/

  fila.addEventListener('mouseleave', () => {
    peliculas.forEach(pelicula => pelicula.classList.remove('hover')); 
  });
/*Creamos otro ciclo forEach para iterear nuevamente a través de peliculas, para cada película eliminamos la clase 'hover' para asegurar que solo la película sobre la que se desplaza el cursor tenga el efecto de desplazamiento aplicado*/

//OCULTAR FLECHAS
const flechas = document.querySelectorAll(".contenedor-principal .flecha-izquierda, .contenedor-principal .flecha-derecha");
/*Declaramos la variable flechas, donde seleccionaremos todas las flechas que tengan la clase correspondiente*/
window.addEventListener("scroll", function() { //Agregamos un evento al objeto flechas, este se activará cada vez que se produzca un scroll
  const scrollPosition = window.scrollY;
  const referenciaScroll = 100; // Definimos un valor de referencia  de 100pixeles para ocultar las flechas

  if (scrollPosition >= referenciaScroll) { /*Con la sentencia if comparamos la posicion del scrollPosition si es mayor o igual al valor de referenciaScroll*/
    flechas.forEach(flecha => flecha.classList.add("oculto"));/*Dentro del if utilizamos un bluce forEach que recorre cada flecha seleccionada y la agrga a la clase oculto, esta clase está definida en el CSS con display:none*/

  } else { /*En esta linea se ejecuta si scrollPosition es menor que referenciaScroll. También utilizamos un bucle forEach que recorre cada flecha seleccionada y elimina a la clase oculto, así mostrando las flechas nuevamente*/
    flechas.forEach(flecha => flecha.classList.remove("oculto")); 
  }
});