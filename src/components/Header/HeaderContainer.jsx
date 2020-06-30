import React from 'react';
import Header from './Header.jsx';
import * as axios from 'axios';
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer.js"

class HeaderContainer extends React.Component { 
       
    componenetDidMount () {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
         })
                .then(response => {
                    if (response.data.resultCode === 0) {
                      let {id, email, login} = response.data.data;
                        this.props.setAuthUserData(id, email, login);  
                    };
    });
    }

    
   render() {
    return <Header {...this.props} />
               
}
}

const mapStateToProps = (state) => ({});

export default connect (mapStateToProps, {setAuthUserData}) (HeaderContainer);
