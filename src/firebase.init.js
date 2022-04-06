// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBV7_2lrim1xQ6E2aM6-UcYLqNNKBmiS_s",
    authDomain: "coin-kinbo.firebaseapp.com",
    projectId: "coin-kinbo",
    storageBucket: "coin-kinbo.appspot.com",
    messagingSenderId: "713537048297",
    appId: "1:713537048297:web:f13fffc733ef237326aa78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;