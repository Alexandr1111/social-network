import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";

const Profile = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    return profile ? (
        <div>
            <ProfileInfo profile={profile} isOwner={isOwner} status={status} updateStatus={updateStatus} savePhoto={savePhoto} />
            <MyPostsContainer />
        </div>
    ) : <Preloader />
}

export default Profile;
