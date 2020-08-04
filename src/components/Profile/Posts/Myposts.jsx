import React from 'react';
import s from './Myposts.module.css';
import Post from "./Post/Post.jsx";
import { Field, reduxForm } from 'redux-form';
import {required, maxLengthCreator} from '../../../utils/validators/validators.js';
import {Textarea} from '../../common/FormsControls/formsControls.js';


const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                    
                        <div>
                        <Field name="newPostText" component={Textarea} placeholder={"Post message"} 
                        validate={[required, maxLength10]}/> 
                        </div>
                        <div>
                        <button> Add post </button>
                                </div>
                        
                    </form>
           )
};

const AddNewPostFormRedux = reduxForm({form:"profileAddNewPostForm"})(AddNewPostForm);
const MyPosts = (props) => {

    //let newPostElement = React.createRef();
    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };
                    
    
     let postsElements = props.posts.map ( p => <Post message={p.message} likeNum={p.likesCount} /> );
     
    return (
             <div className={s.postsBlock}> 
                <h3>New post</h3>
                <AddNewPostFormRedux onSubmit={onAddPost} />
                <div className={s.posts}> 
               <h3>My posts:</h3>
                    {postsElements}
                </div>
                        
           </div>
                

            );
}





export default MyPosts;

