import React from 'react'
import { NavLink } from 'react-router-dom';
import c from './Aside.module.css'

const Aside = ()=> {
   return(
      <aside className={c.aside}>
          <nav className ={c.nav}>
            <ul className ={c.ul}>
              <li className ={c.li}><NavLink to ='/profile'>Home</NavLink></li>
              <li className ={c.li}><NavLink to ='/messages'>Mesages</NavLink></li>
              <li className ={c.li}><NavLink to ='/friends'>Friends</NavLink></li>
              <li className ={c.li}><NavLink to ='/users'>Users</NavLink></li>
              <li className ={c.li}><NavLink to ='/photo'>Photo</NavLink></li>
              <li className ={c.li}><NavLink to ='/settings'>Settings</NavLink></li>

            </ul>
          </nav>
          <div className={c.newsBlock}>
          <article className={c.article}></article>
          <article className={c.article}></article>
          <article className={c.article}></article>
          <article className={c.article}></article>
          </div>
        </aside>
   )
}

export default Aside;