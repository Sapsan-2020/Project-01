import React from 'react';
import s from './Dialogs.module.css';
import {Redirect} from "react-router-dom";
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import {Field, reduxForm} from 'redux-form';
import {Textarea} from '../common/FormsControls/formsControls.js';
import {required, maxLengthCreator} from '../../utils/validators/validators.js';


//import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/dialogs-reducer.js';


const Dialogs = (props) => {
    
    let state = props.dialogsPage;
    
    let dialogsElements = state.dialogsData
            .map( d => <DialogItem name={d.name} key={d.id} id={d.id} avatarPath ={d.avatarPath}/>); 
    let messagesElements = state.messagesData
            .map( m => <Message message={m.message} key={m.id}/> );
    //let newMessageBody = state.newMessagesBody;
    
            
    
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };
    
    
    if (!props.isAuth) return <Redirect to={'/login'} />; // (props.isAuth===false) аналогично (!props.isAuth)
    return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}

                </div>
                
                <div className={s.messages}>
                    <div>
                        <h3>New post</h3>
                   <AddMessageFormRedux onSubmit={addNewMessage} />
                    </div>                
                    <div>{messagesElements}</div>
                    
                </div>
            
            </div>

            );
};
const maxLength50 = maxLengthCreator(50);
const AddMessageForm = (props) => {
    return (
                <form onSubmit={props.handleSubmit}>
                   <div>
                        <Field component={Textarea} 
    validate={[required, maxLength50]}                    
    name="newMessageBody" placeholder="Enter message"/>    
                   </div>
                   <div>
                    <button> Add post </button>
                   </div>
                        </form>

            )

};

const AddMessageFormRedux = reduxForm ({form: "dialogAddMessageForm"})(AddMessageForm);
export default Dialogs;

