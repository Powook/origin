import { connect } from "react-redux";
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

let withAuthComponent = withAuthRedirect(Messages)

const MessagesContainer = connect (f1,f2) (withAuthComponent)

export default MessagesContainer