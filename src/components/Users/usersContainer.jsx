import React from 'react';
import {connect} from "react-redux";
import {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress} from '../../redux/users-reducer.js';
//import * as axios from 'axios';
import Users from './users.jsx';
import Preloader from '../common/preloader/preloader.js'
import {getUsers} from '../../api/api.js';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
       
        getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
                    this.props.setUsers(data.items);
                    this.props.setTotalUsersCount(data.totalCount);

                })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        
                getUsers(pageNumber, this.props.currentPage).then(data => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsers(data.items);
                })
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
debugger;

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

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));
        }


    };
};
*/


export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress})(UsersContainer);
  