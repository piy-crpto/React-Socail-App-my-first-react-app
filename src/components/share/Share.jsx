import React from 'react'
import './Share.css';
const Share = () => {
   return (
      <>
         <div className="share">
            <div className="shareWrapper">

               <div className="shareTop">
                  <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
                  <input
                     placeholder="What's in your mind pppp?"
                     className="shareInput"
                  />
               </div>

               <hr className="shareHr" />


               <div className="shareBottom">

                  <div className="shareOptions">
                     <div className="shareOption">
                        <i className=" fa fa-photo-video shareIcon"></i>
                        <span className="shareOptionText">Photo or Video</span>
                     </div>

                     <div className="shareOption">
                        <i className=" fa fa-tag shareIcon"></i>
                        <span className="shareOptionText">Tag</span>
                     </div>

                     <div className="shareOption">
                        <i className=" fa fa-map-marker shareIcon"></i>
                        <span className="shareOptionText">Loaction</span>
                     </div>

                     <div className="shareOption" id="shareOption">
                        <i className=" fa fa-sad-cry shareIcon"></i>
                        <span className="shareOptionText">Feelings</span>
                     </div>
                  </div>

                  <button className="shareButton">Share</button>
               </div>





            </div>
         </div>
      </>
   )
}

export default Share






// import "./share.css";
// import {PermMedia, Label,Room, EmojiEmotions} from "@material-ui/icons"

// export default function Share() {
//   return (
//     <div className="share">
//       <div className="shareWrapper">
//         <div className="shareTop">
//           <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
//           <input
//             placeholder="What's in your mind Safak?"
//             className="shareInput"
//           />
//         </div>
//         <hr className="shareHr"/>
//         <div className="shareBottom">
//             <div className="shareOptions">
//                 <div className="shareOption">
//                     <PermMedia htmlColor="tomato" className="shareIcon"/>
//                     <span className="shareOptionText">Photo or Video</span>
//                 </div>
//                 <div className="shareOption">
//                     <Label htmlColor="blue" className="shareIcon"/>
//                     <span className="shareOptionText">Tag</span>
//                 </div>
//                 <div className="shareOption">
//                     <Room htmlColor="green" className="shareIcon"/>
//                     <span className="shareOptionText">Location</span>
//                 </div>
//                 <div className="shareOption">
//                     <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
//                     <span className="shareOptionText">Feelings</span>
//                 </div>
//             </div>
//             <button className="shareButton">Share</button>
//         </div>
//       </div>
//     </div>
//   );
// }
