import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import {expect, it} from "@jest/globals";
//unit test
//tdd
const state = {
    posts: [{id: 1, message: "Хай, это мой первый пост!", likeCount: 4}, {id: 2, message: "Новая Зеландия, жди меня!♥", likeCount: 18}]
}

it('after deleting length of messages should be decremented', () => {
    // 1.test data
    const action = deletePost(1);

    // 2.action
    const newState = profileReducer(state, action);

    // 3.expectation
    expect(newState.posts.length).toBe(1);
})

it('message of new post should be correct', () => {
    const action = addPostActionCreator('testing text');
    const newState = profileReducer(state, action);
    expect(newState.posts[2].message).toBe('testing text');
})

