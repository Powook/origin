import React from "react";
import c from './Message.module.css'

const Message = props=> {
   return (
      <div>
         <div className={c.message}>
            {props.message}
            <div className={c.messageInfo}>{`${new Date().toLocaleString()}`}</div>
         </div>
      </div>
   )
}

export default Message