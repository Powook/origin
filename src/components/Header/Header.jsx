import React from 'react'
import c from './Header.module.css'

const Header = ()=>{
   return (
      <header className={c.header}>
         <div className={c.leftblock}>
            <img src='https://profitsonline.ru/wp-content/uploads/2017/05/palette.png' alt="" className ={c.icon}/>
            <input type='search' placeholder='Search'></input>
         </div>
         <div className={c.login}>
            <div className={c.userBlock}> 
               <img src="https://noblegarden.net/uploads/avatar/thumb/DbtrFLiX0AEnCwr.jpg%20large.jpgthumb_11593.jpg" alt="" className={c.avatar}/>
               <span>Name Surname</span></div>
            <button className={c.loginBtn}>Logout</button>
         </div>
      </header>
   )
}

export default Header