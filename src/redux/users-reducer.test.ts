import usersReducer, {actions, InitialStateType} from "./users-reducer";

let state: InitialStateType;
// для того чтобы не видоизменять стейт, на каждый тест работаем с одним и тем-же стейтом
beforeEach(() => {
    state = {
        users: [
            {id: 0, name: 'user 0', status: 'status 0', photos: {small: null, large: null}, followed: false},
            {id: 1, name: 'user 1', status: 'status 1', photos: {small: null, large: null}, followed: false},
            {id: 2, name: 'user 2', status: 'status 2', photos: {small: null, large: null}, followed: true},
            {id: 3, name: 'user 3', status: 'status 3', photos: {small: null, large: null}, followed: true}
        ],
        pageSize: 10,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: []   // когда идет подписка, сюда добавлять id пользователя
    }

})

test("follow success", () => {
    const newState = usersReducer(state, actions.followSuccess(1))

    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[1].followed).toBeTruthy()
})

test("unfollow success", () => {
    const newState = usersReducer(state, actions.unfollowSuccess(2))

    expect(newState.users[2].followed).toBeFalsy()
    expect(newState.users[3].followed).toBeTruthy()
})