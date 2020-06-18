import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store.js';    
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';


//let rerenderEntireTree = (state) => {
 ReactDOM.render(
       <BrowserRouter>     
          
    <Provider store={store}>
        <App state={store.getState()}/>      
    </Provider>
           
  </BrowserRouter>, 
  document.getElementById('root'));   
//};    
// //в <App> state оставлен для sideBar'a
//*<App state={state} dispatch={store.dispatch.bind(store)} store={store} /> Вынесено из <BrowserRouter> *//

//rerenderEntireTree(store.getState());  

/*store.subscribe( () => {
    let state= store.getState();
    rerenderEntireTree(state);
    
});
*/

serviceWorker.unregister();
