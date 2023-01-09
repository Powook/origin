import { connect } from "react-redux";
import Messages from "./Messages";

function f1 (state) {
   return {
      state: state.dialogsPage
   }
}

function f2 (dispatch) {
   return {
      sendMessage: () => {
         dispatch({
            type: 'SEND-MESSAGE',
            date: new Date().toLocaleString()
         })
      },
      msgChangeInputValue: text=> {
         dispatch({
            type: 'MSG-CHANGE-INPUT', currentMessageText: text
         })
      }
   }
}

const MessagesContainer = connect (f1,f2) (Messages)

export default MessagesContainer