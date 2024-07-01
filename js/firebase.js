//Este domuemnto se encarga de importar y exportar las funcionabilidades que vamos a utilizar en el codigo 
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

 //Configuracion de firebase:
 const firebaseConfig = {
  apiKey: "AIzaSyD3JdtXXa7YUQGtHigmSkXMdDHfHc49LFc",
  authDomain: "sumativa3-af2c7.firebaseapp.com",
  projectId: "sumativa3-af2c7",
  storageBucket: "sumativa3-af2c7.appspot.com",
  messagingSenderId: "99932575994",
  appId: "1:99932575994:web:c1cd6e94f5013b70cf1143"
};

export const app = initializeApp(firebaseConfig); //exportamos initializeApp y lo llamamos como la constante app que nos permite configurar las opciones que nos ofrece firebase e inicializar el mismo
export const auth = getAuth(app) //exportamos de app el getAuth y lo llamamos como la constante auth que nos permite obtener la autentificacion del usuario