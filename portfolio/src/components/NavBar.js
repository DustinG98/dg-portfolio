import React, { useState } from 'react'
import './navbar.css'
import MobileMenu from './MobileMenu/MobileMenu'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const [hamburgerClass, setHamburgerClass] = useState("")
    const [menuClass, setMenuClass] = useState("changeMenu")

    const openMenu = () => {
        if(isOpen === false) {
            setIsOpen(true)
            setHamburgerClass("change")
            setMenuClass("")
            document.body.style.overflow = "hidden"
        } else {
            setIsOpen(false)
            setHamburgerClass("")
            setMenuClass("changeMenu")
            document.body.style.overflow = "scroll"
        }
    }
    return (
        <div>
            <nav>
                {console.log(isOpen)}
                <h2 className="logo">Dustin Graham</h2>
                <h2 className="mobileLogo">DG</h2>
                
                {/* **********************MOBILE NAV MENU**************************** */}
                <div className={`container ${hamburgerClass}`} onClick={() => openMenu()}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                {/* **********************TABLET & DESKTOP NAV MENU**************************** */}
                <NavLink to="/" activeClassName="active"> Home </NavLink>
                <NavLink to="/blog" activeClassName="active"> Blog </NavLink>
                <NavLink to="/contact" activeClassName="active"> Contact </NavLink>
            </nav>
            <MobileMenu menuClass={menuClass}/>
        </div>
    )
}

export default NavBar