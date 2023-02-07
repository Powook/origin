import { connect } from "react-redux";
import React from "react";
import Profile from "./ProfilePage";
import { addPost, changePost, setUserProfileThunk } from "../../../redux/profilePageReducer";
import noAvatar from '../../../assets/images/noAvatar.png'
import Preloader from "../../common/preloader/Preloader";
import { withAuthRedirect} from "../../../hoc/withAuthRedirect";
import withRouter from "../../../hoc/withRouter";

class ProfileContainerAPI extends React.Component {
   componentDidMount() {
      this.props.setUserProfileThunk(noAvatar, this.props.router.params.userId)
   }
  
   render() {
      return <Profile {...this.props} preloader={<Preloader/>} />
   }
}

function f1(state) {
   return {
      posts: state.profilePage.posts,
      postTextArea: state.profilePage.postTextArea,
      currentProfile: state.profilePage.currentProfile,
      // isAuth: state.auth.isAuth
   }
}

let withAuthComponent = withAuthRedirect(ProfileContainerAPI)

export const ProfilePageContainer = connect(f1, {
   addPost, changePost, setUserProfileThunk
})(withRouter(withAuthComponent))

