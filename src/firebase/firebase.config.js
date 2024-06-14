// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk8iZGyb21vvPtH5SBB-k8z9E3j4gUO6k",
  authDomain: "the-daily-spark.firebaseapp.com",
  projectId: "the-daily-spark",
  storageBucket: "the-daily-spark.appspot.com",
  messagingSenderId: "172067985191",
  appId: "1:172067985191:web:200bb83c764f30d5233b02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;