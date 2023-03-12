import React from 'react'
import c from './Posts.module.css'
import Post from './Post/Post'
import Preloader from '../../../common/preloader/Preloader'

const Posts = (props) => {

const {posts, currentProfile, postTextArea, addPost, changePost} = props

   let postList = posts.map(post => <Post preloader ={<Preloader/>} content={post.content} key={post.id} author={currentProfile ? currentProfile.fullName : ' '} date={post.date} avatar={currentProfile ? currentProfile.photos : null}/>)
   let newPostElement = React.createRef()

   function onAddPost (){
      addPost()
   }

   function onChangePost () {
      changePost(newPostElement.current.value)
   }
   return (
      <div className={c.Posts}>

         <div className={c.PostCreator}>

            <div className={c.InputBlock}>
               <img src={currentProfile ? currentProfile.photos.large : null} alt="" className={c.PostCreateAvatar} />
               <textarea ref={newPostElement} value={postTextArea} onChange={onChangePost} />
            </div>

            <div className={c.ButtonBlock}>
               <button>Timeout</button>
               <button onClick={onAddPost}>Public</button>
            </div>

         </div>

         <div>
            {postList}
         </div>
      </div>
   )
}

export default Posts