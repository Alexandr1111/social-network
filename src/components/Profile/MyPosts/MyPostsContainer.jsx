import MyPosts from "./MyPosts";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import {connect} from "react-redux";

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

const mapStateToProps = state => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: text => {
            const action = updateNewPostTextActionCreator(text);
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
