import React from 'react';
import s from './Myposts.module.css';






const MyPosts = (props) => {

    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();
    };
    let onPostChange = () => {
        let text  = newPostElement.current.value;
        props.updateNewPostText(text);
                
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
                        <button onClick={onAddPost}> Add post </button>
                                </div>
                        
                    </div>
           </div>
                

            );
}

export default MyPosts;

