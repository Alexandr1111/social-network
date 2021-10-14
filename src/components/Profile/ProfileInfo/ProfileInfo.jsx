import React from "react";
import c from "./ProfileInfo.module.css";
import user from "../../../assets/images/user.png";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div>
                <img src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png" alt="" />
            </div>
            <div className={c.descriptionBlock}>
                <img src={profile.photos.large || user} alt="" className={c.mainPhoto} />
                {isOwner && <input type="file" onChange={onMainPhotoSelected} />}
                <div>
                    {profile.fullName}
                </div>
                <ProfileStatus status={status} updateStatus={updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo;
