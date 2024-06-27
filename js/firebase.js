import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyD3JdtXXa7YUQGtHigmSkXMdDHfHc49LFc",
  authDomain: "sumativa3-af2c7.firebaseapp.com",
  projectId: "sumativa3-af2c7",
  storageBucket: "sumativa3-af2c7.appspot.com",
  messagingSenderId: "99932575994",
  appId: "1:99932575994:web:c1cd6e94f5013b70cf1143"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)