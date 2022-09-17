import React from 'react'
import './Closefriend.css'
const Closefriend = (props) => {
  return (
    <>
          <li className="sidebarFriend">
                <img src={props.user.profilePicture} alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">{props.user.username}</span>
        </li>
    </>
  )
}

export default Closefriend