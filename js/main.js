import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth} from "./firebase.js";
import { loginCheck } from "./loginCheck.js";

import './logout.js'

// list for auth state changes
onAuthStateChanged(auth, async (user) => {
  loginCheck(user);
});
