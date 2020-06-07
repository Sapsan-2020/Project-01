import profileReducer from "./profile-reducer.js"; 
import dialogsReducer from "./dialogs-reducer.js";
import sidebarReducer from "./sidebar-reducer.js";



let store = {
    _state : {
        profilePage : {
posts: [
{id: 1, message: 'Hi! how are you?', likesCount: 45},
{id: 2, message: 'My first post.', likesCount: 65},
{id: 3, message: 'Hi! how are you?', likesCount: 55},
{id: 4, message: 'Hi! how are you?', likesCount: 135}
],
newPostText: 'NewPostText'
},
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Guest One', avatarPath: 'https://i09.fotocdn.net/s122/58e1e7a321c4f709/public_pin_m/2789919981.jpg'},
                {id: 2, name: 'Guest Two', avatarPath: 'https://i.pinimg.com/736x/07/9a/50/079a50a320ec6b7275819ed55cd35c6b.jpg'},
                {id: 3, name: 'Guest Three', avatarPath: 'https://www.desktopbackground.org/p/2015/01/29/894478_154-romantically-apocalyptic-hd-wallpapers_1680x1050_h.jpg'},
                {id: 4, name: 'Guest Four', avatarPath: 'https://avatars.mds.yandex.net/get-zen_doc/1897860/pub_5d58f8fa8da1ce00adb2ccc1_5d58f91635c8d800af6fbf34/scale_1200'},
                {id: 5, name: 'Guest Five', avatarPath: 'https://i.pinimg.com/236x/6a/23/96/6a2396bc022253169cf4a83c67682904--cat-clipart-animals-and-birds.jpg'}
            ],
            messagesData: [
                {id: 1, message: 'messega Hi!'},
                {id: 2, message: 'messega How are you? '},
                {id: 3, message: 'messega Yo!'},
                {id: 4, message: 'messega Yo! Yo!'},
                {id: 5, message: 'messega Yo!Yo!Yo!Yo!Yo!'}
            ],
            newMessageBody: ''


        },
        
        sideBar: [
            {id: 1, name: 'Guest One', avatarPath: 'https://i09.fotocdn.net/s122/58e1e7a321c4f709/public_pin_m/2789919981.jpg'},
            {id: 2, name: 'Guest Two', avatarPath: 'https://i.pinimg.com/736x/07/9a/50/079a50a320ec6b7275819ed55cd35c6b.jpg'},
            {id: 5, name: 'Guest Five', avatarPath: 'https://i.pinimg.com/236x/6a/23/96/6a2396bc022253169cf4a83c67682904--cat-clipart-animals-and-birds.jpg'}
        ]
    },
    
        _callSubscriber () {
        console.log('State changed');
        },
    
        getState () {
        return this._state;
    },
    
        subscribe(observer) {
        this._callSubscriber = observer;
    },
    
         

        dispatch (action) {
            
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);

            this._callSubscriber(this._state);
        }
    
    };

export default store;
    window.store=store;
