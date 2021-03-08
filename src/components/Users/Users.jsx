import React, { Component, useEffect } from "react";
import c from './Users.module.css';
import * as axios from "axios";
import userPhoto from '../../assets/images/user.png';

// const Users = ({users, follow, unfollow, setUsers}) => {
//
//     useEffect(() => {
//         if (!users.length) {
//             axios
//                 .get('https://social-network.samuraijs.com/api/1.0/users')
//                 .then((response) => {
//                     setUsers(response.data.items)
//                 })
//         }
//     })
//
//     return (
//         <div>
//             {users.map(u => {
//                 return (
//                     <div>
//                         <span>
//                             <div>
//                                 <img src={u.photos.small ? u.photos.small : userPhoto} alt="" className={c.userPhoto} />
//                             </div>
//                             <div>
//                                 {u.followed
//                                     ? <button onClick={()=>unfollow(u.id)}>Unfollow</button>
//                                     : <button onClick={()=>follow(u.id)}>Follow</button>}
//                             </div>
//                         </span>
//                         <span>
//                             <span>
//                                 <div>{u.name}</div>
//                                 <div>{u.status}</div>
//                             </span>
//                             <span>
//                                 <div>{"u.location.country"}</div>
//                                 <div>{"u.location.city"}</div>
//                             </span>
//                         </span>
//                     </div>
//                 )
//             })}
//         </div>
//     );
// };

class Users extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?pages=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    onPageChanged = pageNumber => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        const { users, follow, unfollow, totalUsersCount, pageSize, currentPage, setCurrentPage } = this.props;
        const pagesCount = Math.ceil(totalUsersCount / pageSize);   // При totalUsersCount 19 и pageSize 5 не теряются последние пользователи
        let pages = [];
        console.log(totalUsersCount)
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {pages.map(p => <span className={currentPage === p && c.selectedPage} onClick={() => this.onPageChanged(p)}>{p}</span>)}
                </div>
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
    }
}

export default Users;
