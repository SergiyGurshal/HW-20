import React, { useState } from 'react'

import likeIcon from '../../img/like.svg'
import commentIcon from '../../img/comment.png'
import repostIcon from '../../img/share.png'

import './Post.css'

const Post = ({ name, content, image }) => {
  return (
    <div className="post">
      <div className="infoPanel">
        <div className="userInfo">
          <div className="namePanel">{name}</div>
        </div>
      </div>
      <div className="contentPanel">
        <div className="contentDiscription">{content}</div>
        <div className="contentImg">
          <img className="postImg" src={image} alt="ContentImg" />
        </div>
        <div className="likePanel">
          <img src={likeIcon} width="30px" height="30px" alt="like icon" />
          <img src={commentIcon} width="30px" height="30px" alt="comment icon" />
          <img src={repostIcon} width="30px" height="30px" alt="repost icon" />
        </div>
      </div>
    </div>
  )
}

export default Post
