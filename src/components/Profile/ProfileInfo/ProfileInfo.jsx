import React from "react";
import c from "./ProfileInfo.module.css";
import user from "../../../assets/images/user.png";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({profile, status, updateStatus}) => {
    return (
        <div>
            <div>
                <img src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png" alt="" />
            </div>
            <div className={c.descriptionBlock}>
                <img src={profile.photos.large ? profile.photos.large : user} alt="" />
                <div>
                    {profile.fullName}
                </div>
                <ProfileStatus status={status} updateStatus={updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo;
