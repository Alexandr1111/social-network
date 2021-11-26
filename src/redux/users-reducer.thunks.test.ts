import {actions, follow, unfollow} from "./users-reducer";
import {usersAPI} from "../api/users-api";
import {APIResponseType, ResultCodesEnum} from "../api/api";

jest.mock("../api/users-api");
let usersAPIMock = usersAPI as jest.Mocked<typeof usersAPI>;    // фейковая заглушка, чтобы не лезть на серв., возвращающая фейковый результат

const result: APIResponseType = {
    data: {},
    resultCode: ResultCodesEnum.Success,
    messages: [],
}

//@ts-ignore
usersAPIMock.follow.mockReturnValue(Promise.resolve(result)); // что бы не случилось, всегда возвращай этот результат
usersAPIMock.unfollow.mockReturnValue(Promise.resolve(result)); // что бы не случилось, всегда возвращай этот результат

test("success follow thunk", async () => {
    const thunk = follow(21025);
    const dispatchMock = jest.fn();   // фейковый диспач
    const getStateMock = jest.fn();

    await thunk(dispatchMock, getStateMock, {});

    expect(dispatchMock).toBeCalledTimes(3);

    //toggleFollowingInProgress был первый вызоа с такими параметрами
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingInProgress(true, 21025));
})

test("success unfollow thunk", async () => {
    const thunk = unfollow(21025);
    const dispatchMock = jest.fn();   // фейковый диспач
    const getStateMock = jest.fn();

    await thunk(dispatchMock, getStateMock, {});

    expect(dispatchMock).toBeCalledTimes(3);

    //toggleFollowingInProgress был первый вызоа с такими параметрами
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingInProgress(true, 21025));
})