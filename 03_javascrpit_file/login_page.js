import { user } from './firebase-config.js';

import {signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

let login_Btn = document.getElementById('login-btn');

login_Btn.addEventListener('click', ()=>{
  let loginEmail = document.getElementById('loginEmail').value;
  let loginPassword = document.getElementById('loginPassword').value;

  // async function calling
loginUser(loginEmail, loginPassword)

 
});


// asyn functio to handel login part data fetch and match..

async function loginUser(email, password){
  try {

    const userCredential = await signInWithEmailAndPassword(user, email, password);

    window.location.href = './dashboard.html';
    
  } catch (error) {
    document.getElementById('error').innerText = "Unauthorized access! Please check your email and password."

    console.log(error.message)
    
  }

};

// date and time function

const date = new Date();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const formattedDate = new Intl.DateTimeFormat('en-GB').format(new Date());

let dayDate = document.getElementById('day-date');

document.getElementById('day-date').innerHTML = `<span>Date:</span> ${formattedDate} <span id="day">(${days[date.getDay()]})</span> `;


function updateTime() {
  const now = new Date();
  const format = num => num.toString().padStart(2, '0');

  let hours = now.getHours();
  const minutes = format(now.getMinutes());
  const seconds = format(now.getSeconds());
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12 || 12; // convert to 12-hour format

  const timeString = `${format(hours)}:${minutes}:${seconds} ${ampm}`;
  document.getElementById('time').innerHTML = `<span>Time: </span> ${timeString}`;
}

setInterval(updateTime, 1000);
updateTime()
