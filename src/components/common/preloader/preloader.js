import React from 'react';
import loading from '../../common/preloader/loading.gif'; 
import s from './preloader.module.css';

let Preloader = (props) => {
    return <div>
    <img src={loading} alt=""/>
    
    <div className={s.ldsFacebook}><div></div><div></div><div></div></div>
    
    </div>
    
};

export default Preloader;


