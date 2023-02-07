import { userApi } from "../dataAccsessLayer/api"

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
         return {
            ...state,
            login: action.login,
            email: action.email,
            userId: action.userId,
            avatar: action.avatar,
            isAuth: true
         }

         default: 
         return state
   }
}

export const setAuthUser = (id, login, email, avatar) => ({type: 'SET_AUTH_USER_PROFILE', login, email, id, avatar})

export const setAuthUserDataThunk = (noavatar)=> dispatch=>{
   userApi.authMe().then(response => {
      if (response.data.login) {
         let { id, login, email } = response.data
         userApi.getProfile(id)
            .then(response => {
               let avatar
               response.photos.small ?  avatar=response.photos.small : avatar=noavatar
               dispatch(setAuthUser(id, login, email, avatar))
            })
      }
   })
}

export default authReducer