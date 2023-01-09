import React from "react";
import c from './Message.module.css'

const Message = props=> {
   return (
      <div>
         <div className={c.message}>
            <div>
               {props.message}
            </div>
            <div className={c.messageInfo}>{props.date}</div>
         </div>
      </div>
   )
}

export default Message