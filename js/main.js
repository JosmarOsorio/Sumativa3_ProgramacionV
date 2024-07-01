//Creamos este archivo para identificar el estado de del usuario mediante onAuthStateChanged
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js" //importamos onAuthStateChanged de la pagina de firebase
import { auth} from "./firebase.js"; //importamos auth de firebase.js
import { loginCheck } from "./loginCheck.js"; //importamos el logincheck de logunCheck.js

onAuthStateChanged(auth, (user) => { //Creamos un apartado que identifique los cambios de estdo de auth 
  loginCheck(user);
});
