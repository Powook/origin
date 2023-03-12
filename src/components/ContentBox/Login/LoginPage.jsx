import React from "react";
import { authApi, userApi } from "../../../dataAccsessLayer/api";
import { SignupForm } from "./signupForm";


const LoginPage = ( )=> {

   const postUserData = ( email, password ) => {
      return authApi.login( email, password )
   }

   const getProfile = ( id ) => {
      return userApi.getProfile( id )
   }


   return (
      <SignupForm postUserData={postUserData} getProfile={getProfile} />
   )
}

export default LoginPage