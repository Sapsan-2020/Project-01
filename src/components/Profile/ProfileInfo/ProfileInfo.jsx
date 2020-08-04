import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/preloader.js';
import userPhoto from './smile.jpg';
import ProfileStatus from './ProfileStatus.jsx';

//let aboutMe='rewt';

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader />
    }
    
   
   
    
    return (
            <div> 
                 <div> 
            <img id='banner' src='https://avatars.mds.yandex.net/get-zen_doc/1897860/pub_5d58f8fa8da1ce00adb2ccc1_5d58f91635c8d800af6fbf34/scale_1200' width="750" height="150" alt="" />    
            banner
                 </div> 
                    <div className={s.descriptionBlock}> 
                        <img id='avatar' src={props.profile.photos.large !== null ? props.profile.photos.large : userPhoto} className={s.userPhoto} alt="" />
                        <div className={s.nameBlock}> Name: {props.profile.fullName}.</div>
                        <div className={s.idBlock}> id: {props.profile.userId}.</div>                    
                        <div className={s.nameBlock}> About Me: {props.profile.aboutMe}.</div>               
                        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                        
                    </div>
                
            </div>
                        


                

             );
};

export default ProfileInfo;

