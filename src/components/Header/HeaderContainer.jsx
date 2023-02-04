import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUser } from '../../redux/authReducer'
import noAvatar from '../../assets/images/noAvatar.png'
import { userApi } from "../../dataAccsessLayer/api";

class HeaderContainerApi extends React.Component {
   componentDidMount() {
      userApi.authMe().then(response => {
            if (response.data.login) {
               let { id, login, email } = response.data
               userApi.getProfile(id)
                  .then(response => {
                     let avatar
                     response.photos.small ?  avatar=response.photos.small : avatar=noAvatar
                     this.props.setAuthUser(id, login, email, avatar)
                  })
            }
         })
   }
   render() {
      return <Header {...this.props} />
   }
}

function f1(state) {
   return {
      login: state.auth.login,
      email: state.auth.email,
      id: state.auth.id,
      isAuth: state.auth.isAuth,
      avatar: state.auth.avatar
   }
}

export const HeaderContainer = connect(f1, { setAuthUser })(HeaderContainerApi)