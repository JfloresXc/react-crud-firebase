import React, { useState, useCallback } from "react";

const initialValues = {
	// id: -1,
	title: "",
	author: "",
	description: "",
};

export const NoteContext = React.createContext();

function NoteContextProvider({ children }) {
	const [note, setNote] = useState(initialValues);
	const [value, setToggleValue] = useState(false);

	const clear = () => setNote(initialValues);

	const toggle = useCallback(() => {
		setToggleValue((value) => !value);
	}, [setToggleValue]);

	return (
		<NoteContext.Provider
			value={{
				note,
				setNote,
				clear,
				editToggle: value,
				setEditToggle: toggle,
			}}
		>
			{children}
		</NoteContext.Provider>
	);
}

export default NoteContextProvider;
