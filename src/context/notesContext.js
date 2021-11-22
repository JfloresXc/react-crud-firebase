import React, { useState } from "react";

export const NotesContext = React.createContext();

function NotesContextProvider({ children }) {
	const [notes, setNotes] = useState([]);
	return (
		<NotesContext.Provider value={{ notes, setNotes }}>
			{children}
		</NotesContext.Provider>
	);
}

export default NotesContextProvider;
