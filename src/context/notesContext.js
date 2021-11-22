import React, { useState } from "react";

export const NotesContext = React.createContext();

function NotesContextProvider({ children }) {
	const [notes, setNotes] = useState([]);
	const [loading, setLoading] = useState(true);

	return (
		<NotesContext.Provider
			value={{ notes, setNotes, loading, setLoading }}
		>
			{children}
		</NotesContext.Provider>
	);
}

export default NotesContextProvider;
