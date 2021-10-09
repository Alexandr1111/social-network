import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, users, follow, unfollow, followingInProgress}) => {
    return (
        <div>
            <Paginator
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
            />
            {users.map(u => <User user={u} key={u.id} followingInProgress={followingInProgress} follow={follow}
                                  unfollow={unfollow}/>)}
        </div>
    )
}

export default Users;
