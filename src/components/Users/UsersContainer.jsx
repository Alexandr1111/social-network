import React, { Component } from "react";
import { connect } from "react-redux";
import {
    setCurrentPage,
    getUsers,
    follow,
    unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";

class UsersContainer extends Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = pageNumber => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        const {
            users,
            totalUsersCount,
            pageSize,
            currentPage,
            isFetching,
            followingInProgress,
            follow,
            unfollow
        } = this.props;

        return (
            <>
                {isFetching ? <Preloader /> : null}

                <Users
                    totalUsersCount={totalUsersCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    users={users}
                    onPageChanged={this.onPageChanged}
                    isFetching={isFetching}
                    followingInProgress={followingInProgress}
                    follow={follow}
                    unfollow={unfollow}
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
// export default connect(mapStateToProps, {
//     setCurrentPage,
//     getUsers,
//     follow,
//     unfollow
// })(UsersContainer);

export default compose(
    WithAuthRedirect,
    connect(mapStateToProps, {
    setCurrentPage,
    getUsers,
    follow,
    unfollow
})
)(UsersContainer);
