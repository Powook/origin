import {combineReducers, legacy_createStore as createStore} from "redux"
import dialogsPageReducer from "./dialogPageReducer";
import profilePageReducer from "./profilePageReducer";
import usersPageReducer from "./usersPageReducer";

let reducers = combineReducers({
   dialogsPage: dialogsPageReducer,
   profilePage: profilePageReducer,
   usersPage: usersPageReducer
})

let store = createStore(reducers);

export default store;
