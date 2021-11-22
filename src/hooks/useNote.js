import { postNote } from "../services/postNote";
import { deleteNote } from "../services/deleteNote";
import { putNote } from "../services/putNote";
import { getNote } from "../services/getNote";

export const useNote = () => {
	return { addNote: postNote, updateNote: putNote, getNote, deleteNote };
};
