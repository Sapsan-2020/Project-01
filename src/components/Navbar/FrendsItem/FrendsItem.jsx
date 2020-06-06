import React from 'react';
import s from './FrendsItem.module.css';


const FrendsItem = (props) => {

    return (
            <div className={s.frends}> 
            
            <img src={props.avatarPath} width="50" height="50" alt="" />
             {props.name}          
            
            </div>

            );
}

export default FrendsItem;

