import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined"
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined"
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"

import { Link } from "react-router-dom"
import { useState } from "react"
import Comments from "../Comments"

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false)

  // Temp
  const liked = false

  return (
    <div className="post">
      <div className="post__container">
        <div className="post__user">
          <div className="post__user-info">
            <img src={post.profilePic} alt="" />
            <div className="post__user-details">
              <Link to={`/profile/${post.userId}`}>
                <span className="post__name">{post.name}</span>
              </Link>
              <span className="post__date">1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="post__content">
          <p>{post.desc}</p>
          {post.img && <img src={post.img} alt="" />}
        </div>
        <div className="post__links">
          <div className="post__link">
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            12 Likes
          </div>
          <div
            className="post__link"
            onClick={() => setCommentOpen(!commentOpen)}
          >
            <TextsmsOutlinedIcon />
            12 Comments
          </div>
          <div className="post__link">
            <ShareOutlinedIcon />
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  )
}

export default Post
