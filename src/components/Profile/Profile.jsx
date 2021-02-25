import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({profilePage, dispatch}) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={profilePage.posts} dispatch={dispatch} newPostText={profilePage.newPostText} />
        </div>
    )
}

export default Profile;
