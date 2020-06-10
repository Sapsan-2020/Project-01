import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/dialogs-reducer.js';
import Dialogs from './Dialogs.jsx';


const DialogsContainer = (props) => {
    
    let state = props.store.getState().dialogsPage;
    
        
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    };
    
    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    };
    
    
    return  <Dialogs updateNewMessageBody={onNewMessageChange} 
                        sendMessage={onSendMessageClick}
                        dialogsPage={state}/>
}

export default DialogsContainer;

