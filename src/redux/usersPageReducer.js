import { userApi } from "../dataAccsessLayer/api"

let initialState = {
   users: [   ],
   usersCountOnPage: 10,
   totalUsersCount:0,
   currentPage: 1,
   isFetching: false,
   buttonIsFetching: [ ]
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
      case 'FETCH_STATUS':
         return {
            ...state,
            isFetching: action.isFetching
         }
      case 'BUTTON_FETCH_STATUS':
         //Здесь если у нас элемент находится в массивк buttonIsFetching: то элемент с этим id будет disabled.
         // смотрим статус isFetching, если false => мы возвращаем массив эллементов  != id юзера, если true => то вносим этот элемент в массив.
         return {
            ...state,
            buttonIsFetching: action.isFetching ? [...state.buttonIsFetching, action.userID] : [...state.buttonIsFetching].filter(element=>element!==action.userID) 
         }
      default:
         return state
   }
}

export const follow = id =>({type: 'FOLLOW', id: id})
export const unfollow = id => ({type: 'UNFOLLOW', id: id})
export const setUsers =users=>({type: 'SET_USERS', users: users})
export const setTotalCount = count=> ({type: 'SET_TOTAL_COUNT', count: count})
export const setCurrentPage = page=> ({type: 'SET_CURRENT_PAGE', page: page})
export const fetchToggle = bool=> ({type: 'FETCH_STATUS', isFetching: bool})
export const showProfile = id => ({type: 'SHOW_PROFILE', id})
export const buttonIsFetching = (isFetching, userID) =>({type: 'BUTTON_FETCH_STATUS', isFetching, userID})

export const getUsersThunk = (usersCountOnPage, currentPage) =>(dispatch)=>{
   dispatch(fetchToggle(true))
   userApi.getUsers(usersCountOnPage,currentPage).then(response => {
         dispatch(fetchToggle(false))
         dispatch(setTotalCount(response.totalCount))
         dispatch(setUsers(response.items))
      })
}
export const followUser = (userID) => (dispatch) =>{
   dispatch(buttonIsFetching(true, userID))
                     
   userApi.unfollow(userID).then(response => {
      if (response.data.resultCode===0){
         dispatch(unfollow(userID)) 
      }
      dispatch(buttonIsFetching(false, userID))
})
}
export const unfollowUser = (userID) => (dispatch) =>{
   dispatch(buttonIsFetching(true, userID))
                     
   userApi.follow(userID).then(response => {
      if (response.data.resultCode===0){
         dispatch(follow(userID)) 
      }
      dispatch(buttonIsFetching(false, userID))
})
}

export default usersPageReducer