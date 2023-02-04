import React from 'react'
import c from './Posts.module.css'
import Post from './Post/Post'
import Preloader from '../../../common/preloader/Preloader'

const Posts = (props) => {
   let posts = props.posts.map(post => <Post preloader ={<Preloader/>} content={post.content} key={post.id} author={props.currentProfile? props.currentProfile.fullName : ' '} date={post.date} avatar={props.currentProfile ? props.currentProfile.photos : null}/>)
   let newPostElement = React.createRef()

   function onAddPost (){
      props.addPost(newPostElement)
   }

   function onChangePost () {
      props.changePost(newPostElement.current.value)
   }
   return (
      <div className={c.Posts}>

         <div className={c.PostCreator}>

            <div className={c.InputBlock}>
               <img src={props.currentProfile ? props.currentProfile.photos.large : null} alt="" className={c.PostCreateAvatar} />
               <textarea ref={newPostElement} value={props.postTextArea} onChange={onChangePost} />
            </div>

            <div className={c.ButtonBlock}>
               <button>Timeout</button>
               <button onClick={onAddPost}>Public</button>
            </div>

         </div>

         <div>
            {posts}
         </div>
      </div>
   )
}

export default Posts