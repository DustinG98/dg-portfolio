import React from 'react'
import './navbar.css'

const NavBar = () => {


    return (
        <nav>
            <h2>{window.innerWidth <= 500 ? 'DG' : 'Dustin Graham'}</h2>
            <a href="#" className="active"> Home </a>
            <a href="#"> Blog </a>
            <a href="#"> Contact </a>
        </nav>
    )
}

export default NavBar