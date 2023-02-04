let initState ={
   login: null,
   email: null,
   userId:null,
   avatar: null,
   isAuth: false,
}

function authReducer(state = initState, action) {
   switch (action.type) {
      case 'SET_AUTH_USER_PROFILE':
         if (action.login) {
         return {
            ...state,
            login: action.login,
            email: action.email,
            userId: action.userId,
            avatar: action.avatar,
            isAuth: true
         }
      }  else return state

         default: 
         return state
   }
}

export const setAuthUser = (id, login, email, avatar) => ({type: 'SET_AUTH_USER_PROFILE', login, email, id, avatar})

export default authReducer