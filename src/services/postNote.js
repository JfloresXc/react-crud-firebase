import { db } from "../firebase";
import { doc, collection, setDoc } from "firebase/firestore";

export async function postNote({ note }) {
	const col = collection(db, "notes");
	await setDoc(doc(col), note);
}
