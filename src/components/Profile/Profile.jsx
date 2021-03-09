import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";

const Profile = ({profile}) => {
    return profile ? (
        <div>
            <ProfileInfo profile={profile} />
            <MyPostsContainer />
        </div>
    ) : <Preloader />
}

export default Profile;
