const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';

const initialState = {
    users: [
        // {id: 1, photoUrl: 'https://i.pinimg.com/originals/29/ee/44/29ee44185cf69f20f11291716a93dc37.jpg', followed: false, fullName: "Alex", status: "Hi there", location: {city: "Moscow", country: "Russia"}},
        // {id: 2, photoUrl: 'https://i.pinimg.com/originals/9a/da/3b/9ada3bc305a1f45eab527f60da172d53.png', followed: true, fullName: "Sveta", status: "Life is good!", location: {city: "Kiev", country: "Ukraine"}},
        // {id: 3, photoUrl: 'https://99px.ru/sstorage/41/2010/05/image_410705101709499256168.jpg', followed: false, fullName: "Vika", status: "learn redux, guys xD", location: {city: "Rostov", country: "Russia"}}
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2
}

const usersReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {   // нужно сделать копию ТОЛЬКО того объекта(юзера) который меняем
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                })
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
        default:
            return state;
    }
}


export const followAC = userId => {
    return {
        type: FOLLOW, userId
    }
}

export const unFollowAC = userId => {
    return {
        type: UNFOLLOW, userId
    }
}

export const setUsersAC = users => {
    return {
        type: SET_USERS, users
    }
}

export const setCurrentPageAC = currentPage => {
    return {
        type: SET_CURRENT_PAGE, currentPage
    }
}

export const setUsersTotalCountAC = totalUsersCount => {
    return {
        type: SET_TOTAL_USERS_COUNT, count: totalUsersCount
    }
}

export default usersReducer;
