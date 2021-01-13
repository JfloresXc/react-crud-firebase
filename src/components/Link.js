import React, { useState, useEffect } from 'react'

import FormLinks from "./FormLinks";
import { db } from '../firebase'

function Link(props) {
    const [notes, setNotes] = useState([])
    const [editedNotes, setEditedNotes] = useState({})
    const [currentId, setCurrentId ] = useState('') 

    props.handleAmount(notes.length);
    
    const addNote = async (note) => {
        await db.collection("notes").doc().set(note);
    }

    const deleteNote = async (id) => {
        await db.collection('notes').doc(id).delete()
    }

    const editNote = async (note) => {
        await db.collection('notes').doc(currentId).update(note)
    }

    const handleEdit = async (id) => {
        await db.collection('notes').doc(id).get()
            .then((doc) => {
                setEditedNotes({...doc.data(), id : id})
                setCurrentId(id)
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });
    }

    const snapshot = () => {
        db.collection('notes').onSnapshot((querySnapshot) => {
            const docs = []
            querySnapshot.forEach((snap) => {
                docs.push({ ...snap.data(), id: snap.id })
            })
            setNotes(docs)
        })
    }

    useEffect(() => {
        snapshot()
    }, [])

    return (
        <div className="row mt-3">
            <div className="col-lg-4">
                <FormLinks {...{addNote, editNote, currentId}} />
            </div>

            <div className="col-lg-8">
                <div className="row">
                    {
                        notes.map((note) => {
                            return (
                                <div className="col-lg-4" key={note.id}>
                                    <div className="card text-center mb-3">
                                        <div className="card-header">
                                            <h1 className="h4 text-secondary">{note.title}</h1>
                                        </div>
                                        <div className="card-body">
                                            <h3 className="h5">{note.author}</h3>
                                            <p>{note.description}</p>
                                        </div>
                                        <div className="card-header d-flex justify-content-end">
                                            <button className="btn btn-success" onClick={() => { handleEdit(note.id) }}><i className="fas fa-pen-square"></i></button>
                                            <button className="btn mx-3 btn-danger" onClick={() => { deleteNote(note.id) }}><i className="fas fa-times-circle"></i></button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )

}

export default Link