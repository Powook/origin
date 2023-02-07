import React from 'react'
import { NavLink } from 'react-router-dom'
import c from './Header.module.css'

const Header = (props)=>{
   return (
      <header className={c.header}>
         <div className={c.leftblock}>
            <img src='https://profitsonline.ru/wp-content/uploads/2017/05/palette.png' alt="" className ={c.icon}/>
            <input type='search' placeholder='Search'></input>
         </div>
         <div className={c.login}>
            <div className={c.userBlock}> 
            {
               <img src={props.isAuth? props.avatar : null } alt="" className={c.avatar}/>
            }
               </div>
               {props.isAuth ? props.login : <NavLink to={'/login'} >Login</NavLink> }

         </div>
      </header>
   )
}

export default Header