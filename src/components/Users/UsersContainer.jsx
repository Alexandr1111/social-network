import React, { Component } from "react";
import { connect } from "react-redux";
import {
    follow,
    unfollow,
    setCurrentPage,
    setUsers,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingInProgress
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../../api/api";

class UsersContainer extends Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            })
    }

    onPageChanged = pageNumber => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            })
    }

    render() {
        const { users, follow, unfollow, totalUsersCount, pageSize, currentPage, isFetching, followingInProgress, toggleFollowingInProgress } = this.props;

        return (
            <>
                {isFetching ? <Preloader /> : null}

                <Users
                    totalUsersCount={totalUsersCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    users={users}
                    onPageChanged={this.onPageChanged}
                    follow={follow}
                    unfollow={unfollow}
                    isFetching={isFetching}
                    followingInProgress={followingInProgress}
                    toggleFollowingInProgress={toggleFollowingInProgress}
                />
            </>
        )
    }
}

const mapStateToProps = state => {  // Здесь сидит весь стейт приложения
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         follow: userId => {   //  колбек, т.к. презентационная компонента вызовет только по необходимости
//             dispatch(followAC(userId))  // диспатчим результат работы actionCreator
//         },
//         unfollow: userId => {
//             dispatch(unFollowAC(userId))
//         },
//         setUsers: users => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: pageNumber => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: totalCount => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         toggleIsFetching: IsFetching => {
//             dispatch(toggleIsFetchingAC(IsFetching))
//         },
//     }
// }

// follow: follow
// в пропсы придёт не сам action creator, connect создаст колбэк, который внутри задиспатчит return action creator
export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingInProgress })(UsersContainer);
