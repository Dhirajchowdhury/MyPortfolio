
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB6vY-ENcaiCsQIV8XpsD7ParjRP6BfRmQ",
    authDomain: "dhirajportfolio-53285.firebaseapp.com",
    projectId: "dhirajportfolio-53285",
    storageBucket: "dhirajportfolio-53285.firebasestorage.app",
    messagingSenderId: "364491190623",
    appId: "1:364491190623:web:0237c523d2310602eb86ea",
    measurementId: "G-NP7FF92MZL"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

