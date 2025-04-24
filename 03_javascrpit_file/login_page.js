import { auth } from './firebase.js';       // import auth from frirebase.js file
import {signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

let loginBtn = document.getElementById('login-btn');


loginBtn.addEventListener('click', () => {
  const userID = document.getElementById('userid').value;
  const userPassword = document.getElementById('password').value;

  loginUser(userID, userPassword);    // asyn function calling

  document.getElementById('userid').value = "";
  document.getElementById('password').value = "";
  
});



// asyn fucntion promoise 
async function loginUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "./dashboard.html";
  } catch (error) {
    console.error("Login failed:", error.message);
    alert('Unauthorized access! Please check your email and password.');
  }
}
