import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import Messages from "./Messages";

function f1 (state) {
   return {
      state: state.dialogsPage,
      isAuth: state.auth.isAuth
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


const MessagesContainer = compose (connect (f1,f2),
withAuthRedirect)
(Messages)

export default MessagesContainer