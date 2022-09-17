import React, { useState } from 'react'
import './Post.css'
import { Users } from "../../Dummydata";

const Post = (props) =>
{  
    const [like,setLike] = useState(props.post.like)
    const [islike,isSetLike] = useState(false)
    
    
    const likeHabdler = () =>
    {
         setLike(islike ? like-1 : like+1 )
         isSetLike(!islike)
    }
 
  return (
    <>
    
    <div className="post">
        <div className="postWrapper">
           
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter((u) => u.id === props.post.userId)[0].profilePicture} 
                    alt="" className="postProfileImg" />
                    <span className="postUsername"><strong>
                     {Users.filter((u) => u.id === props.post.userId)[0].username}  
                    
                        </strong></span>
                    <span className="postDate">{props.post.date}</span>
                </div>
                <div className="postTopRight">
                <i className="fa fa-ellipsis-v" ></i>
                </div>
             </div>

            



             <div className="postCenter">
                <span className="postText">{props.post.desc}</span>
                <img src={props.post.photo} alt="" className="postImg" />
             </div>





             <div className="postBottom">
                 <div className="postButtonLeft">
                       <img className="likeIcon" src="assets/like.png" onClick={likeHabdler} alt="" />
                       <img className="likeIcon" src="assets/heart.png"  alt="" />
                       <span className="postLikeCounter">{like}</span>
                 </div>

                 <div className="postButtonRight">
                     <span className="postCommentText">{props.post.comment}</span>
                 </div>
             </div>
        </div>
    </div>
    </>
  )
}

export default Post





// import "./post.css";
// import { MoreVert } from "@material-ui/icons";
// import { Users } from "../../dummyData";
// import { useState } from "react";

// export default function Post({ post }) {
//   const [like,setLike] = useState(post.like)
//   const [isLiked,setIsLiked] = useState(false)

//   const likeHandler =()=>{
//     setLike(isLiked ? like-1 : like+1)
//     setIsLiked(!isLiked)
//   }
//   return (
//     <div className="post">
//       <div className="postWrapper">
//         <div className="postTop">

//           <div className="postTopLeft">
//             <img
//               className="postProfileImg"
//               src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
//               alt=""
//             />
//             <span className="postUsername">
//               {Users.filter((u) => u.id === post?.userId)[0].username}
//             </span>
//             <span className="postDate">{post.date}</span>
//           </div>
//           <div className="postTopRight">
//             <MoreVert />
//           </div>
//         </div>
//         <div className="postCenter">
//           <span className="postText">{post?.desc}</span>
//           <img className="postImg" src={post.photo} alt="" />
//         </div>
//         <div className="postBottom">
//           <div className="postBottomLeft">
//             <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
//             <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" />
//             <span className="postLikeCounter">{like} people like it</span>
//           </div>
//           <div className="postBottomRight">
//             <span className="postCommentText">{post.comment} comments</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
