import c from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import React from "react";
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, follow, unfollow}) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={`/profile/${user.id}`}>
                        <img src={user.photos.small ? user.photos.small : userPhoto} alt=""
                             className={c.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id == user.id)}
                                  onClick={() => unfollow(user.id)}>
                            Unfollow
                        </button>
                        : <button disabled={followingInProgress.some(id => id == user.id)}
                                  onClick={() => follow(user.id)}>
                            Follow
                        </button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                </span>
            </span>
        </div>
    )
}

export default User;
