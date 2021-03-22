import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText' component='textarea' />
            </div>
            <div>
                <button type='submit'>Add post</button>
            </div>
        </form>
    )
}

AddNewPostForm = reduxForm({form: 'addPost'})(AddNewPostForm);

const MyPosts = ({posts, addPost}) => {

    const onAddPost = values => {
        addPost(values.newPostText);
    }

    return (
        <div className={c.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddNewPostForm onSubmit={onAddPost} />
            </div>
            <div className={c.posts}>
                {posts.map(p => <Post message={p.message} likeCount={p.likeCount} />)}
            </div>
        </div>
    )
}

export default MyPosts;
