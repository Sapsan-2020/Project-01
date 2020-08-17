import * as axios from 'axios';


const instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
             "API-KEY": "6611e0a5-edf8-4773-85f5-1479271187d2"
             }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) { 
    // default : currentPage = 1, pageSize = 10
return instance.get( `users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
        return response.data;
        });
},
    follow(userId) {
        return instance.post( `follow/${userId}`).then(response => {
                                         return response.data;
                                         } ); 
    },

    unFollow(userId) { 
    return instance.delete( `follow/${userId}`)
                                         .then(response => {
                                         return response.data;
                                         } );
    },
    

    getProfile(userId) {
    console.warn('Obsolete method. Please use profileAPI object')
        return profileAPI.getProfile(userId);
    },

};


export const profileAPI = {
    getProfile(userId) {
        return instance.get('profile/' + userId);
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId);
    },
    updateStatus(status) {
        return instance.put('profile/status/', {status: status});
        
    
    },
};




export const authAPI = {
    me() {
        return instance.get(`auth/me`)
                .then(response => {
                    return response.data;

                }
                );
    },

    login(email, password, rememberMe = false) { 
        return instance.post(`auth/login`, {email, password, rememberMe})
                .then (data => {
                    return data.data;

                }
                );
    },

    logout() {
        return instance.delete(`auth/login`);
                }


};


/*export const unFollow = (id) => { 
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
};*/
