import { profileAPI } from "../api/api";
import {stopSubmit} from "redux-form";
import { PostType, ProfileType, PhotosType } from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const ADD_POST = 'profile/ADD_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';

const initialState = {
    posts: [
        {id: 1, message: "Хай, это мой первый пост!", likeCount: 4},
        {id: 2, message: "Новая Зеландия, жди меня!♥", likeCount: 18}] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '' as string,
    newPostText: '' as string
}

type InitialStateType = typeof initialState;

const profileReducer = ( state = initialState, action: ActionsType ): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            const newPost = { id: 5, message: action.newPostText, likeCount: 0 };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            }
        default:
            return state;
    }
}

type ActionsType = AddPostActionCreatorActionType
    | SetUserProfileActionType
    | SetStatusActionType
    | DeletePostActionType
    | SavePhotoSuccessActionType;

export type AddPostActionCreatorActionType = {
    type: typeof ADD_POST
    newPostText: string
}

export const addPostActionCreator = ( newPostText: string): AddPostActionCreatorActionType => ({ type: ADD_POST, newPostText });

export type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}

export const setUserProfile = ( profile: ProfileType ): SetUserProfileActionType => ({ type: SET_USER_PROFILE, profile });

export type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}

export const setStatus = ( status: string ): SetStatusActionType => ({ type: SET_STATUS, status });

export type DeletePostActionType = {
    type: typeof DELETE_POST
    postId: number
}

export const deletePost = ( postId: number ): DeletePostActionType => ({ type: DELETE_POST, postId });

export type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}

export const savePhotoSuccess = ( photos: PhotosType ): SavePhotoSuccessActionType => ({ type: SAVE_PHOTO_SUCCESS, photos });

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>;

export const getUserProfile = ( userId: number | null ): ThunkType => async (dispatch) => {
    const response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const getStatus = ( userId: number ): ThunkType => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = ( status: string ): ThunkType => async (dispatch) => {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = ( file: any ): ThunkType => async (dispatch) => {
    const response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = ( profile: ProfileType ): ThunkType => async (dispatch, getState) => {
    const userId =  getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        await dispatch(getUserProfile(userId));
    }
    else {
        const messages = response.data.messages;
        for (const message of messages) {
            const socialNetworkName = message
                .slice(0,-1)    // убрали скобку
                .toLowerCase()
                .split("(")[1]  // убрали "invalid url format"
                .split("->")[1]    // разделили на [contacts, [network]] и взяли [network]
            // @ts-ignore
            dispatch(stopSubmit('edit-profile', {
                "contacts": { [socialNetworkName]: message.toLowerCase().includes(socialNetworkName) && message }
            }));
        }
        return Promise.reject("reject");
    }
}

export default profileReducer;
