import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer.js"; 
import dialogsReducer from "./dialogs-reducer.js";
import sidebarReducer from "./sidebar-reducer.js";
import usersReduser from "./users-reducer.js";

let redusers = combineReducers ({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: usersReduser
    }); 

let store = createStore (redusers);
window.store=store;
export default store;

