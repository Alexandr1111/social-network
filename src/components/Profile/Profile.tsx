import React, {FC} from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";
import {ProfileType} from "../../types/types";
import c from "./ProfileInfo/ProfileInfo.module.css";

export type ProfilePropsType = {
    status: string
    isOwner: boolean
    profile: ProfileType | null
    updateStatus: (status: string) => void
    savePhoto: (photoFile: File) => void
    saveProfile: (profileData: ProfileType) => Promise<any>
}

const Profile: FC<ProfilePropsType> = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    return profile ? (
        <div className={c.profile}>
            <ProfileInfo
                profile={profile}
                isOwner={isOwner}
                status={status}
                updateStatus={updateStatus}
                savePhoto={savePhoto}
                saveProfile={saveProfile}
            />
            <MyPostsContainer />
        </div>
    ) : <Preloader />
}

export default Profile;
