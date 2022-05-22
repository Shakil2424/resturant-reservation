
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA2udgMQ9HJX-tLIsuFFUPHv3wqPawCa40",
  authDomain: "resturant-reservation-9d8fa.firebaseapp.com",
  projectId: "resturant-reservation-9d8fa",
  storageBucket: "resturant-reservation-9d8fa.appspot.com",
  messagingSenderId: "505607724325",
  appId: "1:505607724325:web:7d71ff139e202ee34e0ecc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

