import React from 'react'
import './skills.css'

const MySkills = () => {
    return (
        <div>
            <h2>My Skills</h2>
            <div className="skillsCont">
                <div className="skillCard">
                    <img src={require('./react.png')} alt="React Logo"/>
                </div>
                <div className="skillCard">
                    <img src={require('./javascript.svg')} alt="Javascript Logo"/>
                </div>
                <div className="skillCard">
                    <img src={require('./nodejs.png')} alt="NodeJS Logo"/>
                </div>
            </div>
        </div>
    )
}

export default MySkills