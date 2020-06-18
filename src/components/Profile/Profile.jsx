import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from "./Posts/MypostsContainer.jsx";

import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = () => {
    
    
    
    return (
            <div className={s.profile}> 
                    <div> 
                        <ProfileInfo />
                    </div>
                        <MyPostsContainer />
                
            </div>

             );
};

export default Profile;

