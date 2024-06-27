import { signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";

const logout = document.querySelector("#logout");

logout.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    await signOut(auth)
    Swal.fire({
      title: "Sesión cerrada",
      text: "Se ha cerrado sesión con exito!",
      icon: "success"
    });
  } catch (error) {
    Swal.fire({
      title: "Ha ocurrido un eror",
      text: "Ha habido un problema al cerrar sesión por favor intente de nuevo",
      icon: "error"
    });
  }
});