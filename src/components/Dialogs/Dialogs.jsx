import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/State.js';


const Dialogs = (props) => {
    
    let state = props.store.getState().dialogsPage;
    
    let dialogsElements = state.dialogsData
            .map( d => <DialogItem name={d.name} id={d.id} avatarPath={d.avatarPath}/>); 
    let messagesElements = state.messagesData
            .map( m => <Message message={m.message} /> );
    let newMessageBody = state.newMessagesBody;
    
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());

    };
    
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    };
    
    
    return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}

                </div>
                
                <div className={s.messages}>
                    <div>
                        <h3>New post</h3>
                        <div><textarea value={state.newMessageBody} 
                                        onChange={onNewMessageChange} 
                                        placeHolder="Enter message"> </textarea></div>
                        <div><button onClick={onSendMessageClick}> Add post </button></div>

                    </div>                
                    <div>{messagesElements}</div>
                    
                </div>
            
            </div>

            );
}

export default Dialogs;

