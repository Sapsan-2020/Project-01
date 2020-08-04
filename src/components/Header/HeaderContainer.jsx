import React from 'react';
import Header from './Header.jsx';
//import * as axios from 'axios';
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer.js"
//import {authAPI} from '../../api/api.js';

class HeaderContainer extends React.Component { 
       
    componentDidMount() {
        
       /* axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
         })*/
                  
          this.props.getAuthUserData()
        /*  authAPI.me().then(data => {

                    if (data.resultCode === 0) {
                        let {email, id, login} = data.data;
                        this.props.setAuthUserData({id, login, email});
                    }
    });*/
    }

    
   render() {
    return <Header {...this.props} />
}       
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
   
});

export default connect (mapStateToProps, {getAuthUserData}) (HeaderContainer);

