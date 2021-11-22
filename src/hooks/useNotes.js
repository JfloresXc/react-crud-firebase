import { useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { onSnapshot, collection } from "firebase/firestore";
import { NotesContext } from "../context/notesContext";

export const useNotes = () => {
	const { notes, setNotes, setLoading } = useContext(NotesContext);

	useEffect(() => {
		const notesCollection = collection(db, "notes");
		onSnapshot(notesCollection, (noteSnapshot) => {
			setNotes(
				noteSnapshot.docs.map((doc) => ({
					...doc.data(),
					id: doc.id,
				}))
			);
			setLoading(false);
		});
	}, [setNotes]);

	return { notes, setNotes };
};
