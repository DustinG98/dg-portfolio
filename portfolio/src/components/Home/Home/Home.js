import React from 'react'
import TopSection from '../TopSection/TopSection'
import MySkills from '../Skills/MySkills'
import AboutMe from '../AboutMe/AboutMe'

import './home.css'

const Home = () => {
    return (
        <div>
            <TopSection/>
            <div className="mainContainer">
                <AboutMe/>
                <MySkills/>
            </div>
        </div>
    )
}

export default Home;