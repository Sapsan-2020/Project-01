import React from "react";
import {NavLink} from "react-router-dom";
import styles from './users.module.css';
import userPhoto from './smile.jpg';
//import * as axios from 'axios';
import {follow, unFollow} from '../../api/api.js';

let Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    ;

    return <div>
        <div> 
            {pages.map(p => {
                        return  <span className={props.currentPage === p && styles.selectedPage} 
                              onClick={() => {
                                               props.onPageChanged(p);
                                                      }}> {p}</span>
                          })
            } 
        </div>
        {props.users.map(u => <div key={u.id}> 
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>                                
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto} alt=''/>
                    </NavLink>
                </div>
                <div>
                    {u.followed ? <button disabled={props.followingInProgress} onClick={() => {
                       props.toggleFollowingProgress(true);  
                       debugger;
        unFollow(u.id).then(data => {
            debugger;
            
                                                    if (data.resultCode === 0) {
                                                        props.unfollow(u.id);
                                                        }
                         props.toggleFollowingProgress(false);

                                                       });   
        
                                                       }} > Unfollow </button>
                                                : <button disabled={props.followingInProgress} onClick={() => {

                        //axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                        //                              withCredentials: true, 
                        //                          headers: {
                         //                             "API-KEY": "6611e0a5-edf8-4773-85f5-1479271187d2"
                         //                         }})
                         props.toggleFollowingProgress(true);
                        debugger;
        follow(u.id).then(data => {
                                                    if (data.resultCode === 0) {
                                                        props.follow(u.id);
                                                        }
                        props.toggleFollowingProgress(false);
                                                              });

                                                        }}> Follow </button>}       
    
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name} </div>
                    <div>{u.status}</div> 
                </span>
                <span>
                    <div>{"u.location.country"}</div> 
                    <div>{"u.location.city"} </div>
                </span>
            </span>
    
    
    
        </div>


                )
        }
    </div>
};

export default Users;



