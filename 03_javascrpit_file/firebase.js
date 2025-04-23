// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBa0Bx5h3EEGzUG3RnIIPZfDXpBacwom44",
  authDomain: "glimmergrid-7bb70.firebaseapp.com",
  databaseURL: "https://glimmergrid-7bb70-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "glimmergrid-7bb70",
  storageBucket: "glimmergrid-7bb70.firebasestorage.app",
  messagingSenderId: "631358971674",
  appId: "1:631358971674:web:94c1635cbb4ffeaa8e56a3",
  measurementId: "G-M5PDFDWEQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);



// Export the auth object to use in other files
export { auth };



// =========================================================================================================
// Date setting logic for login page...
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const formattedDate = new Intl.DateTimeFormat('en-GB').format(new Date());
// console.log(formattedDate); // Output: 24/04/2025

const date = new Date();

let dayDate = document.getElementById('day-date');

dayDate.innerHTML = `<span>Date:</span> ${formattedDate} <span id="day">(${days[date.getDay()]})</span>`


// time logic for login page....

let time = document.getElementById('time');
time.innerHTML = `<span>Time: </span>${date.toLocaleTimeString()}`
