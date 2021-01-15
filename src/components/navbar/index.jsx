import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/pic.png';
import { withRouter } from 'react-router-dom';


const Navbar = ({ navbarItems, toggleOpenAside, history, width, isMenuOpen }) => {
    const isAuth = JSON.parse(localStorage.getItem('isAuth'));
    const showNavbarItems = navbarItems.map(item => {
        if (!isAuth && (item.name === 'Posts' || item.name === 'Celebrities' || item.name === 'Calculator')) {
            return null;
        }
        else {
            return (
                <li className="nav_item" key={item.id}>
                    <NavLink to={item.link} exact activeClassName="navactiveItem">{item.name}</NavLink>
                </li>
            )
        }
    });
    const logout = () => {
        localStorage.setItem('isAuth', JSON.stringify(false));
        localStorage.setItem('activeUser', JSON.stringify(null));
        history.push('/login')
    }

    const cls = ["navbar"];
    if (width <= 1024) {
        if (isMenuOpen)
            cls.push("mobile");
        else {
            cls.push("mobile close");
        }
    }
    return (
        <nav className={cls.join(' ')}>
            <div className='logo' onClick={toggleOpenAside}>
                <img src={logo} alt="pic" />
            </div>
            <ul className="nav_list">
                {showNavbarItems}
                {isAuth && <li>
                    <button className='btn logout' onClick={logout}>Logout</button>
                </li>}
            </ul>
        </nav>
    )
}
export default withRouter(Navbar);











