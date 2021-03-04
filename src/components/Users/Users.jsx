import React from "react";
import c from './Users.module.css';

const Users = ({users, follow, unfollow, setUsers}) => {

    if (!users.length) {
        setUsers([
            {id: 1, photoUrl: 'https://i.pinimg.com/originals/29/ee/44/29ee44185cf69f20f11291716a93dc37.jpg', followed: false, fullName: "Alex", status: "Hi there", location: {city: "Moscow", country: "Russia"}},
            {id: 2, photoUrl: 'https://i.pinimg.com/originals/9a/da/3b/9ada3bc305a1f45eab527f60da172d53.png', followed: true, fullName: "Sveta", status: "Life is good!", location: {city: "Kiev", country: "Ukraine"}},
            {id: 3, photoUrl: 'https://99px.ru/sstorage/41/2010/05/image_410705101709499256168.jpg', followed: false, fullName: "Vika", status: "learn redux, guys xD", location: {city: "Rostov", country: "Russia"}}
        ])
    }


    return (
        <div>
            {users.map(u => {
                return (
                    <div>
                        <span>
                            <div>
                                <img src={u.photoUrl} alt="" className={c.userPhoto} />
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={()=>unfollow(u.id)}>Unfollow</button>
                                    : <button onClick={()=>follow(u.id)}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </span>
                        </span>
                    </div>
                )
            })}
        </div>
    );
};

export default Users;
