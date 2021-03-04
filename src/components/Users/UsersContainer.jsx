import { connect } from "react-redux";
import Users from "./Users";
import { followAC, setUsersAC, unFollowAC } from "../../redux/users-reducer";

const mapStateToProps = state => {  // Здесь сидит весь стейт приложения
    return {
        users: state.usersPage.users
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
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
