// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXDT04M79hEgG_fTgIFzY4Wp8vbf3aBMs",
  authDomain: "livetap-891da.firebaseapp.com",
  projectId: "livetap-891da",
  storageBucket: "livetap-891da.appspot.com",
  messagingSenderId: "556672856671",
  appId: "1:556672856671:web:95190b7b22d5461ce921ea",
  measurementId: "G-SF7EGC4E8X"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
app
export const db = getFirestore(app);