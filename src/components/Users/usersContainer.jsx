import React from 'react';
import {connect} from "react-redux";
import {follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers} from '../../redux/users-reducer.js';
import {getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress} from '../../redux/users-selectors.js';

import Users from './users.jsx';
import Preloader from '../common/preloader/preloader.js'
//import {usersAPI} from '../../api/api.js';
import {compose} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect.js';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
    /*    this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        
                getUsersAPI(pageNumber, this.props.currentPage).then(data => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsers(data.items);
                }); */
    }

    render() {

        return <div>
            { this.props.isFetching ? <Preloader /> : null}
 
        <Users   totalUsersCount={this.props.totalUsersCount}
                     pageSize={this.props.pageSize} 
                     currentPage={this.props.currentPage}
                     onPageChanged={this.onPageChanged}
                     users={this.props.users}
                     unfollow={this.props.unfollow}
                     follow={this.props.follow}
                     followingInProgress={this.props.followingInProgress}
                     toggleFollowingProgress={this.props.toggleFollowingProgress}
                     /> 
        </div>


    }

}
/*
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    };
  
};*/

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    };
  
};


/*export default connect(mapStateToProps, {follow, unfollow, setUsers, 
        setCurrentPage, setTotalUsersCount, toggleIsFetching, 
        toggleFollowingProgress, getUsers: getUsersThunkCreator})(UsersContainer);*/ 
//Устарело
 
    /*export default connect(mapStateToProps, {follow, unfollow, setCurrentPage,  
        toggleFollowingProgress, getUsers})(UsersContainer); 
        Устарело*/
/*export default compose(
            withAuthRedirect, 
            connect(mapStateToProps, {follow, unfollow, setCurrentPage,  
        toggleFollowingProgress, getUsers}))
    (UsersContainer); 
    */
   //Устарело. Защита странички пользователей от анонимного входа.
    export default compose(
            connect(mapStateToProps, {follow, unfollow, setCurrentPage,  
        toggleFollowingProgress, requestUsers}))
    (UsersContainer); 