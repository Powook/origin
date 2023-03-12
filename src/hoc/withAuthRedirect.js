import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

function f1 (state) {
   return {
      isAuth: state.auth.isAuth
   }
}

export const withAuthRedirect =(Component)=> {
   function RedirectComponent(props) {
         if (!props.isAuth){
            return <Navigate to = '/login'/>
         }
         return <Component {...props} />  
   }
   let connectedAuthComponent = connect (f1) (RedirectComponent)

   return connectedAuthComponent
}
