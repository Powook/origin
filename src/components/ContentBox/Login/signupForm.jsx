import React from "react";
import { useFormik } from "formik";
import styles from './signupForm.module.css'

export const SignupForm = (props) => {
   const formik = useFormik({
      initialValues: {
         email: '',
         password: '',
      },
      onSubmit: values=>{
         props.postUserData(values.email, values.password)
         .then (response=> {
            props.getProfile(response.data.data.userId)
            })
         .then(x=>console.log(x))
      }
   })
   return (
      <div className={styles.loginform}>
         <h1>Login</h1>
         <form onSubmit={formik.handleSubmit}>
            <div className={styles.inputs}>
            <div className={styles.inputField}>
               <label htmlFor="email">Email Address</label>
               <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
               />
            </div>
            <div className={styles.inputField}>
            <label htmlFor="password">Password</label>
               <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
               />
           </div>
         <div className={styles.rememberMeBlock}>
         <input type="checkbox"/>
          <span>Remember me</span>
         </div>
       <button type="submit">Log in</button>
            </div>
     </form>

      </div>
   )
}