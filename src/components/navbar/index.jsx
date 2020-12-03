import React from 'react';
import { NavLink } from 'react-router-dom';
//images
import logo from '../../images/logo.png';


import { withRouter } from 'react-router-dom';


const Navbar = ({ navbarItems, toggleOpenAside, history }) => {
    const isAuth = JSON.parse(localStorage.getItem('isAuth'));
    const showNavbarItems = navbarItems.map(item => {
        
        if (!isAuth && item.name === 'Posts') {
            return null;
        } else {
            return (
                <li className="nav_item" key={item.id}>
                    <NavLink to={item.link} exact activeClassName="navActiveItem"> {item.name} </NavLink>
                </li>
            )
        }
    })

    const logout = () => {
        localStorage.setItem('isAuth', JSON.stringify(false));
        history.push('/login');

    }
    return (
        <nav className="navbar">
            <div className="logo" onClick={toggleOpenAside}>
                <img src={logo} alt="logo" />
            </div>
            <ul className="nav_list">
                {showNavbarItems}
                <li>
                    <button className={isAuth?'btn logout':"btn hidden"} onClick={logout}>Logout</button>
                </li>
            </ul>
        </nav>
    )
}



export default withRouter(Navbar);