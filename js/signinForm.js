//Creamos un archivo para que s epueda iniciar sesion en la pagina con un usaurio ya autentificado y registrado en firebase
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js" //importamos signInWithEmailAndPassword de firebase uq enos permite iniciar sesion ocn un usuario ya existente 
import { auth } from "./firebase.js"; //Importamos auth de firebase.js

const signInForm = document.querySelector("#login-form"); //creaos una constante que extraiga el elemento que contenga el id login-form

signInForm.addEventListener("submit", async (e) => { //Creamos una funcion que escuche el evento submit y se active
  e.preventDefault(); //agregamos un preventDefault  para evitar que le formulario se envie y se recargue la pagina 
  const email = signInForm["login-email"].value; //Creamos unas constantes para almacenar los elementos de de correo electronico y contraseña
  const password = signInForm["login-password"].value;

  try {
    const userCredentials = await signInWithEmailAndPassword(auth, email, password) //Creamos la constante userCredentials que verifique las crdenciales del usuario utilziando al funcion importada
    console.log(userCredentials) //Mostramos las credenciales por consola para verificar que se envio correctamente (Esto es solo para verificar que se ha enviado todo, se puede eliminar de ser neecsario)

    //Creamos un apartado para cerrar la ventana modal de inicio de sesión
    const modal = bootstrap.Modal.getInstance(signInForm.closest('.modal'));
    modal.hide();

    //Creamos un apartado que restablezca el formulario
    signInForm.reset();

    //Mostramos un mensaje de bienvenida si el inicio de sion ha sido exitoso 
    Swal.fire({
      title: "Bienvenido!",
      text: "Se ha iniciado sesión con exito",
      icon: "success"
    });
    document.querySelector("#error-message-signIn").textContent = "";  //Se agrega una acdena vacia para eliminar cualquier error anterior que pareciera

  } catch (error) { //Utilizamos el catch para atrapar cualquier tipo de error que se pueda ocacionar 
    document.querySelector("#error-message-signIn").textContent = "Ha ocurrido un error. Por favor, revise sus credenciales e inténtelo de nuevo."; //Creamos una funcionabilidad para agregar un texto de error en el formulario
  }
});


