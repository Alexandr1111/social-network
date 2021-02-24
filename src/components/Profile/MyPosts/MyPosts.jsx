import React, { createRef } from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";

const MyPosts = ({posts, newPostText, dispatch}) => {

    const newPostElement = createRef();

    const onAddPost = () => {
        dispatch(addPostActionCreator());   // нарушается принцип single responsibility. Компонент не должен думать над тем какой-объект создать как {type:ADD-POST}
    }

    const onPostChange = () => {
        const text = newPostElement.current.value;
        dispatch(updateNewPostTextActionCreator(text));
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
