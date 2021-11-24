import React from 'react'
import './Header.css'
import logo_wild from '../asset/logo_wild.png'


function Header() {
    return (
        <div className="header">
            <div className="header-content">
                <img className="wild-logo" src={logo_wild} alt="logo Wild" />
                <h1 className="header-title">Les Argonautes</h1>
            </div>
        </div>
    )
}

export default Header
