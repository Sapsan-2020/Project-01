const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
    
let initialState = {
posts: [
{id: 1, message: 'Hi! how are you?', likesCount: 45},
{id: 2, message: 'My first post.', likesCount: 65},
{id: 3, message: 'Hi! how are you?', likesCount: 55},
{id: 4, message: 'Hi! how are you?', likesCount: 135}
],
newPostText: 'NewPostText',
profile: null
};


const profileReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
            };
        return { ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
                };
        
        //window.state=state;
        //window.stateCopy=stateCopy;
                  }
        case UPDATE_NEW_POST_TEXT:    
          return {
              ...state,
              newPostText : action.newText
          };
      case SET_USER_PROFILE:
      return {
              ...state,
              profile : action.profile
          };
            
            
        default:
            return state;
        
    };
    
    
};

    
export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    }
};
export const updateNewPostTextActionCreator = (text) => ({type:'UPDATE-NEW-POST-TEXT', newText:text });
export const setUserProfile = (profile) => ({type:'SET_USER_PROFILE', profile });


export default profileReducer;
