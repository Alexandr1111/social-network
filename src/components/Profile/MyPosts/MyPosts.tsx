import React, {FC, memo} from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";
import {PostType} from "../../../types/types";

const maxLength10 = maxLengthCreator(10);   // Форма не будет сабмитится просто

type AddNewPostFormType = {
    newPostText: string
}

let AddNewPostForm: FC<InjectedFormProps<AddNewPostFormType>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name='newPostText' component={Textarea} validate={[required, maxLength10]} />
            </div>
            <div>
                <button className={c.btn} type='submit'>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm<AddNewPostFormType>({form: 'addPost'})(AddNewPostForm);

type MyPostsType = {
    posts: Array<PostType>
    addPost: (newPostText: string) => void
}

const MyPosts: FC<MyPostsType> = memo(({posts, addPost}) => {

    const onAddPost = ( values: AddNewPostFormType ) => {
        addPost(values.newPostText);
    }

    return (
        <div className={c.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddNewPostReduxForm onSubmit={onAddPost} />
            </div>
            <div className={c.posts}>
                {posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount} />)}
            </div>
        </div>
    )
})

export default MyPosts;
