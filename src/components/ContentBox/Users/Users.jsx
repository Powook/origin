import React from "react";
import { NavLink } from "react-router-dom";
import c from './Users.module.css'
import axios from 'axios'
import userPhoto from '../../../assets/images/noAvatar.png'

class Users extends React.Component {
   
   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersCountOnPage}&page=${this.props.currentPage}`)
         .then(response => {
            this.props.setTotalCount(response.data.totalCount)
            this.props.setUsers(response.data.items)
         })
   }

   onChangePage =(p)=>{
      console.log(this.props.currentPage)
      this.props.setCurrentPage(p)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersCountOnPage}&page=${p}`)
      .then(response => {
         this.props.setTotalCount(response.data.totalCount)
         this.props.setUsers(response.data.items)
      })
   }

   render() {
      let maxPages = Math.ceil(this.props.totalUsersCount / this.props.usersCountOnPage)
      let pages = []

      for (let i = 1; i <= 5; i++) {
         pages.push(i)
      }
      pages.push('...')
      pages.push(maxPages)

      let pagesSpan = pages.map(p => {
         return <span className={this.props.currentPage === p && c.selectedPage}
         onClick={()=>this.onChangePage(p)}
         >{p}</span>
      })

      let users = this.props.users.map(u => {
         return (
            <div className={c.userCard}>

               <div className={c.avatarBlock}>
                  <img className={c.avatar} src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />
               </div>

               <div className={c.userInfoBlock}>
                  <div className={c.name}><NavLink to={`/` + u.id}>{u.name}</NavLink></div>
                  <div className={c.location}><a className={c.location}>Russia</a></div>
                  <div><button>Написать сообщение</button></div>
               </div>

               <div className={c.followBlock}>
                  {u.followed
                     ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                     : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>
                  }
               </div>

            </div>
         )
      })
      return (
         <div>
            <div className={c.navigation}>
               {pagesSpan}
            </div>
            {users}
         </div>
      )
   }
}

export default Users