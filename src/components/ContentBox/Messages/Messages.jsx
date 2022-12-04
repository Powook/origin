import React from "react";
import Chat from "./Chat/Chat";
import Dialog from "./Dialog/Dialog";
import c from './Messages.module.css'

const Messages = (props)=>{
   let dialogs = props.state.usersData.map(user=><Dialog userName={user.name} id = {user.id} key={user.id} />)

   return (
      <div className={c.messages}>
         <div className={c.dialogs}>
            {dialogs}
         </div>
         <Chat messageData={props.state.messageData}/>
      </div>
   )
}

export default Messages;