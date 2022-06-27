import { addPostActionCreator, deletePost, profileReducer } from "./profile-reducer";

let state = {
    postsData: [
        { id: 1, message: 'Как ты?', likeCount: 15 },
        { id: 2, message: 'pbsdsd', likeCount: 234 },
        { id: 3, message: 'How are you??????' },
    ]
};

test('new shold be added', () => {
    let action = addPostActionCreator("BLABLABLA")

    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(4);
});
test('new shold be added message', () => {
    let action = addPostActionCreator("BLABLABLA")

    let newState = profileReducer(state, action);
    expect(newState.postsData[4].message).toBe("BLABLABLA");
});
test('after deleting length of message', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(2);
});
