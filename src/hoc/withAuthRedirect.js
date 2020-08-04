import React from 'react';
//import Profile from './Profile.jsx';
import {connect} from 'react-redux';
//import {getUserProfile, updateNewPostTextActionCreator} from '../../redux/profile-reducer.js';
import {Redirect} from 'react-router-dom';
//import {usersAPI} from '../../api/api.js';


 let mapStateToPropsForRedirect = (state) => ({
   isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render () {
            if (!this.props.isAuth) return <Redirect to='/login' /> // (props.isAuth===false) аналогично (!props.isAuth)
            
            return <Component {...this.props} />
        }
    };
    
   
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
    
    return ConnectedAuthRedirectComponent;
};


