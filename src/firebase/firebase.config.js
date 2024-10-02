// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDUiG5qcFxGB11unZbkrb2V1NwBxziNUbs",
    authDomain: "restu-bar-42806.firebaseapp.com",
    projectId: "restu-bar-42806",
    storageBucket: "restu-bar-42806.appspot.com",
    messagingSenderId: "593425466240",
    appId: "1:593425466240:web:6e0d303399c9673e1a3765"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;