//Este archivo se encarga de autenticar un nuevo usuario en firebase
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js" //Importamos la funcion createUserWithEmailAndPassword de firebase
import { auth } from "./firebase.js"; //Importamos auth de firebase.js

const signUpForm = document.querySelector("#signup-form"); //creaos una constante que extraiga el elemento que contenga el id signup-form

signUpForm.addEventListener("submit", async (e) => { //Creamos una funcion que escuche el evento submit y se active
    e.preventDefault(); //agregamos un preventDefault  para evitar que le formulario se envie y se recargue la pagina 
    const email = signUpForm["signup-email"].value; //Creamos unas constantes para almacenar los elementos de de correo electronico y contraseña
    const password = signUpForm["signup-password"].value;
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password) //Creamos un nuevo usuario utilizando la funcion importada createUserWithEmailAndPassword
      console.log(userCredential) //Mostramos las credenciales por consola para verificar que se envio correctamente (Esto es solo para verificar que se ha enviado todo, se puede eliminar de ser neecsario)
  
      // Creamos un apartado para ocultar la venatna modal 
      const signupModal = document.querySelector('#signupModal');
      const modal = bootstrap.Modal.getInstance(signupModal);
      modal.hide();
  
      signUpForm.reset();// Restablecemos el formulario de inicio de sesion 
  
      //Mostramos una alerta en caso de que el envio de credenciales y la creacion del nuevo usuario sea exitosa 
      Swal.fire({
        title: "Usuario registrado, bienvenido!",
        text: "Su usuario ha sido registrado con exito",
        icon: "success"
      });
      document.querySelector("#error-message-SignUp").textContent = ""; //Se agrega una acdena vacia para eliminar cualquier error anterior que pareciera 
  
    } catch (error) { //Utilizamos el catch para atrapar cualquier tipo de error que se pueda ocacionar 
      if (error.code === 'auth/email-already-in-use') {
        document.querySelector("#error-message-SignUp").textContent = "Este email ya se encuentra en uso, por favor use otro."; //Creamos una funcionabilidad para agregar un texto segun el error que se identifique 
      } else if (error.code === 'auth/invalid-email') {
        document.querySelector("#error-message-SignUp").textContent = "Este email no es valido, por favor ingrese uno valido.";
      } else if (error.code === 'auth/weak-password') {
        document.querySelector("#error-message-SignUp").textContent = "La contraseña ingresada es muy debil por favor ingrese otra contraseña.";
      } else if (error.code) {
        document.querySelector("#error-message-SignUp").textContent = "ha ocurrdio un error, por favor revise el correo y la contraseña e intentelo de nuevo.";
      }
    }
});
