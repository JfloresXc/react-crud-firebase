import React, { useContext, useCallback } from "react";
import { NoteContext } from "../context/noteContext";
import { NotesContext } from "../context/notesContext";
import { useNote } from "../hooks/useNote";

const Note = React.memo(({ note, deleteNote, handleEdit }) => {
	return (
		<div className="col-lg-4">
			<div className="card text-center mb-3">
				<div className="card-header">
					<h1 className="h4 text-secondary">{note.title}</h1>
				</div>
				<div className="card-body">
					<h3 className="h5">{note.author}</h3>
					<p>{note.description}</p>
				</div>
				<div className="card-header d-flex justify-content-end">
					<button
						className="btn btn-success"
						onClick={() => {
							handleEdit(note.id);
						}}
					>
						<i className="fas fa-pen-square"></i>
					</button>
					<button
						className="btn mx-3 btn-danger"
						onClick={() => {
							deleteNote({
								idNote: note.id,
							});
						}}
					>
						<i className="fas fa-times-circle"></i>
					</button>
				</div>
			</div>
		</div>
	);
});

export default function NotesList({ notes }) {
	const { deleteNote, getNote } = useNote();
	const { setNote, setEditToggle } = useContext(NoteContext);
	const { loading } = useContext(NotesContext);

	const handleEdit = useCallback(async (id) => {
		const doc = await getNote({ id });
		setNote(doc);
		setEditToggle();
	}, []);

	if (loading) return <h1>Loading ...</h1>;

	return (
		<div>
			<div className="row">
				{notes.map((note, index) => {
					return (
						<Note
							key={index}
							{...{
								note,
								index,
								deleteNote,
								handleEdit,
							}}
						/>
					);
				})}
			</div>
		</div>
	);
}
