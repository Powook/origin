import React from 'react'
import c from './Post.module.css'
const Post =(props) => {
   return (
      <div className={c.Block}>
         <img src="https://coolsen.ru/wp-content/uploads/2021/06/15-8.jpg" alt="" />
         <div className={c.PostText}>
            <div><a href="#">{props.author}</a></div>
            {props.content}
         </div>
         <div className={c.PostInfo}>{props.date}</div>
      </div>
   )
}

export default Post