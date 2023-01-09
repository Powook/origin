import { connect } from "react-redux";
import Users from "./Users";

 function f1 (state) {
   return {
      users: state.usersPage.users,
      usersCountOnPage: state.usersPage.usersCountOnPage,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage
   }
 }

 function f2 (dispatch) {
   return {
      follow: (id)=> {
         dispatch({
            type: 'FOLLOW',
            id: id
         })
      },
      unfollow: id=>{
         dispatch({
            type: 'UNFOLLOW',
            id:id
         })
      },
      setUsers: users=>{
         dispatch({
            type: 'SET_USERS',
            users: users
         })
      },
      setTotalCount: count=>{
         dispatch({
            type: 'SET_TOTAL_COUNT',
            count: count
         })
      },
      setCurrentPage : page=>{
         dispatch({
            type: 'SET_CURRENT_PAGE',
            page: page
         })
      }
   }
 }

const UsersContainer = connect (f1, f2)(Users)

export default UsersContainer