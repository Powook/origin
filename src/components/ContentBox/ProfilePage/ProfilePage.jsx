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
         <Posts posts={props.state.posts} dispatch={props.dispatch} postTextArea ={props.state.postTextArea} />
      </main>
   )
}

export default Main