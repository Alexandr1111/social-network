import React from "react";
import c from "./Post.module.css";

const Post = ({message, likeCount}) => {
    return (
        <div className={c.item}>
            <img src="https://i.pinimg.com/236x/c2/af/09/c2af0941a9eace5f0ba3dc63284d3860--mr-bean-funny-color-blue.jpg" alt=""/>
            {message}
            <div>
                <span>{likeCount}♥</span>
            </div>
        </div>
    )
}

export default Post;
