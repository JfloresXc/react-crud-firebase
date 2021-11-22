import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export async function getNote({ id }) {
	const document = doc(db, "notes", id);
	const response = await getDoc(document);
	return { ...response.data(), id: response.id };
}
