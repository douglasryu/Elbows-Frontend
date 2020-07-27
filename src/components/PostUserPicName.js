import React, { useState } from "react";

const PostUserPicName = props => {
    return (
        <div className="post__userpicname">
            <img className="post__userpic" src={props.post.user_info.profilePicUrl} />
            <div className="post__username">{props.post.user_info.username}</div>
        </div>
    );
}

export default PostUserPicName;