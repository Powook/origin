import React, { useEffect, useState } from "react";

const ProfileStatus  =(props) => {
   
   const [editMode, setEditMode] = useState(false)
   const [status, setStatus] = useState(props.status)

   useEffect(()=>{
      setStatus(props.status)
   }, [ props.status ])


   function changeEditModeStatus () {
      return setEditMode(prev=>!prev)
   }

   function onInputChange (e) {
      setStatus(e.currentTarget.value)
   }

   function onInputBlur () {
      if (status.trim() && status!==props.status) {
         props.updateProfileStatus(status)
      }
      changeEditModeStatus()
   }
      return (
         <>
            {editMode ?
               <input autoFocus  onBlur={onInputBlur} value={status} onChange={onInputChange} />
               : <div  onDoubleClick={()=>changeEditModeStatus()}>{props.status ? props.status : 'Write your status...'}</div>
            }
         </>
      )
}

export default ProfileStatus