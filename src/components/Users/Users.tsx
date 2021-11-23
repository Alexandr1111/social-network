import React, {FC} from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {UserType} from "../../types/types";

export type UsersProps = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean

    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<number>
}

const Users: FC<UsersProps> = ({totalUsersCount, pageSize, currentPage, onPageChanged, users, follow, unfollow, followingInProgress}) => {
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
