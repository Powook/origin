import React from "react";
import c from './Message.module.css'

const Message = props=> {
   return (
      <div>
         <div className={c.message}>{props.message}</div>
      </div>
   )
}

export default Message