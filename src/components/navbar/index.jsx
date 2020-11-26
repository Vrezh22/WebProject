import React from 'react';
import { NavLink } from 'react-router-dom';
//images
import logo from '../../images/logo.png';


const Navbar = ({ navbarItems, toggleOpenAside }) => {
    
    const showNavbarItems = navbarItems.map(item => {
        return (
            <li className="nav_item" key={item.id}>
                <NavLink to={item.link} exact activeClassName="navActiveItem"> {item.name} </NavLink>
            </li>
        )
    })

    return (
        <nav className="navbar">
            <div className="logo" onClick={toggleOpenAside}>
                <img src={logo} alt="logo" />
            </div>
            <ul className="nav_list">
                {showNavbarItems}
            </ul>
        </nav>
    )
}



export default Navbar;