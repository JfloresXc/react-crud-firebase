import React, { useContext } from "react";
import { NoteContext } from "../context/noteContext";
import { useNote } from "../hooks/useNote";

export default function Form() {
	const { note, setNote, clear, editToggle, setEditToggle } =
		useContext(NoteContext);
	const { addNote, updateNote } = useNote();

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setNote({ ...note, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!editToggle) {
			await addNote({ note: note });
		} else {
			await updateNote({ id: note.id, note: note });
			setEditToggle();
		}
		clear();
	};

	return (
		<div className="card ">
			<div className="card-header text-center">
				<h1 className="h3">REACT</h1>
			</div>

			<div className="card-body text-center">
				<form action="#" onSubmit={handleSubmit}>
					<div className="mt-3">
						<input
							type="text"
							className="form-control"
							onChange={handleChangeInput}
							name="title"
							value={note.title}
							placeholder="Title"
						/>
					</div>

					<div className="mt-3">
						<input
							type="text"
							className="form-control"
							onChange={handleChangeInput}
							name="author"
							value={note.author}
							placeholder="Author"
						/>
					</div>

					<div className="mt-3">
						<textarea
							name="description"
							rows="4"
							value={note.description}
							placeholder="Description"
							className="form-control"
							onChange={handleChangeInput}
						></textarea>
					</div>

					<button type="submit" className="btn btn-dark mt-3">
						{!editToggle ? "Add" : "Edit"}
					</button>
				</form>
			</div>
		</div>
	);
}
