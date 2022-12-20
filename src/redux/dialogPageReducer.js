function dialogsPageReducer (state, action) {
   switch (action.type){

      case 'SEND-MESSAGE':
         console.log('+')
         if (state.messageInputValue.trim()){
         state.messageData.push({
            msg: state.messageInputValue, id:777
         })
         state.messageInputValue=''
         return state;
      } else return;
      case 'MSG-CHANGE-INPUT' : 
        state.messageInputValue=action.currentMessageText;
        return state;

      default: 
         return state;
   }  
}

export default dialogsPageReducer