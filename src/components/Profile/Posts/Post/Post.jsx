import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
           <div className={s.item}> 
   <img src='https://c.wallhere.com/photos/f5/13/blue_background_makeup_portrait_Flor_Jacobs_fantasy_girl_women_model_500px-1156784.jpg!d' alt="" />
            {props.message}
            <div>
            <span>like {props.likeNum}
            </span>
            </div>
            
            </div>
           
            );
}

export default Post;

/*function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
} */