import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";

export async function putNote({ id, note }) {
	const document = doc(db, "notes", id);
	await updateDoc(document, note);
}
