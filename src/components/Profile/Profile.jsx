import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({posts, newPostText, dispatch}) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={posts} dispatch={dispatch} newPostText={newPostText} />
        </div>
    )
}

export default Profile;
