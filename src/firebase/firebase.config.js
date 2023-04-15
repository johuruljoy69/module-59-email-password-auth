// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxaEHagU62s5uuZUtdhqKDeV4k4XQMFCw",
  authDomain: "email-password-auth-fcc30.firebaseapp.com",
  projectId: "email-password-auth-fcc30",
  storageBucket: "email-password-auth-fcc30.appspot.com",
  messagingSenderId: "368056634208",
  appId: "1:368056634208:web:a30e35aa334bbdda73ac05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;