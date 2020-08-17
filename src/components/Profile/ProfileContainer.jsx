import React from 'react';
import Profile from './Profile.jsx';
import {connect} from 'react-redux';
import {compose} from 'redux'; 
import {getUserProfile, getStatus, updateStatus} from '../../redux/profile-reducer.js';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect.js';


class ProfileContainer extends React.Component {
    
    componentDidMount () {
        let userId = this.props.match.params.userId;
        if (!userId) { 
            userId=this.props.autorizedUserId; //8917
            //userId=8917;
        if (!userId) {
            this.props.history.push("/login");
        }
        }
        
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }
    
    
    render(){
    return (
             <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            );
};
};

let mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
   status: state.profilePage.status,
   autorizedUserId: state.auth.id,
   isAuth: state.auth.isAuth
});
export default compose (
    connect (mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect)
    (ProfileContainer);



/* Замещено одной строкой export default compose (.....)
 * let authRedirectConponent = withAuthRedirect(ProfileContainer)
let WithUrlDataConteinerComponent = withRouter (authRedirectConponent);

export default connect (mapStateToProps, {getUserProfile}) (WithUrlDataConteinerComponent);*/

