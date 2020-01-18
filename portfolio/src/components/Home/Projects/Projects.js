import React, { useState } from 'react'
import ProjectCard from './ProjectCard'

import './projects.css'

const Projects = () => {
    const [projects, setProjects] = useState([
        {
            id: 1, 
            title: "Essentialism", 
            tech: ["ReactJS", "Redux", "NodeJS", "MongoDB"], 
            role: "React Developer", 
            roleDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar facilisis velit vitae dictum. Nunc in ligula nec odio luctus lacinia. Suspendisse malesuada lacinia ligula sit amet varius. Maecenas efficitur mi at libero ultricies pharetra. Morbi a malesuada velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar facilisis velit vitae dictum. Nunc in ligula nec odio luctus lacinia. Suspendisse malesuada lacinia ligula sit amet varius. Maecenas efficitur mi at libero ultricies pharetra. Morbi a malesuada velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
            id: 2, 
            title: "Essentialism", 
            tech: ["ReactJS", "Redux", "NodeJS", "MongoDB"], 
            role: "React Developer", 
            roleDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar facilisis velit vitae dictum. Nunc in ligula nec odio luctus lacinia. Suspendisse malesuada lacinia ligula sit amet varius. Maecenas efficitur mi at libero ultricies pharetra. Morbi a malesuada velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar facilisis velit vitae dictum. Nunc in ligula nec odio luctus lacinia. Suspendisse malesuada lacinia ligula sit amet varius. Maecenas efficitur mi at libero ultricies pharetra. Morbi a malesuada velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
            id: 3, 
            title: "Essentialism", 
            tech: ["ReactJS", "Redux", "NodeJS", "MongoDB"], 
            role: "React Developer", 
            roleDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar facilisis velit vitae dictum. Nunc in ligula nec odio luctus lacinia. Suspendisse malesuada lacinia ligula sit amet varius. Maecenas efficitur mi at libero ultricies pharetra. Morbi a malesuada velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar facilisis velit vitae dictum. Nunc in ligula nec odio luctus lacinia. Suspendisse malesuada lacinia ligula sit amet varius. Maecenas efficitur mi at libero ultricies pharetra. Morbi a malesuada velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
            id: 4, 
            title: "Essentialism", 
            tech: ["ReactJS", "Redux", "NodeJS", "MongoDB"], 
            role: "React Developer", 
            roleDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar facilisis velit vitae dictum. Nunc in ligula nec odio luctus lacinia. Suspendisse malesuada lacinia ligula sit amet varius. Maecenas efficitur mi at libero ultricies pharetra. Morbi a malesuada velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar facilisis velit vitae dictum. Nunc in ligula nec odio luctus lacinia. Suspendisse malesuada lacinia ligula sit amet varius. Maecenas efficitur mi at libero ultricies pharetra. Morbi a malesuada velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
            id: 5, 
            title: "Essentialism", 
            tech: ["ReactJS", "Redux", "NodeJS", "MongoDB"], 
            role: "React Developer", 
            roleDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar facilisis velit vitae dictum. Nunc in ligula nec odio luctus lacinia. Suspendisse malesuada lacinia ligula sit amet varius. Maecenas efficitur mi at libero ultricies pharetra. Morbi a malesuada velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar facilisis velit vitae dictum. Nunc in ligula nec odio luctus lacinia. Suspendisse malesuada lacinia ligula sit amet varius. Maecenas efficitur mi at libero ultricies pharetra. Morbi a malesuada velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
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