import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "97f1d028-7518-43ef-85bd-dd2bcb1ec8e1"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance
            .get(`users?pages=${currentPage}&count=${pageSize}`, {
                withCredentials: true
            })
            .then(response => response.data);
    },
    setUserData() {
        return instance
            .get(`auth/me`, {
                withCredentials: true
            })
            .then(response => response.data);
    },
};
