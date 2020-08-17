import {authAPI} from '../api/api.js';
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

//const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';



let initialState = {
    id: null,
    login: "test login",
    email: null,
    isAuth: false,
   isFetching: true 
};


const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                        ...state,
                        ...action.data,
                isAuth: true
            };
        
        
        /*case TOGGLE_IS_FETCHING:
        return {
                ...state,
                isFetching: action.isFetching};
        */
        default:
           
            return state;

    }
    ;


};


export const setAuthUserData = (id, login, email, isAuth) => 
            ({type: SET_USER_DATA, data: id, login, email, isAuth});

//export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching}); // isFetching:isFetching <=> isFetching


export const getAuthUserData = () => (dispatch) => {
    return authAPI.me()
        .then(data => {
                    if (data.resultCode === 0) {
                        let {email, id, login} = data.data;
                       let isAuth = true;
            dispatch(setAuthUserData({id, login, email, isAuth}));
                    }
    });
};

export const login = (email, password, rememberMe) => (dispatch) => {
let isAuth = true;
authAPI.login(email, password, rememberMe, isAuth)
        .then(data => {
                    if (data.resultCode === 0) {
                    dispatch (getAuthUserData());   
                    } else {
            let message = data.messages.length > 0 ? data.messages[0] : "Some errore" ;           
            let action=stopSubmit("login",{_error: message});
                        dispatch (action);
                    }
    });
};

export const logout = () => (dispatch) => {
authAPI.logout().then(data => {

                    if (data.resultCode === 0) {
                     dispatch (setAuthUserData(null, null, null, false));  //{id, login, email, isAuth} 
                       
                    }
    });
};







export default authReducer;
