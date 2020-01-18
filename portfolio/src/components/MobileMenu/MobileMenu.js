import React from 'react'
import './mobilemenu.css'


const MobileMenu = ({ menuClass }) => {
    return (
        <div className={`mobileMenu ${menuClass}`}>
            {/* ************Mobile Menu************* */}
            <a href="#" className="active"> Home </a>
            <a href="#"> Blog </a>
            <a href="#"> Contact </a>
        </div>
    )
}

export default MobileMenu