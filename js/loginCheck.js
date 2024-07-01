//Creamos un apartado para crear acciones segun el estado de autentificacion del usuario
const loggedOutLinks = document.querySelectorAll(".logged-out"); //Declaramos las  constantes para identificar los elementos del html a traves de su clase
const loggedInLinks = document.querySelectorAll(".logged-in");
const botonesProductos = document.querySelectorAll(".botonesProductos");

export const loginCheck = (user) => { //Creamos uan funcion llamada loginCheck que exporta la variable user para determinar si el usuario ha iniciado sesion o no
  botonesProductos.forEach((boton) => { //Recorremos la constantes botonesPruductos para que en caso de que contenga los atributos agregados en caso de no estar loggeado el usuario al momento de logearse se lo elimine
    boton.removeAttribute("data-bs-toggle");
    boton.removeAttribute("data-bs-target");
  });

  if (user) { //Creamos un condicional para agregar atributos a elementos html en casod e que este o no loggeado el usuario en la pagina
    loggedInLinks.forEach((link) => (link.style.display = "block")); //llamamos a las constantes loggedInlinks y loggedOutLinks para recorrerlos y ocultar y mostar elementos de inicio de sesion, crar cuenta y cerrar sesion 
    loggedOutLinks.forEach((link) => (link.style.display = "none"));

  } else {
    loggedInLinks.forEach((link) => (link.style.display = "none"));
    loggedOutLinks.forEach((link) => (link.style.display = "block"));

    botonesProductos.forEach((boton) => { //llamamos a la constante botonesProdcutos para recorrer los elementos del html y agregarles atribuyos en casod e que el usuario no este loggeado 
      boton.setAttribute("data-bs-toggle", "modal");
      boton.setAttribute("data-bs-target", "#signinModal");
    });
  }
};