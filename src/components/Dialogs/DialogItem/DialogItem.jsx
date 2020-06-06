import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;
    return (
            <div className={s.dialog + ' ' + s.active}>
            <img id='banner' src={props.avatarPath} width="50" height="50" alt="" />                    
            <NavLink to={path}> {props.name} </NavLink>
                    </div>
            )
}


export default DialogItem;

