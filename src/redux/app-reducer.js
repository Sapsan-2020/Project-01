import {getAuthUserData} from "../redux/auth-reducer.js";

const INITIALISED_SUCCESS = 'INITIALISED_SUCCESS';



let initialState = {
    initialised: false
};


const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALISED_SUCCESS:
            return {
                        ...state,
                        initialised: true
            };
        default:
           
            return state;

    } ;


};


export const initialisedSuccess = () => 
            ({type: INITIALISED_SUCCESS});

//export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching}); // isFetching:isFetching <=> isFetching


export const initialiseApp = () => (dispatch) => {
        let promise = dispatch(getAuthUserData());
        
        promise.then (() => {
            dispatch(initialisedSuccess());
        });
};



export default appReducer;
