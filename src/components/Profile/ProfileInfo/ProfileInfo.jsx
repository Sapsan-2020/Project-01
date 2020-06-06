import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
            <div> 
                <div> 
            <img id='banner' src='https://avatars.mds.yandex.net/get-zen_doc/1897860/pub_5d58f8fa8da1ce00adb2ccc1_5d58f91635c8d800af6fbf34/scale_1200' width="750" height="150" alt="" />    
            banner
                
            </div> 
                    <div className={s.descriptionBlock}> 
                        <img id='avatar' src='https://alenkai.ru/d/ai509-269b8236501c44d492b49b57a69cb331-1.jpg' width="150" height="150" alt="" />
                        avatar + description
                    </div>
                
            </div>
                        


                

             );
};

export default ProfileInfo;

