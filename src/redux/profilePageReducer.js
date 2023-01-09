let initState =  {
   postTextArea: '',
   posts: [
      {id:1, content: 'Haha. its my first post!', author: 'Maksimba', date: '02.12.22 0:18'},
      {id:2, content: 'Wow. its second!', author: 'Maksimba', date: '02.12.22 0:19'},
      {id:3, content: 'ewew ^_^', author: 'Maksimba', date: '02.12.22 0:21'}
   ]
};

function profilePageReducer (state=initState, action){
   switch (action.type) {

      case 'ADD-POST':
         return {
            ...state,
            posts: [{id:4887, content: state.postTextArea , author: 'Maksimba', date: action.date}, ...state.posts],
            postTextArea: ''
         }

      case 'POST-CHANGE-INPUT':
         return {
            ...state,
            postTextArea: action.change
         }

      default: 
         return state
   }
}

export default profilePageReducer;