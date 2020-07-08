import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
            <header className={s.header}>
                    <img src='https://fb.ru/misc/i/gallery/73564/2327228.jpg' width="160" height="60" alt="" />
                    <div className={s.loginBlock}>
                    { props.isAuth ? props.login 
                    : <NavLink to={'/login'}> Login</NavLink>}    
                            </div>
            </header>

            );
}

export default Header;

