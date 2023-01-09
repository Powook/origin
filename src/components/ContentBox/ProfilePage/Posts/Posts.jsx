import React from 'react'
import c from './Posts.module.css'
import Post from './Post/Post'

const Posts = (props) => {

   let posts = props.posts.map(post => <Post content={post.content} key={post.id} author={post.author} date={post.date} />)
   let newPostElement = React.createRef()

   function onAddPost (){
      props.AddPost(newPostElement)
   }

   function onChangePost () {
      props.ChangePost(newPostElement.current.value)
   }

   return (
      <div className={c.Posts}>

         <div className={c.PostCreator}>

            <div className={c.InputBlock}>
               <img src="https://coolsen.ru/wp-content/uploads/2021/06/15-8.jpg" alt="" />
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