import React from "react";
import Dialog from "./Dialog/Dialog";
import c from './Messages.module.css'
import Message from './Chat/Message/Message'



const Messages = (props)=>{

   let dialogs =props.state.usersData.map(user=><Dialog userName={user.name} id = {user.id} key={user.id} />)
   let messages = props.state.messageData.map(item=><Message message={item.msg} key={item.id} date={item.date}/>)

   function sendMessage (event) {
      props.sendMessage()
   }

   function msgChangeInputValue(event){
      let body =event.target.value
      props.msgChangeInputValue(body)
   }

   return (
      <div className={c.messages}>

         <div className={c.dialogs}>
            {dialogs}
         </div>

         <div className={c.textarea}>
            <div className={c.header}>
               <span>Anya</span>
            </div>
            <div className={c.main}>
               {messages}
            </div>
            <div className={c.inputBlock}>
               <textarea className={c.textbox}  value={props.state.messageInputValue} onChange={msgChangeInputValue}></textarea>
               <button onClick={sendMessage}>Send</button>
         </div>
      </div>
      </div>
   )
}

export default Messages;