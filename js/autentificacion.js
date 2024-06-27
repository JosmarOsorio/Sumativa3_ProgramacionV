import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";

const signUpForm = document.querySelector("#signup-form");

signUpForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = signUpForm["signup-email"].value;
    const password = signUpForm["signup-password"].value;
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      console.log(userCredential)
  
      // Close the signup modal
      const signupModal = document.querySelector('#signupModal');
      const modal = bootstrap.Modal.getInstance(signupModal);
      modal.hide();
  
      // reset the form
      signUpForm.reset();
  
      // show success message
      Swal.fire({
        title: "Usuario registrado, bienvenido!",
        text: "Su usuario ha sido registrado con exito",
        icon: "success"
      });
      document.querySelector("#error-message-SignUp").textContent = ""; 
  
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        document.querySelector("#error-message-SignUp").textContent = "Este email ya se encuentra en uso, por favor use otro.";
      } else if (error.code === 'auth/invalid-email') {
        document.querySelector("#error-message-SignUp").textContent = "Este email no es valido, por favor ingrese uno valido.";
      } else if (error.code === 'auth/weak-password') {
        document.querySelector("#error-message-SignUp").textContent = "La contraseña ingresada es muy debil por favor ingrese otra contraseña.";
      } else if (error.code) {
        document.querySelector("#error-message-SignUp").textContent = "ha ocurrdio un error, por favor revise el correo y la contraseña e intentelo de nuevo.";
      }
    }
});
