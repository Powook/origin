import React from "react";
import { NavLink } from "react-router-dom";
import c from './Users.module.css'
import userPhoto from '../../../assets/images/noAvatar.png'
import paginationleft from '../../../icons/paginationleft.svg'
import paginationright from '../../../icons/paginationright.svg'
import { userApi } from "../../../dataAccsessLayer/api";

function Users(props) {
   let maxPages = Math.ceil(props.totalUsersCount / props.usersCountOnPage)
   let pages = []

   {for (let i=props.currentPage-2; i<=props.currentPage+2; i++){
      pages.push(i)
   }
   }
   if(props.currentPage<=2){
      pages=[1,2,3,4,5]
   } else if (props.currentPage>=maxPages-2){
      pages=[ maxPages-4, maxPages-3,maxPages-2,maxPages-1, maxPages]
   }
   let pagesSpan = pages.map(p => {
      return <span className={props.currentPage === p && c.selectedPage}
         onClick={() => props.onChangePage(p)}
      >{p}</span>
   })

   let users = props.users.map(u => {
      return (
         <div className={c.userCard}>

            <div className={c.avatarBlock}>
              <NavLink to={`/profile/` + u.id}><img className={c.avatar} src={u.photos.small != null ? u.photos.small : userPhoto} alt="" /></NavLink> 
            </div>

            <div className={c.userInfoBlock}>
               <div className={c.name}><NavLink to={`/profile/` + u.id}>{u.name}</NavLink></div>
               <div className={c.location}><a className={c.location}>Russia</a></div>
               <div><button>Написать сообщение</button></div>
            </div>

            <div className={c.followBlock}>
               {u.followed
                  ? <button disabled={props.btn.some(id=> id== u.id)} onClick={() => { 
                     props.followUser(u.id)
                  }}>Unfollow</button>
                  : <button disabled={props.btn.some(id=> id== u.id)} onClick={() => { 
                     props.unfollowUser(u.id)
                  }}>Follow</button>
               }
            </div>

         </div>
      )
   })
   return (
      <div>
         <div className={c.navigation}>
            <img src={paginationleft} alt="" className={c.toFirst} onClick={()=>props.onChangePage(1)}/>
            {pagesSpan}
            <img src ={paginationright} alt="" className={c.toEnd} onClick={()=>props.onChangePage(maxPages)}/>
         </div>
         {users}
      </div>
   )
}

export default Users