import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from "./Posts/MypostsContainer.jsx";
import Post from "./Posts/Post/Post.jsx";
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = (props) => {
    
    let postsElements = props.profilePage.posts.map ( p => <Post message={p.message} likeNum={p.likesCount} /> );
    
    return (
            <div className={s.profile}> 
                    <div> 
                        <ProfileInfo />
                    </div>
                        <MyPostsContainer store={props.store}/>
                <div> Posts:
                    {postsElements}
                </div>
            </div>

             );
};

export default Profile;

