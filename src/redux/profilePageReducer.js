let initState = {
   postTextArea: '',
   posts: [
      { id: 1, content: 'Haha. its my first post!', author: 'Maksimba', date: '02.12.22 0:18' },
      { id: 2, content: 'Wow. its second!', author: 'Maksimba', date: '02.12.22 0:19' },
      { id: 3, content: 'ewew ^_^', author: 'Maksimba', date: '02.12.22 0:21' }
   ],
   currentProfile: null,
stories: []
};

function profilePageReducer(state = initState, action) {
   switch (action.type) {

      case 'ADD-POST':
         if (state.postTextArea.length) {
            return {
               ...state,
               posts: [{ id: 4887, content: state.postTextArea, author: 'Maksimba', date: action.date }, ...state.posts],
               postTextArea: ''
            }
         } else return state

      case 'POST-CHANGE-INPUT':
         return {
            ...state,
            postTextArea: action.change
         }

      case 'SET_USER_PROFILE':
         return {
            ...state,
            currentProfile: action.user
         }

      default:
         return state
   }
}

export const addPost = () => ({ type: 'ADD-POST', date: new Date().toLocaleString() })
export const changePost = text => ({ type: 'POST-CHANGE-INPUT', change: text })
export const setUserProfile = user => ({ type: 'SET_USER_PROFILE', user })

export default profilePageReducer;