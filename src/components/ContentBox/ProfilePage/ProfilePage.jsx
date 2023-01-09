import React from 'react'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import ProfileStories from './ProfileStories/ProfileStories'
import c from './ProfilePage.module.css'
import PostsContainer from './Posts/PostsContainer'

const Main =(props)=>{
   return (
      <main className={c.main}>
         <ProfileHeader/>
         <ProfileStories/>
         <PostsContainer />
      </main>
   )
}

export default Main