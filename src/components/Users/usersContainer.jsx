import React from 'react';
import {connect} from "react-redux";
import {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers} from '../../redux/users-reducer.js';
import Users from './users.jsx';
import Preloader from '../common/preloader/preloader.js'
//import {usersAPI} from '../../api/api.js';
import {compose} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect.js';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
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

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    };
  
};




/*export default connect(mapStateToProps, {follow, unfollow, setUsers, 
        setCurrentPage, setTotalUsersCount, toggleIsFetching, 
        toggleFollowingProgress, getUsers: getUsersThunkCreator})(UsersContainer);*/ 
//Устарело
 
    /*export default connect(mapStateToProps, {follow, unfollow, setCurrentPage,  
        toggleFollowingProgress, getUsers})(UsersContainer); 
        Устарело*/
export default compose(
            withAuthRedirect, 
            connect(mapStateToProps, {follow, unfollow, setCurrentPage,  
        toggleFollowingProgress, getUsers}))
    (UsersContainer); 