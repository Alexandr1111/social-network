import React, { Component } from "react";
import { connect } from "react-redux";
import {
    follow,
    unfollow,
    setCurrentPage,
    setUsers,
    setTotalUsersCount,
    toggleIsFetching
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?pages=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    onPageChanged = pageNumber => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        const { users, follow, unfollow, totalUsersCount, pageSize, currentPage, isFetching } = this.props;

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
        isFetching: state.usersPage.isFetching
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
export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching })(UsersContainer);
