let initState = {
   messageInputValue: '',
   messageData: [
      { msg: 'hahaha', id: 0 },
      { msg: 'lol', id: 1 },
      { msg: 'kek', id: 2 },
      { msg: 'ewew', id: 3 },
      { msg: 'efefe', id: 4 },
      { msg: 'ooOoOoo', id: 5 }
   ],
   usersData: [
      { name: "Vadim", id: 1 },
      { name: "Mirosha", id: 2 },
      { name: "Kostya", id: 4 },
      { name: "Nikita", id: 5 },
      { name: "Lexa", id: 6 },
      { name: "Poxa", id: 7 },
      { name: "Joha", id: 8 },
      { name: "Joha-Poha", id: 9 },
      { name: "Anya", id: 10 }
   ]
}

function dialogsPageReducer(state = initState, action) {
   switch (action.type) {

      case 'SEND-MESSAGE':
         {
            if (state.messageInputValue.trim()) {
               return {
                  ...state,
                  messageInputValue: '',
                  messageData: [...state.messageData, { msg: state.messageInputValue, id: 777, date: action.date }]
               }
            } else return;
         }
      case 'MSG-CHANGE-INPUT':
         return {
            ...state,
            messageInputValue: action.currentMessageText
         }

      default:
         return state;
   }
}

export default dialogsPageReducer