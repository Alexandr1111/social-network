// Простые селекторы оставляем, сложные прогоняем через reselect
import {createSelector} from "reselect";
import {AppStateType} from "../redux-store";

export const getUsersSelector = ( state: AppStateType ) => {
    return state.usersPage.users;
}

export const getUsers = createSelector(getUsersSelector,
    (users) => {    /* колбеку, чтобы сделать логику выборки, нужно получить из чего эта выборка будет происходить
    но как createSelector поймёт каких именно пользователей засунуть. прежде чем перезапускаать этот колбек reselect посмотрит не изменились ли
    зависимости и перезапустит её только если вернётся новый результат */
    return users.filter(u => true);
});

export const getPageSize = ( state: AppStateType ) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = ( state: AppStateType ) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = ( state: AppStateType ) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = ( state: AppStateType ) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = ( state: AppStateType ) => {
    return state.usersPage.followingInProgress;
}

export const getFilter = ( state: AppStateType ) => {
    return state.usersPage.filter;
}


