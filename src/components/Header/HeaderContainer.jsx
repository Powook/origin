import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUserDataThunk} from '../../redux/authReducer'
import noAvatar from '../../assets/images/noAvatar.png'

class HeaderContainerApi extends React.Component {
   componentDidMount() {
      this.props.setAuthUserDataThunk(noAvatar)
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

export const HeaderContainer = connect(f1, {setAuthUserDataThunk })(HeaderContainerApi)