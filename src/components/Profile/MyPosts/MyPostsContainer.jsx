import React from "react";
import MyPosts from "./MyPosts";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";

const MyPostsContainer = ({store}) => {

    const state = store.getState();

    const addPost = () => {
        store.dispatch(addPostActionCreator());   // нарушается принцип single responsibility. Компонент не должен думать над тем какой-объект создать как {type:ADD-POST}
    }

    const onPostChange = text => {
        const action = updateNewPostTextActionCreator(text);
        store.dispatch(action);
    }

    return (
        <MyPosts posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} addPost={addPost} updateNewPostText={onPostChange} />
    )
}

export default MyPostsContainer;
