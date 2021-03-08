import { connect } from "react-redux";
import Users from "./Users";
import { followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unFollowAC } from "../../redux/users-reducer";

const mapStateToProps = state => {  // Здесь сидит весь стейт приложения
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        follow: userId => {   //  колбек, т.к. презентационная компонента вызовет только по необходимости
            dispatch(followAC(userId))  // диспатчим результат работы actionCreator
        },
        unfollow: userId => {
            dispatch(unFollowAC(userId))
        },
        setUsers: users => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: pageNumber => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: totalCount => {
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
