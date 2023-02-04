import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"
import authReducer from "./authReducer";
import dialogsPageReducer from "./dialogPageReducer";
import profilePageReducer from "./profilePageReducer";
import usersPageReducer from "./usersPageReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
   dialogsPage: dialogsPageReducer,
   profilePage: profilePageReducer,
   usersPage: usersPageReducer,
   auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store
