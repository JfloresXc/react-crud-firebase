import firebase from "firebase/app";
import 'firebase/firebase-firestore' 

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDyh5jvMK2u32lgJEA4V_iomF26oinm4qg",
  authDomain: "fir-crud-92857.firebaseapp.com",
  projectId: "fir-crud-92857",
  storageBucket: "fir-crud-92857.appspot.com",
  messagingSenderId: "987516904537",
  appId: "1:987516904537:web:ff5f4368bfb4aa9ae13d48"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const db = fb.firestore()

export {db}