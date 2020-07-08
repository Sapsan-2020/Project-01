import React from 'react';
import * as axios from 'axios';


const instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
             "API-KEY": "6611e0a5-edf8-4773-85f5-1479271187d2"
             }
});



export const getUsers = (currentPage = 1, pageSize = 10) => { 
    // default : currentPage = 1, pageSize = 10
return instance.get( `users?page=${currentPage}&count=${pageSize}`)
                                                          .then(response => {
                                                              return response.data;
                                                          } );
};

export const authMe = () => { 
    
return instance.get( `auth/me`).then(response => {
        return response.data;
        
    }
                                                          );
};



export const unFollow = (id) => { 
return instance.delete( `follow/${id}`)
                                         .then(response => {
                                         return response.data;
                                         } );
};

export const follow = (id) => { 
return instance.post( `follow/${id}`) 
//дополнительный параметр {} для post нужен??
                                         .then(response => {
                                         return response.data;
                                         } );
};
