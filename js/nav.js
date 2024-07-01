$(document).ready(function(){ //Ccreamos esta función que se ejecutará cuando la página web haya cargado completamente 
  $(window).scroll(function(){ //Esta función se ejecutará cada vez que el usuario haga scroll en la página 
    if ($(this).scrollTop() > 10) { /*Utilizamos el condicional if para verificar si la posición de desplazamiento de la página es mayor a 10px, si esto se cumple significaa que el usuario si ha desplzado lo sufieciente para que se active este comportamiento. */
      $('.navbar').addClass('sticky-top');/*Si se cumple la condición anterior se agrga a la clase CSS sticky-top al elemento con la clase navbar, así quedando la barra de navegación fija en la página. */
    } else {
      $('.navbar').removeClass('sticky-top'); /*Si la condición no se cumple se eliminará la clase sticky-top del elemento con la clase navbar, esto quiere decir que el scroll es menor o igual a 10px, lo que hace que la barra de navegación vuelva a su posición original. */
    }
  });
});