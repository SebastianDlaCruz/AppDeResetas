// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAWgLlVvKuTWC56NYBC4RqdUH9O2wUtZSY",

  authDomain: "appresetas-3a157.firebaseapp.com",

  projectId: "appresetas-3a157",

  storageBucket: "appresetas-3a157.appspot.com",

  messagingSenderId: "772065552180",

  appId: "1:772065552180:web:2edde1e76dde6270dc2761",

  measurementId: "G-4SEECFG5FR"

};


// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseDB = getFirestore(FirebaseApp);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseStore = getStorage(FirebaseApp);
/* const analytics = getAnalytics(FirebaseApp); */