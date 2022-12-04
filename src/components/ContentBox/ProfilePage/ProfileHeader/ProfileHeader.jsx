import React from 'react'
import c from './ProfileHeader.module.css'

const ProfileHeader =()=> {
   return (
         <div className={c.userInfoBlock}>
            <div className={c.userProfileBg}>
               <img className ={c.userAvatar} src="https://coolsen.ru/wp-content/uploads/2021/06/15-8.jpg" alt="" />
                  <div className={c.userInfo}>
                     <div className ={c.item}>Name Surname</div>
                     <div className ={c.item}>Status</div>
                     <div className ={c.item}>About</div>
               </div>
            </div>
         </div>
   )
}

export default ProfileHeader