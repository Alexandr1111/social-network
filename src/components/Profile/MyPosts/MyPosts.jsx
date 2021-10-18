import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);   // Форма не будет сабмитится просто

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText' component={Textarea} validate={[required, maxLength10]} />
            </div>
            <div>
                <button className={c.btn} type='submit'>Add post</button>
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
                {posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount} />)}
            </div>
        </div>
    )
}

export default MyPosts;
