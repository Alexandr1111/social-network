import {GetItemsType, instance, APIResponseType} from "./api";

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10, term: string = '', friend: null | boolean = null) {
        return instance
            .get<GetItemsType>(`users/`,{
                params: {
                    page: currentPage,
                    count: pageSize,
                    term: term,
                    friend: friend === null ? '' : friend
                }
            })
            .then(res => res.data);
    },
    follow(userId: number) {
        return instance
            .post<APIResponseType>(`follow/${userId}`)
            .then(res => res.data);
    },
    unfollow(userId: number) {
        return instance
            .delete<APIResponseType>(`follow/${userId}`)
            .then(res => res.data);
    },
    // getIsFriend(isFriend: boolean, term: string) {
    //     return instance
    //         .get<GetItemsType>(`users/?friend=${isFriend}&term=${term}`)
    //         .then(res => res.data);
    // },
};