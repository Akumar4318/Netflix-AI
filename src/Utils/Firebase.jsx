// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmPdslekNh93M65oi-f7pmx90p0CORkIw",
  authDomain: "netflix-ai-4318abhi.firebaseapp.com",
  projectId: "netflix-ai-4318abhi",
  storageBucket: "netflix-ai-4318abhi.firebasestorage.app",
  messagingSenderId: "1014637410451",
  appId: "1:1014637410451:web:ea73fa73cfd8615f233566",
  measurementId: "G-PVY7CR5NFJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);