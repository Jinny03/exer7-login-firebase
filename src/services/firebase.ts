// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Attention Please add your firebase console config here
const firebaseConfig = {
  apiKey: "AIzaSyB3GiDsJ6S-16ZoMFDEc1AZmpVYPK5mTlM",
  authDomain: "adv-task.firebaseapp.com",
  projectId: "adv-task",
  storageBucket: "adv-task.appspot.com",
  messagingSenderId: "875971709640",
  appId: "1:875971709640:web:dd116e66807bde281373fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
