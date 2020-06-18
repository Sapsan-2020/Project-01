const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
    
let initialState = {
posts: [
{id: 1, message: 'Hi! how are you?', likesCount: 45},
{id: 2, message: 'My first post.', likesCount: 65},
{id: 3, message: 'Hi! how are you?', likesCount: 55},
{id: 4, message: 'Hi! how are you?', likesCount: 135}
],
newPostText: 'NewPostText'
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


export default profileReducer;
