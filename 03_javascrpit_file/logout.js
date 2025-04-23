import { auth } from './firebase.js';       // import auth from frirebase.js file
import {  signOut } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

let logoutBtn = document.querySelector('.logout');

logoutBtn.addEventListener('click', ()=>{
 logout(auth)
})

async function logout(auth){
  try {
    let userLogOut = await signOut(auth);
    window.location.href = "./login_page.html";
    
  } catch (error) {
    
  }
}