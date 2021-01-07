import React, {useState} from 'react'

function FormLink(props){
    const initialStateValues = {
        url: " ",
        namePage: " ",
        description: " ", 
    }

    const [values, setValues] = useState(initialStateValues)

    const getData = (e) => {
        const {name, value} = e.target
        setValues({ ...values, [name]: value })
    }

    const submit = (e) => {
        e.preventDefault()
        console.log(values)
        props.addData(values)
    }

    return (
        <div className="card">
            <div className="card-body">
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <input type="text" className="form-control" name="url" onChange={getData} placeholder="Write URL" />
                    </div>

                    <div className="mb-3">
                        <input type="text" className="form-control" name="namePage" onChange={getData} placeholder="Write name page" />
                    </div>

                    <div className="mb-3">
                        <textarea rows="3" className="form-control" name="description" onChange={getData} placeholder="Write description page" />
                    </div>

                    <button className="btn btn-primary form-control">Save</button>
                </form>
            </div>
        </div>
    )
}

export default FormLink