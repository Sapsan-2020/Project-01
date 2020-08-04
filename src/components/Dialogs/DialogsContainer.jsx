//import React from 'react';
//import s from './Dialogs.module.css';
//import {Redirect} from "react-router-dom";
//import DialogItem from './DialogItem/DialogItem.jsx';
//import Message from './Message/Message.jsx';
import {sendMessageCreator} from '../../redux/dialogs-reducer.js';
import Dialogs from './Dialogs.jsx';
import {compose} from 'redux'; 
import {connect} from 'react-redux'; 
import {withAuthRedirect} from '../../hoc/withAuthRedirect.js';

//import StoreContext from '../../../src/StoreContext.js';




let mapStateToProps = (state) => {
    return {
       dialogsPage: state.dialogsPage,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
            sendMessage: (newMessageBody)=> {
          dispatch(sendMessageCreator(newMessageBody));
      }
    }
};



/* Замена данного куска кода в одну строку export
compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs);
let authRedirectConponent = withAuthRedirect(Dialogs);
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirectConponent);

export default DialogsContainer;
*/
export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs);