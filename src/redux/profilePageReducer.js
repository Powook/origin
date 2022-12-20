function profilePageReducer (state, action){
   switch (action.type) {

      case 'ADD-POST':
         state.posts.unshift(
            {id:4887, content: action.postContent , author: 'Maksimba', date: `${new Date()}`}
         )
         state.postTextArea=''
         return state;

      case 'POST-CHANGE-INPUT':
         state.postTextArea=action.change;   
         return state;

      default: 
         return state
   }
}

export default profilePageReducer;