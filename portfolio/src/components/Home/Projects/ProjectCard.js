import React from 'react'
import Popup from 'reactjs-popup'

import './projects.css'

const ProjectCard = ({ project }) => {
    return (
        <div className="projectCard">
            <div className="projectHeader">
                <h2>{project.title}</h2>   
            </div>
            <div className="projectTech">
                <h3>Tech Used:</h3>
                {project.tech.map(tech => {
                    return <h4>{tech}</h4>
                })}
                <Popup trigger={<button className="expand">Expand</button>}
                    modal
                    closeOnDocumentClick
                >
                    {close => <div style={{width: '100%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <button className="close" style={{ zIndex: '999' }} onClick={close}>&times;</button>
                        <h1 style={{color: "black"}}>Modal</h1>
                    </div>}
                </Popup>
            </div>
        </div>
    )
}

export default ProjectCard