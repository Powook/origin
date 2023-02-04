import React from 'react'
import Preloader from '../../../common/preloader/Preloader'
import c from './ProfileHeader.module.css'

const ProfileHeader = (props) => {  
   if (props.currentProfile===null || props.currentProfile ===undefined) {
      return <Preloader />
   } 
   
      return (
         <div className={c.userInfoBlock}>
            <div className={c.userProfileBg}>
               <img className={c.userAvatar} src={props.currentProfile.photos.large} alt="" />
               <div className={c.userInfo}>
                  <div className={c.item}>{props.currentProfile.fullName}</div>
                  <div className={c.item}>{props.currentProfile.aboutMe}</div>
                  <div className={c.item}>About</div>
               </div>
            </div>
         </div>
      )
}

export default ProfileHeader