import React from 'react'
import './mobilemenu.css'
import { NavLink } from 'react-router-dom'

const MobileMenu = ({ menuClass }) => {
    return (
        <div className={`mobileMenu ${menuClass}`}>
            {/* ************Mobile Menu************* */}
            <NavLink to="/" activeClassName="active"> Home </NavLink>
            <NavLink to="/blog" activeClassName="active"> Blog </NavLink>
            <NavLink to="/contact" activeClassName="active"> Contact </NavLink>
        </div>
    )
}

export default MobileMenu