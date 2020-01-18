import React, { useState } from 'react'
import ProjectCard from './ProjectCard'

import './projects.css'

const Projects = () => {
    const [projects, setProjects] = useState([
        {id: 1, title: "Essentialism", tech: ["ReactJS", "Redux", "NodeJS", "MongoDB"]},
        {id: 2, title: "Essentialism", tech: ["ReactJS", "Redux", "NodeJS", "MongoDB"]},
        {id: 3, title: "Essentialism", tech: ["ReactJS", "Redux", "NodeJS", "MongoDB"]},
        {id: 4, title: "Essentialism", tech: ["ReactJS", "Redux", "NodeJS", "MongoDB"]},
        {id: 5, title: "Essentialism", tech: ["ReactJS", "Redux", "NodeJS", "MongoDB"]}
    ])
    return (
        <div style={{ margin: "5% 0" }}>
            <h2>Recent Projects</h2>
            <div className="projectList">
                {projects.map(project => {
                    return <ProjectCard project={project}/>
                })}
            </div>
        </div>
    )
}

export default Projects