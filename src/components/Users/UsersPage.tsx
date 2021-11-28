import React, {FC} from "react";
import Preloader from "../common/Preloader/Preloader";
import {useSelector} from "react-redux";
import {getIsFetching} from "../../redux/selectors/users-selectors";
import {Users} from "./Users";

type MapStatePropsType = {

}

type MapDispatchPropsType = {

}

type OwnPropsType = {
    // пропсы, которые передали через атрибуты в теге
}

type P = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

export const UsersPage: FC<P> = (props) => {

    const isFetching = useSelector(getIsFetching);

    return (
        <>
            {isFetching ? <Preloader /> : null}
            <Users />
        </>
    )
}

// class UsersContainer extends Component<P> {
//
//     componentDidMount() {
//         this.props.getUsers(this.props.currentPage, this.props.pageSize, this.props.filter);
//     }
//
//     onPageChanged = ( pageNumber: number ) => {
//         this.props.getUsers(pageNumber, this.props.pageSize, this.props.filter);
//     }
//
//     onFilterChanged = ( filter: FilterType ) => {
//         this.props.getUsers(1, this.props.pageSize, filter);
//     }
//
//     render() {
//         const {
//             users,
//             isFetching,
//             followingInProgress,
//             follow,
//             unfollow,
//             filter
//         } = this.props;
//
//         return (
//             <>
//                 {isFetching ? <Preloader /> : null}
//
//                 <Users
//                     users={users}
//                     onPageChanged={this.onPageChanged}
//                     isFetching={isFetching}
//                     followingInProgress={followingInProgress}
//                     follow={follow}
//                     unfollow={unfollow}
//                     filter={filter}
//                     onFilterChanged={this.onFilterChanged}
//                 />
//             </>
//         )
//     }
// }

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

// const mapStateToProps = ( state: AppStateType ): MapStatePropsType => {  // Здесь сидит весь стейт приложения
//     return {
//         users: getUsers(state),
//         pageSize: getPageSize(state),
//         totalUsersCount: getTotalUsersCount(state),
//         currentPage: getCurrentPage(state),
//         isFetching: getIsFetching(state),
//         followingInProgress: getFollowingInProgress(state),
//         filter: getFilter(state)
//     }
// }

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

// export default compose(
//     // WithAuthRedirect, теперь можно зайти на пользователей не авторизованному
//     // TStateProps, TDispatchProps, TOwnProps, DefaultRootState
//     connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
//     getUsers: requestUsers,
//     follow,
//     unfollow
// })
// )(UsersContainer);
