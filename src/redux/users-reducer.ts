import {updateObjectInArray} from "../utils/object-helpers";
import {UserType} from "../types/types";
import {Dispatch} from "redux";
import {AppStateType, BaseThunkType, InferActionsTypes} from "./redux-store";
import {usersAPI} from "../api/users-api";
import {ResultCodesEnum} from "../api/api";

// const FOLLOW = 'users/FOLLOW';
// const UNFOLLOW = 'users/UNFOLLOW';
// const SET_USERS = 'users/SET_USERS';
// const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
// const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
// const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
// const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS';

// С TS МОЖНО БЕЗ СДЕЛАТЬ БЕЗ КОНСТАНТ-ЭКСШЕНОВ

const initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>  // когда идет подписка, сюда добавлять id пользователя
}

export type InitialStateType = typeof initialState; // экспорт для теста редюсера
type ThunkType = BaseThunkType<ActionsType>;

const usersReducer = ( state = initialState, action: ActionsType ): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            };
        case 'UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            };
        case 'SET_USERS':
            return {
                ...state,
                users: action.users    // ...спред action.users, т.к. action.users-массив, склеиваем 2 массива в 1
            };
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            };
        case 'SET_TOTAL_USERS_COUNT':
            return {
                ...state,
                totalUsersCount: action.count
            };
        case 'TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            };
        case 'TOGGLE_IS_FOLLOWING_PROGRESS':
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

type ActionsType = InferActionsTypes<typeof actions>;

export const actions = {
    followSuccess: ( userId: number ) => ({ type: 'FOLLOW', userId } as const),
    unfollowSuccess: ( userId: number ) => ({ type: 'UNFOLLOW', userId } as const),
    setUsers: ( users: Array<UserType> ) => ({ type: 'SET_USERS', users } as const),
    setCurrentPage: ( currentPage: number ) => ({ type: 'SET_CURRENT_PAGE', currentPage } as const),
    setTotalUsersCount: ( totalUsersCount: number ) => ({ type: 'SET_TOTAL_USERS_COUNT', count: totalUsersCount } as const),
    toggleIsFetching: ( isFetching: boolean ) => ({ type: 'TOGGLE_IS_FETCHING', isFetching } as const),
    toggleFollowingInProgress: ( isFetching: boolean, userId: number ) => ({ type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId } as const)
}

export const requestUsers = ( page: number, pageSize: number ) => async (dispatch: Dispatch<ActionsType>, getState: () => AppStateType) => {
    dispatch(actions.toggleIsFetching(true));
    dispatch(actions.setCurrentPage(page));

    const response = await usersAPI.getUsers(page, pageSize);
    dispatch(actions.toggleIsFetching(false));
    dispatch(actions.setUsers(response.items));
    dispatch(actions.setTotalUsersCount(response.totalCount));
}

export const follow = ( userId: number ): ThunkType => async (dispatch) => {
    dispatch(actions.toggleFollowingInProgress(true, userId));

    try {
        const data = await usersAPI.follow(userId);
        if (data.resultCode === ResultCodesEnum.Success) {
            dispatch(actions.followSuccess(userId));
        }
        dispatch(actions.toggleFollowingInProgress(false, userId));
    }
    catch (e) {
        alert('error')
    }
}

export const unfollow = ( userId: number ): ThunkType => async (dispatch) => {
    dispatch(actions.toggleFollowingInProgress(true, userId));

    const data = await usersAPI.unfollow(userId);
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.unfollowSuccess(userId));
    }
    dispatch(actions.toggleFollowingInProgress(false, userId));
}

export default usersReducer;
