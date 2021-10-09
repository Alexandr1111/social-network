import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []  // когда идет подписка, сюда добавлять id пользователя
}

const usersReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users    // ...спред action.users, т.к. action.users-массив, склеиваем 2 массива в 1
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };
        default:
            return state;
    }
}


export const followSuccess = userId => {
    return {
        type: FOLLOW, userId
    }
}

export const unfollowSuccess = userId => {
    return {
        type: UNFOLLOW, userId
    }
}

export const setUsers = users => {
    return {
        type: SET_USERS, users
    }
}

export const setCurrentPage = currentPage => {
    return {
        type: SET_CURRENT_PAGE, currentPage
    }
}

export const setTotalUsersCount = totalUsersCount => {
    return {
        type: SET_TOTAL_USERS_COUNT, count: totalUsersCount
    }
}

export const toggleIsFetching = isFetching => {
    return {
        type: TOGGLE_IS_FETCHING, isFetching
    }
}

export const toggleFollowingInProgress = (isFetching, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId
    }
}

export const requestUsers = (page, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    const response = await usersAPI.getUsers(page, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
}

export const follow = userId => async (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId));

    const response = await usersAPI.follow(userId);
    if (response.data.resultCode === 0) {
        dispatch(followSuccess(userId));
    }
    dispatch(toggleFollowingInProgress(false, userId));
}

export const unfollow = userId => async (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId));

    const response = await usersAPI.unfollow(userId);
    if (response.data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
    }
    dispatch(toggleFollowingInProgress(false, userId));
}

export default usersReducer;
