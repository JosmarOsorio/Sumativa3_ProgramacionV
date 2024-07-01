//Este documento se encarga de cerrar la sesion del usuario 
import { signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js" //Importamos sigOut de firebase que nos permitira cerrar la sesion del usuario 
import { auth } from "./firebase.js"; //Importamos auth de firebase.js que optiene el usuario de la aplicacion de firebase

const logout = document.querySelector("#logout"); //Creamos la constante logout buscando los elementos que oontengan el is logout

logout.addEventListener("click", async (e) => { //Creamos un evento que escucha el click en el logout
  e.preventDefault(); //Agregamos un prevent default para evitar uqe la pagina se recargue cuando hagamos click 
  try {
    await signOut(auth) //Verificamos el estado del usuario
    Swal.fire({ //Agregamos una alerta para notificar que se ha cerrado sesion exitosamente
      title: "Sesión cerrada",
      text: "Se ha cerrado sesión con exito!",
      icon: "success"
    });
  } catch (error) { //Colocamos un catch para que en casod e ocurrir cualqueir error este muestre una alerta 
    Swal.fire({
      title: "Ha ocurrido un eror",
      text: "Ha habido un problema al cerrar sesión por favor intente de nuevo",
      icon: "error"
    });
  }
});