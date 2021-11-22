import React, { useState } from "react";
import NotesContextProvider from "./context/notesContext";
import NoteContextProvider from "./context/noteContext";

import Notes from "./components/Notes";
import Navigation from "./components/Navigation";

function App() {
	const [amount, setAmount] = useState();

	function handleAmount(amountArray) {
		setAmount(amountArray);
	}

	return (
		<NotesContextProvider>
			<Navigation length={amount} />
			<div className="container">
				<NoteContextProvider>
					<Notes handleAmount={handleAmount} />
				</NoteContextProvider>
			</div>
		</NotesContextProvider>
	);
}

export default App;
