import {createSelector} from "reselect"

// "Простой" селестор, который достает из State список users для передачи в другой селектор
const getUsersSelector = (state) => {
    return state.usersPage.users;
};
//Данный сложный селектор создан для иллюстрации работы с библиотекой reselect. 
//Можно было сделать используя только простой селектор.
export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true); //логика "сложного" селектора, которая фильтрует (выбирает всех) users.
});


export const getPageSize = (state) => {
    return state.usersPage.pageSize;
};

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
};

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
};




export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
};
