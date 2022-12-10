import React from 'react'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import ProfileStories from './ProfileStories/ProfileStories'
import c from './ProfilePage.module.css'
import Posts from './Posts/Posts'

const Main =(props)=>{
   return (
      <main className={c.main}>
         <ProfileHeader/>
         <ProfileStories/>
         <Posts posts={props.state.posts} addPost={props.addPost} changePost={props.changePost} createPostInput ={props.createPostInput} />
      </main>
   )
}

export default Main