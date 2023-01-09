let initialState = {
   users: [   ],
   usersCountOnPage: 10,
   totalUsersCount:0,
   currentPage: 1
}

function usersPageReducer(state = initialState, action) {
   switch (action.type) {
      case 'FOLLOW':
         return {
            ...state,
            users: state.users.map (u=>{
               if (u.id===action.id) {
                  return ({...u, followed:true})
               } else return u
            })
         }
      case 'UNFOLLOW':
         return {
            ...state,
            users: state.users.map (u=>{
               if (u.id===action.id) {
                  return ({...u, followed:false})
               } else return u
            })
         }
      case 'SET_USERS':
         initialState=action.users
         return {
            ...state, users: action.users
         }
      case 'SET_TOTAL_COUNT':
         return {
            ...state,
            totalUsersCount:action.count
         }
      case 'SET_USERS_COUNT':
         return {
            ...state,
            usersCountOnPage: action.count
         }
      case 'SET_CURRENT_PAGE':
         return {
            ...state,
            currentPage: action.page
         }
      default:
         return state
   }
}

export default usersPageReducer