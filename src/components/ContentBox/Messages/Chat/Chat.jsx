// import React from "react";
// import c from './Chat.module.css'
// import Message from "./Message/Message";

// const Chat =props=>{
   
//    let messages = props.messageData.map(item=><Message message={item.msg} key={item.id} date={item.date}/>)
   
//    function sendMessage (event) {
//       props.dispatch({
//          type: 'SEND-MESSAGE',
//          date: new Date().toLocaleString()
//       })
//    }

//    function msgChangeInputValue(event){
//       let body =event.target.value
//       props.dispatch({
//          type: 'MSG-CHANGE-INPUT', currentMessageText: body
//       })
//    }

//    return(
//       <div className={c.chat}>
//          <div className={c.header}>
//             <span>Anya</span>
//          </div>
//          <div className={c.main}>
//             {messages}
//           </div>
//          <div className={c.inputBlock}>
//             <textarea className={c.textbox}  value={props.messageInputValue} onChange={msgChangeInputValue}></textarea>
//             <button onClick={sendMessage}>Send</button>
//          </div>
//       </div>
//    )
// }

// export default Chat