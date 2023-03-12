import React from 'react'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import ProfileStories from './ProfileStories/ProfileStories'
import c from './ProfilePage.module.css'
import Posts from './Posts/Posts'

const Profile =(props)=>{
   const {status, currentProfile, updateProfileStatus} = props
   return (
      <main className={c.main}>
         <ProfileHeader currentProfile={currentProfile} status={status} updateProfileStatus={updateProfileStatus}/>
         <ProfileStories/>
         <Posts {...props} />
      </main>
   )
}

export default Profile