import React from "react";
import c from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;
