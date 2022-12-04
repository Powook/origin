import React from "react";
import c from './Dialog.module.css'
import { NavLink } from 'react-router-dom';


const Dialog = props => {
   return(
      <div className={c.dialog} >
         <img src="https://www.ejin.ru/wp-content/uploads/2018/10/1202399791_preview_15034743_1798112143788452_7709561090543190016_n.jpg"  alt='/'/>
         <div className={c.info}>
            <NavLink to={'/messages/'+props.id}>{props.userName}</NavLink>
            <p className={c.msg}>Hello, how are u?</p>
         </div>
      </div>
   )
}

export default Dialog