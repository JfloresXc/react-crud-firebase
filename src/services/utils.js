import { query, collection, doc, getDocs, deleteDoc } from "firebase/firestore";

export const handleQueryDelete = async ({ title }) => {
	const collectionRef = collection(db, "notes");
	const q = query(collectionRef, where("title", "==", title));
	const snapshot = await getDocs(q);

	const results = snapshot.docs.map((doc) => ({
		...doc.data(),
		id: doc.id,
	}));

	results.forEach(async (result) => {
		const docRef = doc(db, "colors", result.id);
		await deleteDoc(docRef);
	});
};
