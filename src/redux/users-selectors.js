// Простые селекторы оставляем, сложные прогоняем через reselect
import {createSelector} from "reselect";

export const getUsersSelector = (state) => {
    return state.usersPage.users;
}

export const getUsers = createSelector(getUsersSelector,
    (users) => {    /* колбеку, чтобы сделать логику выборки, нужно получить из чего эта выборка будет происходить
    но как createSelector поймёт каких именно пользователей засунуть. прежде чем перезапускаать этот колбек reselect посмотрит не изменились ли
    зависимости и перезапустит её только если вернётся новый результат */
    return users.filter(u => true);
});

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}


