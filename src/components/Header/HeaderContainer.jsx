import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUserDataThunk, logout} from '../../redux/authReducer'
import noAvatar from '../../assets/images/noAvatar.png'

function HeaderContainerApi (props) {

   const {setAuthUserDataThunk} = props

   useEffect (( )=> {
     setAuthUserDataThunk(noAvatar)
   }, [setAuthUserDataThunk])

      return <Header {...props} />
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

export const HeaderContainer = connect(f1, {setAuthUserDataThunk, logout })(HeaderContainerApi)