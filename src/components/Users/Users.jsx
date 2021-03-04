import React, { useEffect } from "react";
import c from './Users.module.css';
import * as axios from "axios";
import userPhoto from '../../assets/images/user.png';

const Users = ({users, follow, unfollow, setUsers}) => {

    useEffect(() => {
        if (!users.length) {
            axios
                .get('https://social-network.samuraijs.com/api/1.0/users')
                .then((response) => {
                    setUsers(response.data.items)
                })
        }
    })

    return (
        <div>
            {users.map(u => {
                return (
                    <div>
                        <span>
                            <div>
                                <img src={u.photos.small ? u.photos.small : userPhoto} alt="" className={c.userPhoto} />
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={()=>unfollow(u.id)}>Unfollow</button>
                                    : <button onClick={()=>follow(u.id)}>Follow</button>}
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
    );
};

export default Users;
