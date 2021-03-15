import c from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import React from "react";
import { NavLink } from "react-router-dom";
import {usersAPI} from "../../api/api";

const Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, users, follow, unfollow, followingInProgress, toggleFollowingInProgress }) => {

    const pagesCount = Math.ceil(totalUsersCount / pageSize);   // При totalUsersCount 19 и pageSize 5 не теряются последние пользователи
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => <span className={currentPage === p && c.selectedPage} onClick={() => onPageChanged(p)}>{p}</span>)}
            </div>
            {users.map(u => {
                return (
                    <div>
                        <span>
                            <div>
                                <NavLink to={`/profile/${u.id}`}>
                                    <img src={u.photos.small ? u.photos.small : userPhoto} alt="" className={c.userPhoto} />
                                </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ? <button disabled={followingInProgress.some(id => id == u.id)} onClick={()=> {
                                        toggleFollowingInProgress(true, u.id);
                                        usersAPI.unfollow(u.id)
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    unfollow(u.id);
                                                }
                                                toggleFollowingInProgress(false, u.id);
                                            })

                                    }}>Unfollow</button>
                                    : <button disabled={followingInProgress.some(id => id == u.id)} onClick={()=> {
                                        toggleFollowingInProgress(true, u.id);
                                        usersAPI.follow(u.id)
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    follow(u.id);
                                                }
                                                toggleFollowingInProgress(false, u.id);
                                            })

                                    }}>Follow</button>
                                }
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                            </span>
                        </span>
                    </div>
                )
            })}
        </div>
    )
}

export default Users;
