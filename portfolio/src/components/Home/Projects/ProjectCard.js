import React from 'react'

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
                <button>Expand</button>
            </div>
        </div>
    )
}

export default ProjectCard