import MyPosts from "./MyPosts";
import { actions } from "../../../redux/profile-reducer";
import { connect } from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {getNewPostText, getPosts} from "../../../redux/selectors/my-posts-selectors";

// const MyPostsContainer = () => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     const state = store.getState();
//
//                     const addPost = () => {
//                         store.dispatch(addPostActionCreator());   // нарушается принцип single responsibility. Компонент не должен думать над тем какой-объект создать как {type:ADD-POST}
//                     }
//
//                     const onPostChange = text => {
//                         const action = updateNewPostTextActionCreator(text);
//                         store.dispatch(action);
//                     }
//
//                     return <MyPosts posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} addPost={addPost} updateNewPostText={onPostChange} />
//
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

type MapStateType = ReturnType<typeof mapStateToProps>;

type MapDispatchPropsType = {
    addPost: (body: string) => void
}

type OwnPropsType = {

}

const mapStateToProps = ( state: AppStateType ) => {
    return {
        posts: getPosts(state),
        newPostText: getNewPostText(state)
    }
}

const MyPostsContainer = connect<MapStateType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps,
    { addPost: actions.addPostActionCreator })(MyPosts);

export default MyPostsContainer;
