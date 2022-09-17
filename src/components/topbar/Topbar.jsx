
import React from "react";
import "./Topbar.css";


const Topbar = () => {
  return (
    <div className="topbarContainer">

      <div className="topbarLeft">
        <i class="fa fa-home homec"></i>
        <span className="logo">Piyush Yadav</span>
      </div>



      <div className="topbarCenter">
        <div className="searchbar">
          <i class="fa fa-search searchIcon" ></i>
          <input
            placeholder="Search for friend post or video"
            className="searchInput"
          />
        </div>
      </div>



      <div className="topbarRight">
        {/* //1 */}
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        {/* //2 */}
        <div className="topbarIcons">

          <div className="topbarIconItem">
            <i className="fa fa-user ic"></i>
            <span className="topbarIconBadge">1</span>
          </div>

          <div className="topbarIconItem">
            <i className='far fa-comment ic' ></i>
            <span className="topbarIconBadge">2</span>
          </div>

          <div className="topbarIconItem" >
            <i className="fas fa-bell ic"></i>
            <span className="topbarIconBadge">1</span>
          </div>

        </div>
        {/* //3  */}
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  );
}

export default Topbar;