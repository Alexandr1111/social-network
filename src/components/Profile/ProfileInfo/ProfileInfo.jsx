import React from "react";
import c from "./ProfileInfo.module.css";

const ProfileInfo = ({profile}) => {
    return (
        <div>
            <div>
                <img src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png" alt="" />
            </div>
            <div className={c.descriptionBlock}>
                <img src={profile.photos.large} alt="" />
                <div>
                    {profile.fullName}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;
