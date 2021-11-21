import {stopSubmit} from "redux-form";
import { PostType, ProfileType, PhotosType } from "../types/types";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {profileAPI} from "../api/prof1le-api";
import {ResultCodesEnum} from "../api/api";

const ADD_POST = 'SN/PROFILE/ADD_POST';
const SET_USER_PROFILE = 'SN/PROFILE/SET_USER_PROFILE';
const SET_STATUS = 'SN/PROFILE/SET_STATUS';
const DELETE_POST = 'SN/PROFILE/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SN/PROFILE/SAVE_PHOTO_SUCCESS';

const initialState = {
    posts: [
        {id: 1, message: "Хай, это мой первый пост!", likeCount: 4},
        {id: 2, message: "Новая Зеландия, жди меня!♥", likeCount: 18}] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '' as string,
    newPostText: '' as string
}

type InitialStateType = typeof initialState;
type ThunkType = BaseThunkType<ActionsType>;

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

type ActionsType = InferActionsTypes<typeof actions>;

export const actions = {
    addPostActionCreator: ( newPostText: string) => ({ type: ADD_POST, newPostText } as const),
    setUserProfile: ( profile: ProfileType ) => ({ type: SET_USER_PROFILE, profile } as const),
    setStatus: ( status: string ) => ({ type: SET_STATUS, status } as const),
    deletePost: ( postId: number ) => ({ type: DELETE_POST, postId } as const),
    savePhotoSuccess: ( photos: PhotosType ) => ({ type: SAVE_PHOTO_SUCCESS, photos } as const)
}

export const getUserProfile = ( userId: number | null ): ThunkType => async (dispatch) => {
    const data = await profileAPI.getProfile(userId);
    dispatch(actions.setUserProfile(data));
}

export const getStatus = ( userId: number ): ThunkType => async (dispatch) => {
    const data = await profileAPI.getStatus(userId);
    dispatch(actions.setStatus(data));
}

export const updateStatus = ( status: string ): ThunkType => async (dispatch) => {
    const data = await profileAPI.updateStatus(status);
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.setStatus(status));
    }
}

export const savePhoto = ( file: File ): ThunkType => async (dispatch) => {
    const data = await profileAPI.savePhoto(file);
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.savePhotoSuccess(data.data.photos));
    }
}

export const saveProfile = ( profile: ProfileType ): ThunkType => async (dispatch, getState) => {
    const userId =  getState().auth.userId;
    const data = await profileAPI.saveProfile(profile);
    if (data.resultCode === ResultCodesEnum.Success) {
        if (userId != null) {
            await dispatch(getUserProfile(userId));
        }
        else {
            throw new Error('userId can"t be null')
        }
    }
    else {
        const messages = data.messages;
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
