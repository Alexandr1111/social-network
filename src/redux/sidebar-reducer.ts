type FriendsType = {
    id: number
    name: string
}

const initialState = {
    friends: [
        {id: 1, name: "Sveta"}, {id: 2, name: "Vika"}, {id: 3, name: "Masha"}] as Array<FriendsType>
}

type InitialStateType = typeof initialState;

const sidebarReducer = ( state = initialState, action: any ): InitialStateType => {
    // switch (action.type) {
    //
    // }
    return state;
}

export default sidebarReducer;
