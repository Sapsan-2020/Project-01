import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    
    return (
            <BrowserRouter>
                <div className='app-wrapper' >
                    <Header />            
                    <Navbar state={props.state.sideBar}  />
                                          
                    <div className='app-wrapper-content' >  
                        <Route path='/dialogs' render={() => <DialogsContainer store={props.store} /> } />
                        <Route path='/profile' render={() => <Profile store={props.store} profilePage={props.state.profilePage}/> } /> 
                        <Route path='/news' render={() => <News /> }/>
                        <Route path='/music' render={() => <Music /> }/>
                        <Route path='/settings' render={() => <Settings /> }/>

                    </div>
                                
            
                </div>
            </BrowserRouter>
            );
};

export default App;
