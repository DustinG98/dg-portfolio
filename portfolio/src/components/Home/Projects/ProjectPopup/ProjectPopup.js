import React from 'react'

import './projectpopup.css'

const ProjectPopup = ({ project }) => {
    return (
        <div className="popup">
            <div className="popupImg"></div>
            <div className="popupText">
                <h1>{project.title}</h1>
                <h3>{project.role}</h3>
                <h4>Role Description:</h4>
                <p>{project.roleDescription}</p>
                <h4>Project Description:</h4>
                <p>{project.projectDescription}</p>
                <button>
                    View Live
                </button>
                <button>
                    Source Code
                </button>
            </div>
        </div>
    )
}

export default ProjectPopup