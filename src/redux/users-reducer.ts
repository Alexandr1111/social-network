import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";
import {UserType} from "../types/types";


const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>  // когда идет подписка, сюда добавлять id пользователя
}

type InitialStateType = typeof initialState;

const usersReducer = ( state = initialState, action: any ): InitialStateType => {
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

type FollowSuccessActionType = {
    type: typeof FOLLOW
    userId: number
}

export const followSuccess = ( userId: number ): FollowSuccessActionType => {
    return {
        type: FOLLOW, userId
    }
}

type UnfollowSuccessActionType = {
    type: typeof UNFOLLOW
    userId: number
}

export const unfollowSuccess = ( userId: number ): UnfollowSuccessActionType => {
    return {
        type: UNFOLLOW, userId
    }
}

type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UserType>
}

export const setUsers = ( users: Array<UserType> ): SetUsersActionType => {
    return {
        type: SET_USERS, users
    }
}

type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}

export const setCurrentPage = ( currentPage: number ): SetCurrentPageActionType => {
    return {
        type: SET_CURRENT_PAGE, currentPage
    }
}

type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    count: number
}

export const setTotalUsersCount = ( totalUsersCount: number ): SetTotalUsersCountActionType => {
    return {
        type: SET_TOTAL_USERS_COUNT, count: totalUsersCount
    }
}

type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}

export const toggleIsFetching = ( isFetching: boolean ): ToggleIsFetchingActionType => {
    return {
        type: TOGGLE_IS_FETCHING, isFetching
    }
}

type ToggleFollowingInProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}

export const toggleFollowingInProgress = ( isFetching: boolean, userId: number ): ToggleFollowingInProgressActionType => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId
    }
}

export const requestUsers = ( page: number, pageSize: number ) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    const response = await usersAPI.getUsers(page, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
}

export const follow = ( userId: number ) => async (dispatch: any) => {
    dispatch(toggleFollowingInProgress(true, userId));

    const response = await usersAPI.follow(userId);
    if (response.data.resultCode === 0) {
        dispatch(followSuccess(userId));
    }
    dispatch(toggleFollowingInProgress(false, userId));
}

export const unfollow = ( userId: number ) => async (dispatch: any) => {
    dispatch(toggleFollowingInProgress(true, userId));

    const response = await usersAPI.unfollow(userId);
    if (response.data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
    }
    dispatch(toggleFollowingInProgress(false, userId));
}

export default usersReducer;
