import React, { Component } from "react";
import { connect } from "react-redux";
import {
    requestUsers,
    follow,
    unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import {
    getUsers,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getFilter
} from "../../redux/selectors/users-selectors";
import {FilterType, UserType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    users: Array<UserType>
    followingInProgress: Array<number>
    filter: FilterType
}

type MapDispatchPropsType = {
    getUsers: (pageNumber: number, pageSize: number, filter: FilterType) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

type OwnPropsType = {
    // пропсы, которые передали через атрибуты в теге
}

type P = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

class UsersContainer extends Component<P> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize, this.props.filter);
    }

    onPageChanged = ( pageNumber: number ) => {
        this.props.getUsers(pageNumber, this.props.pageSize, this.props.filter);
    }

    onFilterChanged = ( filter: FilterType ) => {
        this.props.getUsers(1, this.props.pageSize, filter);
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
            unfollow,
            filter
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
                    filter={filter}
                    onFilterChanged={this.onFilterChanged}
                />
            </>
        )
    }
}

// const mapStateToProps = state => {  // Здесь сидит весь стейт приложения
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

const mapStateToProps = ( state: AppStateType ): MapStatePropsType => {  // Здесь сидит весь стейт приложения
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        filter: getFilter(state)
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
    // WithAuthRedirect, теперь можно зайти на пользователей не авторизованному
    // TStateProps, TDispatchProps, TOwnProps, DefaultRootState
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
    getUsers: requestUsers,
    follow,
    unfollow
})
)(UsersContainer);
