import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={c.posts}>
                <Post message={'Хай, это мой первый пост!'} likeCount={4} />
                <Post message={'Новая Зеландия, жди меня!♥'} likeCount={18} />
            </div>
        </div>
    )
}

export default MyPosts;
