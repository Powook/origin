import React from 'react'
import c from './PostCreate.module.css'

const PostCreator = (props)=> {
   let newPostElement = React.createRef()
   
   return (
      <div className={c.PostCreator}>
         <div className={c.InputBlock}>
            <img src="https://coolsen.ru/wp-content/uploads/2021/06/15-8.jpg" alt="" />
            <textarea  ref={newPostElement}/>
         </div>
         <div className={c.ButtonBlock}>
            <button>Timeout</button>
            <button onClick={props.addPost}>Public</button>
         </div>
      </div>
   )
}

export default PostCreator