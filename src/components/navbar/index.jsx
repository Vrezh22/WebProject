import React from 'react';
//images
import logo from '../../images/logo.png'


const Navbar = ({ navbarIntems,toggleOpenAside}) => {
    const { home, about, contactUs, login, registration } = navbarIntems;

    return (
        <nav className="navbar">
            <div className="logo" onClick={toggleOpenAside}>
                <img src={logo} alt="logo" />
            </div>
            <ul className="nav_list">
                <li className="nav_item">{home.name}</li>
                <li className="nav_item">{about.name}</li>
                <li className="nav_item">{contactUs.name}</li>
                <li className="nav_item">{login.name}</li>
                <li className="nav_item">{registration.name}</li>
            </ul>
        </nav>
    )
}

export default Navbar;