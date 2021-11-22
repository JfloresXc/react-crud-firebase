import React from "react";
import Form from "./Form";
import { useNotes } from "../hooks/useNotes";
import NotesList from "./NotesList";

function Notes() {
	const { notes } = useNotes();

	return (
		<div className="row mt-3">
			<div className="col-lg-4">
				<Form {...{}} />
			</div>

			<div className="col-lg-8">
				<NotesList {...{ notes }} />
			</div>
		</div>
	);
}

export default Notes;
