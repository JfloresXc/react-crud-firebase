import React, { useContext } from "react";
import { NotesContext } from "../context/notesContext";

function Navigation() {
	const { notes } = useContext(NotesContext);

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-success">
			<div className="container">
				<h4 className="navbar-brand text-light">NOTES CRUD</h4>
				<div className="d-flex justify-content-end" id="navbarNav">
					<button type="button" className="btn btn-primary">
						Length{" "}
						<span className="badge bg-secondary">
							{notes.length}
						</span>
					</button>
				</div>
			</div>
		</nav>
	);
}

export default Navigation;
