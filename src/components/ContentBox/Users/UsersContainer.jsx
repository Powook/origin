import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import Preloader from "../../common/preloader/Preloader";
import {follow, unfollow, setCurrentPage, buttonIsFetching, getUsersThunk, followUser, unfollowUser} from "../../../redux/usersPageReducer";

class UsersContainerAPI extends React.Component {

   componentDidMount() {
      this.props.getUsersThunk(this.props.usersCountOnPage, this.props.currentPage)
   }

   onChangePage = (p) => {
      this.props.getUsersThunk(this.props.usersCountOnPage, p)
      this.props.setCurrentPage(p)
   }

   render() {
      return <> {this.props.isFetching
         ? <Preloader />
         : <Users totalUsersCount={this.props.totalUsersCount}
            usersCountOnPage={this.props.usersCountOnPage}
            currentPage={this.props.currentPage}
            users={this.props.users}
            onChangePage={this.onChangePage} 
            buttonIsFetching={this.props.buttonIsFetching}
            btn ={this.props.btn}
            followUser={this.props.followUser}
            unfollowUser ={this.props.unfollowUser}/>}
      </>
   }
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