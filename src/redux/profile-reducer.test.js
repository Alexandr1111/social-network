import profileReducer, {deletePost} from "./profile-reducer";
import {expect, it} from "@jest/globals";
//unit test
it('length of post should be incremented', () => {
    // 1.test data
    const action = deletePost(1);

    const state = {
        posts: [{id: 1, message: "Хай, это мой первый пост!", likeCount: 4}, {id: 2, message: "Новая Зеландия, жди меня!♥", likeCount: 18}]
    }

    // 2.action
    const newState = profileReducer(state, action);

    // 3.expectation
    expect(newState.posts.length).toBe(1);
})

