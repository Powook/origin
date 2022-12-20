import dialogsPageReducer from "./dialogPageReducer";
import profilePageReducer from "./profilePageReducer";

const store = {
  _state: {
   dialogsPage:{
      messageInputValue: '',
      messageData: [
         {msg: 'hahaha', id:0},
         {msg: 'lol', id:1},
         {msg: 'kek', id:2},
         {msg: 'ewew', id:3},
         {msg: 'efefe', id:4},
         {msg: 'ooOoOoo', id:5}
      ],
      usersData: [
         {name: "Vadim",   id:  1},
         {name: "Mirosha",   id:  2},
         {name: "Kostya",   id:  4},
         {name: "Nikita",   id:  5},
         {name: "Lexa",   id:  6},
         {name: "Poxa",   id:  7},
         {name: "Joha",   id:  8},
         {name: "Joha-Poha",   id:  9},
         {name: "Anya",   id:  10}
       ]
   },
   profilePage: {
      postTextArea: '',
      posts: [
         {id:1, content: 'Haha. its my first post!', author: 'Maksimba', date: '02.12.22 0:18'},
         {id:2, content: 'Wow. its second!', author: 'Maksimba', date: '02.12.22 0:19'},
         {id:3, content: 'ewew ^_^', author: 'Maksimba', date: '02.12.22 0:21'}
      ]
   }
},
   getState () {
      return this._state
   },
   subscribe (observer){
      this.rerenderTree=observer;
   },
   dispatch (action) {
     profilePageReducer(store._state.profilePage, action)
     dialogsPageReducer(store._state.dialogsPage, action)
   this.rerenderTree(this._state)
   },  
}

export default store