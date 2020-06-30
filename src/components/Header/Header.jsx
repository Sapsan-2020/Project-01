import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
            <header className={s.header}>
                    <img src='http://freelogodesign.me/48hourslogo_data/2019/02/09/1549686787-min-mockup.jpg' width="50" height="50" alt="" />
                    <div className={s.loginBlock}>
                    { props.isAuth ? props.login 
                    : <NavLink to={'/login'}> Login</NavLink>}    
                            </div>
            </header>

            );
}

export default Header;

