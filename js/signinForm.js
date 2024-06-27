import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";

const signInForm = document.querySelector("#login-form");

signInForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signInForm["login-email"].value;
  const password = signInForm["login-password"].value;

  try {
    const userCredentials = await signInWithEmailAndPassword(auth, email, password)
    console.log(userCredentials)

    // Cerrar la ventana modal de inicio de sesión
    const modal = bootstrap.Modal.getInstance(signInForm.closest('.modal'));
    modal.hide();

    // Reiniciar el formulario
    signInForm.reset();

    // Mostrar mensaje de bienvenida
    Swal.fire({
      title: "Bienvenido!",
      text: "Se ha iniciado sesión con exito",
      icon: "success"
    });
    document.querySelector("#error-message-signIn").textContent = ""; 

  } catch (error) {
    document.querySelector("#error-message-signIn").textContent = "Ha ocurrido un error. Por favor, revise sus credenciales e inténtelo de nuevo.";   
  }
});


