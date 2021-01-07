import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAtlRqCElrQHaoWS-vgfU_I971zuH5VnLI",
    authDomain: "fb-crud-react-87fa9.firebaseapp.com",
    projectId: "fb-crud-react-87fa9",
    storageBucket: "fb-crud-react-87fa9.appspot.com",
    messagingSenderId: "700110853740",
    appId: "1:700110853740:web:7570c4c9d5bbc692036a49"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  const db = fire.firestore()

  export {db}   