import { connect } from "react-redux";
import React, { useEffect } from "react";
import Profile from "./ProfilePage";
import { addPost, changePost, setUserProfileThunk, updateProfileStatus, getProfileStatus } from "../../../redux/profilePageReducer";
import noAvatar from '../../../assets/images/noAvatar.png'
import Preloader from "../../common/preloader/Preloader";
import { withAuthRedirect} from "../../../hoc/withAuthRedirect";
import withRouter from "../../../hoc/withRouter";
import { compose } from "redux";

function ProfileContainerAPI (props)  {

   const {setUserProfileThunk, getProfileStatus, router} = props

   useEffect(()=>{
      setUserProfileThunk(noAvatar, router.params.userId)
      getProfileStatus(router.params.userId)
   }, [getProfileStatus, setUserProfileThunk])

      return <Profile {...props} preloader={<Preloader/>} />
}

function f1(state) {
   return {
      posts: state.profilePage.posts,
      postTextArea: state.profilePage.postTextArea,
      currentProfile: state.profilePage.currentProfile,
      status: state.profilePage.status
   }
}

export const ProfilePageContainer = compose(
   connect(f1, {addPost, changePost, setUserProfileThunk, updateProfileStatus, getProfileStatus}),
   withRouter,
   withAuthRedirect)
(ProfileContainerAPI)

