import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import ProfileContainer from './components/Profile/ProfileContainer.jsx';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import LoginPage from './components/login/Login.jsx';
import Settings from './components/Settings/Settings.jsx';
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from './components/Users/usersContainer.jsx';

const App = (props) => {
    
    return (
            <BrowserRouter>
                <div className='app-wrapper' >
                    <HeaderContainer />            
                    <Navbar state={props.state.sideBar}  />
                                          
                    <div className='app-wrapper-content' >  
                        <Route path='/dialogs' render={() => <DialogsContainer  /> } />
                        <Route path='/profile/:userId?' render={() => <ProfileContainer  /> } /> 
                        <Route path='/users' render={() =>   <UsersContainer /> } />                   
                    <Route path='/news' render={() => <News /> }/>
                    <Route path='/music' render={() => <Music /> }/>
                    <Route path='/settings' render={() => <Settings /> }/>
                    <Route path='/login' render={() => <LoginPage /> }/>
                    </div>
                                
            
                </div>
            </BrowserRouter>
            );
};

export default App;
