import React, { useState,useEffect } from 'react'

import {db} from '../firebase'

function FormLink(props) {

    const initialValues = {
        title: '',
        author: '',
        description: '' 
    }

    const [values, setValues] = useState(initialValues)    

    const handleChangeInput = (e) => {
        const {name, value} = e.target 
        setValues({...values, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const id = props.currentId
        if(id === ""){
            props.addNote(values)
        }else{
            props.editNote(values) 
        }
        setValues(initialValues)
    }

    useEffect( async() => {
        const id = props.currentId

        if(id === ""){
            setValues(initialValues)

        }else{

            await db.collection('notes').doc(id).get()
            .then((doc) => {
                setValues(doc.data())
                //Same : 
                // console.log(doc.data())
                // console.log({...doc.data()})
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });
        }   
    }, [props.currentId])

    
    return (
        <div className="card ">
            <div className="card-header text-center">
                <h1 className="h3">REACT</h1>
            </div>

            <div className="card-body text-center">
                <form action="#" onSubmit={handleSubmit}>
                    <div className="mt-3">
                        <input type="text" className="form-control" onChange={handleChangeInput} name="title" value={values.title} placeholder="Title" />
                    </div>

                    <div className="mt-3">
                        <input type="text" className="form-control" onChange={handleChangeInput} name="author" value={values.author} placeholder="Author"/>
                    </div>

                    <div className="mt-3">
                        <textarea name="description" rows="4" value={values.description} placeholder="Description" className="form-control" onChange={handleChangeInput}></textarea>
                    </div>

                    <button type="submit" className="btn btn-dark mt-3">Save</button>
                </form>
            </div>
        </div>
    )
}

export default FormLink