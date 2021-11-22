import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyB9AgSuNe0vz3iF8zIW-VKb0JBNsXT7mKM",
	authDomain: "notes-2021-11.firebaseapp.com",
	projectId: "notes-2021-11",
	storageBucket: "notes-2021-11.appspot.com",
	messagingSenderId: "112822777787",
	appId: "1:112822777787:web:b20964820c768fb182769e",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
