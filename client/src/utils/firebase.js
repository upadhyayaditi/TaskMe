// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "task-manager-e9361.firebaseapp.com",
  projectId: "task-manager-e9361",
  storageBucket: "task-manager-e9361.appspot.com",
  messagingSenderId: "65203560354",
  appId: "1:65203560354:web:30bc5366a3ea5c56fd1cfb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);