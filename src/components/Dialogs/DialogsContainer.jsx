//import React from 'react';
//import s from './Dialogs.module.css';
//import {NavLink} from "react-router-dom";
//import DialogItem from './DialogItem/DialogItem.jsx';
//import Message from './Message/Message.jsx';
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/dialogs-reducer.js';
import Dialogs from './Dialogs.jsx';
import {connect} from 'react-redux'; 
//import StoreContext from '../../../src/StoreContext.js';




let mapStateToProps = (state) => {
    return {
       dialogsPage: state.dialogsPage 
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
      updateNewMessageBody: (body)=> {
          dispatch(updateNewMessageBodyCreator(body));
      },
      sendMessage: ()=> {
          dispatch(sendMessageCreator());
      },
    }
};


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

