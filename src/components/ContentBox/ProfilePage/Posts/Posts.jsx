import React from 'react'
import c from './Posts.module.css'
import PostCreator from './PostCreator/PostCreate'
import Post from './Post/Post'

const Posts = (props)=> {
   let posts = props.posts.map(post=><Post content={post.content} key={post.id} author={post.author} date={post.date}/>)
   return (
      <div className={c.Posts}>
         <PostCreator dispatch={props.dispatch} postTextArea ={props.postTextArea}  />
         {posts}
      </div>
   )
}

export default Posts