import React from 'react';
import s from './Myposts.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/State.js';





const MyPosts = (props) => {

    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator());
        
    };
    let onPostChange = () => {
        let text  = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
        
    };
     
     
    return (
             <div className={s.postsBlock}> 
             My posts
                    <div>
                    <h3>New post</h3>
                        <div>
                        <textarea onChange={onPostChange} ref={newPostElement}
                            value={props.newPostText} /> 
                        </div>
                        <div>
                        <button onClick={addPost}> Add post </button>
                                </div>
                        
                    </div>
           </div>
                

            );
}

export default MyPosts;

