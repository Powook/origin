import React from 'react'
import c from './PostCreate.module.css'

const PostCreator = (props)=> {
   let newPostElement = React.createRef()

   function addPost() {
      if (newPostElement.current.value.trim()){
      let content = newPostElement.current.value;
      props.dispatch ({
         type: 'ADD-POST',
         postContent: content
      })
      newPostElement.current.value= ''
   }
}

function changePost () {
   props.dispatch({
      type: 'CHANGE-INPUT',
      change: newPostElement.current.value
   })
}

   return (
      <div className={c.PostCreator}>
         <div className={c.InputBlock}>
            <img src="https://coolsen.ru/wp-content/uploads/2021/06/15-8.jpg" alt="" />
            <textarea  ref={newPostElement} value={props.postTextArea} onChange={changePost}/>
         </div>
         <div className={c.ButtonBlock}>
            <button>Timeout</button>
            <button onClick={addPost}>Public</button>
         </div>
      </div>
   )
}

export default PostCreator