import { connect } from "react-redux";
import React from "react";
import Profile from "./ProfilePage";
import { addPost, changePost, setUserProfile } from "../../../redux/profilePageReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import noAvatar from '../../../assets/images/noAvatar.png'
import Preloader from "../../common/preloader/Preloader";
import { userApi } from "../../../dataAccsessLayer/api";

function withRouter(Component) {
   function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
         <Component
            {...props}
            router={{ location, navigate, params }}
         />
      );
   }

   return ComponentWithRouterProp;
}

class ProfileContainerAPI extends React.Component {
   componentDidMount() {
      let userId = this.props.router.params.userId;
      if (!userId) {userId=27525}
      userApi.getProfile(userId).then(response=>{
            if (!response.photos.small || !response.photos.large) {
               response.photos.small=noAvatar
               response.photos.large=noAvatar
            }
            this.props.setUserProfile(response)
         })
   }
  
   render() {
      return <Profile {...this.props} preloader={<Preloader/>} />
   }
}

function f1(state) {
   return {
      posts: state.profilePage.posts,
      postTextArea: state.profilePage.postTextArea,
      currentProfile: state.profilePage.currentProfile
   }
}

export const ProfilePageContainer = connect(f1, {
   addPost, changePost, setUserProfile
})(withRouter(ProfileContainerAPI))

