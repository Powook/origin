import React, { useEffect } from "react";
import { connect } from "react-redux";
import Users from "./Users";
import Preloader from "../../common/preloader/Preloader";
import { setCurrentPage, buttonIsFetching, getUsersThunk, followUser, unfollowUser} from "../../../redux/usersPageReducer";

function UsersContainerAPI(props) {

   const {usersCountOnPage, currentPage, totalUsersCount, users, buttonIsFetching, btn, followUser, unfollowUser, getUsersThunk } = props

   useEffect ( ( ) => {
      getUsersThunk(usersCountOnPage, currentPage)
   }, [currentPage, getUsersThunk, usersCountOnPage])

   const onChangePage = (p) => {
      props.getUsersThunk(props.usersCountOnPage, p)
      props.setCurrentPage(p)
   }

      return <> {
         props.isFetching
         ? <Preloader />
         : <Users totalUsersCount={totalUsersCount}
            usersCountOnPage={usersCountOnPage}
            currentPage={currentPage}
            users={users}
            onChangePage={onChangePage} 
            buttonIsFetching={buttonIsFetching}
            btn ={btn}
            followUser={followUser}
            unfollowUser ={unfollowUser}/>
            }</>
}

function f1(state) {
   return {
      users: state.usersPage.users,
      usersCountOnPage: state.usersPage.usersCountOnPage,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
      btn: state.usersPage.buttonIsFetching
   }
}



const UsersContainer = connect(f1,
   { setCurrentPage, buttonIsFetching, getUsersThunk ,
     followUser, unfollowUser
   })
   (UsersContainerAPI)

export default UsersContainer