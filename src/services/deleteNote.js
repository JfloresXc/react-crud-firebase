import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export const deleteNote = async ({ idNote }) => {
	const document = doc(db, "notes", idNote);
	await deleteDoc(document);
};
