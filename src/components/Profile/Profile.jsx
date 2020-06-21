import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from "./Posts/MypostsContainer.jsx";

import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = (props) => {
    
    
    
    return (
            <div className={s.profile}> 
                    <div> 
                        <ProfileInfo profile={props.profile}/>
                    </div>
                        <MyPostsContainer />
                
            </div>

             );
};

export default Profile;

