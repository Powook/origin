import React from 'react'
import c from './Post.module.css'
const Post =(props) => {
   return (
      <div className={c.Block}>
         <img src={props.avatar ? props.avatar.small : props.preloader} alt="" />
         <div className={c.PostText}>
            <div><a href="#">{props.author}</a></div>
            {props.content}
         </div>
         <div className={c.PostInfo}>{props.date}</div>
      </div>
   )
}

export default Post