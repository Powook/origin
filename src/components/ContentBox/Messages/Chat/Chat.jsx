import React from "react";
import c from './Chat.module.css'
import Message from "./Message/Message";

const Chat =props=>{
   
   let messages = props.messageData.map(item=><Message message={item.msg} key={item.id}/>)

   return(
      <div className={c.chat}>
         <div className={c.header}>
            <span>Anya</span>
         </div>
         <div className={c.main}>
            {messages}
          </div>
         <div className={c.inputBlock}>
            <div contentEditable='true' className={c.textbox}></div>
            <button>Send</button>
         </div>
      </div>
   )
}

export default Chat