import React from 'react'

function Navigation(props) {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <div className="container">
                <a className="navbar-brand text-light" href="#">FIREBASE</a>
                <div className="d-flex justify-content-end" id="navbarNav">
                    <button type="button" className="btn btn-primary">
                        Length <span className="badge bg-secondary">{props.length}</span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navigation