import React from 'react'
import './mobilemenu.css'
import { NavLink } from 'react-router-dom'

const MobileMenu = ({ menuClass, openMenu }) => {
    return (
        <div className={`mobileMenu ${menuClass}`}>
            {/* ************Mobile Menu************* */}
            <NavLink exact to="/" activeClassName="active" onClick={() => openMenu()}> Home </NavLink>
            {/* <NavLink to="/blog" activeClassName="active" onClick={() => openMenu()}> Blog </NavLink> */}
            <NavLink to="/contact" activeClassName="active" onClick={() => openMenu()}> Contact </NavLink>
        </div>
    )
}

export default MobileMenu