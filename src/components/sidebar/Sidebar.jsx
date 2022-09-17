import React from 'react';
import Closefriend from '../closeFriend/Closefriend';
import "./Sidebar.css";
import { Users } from "../../Dummydata"
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">

          <li className="sidebarListItem">
            <i className=" fa fa-rss sidebarIcon"></i>
            <span className="sidebarListItemText">Feed</span>
          </li>


          <li className="sidebarListItem">
            <i className="fa fa-comments sidebarIcon"></i>
            <span className=" sidebarListItemText">Chats</span>
          </li>

          <li className="sidebarListItem">
            <i className="fa fa-rss sidebarIcon"></i>
            <span className=" sidebarListItemText">Videos</span>
          </li>

          <li className="sidebarListItem">
            <i className=" fa fa-comments sidebarIcon"></i>
            <span className=" sidebarListItemText">Groups</span>
          </li>

          <li className="sidebarListItem">
            <i className=" fa fa-comments sidebarIcon"></i>
            <span className=" sidebarListItemText">Bookmarks</span>
          </li>

          <li className="sidebarListItem">
            <i className="fa fa-rss sidebarIcon"></i>
            <span className=" sidebarListItemText">Questions</span>
          </li>

          <li className="sidebarListItem">
            <i className="fa fa-comments sidebarIcon"></i>
            <span className=" sidebarListItemText">Jobs</span>
          </li>

          <li className="sidebarListItem">
            <i className="fa fa-rss sidebarIcon"></i>
            <span className=" sidebarListItemText">Events</span>
          </li>

          <li className="sidebarListItem">
            <i className="fa fa-comments sidebarIcon"></i>
            <span className=" sidebarListItemText">Courses</span>
          </li>
        </ul>

        <button className="sidebarButton">Show More</button>

        <hr className="sidebarHr" />

        <ul className="sidebarFriendList">

          {
            Users.map((u) => (
              <Closefriend key={u.id} user={u} />
            ))
          }
        </ul>

      </div>
    </div>
  )
}

export default Sidebar;





