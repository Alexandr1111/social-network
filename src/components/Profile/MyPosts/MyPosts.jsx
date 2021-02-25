import React, { createRef } from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({posts, newPostText, addPost, updateNewPostText}) => {

    const newPostElement = createRef();

    const onAddPost = () => {
        addPost();
    }

    const onPostChange = () => {
        const text = newPostElement.current.value;
        updateNewPostText(text);
    }

    return (
        <div className={c.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={newPostText} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={c.posts}>
                {posts.map(p => <Post message={p.message} likeCount={p.likeCount} />)}
            </div>
        </div>
    )
}

export default MyPosts;
