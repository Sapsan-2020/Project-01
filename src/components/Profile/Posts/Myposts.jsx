import React from 'react';
import s from './Myposts.module.css';
import Post from "./Post/Post.jsx";





const MyPosts = (props) => {

    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();
    };
    let onPostChange = () => {
        let text  = newPostElement.current.value;
        props.updateNewPostText(text);
                
    };
     let postsElements = props.posts.map ( p => <Post message={p.message} likeNum={p.likesCount} /> );
     
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
                        <div> Posts:
                    {postsElements}
                </div>
                    </div>
           </div>
                

            );
}

export default MyPosts;

