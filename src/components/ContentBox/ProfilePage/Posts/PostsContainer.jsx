import { connect } from "react-redux";
import Posts from "./Posts";

function f1 (state){
   return {
      posts: state.profilePage.posts,
      postTextArea: state.profilePage.postTextArea
   }
}

function f2 (dispatch){
   return {
      AddPost: ()=> {
         dispatch({
            type: 'ADD-POST',
            date: new Date().toLocaleString()
         })
      },
      ChangePost: text=> {
         dispatch({
            type: 'POST-CHANGE-INPUT',
            change: text
         })
      }
   }
}

const PostsContainer = connect (f1, f2) (Posts)

export default PostsContainer